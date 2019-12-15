<template>
    <v-card
        class="mx-auto"
        max-width="90%"
    >
        <v-img
            class="mx-auto"
            src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
        ></v-img>

        <v-card-title>
            Login Page
        </v-card-title>

        <v-card-subtitle>
            Toy Project - Vue.js
        </v-card-subtitle>

        <v-text-field
            v-model="email"
            label="E-MAIL"
            outlined
            clearable
        ></v-text-field>

        <v-text-field
            v-model="password"
            type="password"
            label="PASSWORD"
            outlined
            clearable
        ></v-text-field>

        <v-card-actions>
            <v-btn
                color="green"
                text
                @click="login"
            >
                LOGIN
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn
                color="blue"
                text
                @click="login2"
            >
                LOGIN2
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
// Import User Service
import userService from '../../services/user/service';

export default {
    name: "Login",
    data() {
        return {
            email: "",
            password: ""
        };
    },
    methods: {

        login() {

            userService.loginWithNormal(this.email,  this.password).then((ret) => {

                if(ret) {

                    alert("로그인 성공!");
                }
                else {

                    alert("로그인 실패...");
                }
            });
        },

        login2() {

            userService.loginWithEmail(this.email,  this.password).then((ret) => {

                if(ret) {

                    alert("로그인 성공!");
                }
                else {

                    alert("로그인 실패...");
                }
            });
        }
    }
};
</script>
