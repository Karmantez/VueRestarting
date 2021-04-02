<template>
  <!-- 
    v-model: 값을 input 이벤트에서 value를 이용하여 바꿈
    -->
  <input type="checkbox" :value="value" @click="toggleCheckBox" />
</template>

<script>
export default {
  props: ['value'],
  methods: {
    toggleCheckBox() {
      this.$emit('input', !this.value);
    },
  },
};
</script>

<style></style>
