<template>
    <v-content id="frame">
        <v-container
            class="fill-height"
            fluid
        >
            <v-row
                align="center"
                justify="center"
            >
                <v-col
                    cols="12"
                    sm="8"
                    md="4"
                >
                    <v-card class="elevation-12">
                        <v-form
                            style="padding: 50px;"
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

                            <v-col
                                style="margin-top: 35px;"
                            >
                                <v-slider
                                    v-model="age"
                                    label="AGE"
                                    max="100"
                                    thumb-label="always"
                                ></v-slider>
                            </v-col>

                            <v-select
                                :items="occupationList"
                                label="Occupations"
                                dense
                                solo
                            ></v-select>

                            <v-col
                                style="margin-top: 100px;"
                            >
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
                            </v-col>
                        </v-form>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </v-content>
</template>

<script>
// Import User Service
import userService from '../../services/user/service';

export default {
    data: () => ({
        email: '',
        password: '',
        name: '',
        age: 0,
        occupationList: [
            'student',
            'workers',
            'etc'
        ],
        
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

<style scoped>

    #frame {
        background-image: url("../../assets/background.png");
    }
</style>