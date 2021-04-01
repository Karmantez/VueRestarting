<template>
  <div>
    <UserProfile :info="GET_USER">
      <div slot="username">{{ GET_USER.id }}</div>
      <span slot="time"> {{ 'Joined ' + GET_USER.created }}, </span>
      <span slot="karma">{{ GET_USER.karma }}</span>
    </UserProfile>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import UserProfile from '@/components/UserProfile';

export default {
  components: {
    UserProfile,
  },
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
