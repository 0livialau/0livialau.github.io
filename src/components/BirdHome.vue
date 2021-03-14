<template>
    <v-parallax src="@/assets/images/background_clouds.svg" height="850" id="home-background">
        <v-row justify="center">
            <v-col cols="12" sm="3" xs="1"></v-col>
            <v-col cols="12" sm="6" xs="10" class="text-center pt-7">
                <v-avatar size="200">
                    <v-img src="@/assets/images/BB_headshot.jpg"></v-img>
                </v-avatar>
                <div class="pt-7">
                    <h3 class="gray--text text-center font-weight-light pb-7">My name is BB</h3>
                    <p class="gray--text text-justify">"I am a 14 year old Gray Cockatiel. I love bothering
                        my mom at the busiest moments. Whether it is pecking laptops, picking off keyboard keys,
                        shredding mouse pads, or singing ridiculous tunes, I know how to bother someone! </p>
                    <p class="gray--text text-justify">I also love head scratches, sunflower seeds, and millets.
                        I hate fruits and vegetables, although I am introduced
                        to new ones all the time - YUCK!
                        I love being with my humans, and will screech when
                        they are not in sight. I need to make sure they are safe.</p>
                    <p class="gray--text text-justify">To get regular updates on
                        what I'm up to, follow my Instgram account. It is managed by me and only me!"</p>
                </div>
            </v-col>
            <v-col cols="12" sm="3" xs="1"></v-col>
        </v-row>
    </v-parallax>
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
        background: #fdf4b8;
    }
</style>