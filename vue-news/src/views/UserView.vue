<template>
  <div>
    <p>name: {{ GET_USER.id }}</p>
    <p>karma: {{ GET_USER.karma }}</p>
    <p>created: {{ GET_USER.created }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['GET_USER']),
  },
  created() {
    this.$store.dispatch('FETCH_INFO', {
      type: 'user',
      id: this.$route.params.id,
      setter: 'SET_USER',
    });
  },
};
</script>

<style></style>
