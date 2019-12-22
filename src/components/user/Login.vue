<template>
    <v-container>
        <v-card
            class="mx-auto my-auto"
            max-width="30%"
            max-height="50%"
        >
            <v-img
                class="mx-auto"
                src="@/assets/survey.png"
            ></v-img>

            <v-card-title>
                Login Page
            </v-card-title>

            <v-card-subtitle>
                TSS(Taylous Survey System) Login Page - Created by Taylous
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
                    color="blue"
                    text
                    @click="login"
                >
                    LOGIN
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-container>
</template>

<script>
// Import User Service
import userService from '../../services/user/service';

// Import User Vuex
import { createNamespacedHelpers } from 'vuex';

const userHelper = createNamespacedHelpers('User');

export default {
    name: "Login",
    data() {
        return {
            email: "",
            password: "",
            loading: false
        };
    },
    computed: {
        ...userHelper.mapGetters([
            'getUser',
            'getLoggedIn'
        ])
    },
    methods: {
        ...userHelper.mapMutations([
            'setUser',
            'setLoggedIn'
        ]),
        login() {
            this.$store.commit('setLoading', true);
            userService.loginWithEmail(this.email,  this.password).then((ret) => {
                this.$store.commit('setLoading', false);
                this.$swal({
                    title: ret.title,
                    text: ret.text,
                    icon: ret.icon,
                    button: ret.button,
                }).then(() => {

                    if(ret.title === 'ERROR')
                        return;
                    this.setUser({ email: "testing@naver.com", name: "테스트" });
                    this.$router.push('/home');
                });
            });
        }
    }
};
</script>
