<template>
  <div class="contents">
    <div class="form-wrapper form-wrapper-sm">
      <form @submit.prevent="submitForm" class="form">
        <div>
          <label for="username">id:</label>
          <input id="username" type="text" v-model="username" />
          <p class="validation-text">
            <span class="warning" v-if="!isUsernameValid && username">
              Please enter an email address
            </span>
          </p>
        </div>
        <div>
          <label for="password">pw:</label>
          <input id="password" type="text" v-model="password" />
        </div>
        <button :disabled="!isUsernameValid || !password" type="submit" class="btn">로그인</button>
      </form>
      <p class="log">{{ logMessage }}</p>
    </div>
  </div>
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

        /**
         *  ❓ 로그인한 User의 nickname을 AppHeader로 보내주는 방법
         *    1. emit 사용
         *    2. event bus 사용
         *    3. vuex 사용 ✅
         */
        this.$store.commit('setUsername', data.user.username);

        // Programmatic Navigation
        this.$router.push('/main');
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
