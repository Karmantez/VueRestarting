<template>
    <div>
        <v-app-bar
            color="blue lighten-3 accent-2"
            dark
        >
        <v-toolbar-title>Toy Project - Taylous Survey System</v-toolbar-title>
        <v-spacer></v-spacer>

            <v-menu
                left
                bottom
            >
                <template v-slot:activator="{ on }">
                    <v-btn icon v-on="on">
                        <v-icon>mdi-dots-vertical</v-icon>
                    </v-btn>
                </template>

                <v-list>
                    <v-list-item>
                        <router-link to="/home">
                            <v-list-item-title>Home</v-list-item-title>
                        </router-link>
                    </v-list-item>

                    <v-list-item
                        v-if="!loggedIn"
                    >
                        <router-link to="/login">
                            <v-list-item-title>Login</v-list-item-title>
                        </router-link>
                    </v-list-item>

                    <v-list-item
                        v-if="!loggedIn"
                    >
                        <router-link to="/register">
                            <v-list-item-title>Register</v-list-item-title>
                        </router-link>
                    </v-list-item>

                    <v-list-item
                        v-if="loggedIn"
                        @click="logout"
                    >
                        <v-list-item-title>
                            <v-list-item-title>Logout</v-list-item-title>
                        </v-list-item-title>
                    </v-list-item>

                    <v-list-item
                        v-if="loggedIn"
                    >
                        <router-link to="/mypage">
                            <v-list-item-title>MyPage</v-list-item-title>
                        </router-link>
                    </v-list-item>
                </v-list>
            </v-menu>
        </v-app-bar>
    </div>    
</template>

<script>
// Import VUEX
import { createNamespacedHelpers } from 'vuex';
// Import User Service
import userService from '../../services/user/service';

const userHelper = createNamespacedHelpers('User');


export default {
    name: "Header",
    computed: {
        ...userHelper.mapState([
            'user',
            'loggedIn'
        ])
    },
    methods: {
        ...userHelper.mapMutations(['setUser']),
        logout() {
            userService.logout().then((ret) => {
                this.$swal({
                    title: ret.title,
                    text: ret.text,
                    icon: ret.icon,
                    button: ret.button,
                }).then(() => {
                    this.setUser({ email: undefined, name: undefined });
                    this.$router.push('/login');
                });
            });
        }
    }
};
</script>

<style scoped>

    a:link, a:visited {

        color: black;
        text-decoration: none;
    }
</style>