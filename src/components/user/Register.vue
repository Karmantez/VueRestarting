<template>
    <v-form
        ref="form"
        v-model="valid"
        lazy-validation
    >
        <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
        ></v-text-field>

        <v-text-field
            v-model="password"
            label="Password"
            type="password"
            required
        ></v-text-field>

        <v-text-field
            v-model="name"
            :counter="10"
            :rules="nameRules"
            label="Name"
            required
        ></v-text-field>

        <v-btn
            :disabled="!valid"
            color="success"
            class="mr-4"
            @click="register()"
        >
            Register
        </v-btn>

        <v-btn
            color="error"
            class="mr-4"
            @click="reset"
        >
            Reset Form
        </v-btn>
    </v-form>    
</template>

<script>
// Import User Service
import userService from '../../services/user/service';

export default {
    data: () => ({
        email: '',
        password: '',
        name: '',
        
        nameRules: [
            v => !!v || 'Name is required',
            v => (v && v.length <= 10) || 'Name must be less than 10 characters',
        ],
        emailRules: [
            v => !!v || 'E-mail is required',
            v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],
        select: null,
        valid: true
    }),

    methods: {
        
        register() {

            userService.registerWithEmail(this.email, this.name, this.password).then((ret) => {

                if(ret) {

                    alert("성공!");
                }
                else {

                    alert("실패...");
                }
            });
        },
        reset () {
            this.$refs.form.reset();
        }
    }
};
</script>