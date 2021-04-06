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

    <button type="submit" :disabled="!isUsernameValid || !password">로그인</button>
    <p>{{ logMessage }}</p>
  </form>
</template>

<script>
import { loginUser } from '@/api';
import { validateEmail } from '@/utils/validation';

export default {
  data() {
    return {
      username: '',
      password: '',

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
      try {
        // business logic
        const { data } = await loginUser({ username: this.username, password: this.password });
        console.log(data);
        this.logMessage = `${data.user.nickname}님 환영합니다.`;
      } catch (error) {
        // error handling
        // 💡 try-catch를 사용하면 어디서 error가 발생했는지 확실하게 알 수 있다.
        this.logMessage = error.response.data;
      }
      this.initForm();
    },
    initForm() {
      this.username = '';
      this.password = '';
    },
  },
};
</script>

<style></style>
