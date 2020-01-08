<template>
    <div>
        <v-card
            class="mx-auto"
            max-width="434"
            tile
        >
            <v-img
                height="100%"
                src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg"
            >
                <v-row
                    align="end"
                    class="fill-height"
                >
                    <v-col
                        align-self="start"
                        class="pa-0"
                        cols="12"
                    >
                        <v-avatar
                            class="profile"
                            color="grey"
                            size="164"
                            tile
                        >
                            <v-img src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"></v-img>
                        </v-avatar>
                    </v-col>

                    <v-col class="py-0">
                        <v-list-item
                            color="rgba(0, 0, 0, .4)"
                            dark
                        >
                            <v-list-item-content>
                                <v-list-item-title class="title">Marcus Obrien</v-list-item-title>
                                <v-list-item-subtitle>Network Engineer</v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                    </v-col>
                </v-row>
            </v-img>
        </v-card>

        <v-file-input
            v-model="files"
            color="deep-purple accent-4"
            counter
            label="File input"
            multiple
            placeholder="Select your files"
            prepend-icon="mdi-paperclip"
            outlined
            :show-size="1000"
        >
            <template v-slot:selection="{ index, text }">
                <v-chip
                    v-if="index < 2"
                    color="deep-purple accent-4"
                    dark
                    label
                    small
                >
                    {{ text }}
                </v-chip>

                <span
                    v-else-if="index === 2"
                    class="overline grey--text text--darken-3 mx-2"
                >
                    +{{ files.length - 2 }} File(s)
                </span>
            </template>
        </v-file-input>

        <v-btn @click="upload">
            UPLOAD!!!
        </v-btn>

        <v-container>
            <v-row>
                <Article imageUrl="https://firebasestorage.googleapis.com/v0/b/toyproject-vue.appspot.com/o/images%2Fnode_pre_gyp_err.png?alt=media&token=84d16edd-1864-426a-979c-ba3d7f3a8fed" />
            </v-row>
        </v-container>
    </div>
</template>

<script>
// Import User Service
import storage from '../../services/server/storage';

import Article from '../board/Article';

export default {
    data: () => ({
        files: [],
        urls: [],
    }),
    components: {
        Article
    },
    methods: {

        upload() {

            storage.uploadImage(this.files[0]);
        }
    },
    watch: {
        files() {
            console.log(this.files);
        }
    }
};
</script>