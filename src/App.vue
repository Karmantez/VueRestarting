<template>
    <v-app>
        <Header />
        <router-view />
        <Footer />
    </v-app>
</template>

<script>
// Import Base Components
import Header from './components/base/Header.vue';
import Footer from './components/base/Footer.vue';

export default {
    name: 'App',
    components: {
        Header,
        Footer
    }
};
</script>
