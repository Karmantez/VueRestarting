<template>
  <div>
    <p v-for="(article, index) in GET_NEWS" :key="index">
      <a :href="article.url"> {{ article.title }}</a>
      <small>
        {{ article.time_ago }} by
        <router-link :to="`/user/${article.user}`">{{ article.user }}</router-link>
      </small>
    </p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['GET_NEWS']),
  },
  created() {
    this.$store.dispatch('FETCH_LIST', { url: 'news/1.json', setter: 'SET_NEWS' });
  },
};
</script>

<style></style>
