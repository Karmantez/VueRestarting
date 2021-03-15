<template>
  <div>
    <p v-for="(job, index) in GET_JOBS" :key="index">
      <a :href="job.url"> {{ job.title }}</a>
      <small>{{ job.time_ago }} by {{ job.domain }}</small>
    </p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['GET_JOBS']),
  },
  created() {
    this.$store.dispatch('FETCH_LIST', { url: 'jobs/1.json', setter: 'SET_JOBS' });
  },
};
</script>

<style></style>
