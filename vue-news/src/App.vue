<template>
  <div id="app">
    <Toolbar />
    <transition name="page">
      <router-view />
    </transition>
    <Spinner :loading="loadingStatus"></Spinner>
  </div>
</template>

<script>
import Toolbar from '@/components/Toolbar';
import Spinner from '@/components/Spinner';
import bus from '@/utils/bus';

export default {
  components: {
    Toolbar,
    Spinner,
  },
  data() {
    return {
      loadingStatus: false,
    };
  },
  created() {
    bus.$on('start:spinner', this.startSpinner);
    bus.$on('end:spinner', this.endSpinner);
  },
  beforeDestroy() {
    bus.$off('start:spinner', this.startSpinner);
    bus.$off('end:spinner', this.endSpinner);
  },
  methods: {
    startSpinner() {
      this.loadingStatus = true;
    },
    endSpinner() {
      this.loadingStatus = false;
    },
  },
};
</script>

<style>
* {
  font-family: 'Ubuntu Condensed', sans-serif;
}

a {
  color: #34495e;
  text-decoration: none;
}

a:hover {
  color: #42b883;
  text-decoration: underline;
}

a.router-link-exact-active {
  text-decoration: underline;
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
