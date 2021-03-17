<template>
  <v-app>
    <v-app-bar app v-if="!$vuetify.breakpoint.xsOnly"
        color="primary" elevate-on-scroll background-color="transparent"
    >
        <v-tabs
            color="secondary" background-color="transparent"
            centered icons-and-text
        >
            <v-tab class="pa-2 overline" to="/travel">
                Travel
                <v-icon class="mt-2">mdi-airplane</v-icon>
            </v-tab>

            <v-tab class="pa-2 overline" to="/art">
                Art
                <v-icon class="mt-2">mdi-brush</v-icon>
            </v-tab>

            <v-tab class="pa-2" to="/">
                <v-img src="./assets/images/logo_simple.png" contain height="45" class="mb-2"></v-img>
            </v-tab>

            <v-tab class="pa-2 overline" to="/bird">
                Bird
                <v-icon class="mt-2" size="21">fa-crow</v-icon>
            </v-tab>

            <v-tab class="pa-2 overline" to="/resume">
                Resume
                <v-icon class="mt-2">mdi-file-document</v-icon>
            </v-tab>
        </v-tabs>
    </v-app-bar>

    <v-app-bar app v-else
        color="primary" elevate-on-scroll background-color="transparent"
    >
            <v-menu bottom left>
                <template v-slot:activator="{ on, attrs }">
                    <v-app-bar-nav-icon v-bind="attrs" v-on="on"></v-app-bar-nav-icon>
                </template>

                <v-list class="grey lighten-3">
                    <v-list-item to="/travel">
                        <v-icon left>mdi-airplane</v-icon>
                        Travel
                    </v-list-item>
                    <v-list-item to="/art">
                        <v-icon left>mdi-brush</v-icon>
                        Art
                    </v-list-item>
                    <v-list-item to="/">
                        <v-icon left>mdi-home</v-icon>
                        Home
                    </v-list-item>
                    <v-list-item to="/bird">
                        <v-icon size="21" left>fa-crow</v-icon>
                        Bird
                    </v-list-item>
                    <v-list-item to="/resume">
                        <v-icon left>mdi-file-document</v-icon>
                        Resume
                    </v-list-item>
                </v-list>
            </v-menu>

            <v-spacer />

            <v-toolbar-title @click="$router.push('/')">
                <v-img src="./assets/images/logo_simple.png" contain height="45" class="mb-2"></v-img>
            </v-toolbar-title>

            <v-spacer />

    </v-app-bar>

    <v-main>
        <v-container fluid class="pa-0 ma-0">
        <router-view></router-view>
        </v-container>
    </v-main>

    <v-footer app inset dark padless id="footer">
        <v-card flat tile class="primary text-center">
            <v-card-text class="pt-2 pb-0">
                <v-btn class="mx-4 secondary--text" icon href="https://www.instagram.com/traveling_olive/" target="_blank">
                    <v-icon size="36px">mdi-instagram</v-icon>
                </v-btn>
                <v-btn class="mx-4 secondary--text" icon href="https://www.facebook.com/olivialau595" target="_blank">
                    <v-icon size="36px">mdi-facebook</v-icon>
                </v-btn>
            </v-card-text>

            <v-card-text class="gray--text py-2">
                @2021 Olivia Lau. All rights reserved.
            </v-card-text>
        </v-card>
    </v-footer>

  </v-app>
</template>

<script>

export default {
    name: 'App',

    components: {
    },

    data: () => ({
    }),
    mounted() {
        window.ostore = document.getElementById('app').__vue__;
    },
    methods: {
        //
    }
};
</script>

<style scoped>
    #footer {
        display: block;
    }
</style>