<template>
  <button
    @click="buttonClick"
    class="bg-transparent hover:bg-blue-900 text-blue-200 font-semibold hover:text-white py-2 px-2 border border-blue-900 hover:border-transparent rounded"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "PxButton",

  methods: {
    buttonClick() {
      this.$emit("custom-click");
    }
  }
};
</script>
