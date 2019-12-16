<template>
    <div>
        <v-app-bar
            color="blue lighten-3 accent-2"
            dark
        >
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
        <v-toolbar-title>Page title</v-toolbar-title>
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

                    <v-list-item>
                        <router-link to="/login">
                            <v-list-item-title>Login</v-list-item-title>
                        </router-link>
                    </v-list-item>

                    <v-list-item>
                        <router-link to="/register">
                            <v-list-item-title>Register</v-list-item-title>
                        </router-link>
                    </v-list-item>

                    <v-list-item>
                        <router-link to="/logout">
                            <v-list-item-title>Logout</v-list-item-title>
                        </router-link>
                    </v-list-item>

                    <v-list-item>
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
import { createNamespacedHelpers } from 'vuex';
// Import User Service
import userService from '../../services/user/service';

const userMapState = createNamespacedHelpers('User').mapState;


export default {
    name: "Header",
    data() {
        return {
            address: [
                "home",
                "login",
                "register",
                "logout"
            ]
        };
    },
    computed: {
        ...userMapState(['user', 'loggedIn'])
    },
    methods: {

        logout() {
            userService.logout();
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