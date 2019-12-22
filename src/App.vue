<template>
    <v-app>
        <v-overlay
            id="loading-animation"
            :value="getLoading"
            color="black"
            opacity="1.0"
        >
            <SemipolarSpinner
                v-show="getLoading"
                :animation-duration="2000"
                :size="100"
                color="#ff1d5e"
            />
            <p class="text-center">LOADING</p>
        </v-overlay>
        <Header />
        <router-view />
        <Footer />
    </v-app>
</template>

<script>
// Import Base Components
import Header from './components/base/Header.vue';
import Footer from './components/base/Footer.vue';

// Import Loading Animations
import { SemipolarSpinner } from 'epic-spinners';

// Import User Vuex
import { mapGetters } from 'vuex';


export default {
    name: 'App',
    components: {
        Header,
        Footer,
        SemipolarSpinner
    },
    computed: {
        ...mapGetters(['getLoading'])
    }
};
</script>

<style scoped>

    #loading-animation {
        animation: fadein 2s; /* Base */
        -moz-animation: fadein 2s; /* Firefox */
        -webkit-animation: fadein 2s; /* Safari and Chrome */
        -o-animation: fadein 2s; /* Opera */
    }
    @keyframes fadein {
        from {
            opacity:0;
        }
        to {
            opacity:1;
        }
    }
</style>