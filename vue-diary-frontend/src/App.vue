<template>
  <div id="app">
    <AppHeader></AppHeader>
    <router-view />
  </div>
</template>

<script>
import AppHeader from '@/components/common/AppHeader';

export default {
  components: {
    AppHeader,
  },
};
</script>
