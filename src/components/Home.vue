<template>
    <v-container fluid class="pa-0 ma-0">
        <v-parallax src="@/assets/images/background_border.svg" height="1500" id="home-background">
            <v-row align="center" justify="center">
                <v-col class="text-center" cols="12">
                    <h1 class="display-1 font-weight-light mb-4 secondary--text">The Traveling Olive</h1>
                    <h4 class="font-italic overline secondary--text">Traveler . Software Engineer . Bird Mom</h4>
                <v-img src="@/assets/images/logo_simple.png" contain height="120" class="mt-6"></v-img>
                </v-col>
            </v-row>

            <v-row align="center" justify="center">
                <v-col cols="12" sm="3" xs="1"></v-col>
                <v-col class="text-center" cols="12" sm="6" xs="10">
                    <v-avatar size="250">
                        <v-img src="@/assets/images/profile_cartoon.jpg"></v-img>
                    </v-avatar>
                    <div class="pt-7">
                        <h3 class="gray--text text-center font-weight-light pb-7">Welcome to my page!</h3>
                        <p class="gray--text text-justify">"I love discovering new places above and below the water. I got PADI open water certified in 2017
                        and have been exploring the waters as often as I can. When I am not traveling, I am spending time 
                        with my cockatiel, BB, or petting random dogs on the streets of Boston! I am a Senior Software Engineer
                        at Fortify, a 3D printing startup."</p>
                    </div>
                </v-col>
                <v-col cols="12" sm="3" xs="1"></v-col>
            </v-row>
        </v-parallax>

    </v-container>
</template>

<script>
export default {
    data: function(){
        return{
            //
        }
    },
    computed: {
        //
    },
    methods: {
        //
    }
};
</script>

<style scoped>
    #home-background {
        background: #d6eef5;
        margin-bottom: 1px;
    }
</style>