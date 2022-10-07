<template>
  <button
    class="relative w-full h-16 p-2 text-lg font-medium flex items-center justify-center border-[0.5px] border-slate-400 rounded-md transition-transform
      active:scale-[0.99] active:opacity-90 active:transition-opacity lg:hover:-translate-y-[1px] lg:hover:shadow-btnLg lg:active:shadow-btn
      disabled:cursor-not-allowed disabled:active:shadow-none disabled:active:translate-y-0 disabled:hover:translate-y-0 disabled:hover:shadow-none"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: "ButtonUI",
};
</script>

<style scoped></style>