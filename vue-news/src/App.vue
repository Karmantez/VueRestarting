<template>
  <div id="app">
    <Toolbar />
    <router-view />
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
