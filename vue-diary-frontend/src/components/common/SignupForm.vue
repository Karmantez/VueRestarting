<template>
  <form @submit.prevent="submitForm">
    <div>
      <label for="username">ID: </label>
      <input id="username" type="text" v-model="username" />
    </div>
    <div>
      <label for="password">PW: </label>
      <input id="password" type="text" v-model="password" />
    </div>
    <div>
      <label for="nickname">Nickname: </label>
      <input id="nickname" type="text" v-model="nickname" />
    </div>

    <button type="submit" :disabled="!isUsernameValid || !password || !nickname">회원가입</button>
    <p>{{ logMessage }}</p>
  </form>
</template>

<script>
import { validateEmail } from '@/utils/validation';
import { registerUser } from '@/api';

export default {
  data() {
    return {
      username: '',
      password: '',
      nickname: '',
      // log
      logMessage: '',
    };
  },
  computed: {
    isUsernameValid() {
      return validateEmail(this.username);
    },
  },
  methods: {
    async submitForm() {
      const { data } = await registerUser({
        username: this.username,
        password: this.password,
        nickname: this.nickname,
      });
      this.logMessage = data;
      this.initForm();
    },
    initForm() {
      this.username = '';
      this.password = '';
      this.nickname = '';
    },
  },
};
</script>
