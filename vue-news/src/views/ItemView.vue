<template>
  <div>
    <section>
      <!-- Detail -->
      <UserProfile :info="GET_ITEM">
        <router-link slot="username" :to="`/user/${GET_ITEM.user}`">
          {{ GET_ITEM.user }}
        </router-link>
        <template slot="time">
          {{ 'Posted ' + GET_ITEM.time_ago }}
        </template>
      </UserProfile>
    </section>
    <section>
      <h2>{{ GET_ITEM.title }}</h2>
    </section>
    <section>
      <!-- Comments -->
      <div v-html="GET_ITEM.content"></div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import UserProfile from '@/components/UserProfile.vue';

export default {
  components: {
    UserProfile,
  },
  computed: {
    ...mapGetters(['GET_ITEM']),
  },
  created() {
    this.$store.dispatch('FETCH_INFO', {
      type: 'item',
      id: this.$route.params.id,
      setter: 'SET_ITEM',
    });
  },
};
</script>

<style scoped>
.user-container {
  display: flex;
  align-items: center;

  padding: 0.5rem;
}

.fa-user {
  font-size: 2.5rem;
}

.user-description {
  padding-left: 8px;
}

.time {
  font-size: 0.7rem;
}
</style>
