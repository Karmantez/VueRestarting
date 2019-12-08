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
            >
                LOGIN
            </v-btn>
            <v-spacer></v-spacer>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
    name: "Login",
    data() {
        return {
            email: "",
            password: ""
        };
    }
};
</script>
