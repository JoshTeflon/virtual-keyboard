<template>
  <div class="w-full h-screen flex flex-col items-center justify-center p-4 overflow-auto">
    <div class="w-full fixed top-0 px-4 md:px-8 lg:px-12 h-16">
      <div class="w-full h-full flex items-center justify-between">
        <h1 class="uppercase text-base lg:text-lg font-medium tracking-[0.2rem]">virtual keyboard.</h1>
        <Button
          :class="`cursor-pointer w-auto h-auto p-0 text-[#e1341e] border-none !rounded-full hover:opacity-100 ${showKeyboard ? 'opacity-100' : 'opacity-50 animate-bounce'}`"
          @click="showKeyboard = !showKeyboard"
        >
          <KeyboardIcon />
        </Button>
      </div>
    </div>
    <div class="w-full relative max-w-xs sm:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto min-h-[8rem] lg:min-h-[10rem] mb-12">
      <textarea
        class="fixed w-full max-w-xs sm:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto min-h-[8rem] lg:min-h-[10rem] py-4 px-6 text-sm lg:text-base bg-gray-100 border-none rounded-2xl outline-none shadow-magical transition-shadow cursor-pointer placeholder:text-[#9fa8da] placeholder-shown:bg-none resize-none"
        type="text"
        ref="textareaRef"
        v-model="textarea"
        @keydown="onKeyHit"
        @focus="showKeyboard = true"
      />
    </div>
    <Transition name="slide-fade">
      <div v-if="showKeyboard" class="flex items-center justify-center flex-wrap w-[68rem] mx-auto transition-all ease-in-out duration-[9000]">
        <div
          v-for="(key, index) in keys"
          :key="index"
          :class="`
            m-0.5 ${
            key?.key === 'Backspace'
            ? 'w-36'
            : key?.key === 'Tab' || key?.value === '\\' || key?.value === '|'
            ? 'w-[6.5rem]'
            : key?.key === 'CapsLock'
            ? 'w-[7.5rem]'
            : key?.key === 'Enter'
            ? 'w-[9.8rem]'
            : key?.key === 'ShiftLeft'
            ? 'w-[9.8rem]'
            : key?.key === 'ShiftRight'
            ? 'w-[11.7rem]'
            : key?.value === 'Ctrl' || key?.value === 'Alt'
            ? 'w-[6.5rem]'
            : key?.key === 'Space'
            ? 'w-[24.5rem]'
            : 'w-16'
          }`"
        >
          <Button
            @click="handleBtn(key)"
            :disabled="key.type === ''"
            :class="keyHit.code === key.key && keyHit.keyCode === key.keyCode
              ?
              'bg-[#c4e7f4]'
              :
              (key.value === 'Shift' && shiftValue) || (key.key === 'CapsLock' && capsValue) || (key.value === 'Ctrl' && ctrlValue)
              ?
              'opacity-50'
              :
              ''"
            >
            {{
              shiftValue && key.newValue
              ?
              key.newValue
              :
              capsValue && key.newValue && key.value.match(/^[A-Za-z]+$/)
              ?
              key.newValue
              :
              key.value
            }}
            <span
              v-if="(key?.key === 'CapsLock' && capsValue)"
              class="absolute top-1.5 left-1.5 w-1.5 h-1.5 rounded-full bg-[#e1341e]"
            ></span>
          </Button>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script>
import Button from '@/components/Button.vue';
import KeyboardIcon from '@/components/svgs/KeyboardIcon.vue';
import { getKeyData } from "@/components/compositions/getKeyData";
import { ref, nextTick, watch } from 'vue';

export default {
  name: 'App',
  components: {
    Button,
    KeyboardIcon
  },
  setup() {
    const keys = getKeyData();
    const textarea = ref('');
    const textareaArrVal = ref([])
    const textareaRef = ref(null);
    const capsValue = ref(false);
    const shiftValue = ref(false);
    const ctrlValue = ref(false);
    const showKeyboard = ref(false);
    const keyHit = ref({});
    const caretPos = ref(0);

    watch(textarea, (value) => {
      textareaArrVal.value = value.split('');
    })

    const onKeyHit = (e) => {
      const { code, key, keyCode } = e
      keyHit.value = { code, key, keyCode };
      setTimeout(() => {
        keyHit.value = {}
      }, 300)
    };

    const getCaretPosition = () => {
      if (document.selection) {
        textareaRef.value.focus();

        let selRange = document.selection.createRange();
        selRange.moveStart('character', -textareaRef.value.value.length);

        caretPos.value = selRange.text.length;
      } else if (textareaRef.value.selectionStart || textareaRef.value.selectionStart == '0') {
        caretPos.value = textareaRef.value.selectionStart;
      }
    }

    const insertValue = (value) => {
      getCaretPosition();
  
      textareaArrVal.value.splice(caretPos.value, 0, value)
      textarea.value = textareaArrVal.value.join('')
    }

    const onCapsLock = () => {
      capsValue.value = !capsValue.value;
    }

    const onShift = () => {
      shiftValue.value = !shiftValue.value;
    }

    const onControl = () => {
      ctrlValue.value = !ctrlValue.value;
    }

    const onBackspace = () => {
      getCaretPosition();

      let selectedLength = textareaRef.value.selectionEnd - textareaRef.value.selectionStart;
      if(selectedLength === 0) {
        textareaArrVal.value.splice(caretPos.value - 1, 1);
      } else {
        textareaArrVal.value.splice(caretPos.value, selectedLength);
      }

      textarea.value = textareaArrVal.value.join('');
    }

    const onEnter = () => {
      insertValue("\n");
    }

    const handleBtn = (key) => {
      if(key.value === "CapsLock") {
        onCapsLock();
      }
      if(key.value === "Shift") {
        onShift();
      }
      if(key.value === "Ctrl") {
        onControl();
      }
      if(key.value === "Backspace" && textarea.value.length > 0) {
        onBackspace();
      }
      if(key.value === "Enter") {
        onEnter();
      }

      if(key.type === 'value' && shiftValue.value === false && capsValue.value === false) {
        insertValue(key.value)
      }
      if(key.type === 'value' && shiftValue.value === true && key.newValue) {
        insertValue(key.newValue)
      }
      if(key.type === 'value' && capsValue.value === true && key.newValue && key.value.match(/^[A-Za-z]+$/)) {
        insertValue(key.newValue)
      }

      if(ctrlValue.value && key.key === 'KeyA') {
        nextTick(() => {
          textareaRef.value.focus();
          textareaRef.value.select();
        })
      }
      if(ctrlValue.value && key.key === 'KeyC') {
        let copied = textarea.value.substring(textareaRef.value.selectionStart, textareaRef.value.selectionEnd)
        navigator.clipboard.writeText(copied)
      }

      textareaRef.value.focus()
    }

    return {
      textarea,
      textareaRef,
      keys,
      keyHit,
      shiftValue,
      capsValue,
      ctrlValue,
      onKeyHit,
      handleBtn,
      showKeyboard
    };
  }
}
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(40px);
  opacity: 0;
}
</style>