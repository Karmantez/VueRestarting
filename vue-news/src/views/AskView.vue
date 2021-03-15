<template>
  <div>
    <p v-for="(ask, index) in GET_ASKS" :key="index">
      <router-link :to="`item/${ask.id}`"> {{ ask.title }}</router-link>
      <small> {{ ask.time_ago }} by {{ ask.user }} </small>
    </p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['GET_ASKS']),
  },
  created() {
    this.$store.dispatch('FETCH_LIST', { url: 'ask/1.json', setter: 'SET_ASKS' });
  },
};
</script>

<style></style>
