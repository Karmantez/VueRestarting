<template>
  <div>
    <h1>Controlled Pattern</h1>
    <CheckBox v-model="checked"></CheckBox>
  </div>
</template>

<script>
import CheckBox from './CheckBox';

export default {
  components: {
    CheckBox,
  },
  data() {
    return {
      checked: false,
    };
  },
};
</script>

<style></style>
