<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png">

        <h1>HOME PAGE</h1>

        <h2>User's Profile</h2>
        <div style="margin: 10px;">
            {{ user.email }}
            {{ user.name }}
        </div>

        <v-sheet height="500">
            <v-calendar
                type="month"
                now="2019-01-08"
                value="2019-01-08"
                :events="events"
            />
        </v-sheet>
    </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

// Import User Service
// import userService from '../../services/user/service';

// Import User Vuex
import { createNamespacedHelpers } from 'vuex';

const userGetters = createNamespacedHelpers('User').mapGetters;

export default {
    name: 'home',
    data() {
        return {
            user: {
                email: "Empty",
                name: "Unknown"
            },
            events: [
                {
                    name: 'Vacation',
                    start: '2018-12-30',
                    end: '2019-01-02',
                },
                {
                    name: 'Meeting',
                    start: '2019-01-07',
                },
                {
                    name: '30th Birthday',
                    start: '2019-01-03',
                },
                {
                    name: 'New Year',
                    start: '2019-01-01',
                },
                {
                    name: 'Conference',
                    start: '2019-01-21',
                },
                {
                    name: 'Hackathon',
                    start: '2019-01-30',
                    end: '2019-02-01',
                },
            ],
        };
    },
    mounted() {
        this.user = this.getUser;
    },
    computed: {
        ...userGetters(['getUser', 'getLoggedIn'])
    }
};
</script>

<style scoped>

    .home {

        height: 100%;
    }

</style>