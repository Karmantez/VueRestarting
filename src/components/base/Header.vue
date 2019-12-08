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
                    <v-list-item
                        v-for="url in address"
                        :key="url"
                    >
                        <router-link :to="'/' + url">
                            <v-list-item-title>{{ url }}</v-list-item-title>
                        </router-link>
                    </v-list-item>
                </v-list>
            </v-menu>
        </v-app-bar>
    </div>    
</template>

<script>
export default {
    name: "Header",
    data() {
        return {
            address: [
                "home",
                "login",
                "register"
            ]
        };
    }
};
</script>

<style scoped>

    a:link, a:visited {

        color: black;
        text-decoration: none;
    }
</style>