<template>
  <div id="app">
    <Toolbar />
    <transition name="page">
      <router-view />
    </transition>
  </div>
</template>

<script>
import Toolbar from '@/components/Toolbar';

export default {
  components: {
    Toolbar,
  },
};
</script>

<style>
* {
  font-family: 'Ubuntu Condensed', sans-serif;
}

body {
  padding: 0px;
  margin: 0px;
}
</style>

<style scoped>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s;
}
.page-enter, .page-leave-to /* .page-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
