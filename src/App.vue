<template>
  <div class="w-full h-screen flex flex-col items-center justify-center p-4 overflow-auto">
    <div class="w-full fixed top-0 px-4 md:px-8 lg:px-12 h-16">
      <div class="w-full h-full flex items-center justify-between">
        <h1 class="uppercase text-base lg:text-lg font-medium tracking-[0.2rem]">virtual keyboard.</h1>
        <Button
          :class="`cursor-pointer w-auto h-auto p-0 border-none rounded-full ${showKeyboard ? 'text-[#e1341e]' : 'text-[#7e808355] animate-pulse'}`"
          @click="showKeyboard = !showKeyboard"
        >
          <KeyboardIcon />
        </Button>
      </div>
    </div>
    <textarea
      class="w-full max-w-2xl mx-auto min-h-[8rem] lg:min-h-[10rem] mb-12 py-4 px-6 text-sm lg:text-base bg-gray-100 border-none rounded-2xl outline-none shadow-magical transition-shadow cursor-pointer placeholder:text-[#9fa8da] placeholder-shown:bg-none"
      type="text"
      v-model="textarea"
      @keydown="onKeyHit"
      @focus="showKeyboard = true"
      ref="textareaRef"
    />
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
            :class="keyHit.code === key.key && keyHit.keyCode === key.keyCode"
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
              class="absolute top-1.5 left-1.5 w-1.5 h-1.5 rounded-full bg-green-400"
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
import { ref } from 'vue';

export default {
  name: 'App',
  components: {
    Button,
    KeyboardIcon
},
  setup() {
    const showKeyboard = ref(false);
    const textarea = ref('');
    const textareaRef = ref(null);
    const shiftValue = ref(false);
    const capsValue = ref(false);
    const keyHit = ref({});
    const keys = getKeyData();

    // watch(keyHit, value => {
    //     if(value !== {}) {
    //       value?.code === 'CapsLock' && value?.keyCode === 20 ? onCapsLock() : null
    //       value?.key === 'Shift' && value?.keyCode === 16 ? onShift() : null
    //     }
    // });

    const onKeyHit = (e) => {
      const { code, key, keyCode } = e
      keyHit.value = { code, key, keyCode };
      setTimeout(() => {
        keyHit.value = {}
      }, 300)
    };

    const onCapsLock = () => {
      capsValue.value = !capsValue.value;
    }

    const onShift = () => {
      shiftValue.value = !shiftValue.value;
    }

    const onBackspace = () => {
      textarea.value = textarea.value.slice(0, -1);
    }

    const onEnter = () => {
      textarea.value = `${textarea.value}\n`;
    }

    const handleBtn = (key) => {
      if(key.value === "Shift") {
        onShift();
      }
      if(key.value === "CapsLock") {
        onCapsLock();
      }
      if(key.value === "Backspace" && textarea.value.length > 0) {
        onBackspace();
      }
      if(key.value === "Enter") {
        onEnter();
      }
      if(key.type === 'value' && shiftValue.value === false && capsValue.value === false) {
        textarea.value = `${textarea.value}${key.value}`;
      }
      if(key.type === 'value' && shiftValue.value === true && key.newValue) {
        textarea.value = `${textarea.value}${key.newValue}`;
      }
      if(key.type === 'value' && capsValue.value === true && key.newValue && key.value.match(/^[A-Za-z]+$/)) {
        textarea.value = `${textarea.value}${key.newValue}`;
      }
      // if(key.value !== 'Shift') {
      //   shiftValue.value = false;
      // }
      textareaRef.value.focus()
    }

    return {
      keys,
      onKeyHit,
      shiftValue,
      capsValue,
      onCapsLock,
      handleBtn,
      textarea,
      textareaRef,
      showKeyboard,
      keyHit
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