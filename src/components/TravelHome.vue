<template>
    <v-parallax src="@/assets/images/background_night.svg" :height="$vuetify.breakpoint.smAndDown ? 2850 : 6000" id="home-background">

        <v-layout v-if="$vuetify.breakpoint.smAndDown" class="d-flex justify-space-around flex-wrap">
            <v-card v-for="(trip) in tripsArray" :key="trip.id"
                width="450" class="ma-2"
            >
                <v-img max-height="300" :src="trip.img"></v-img>
                <v-card-title> {{ trip.title }}</v-card-title>
                <v-card-subtitle>{{ trip.when }}</v-card-subtitle>
                <v-card-text>
                    {{ trip.desc }}
                </v-card-text>
            </v-card>
        </v-layout>
        <v-layout v-else class="d-flex align-content-start justify-space-around">
            <v-timeline>
                <v-timeline-item v-for="(trip) in tripsArray" :key="trip.id"
                    color="yellow" fill-dot small
                >
                    <template v-slot:opposite>
                        <span
                        class="body-1 font-weight-light gray--text"
                        v-text="trip.when"
                        ></span>
                    </template>
                    <v-card
                        max-width="650" class="ma-2"
                    >
                        <v-img max-height="300" :src="trip.img"></v-img>
                        <v-card-title> {{ trip.title }}</v-card-title>
                        <v-card-text>
                            {{ trip.desc }}
                        </v-card-text>
                    </v-card>
                </v-timeline-item>
            </v-timeline>
        </v-layout>
    </v-parallax>
</template>

<script>
export default {
    data: function(){
        return{
            tripsArray: [
                {
                    id: 14,
                    title: 'Netherlands',
                    when: 'April 2024',
                    img: require("@/assets/images/travel/2024/tulip.jpg"),
                    desc: "In the Netherlands for a friend's wedding! Land of tulips, \
                        windmills, and stroop waffels! This was our first trip to \
                        Europe together! And shockingly, the time different from this \
                        trip made us both 'morning people'."
                }, 
                {
                    id: 13,
                    title: 'Alaska',
                    when: 'July 2023',
                    img: require("@/assets/images/travel/2023/alaska.jpg"),
                    desc: "Following our Banff trip, we headed to Alaska to meet up with \
                        some friends. Even with a lost luggage, the trip couldn't have been \
                        better. I went camping (more like glamping) for the first time and loved it! \
                        We had booked hotels for 2 nights, but ended up canceling them because \
                        we were so comfortable with the camping gear. We went halibut and salmon \
                        fishing and was able to bring some fish home. This trip has been both of \
                        our favorites so far!"
                },    
                {
                    id: 12,
                    title: 'Banff, Canada',
                    when: 'June 2023',
                    img: require("@/assets/images/travel/2023/engagement.jpg"),
                    desc: "We got engaged in Banff overlooking Lake Louise! Such a memorable \
                        experience -- I feel so lucky. Part 1 of our trip 'out West'."
                },
                {
                    id: 11,
                    title: 'Punta Cana',
                    when: 'June 2022',
                    img: require("@/assets/images/travel/2022/punta_cana.jpg"),
                    desc: "Kyle and I gave all-inclusive resorts a try. Much different \
                        from our usual adventures, but definitely a different type of \
                        travel that we got used to very quickly! I loved the food and \
                        drinks, especially the fresh coconuts."
                },
                {
                    id: 10,
                    title: 'Aruba',
                    when: 'April 2022',
                    img: require("@/assets/images/travel/2022/aruba_flamingo.jpg"),
                    desc: "Girls trip to Aruba! We hung out with flamingos on a beach and \
                        toured the island on ATVs. Such fun adventures and bonding experiences \
                        with my high school friends."
                },
                {
                    id: 9,
                    title: 'Saint Thomas, USVI',
                    when: 'January 2020',
                    img: require("@/assets/images/travel/2020/stt/drone_beach.jpg"),
                    desc: "We loved Saint Thomas so much, we had to go back! More diving, \
                        snorkeling, and food. We did a day trip to Waterlemon Cay in St. John. \
                        It was sad to see buildings on both islands destroyed by hurricane Maria. \
                        (Our last trip before COVID) "
                },
                {
                    id: 8,
                    title: 'Santorini, Greece',
                    when: 'June 2019',
                    img: require("@/assets/images/travel/2019/santorini.jpg"),
                    desc: "Santorini was amazing. We went during the shoulder season, so it wasn't \
                        too busy. The food was amazing -- the souvlaki chicken and Santorini salad \
                        were some of my favs. Definitely a place I'd like to visit again."
                },
                {
                    id: 7,
                    title: 'San Pedro, Belize',
                    when: 'May 2019',
                    img: require("@/assets/images/travel/2019/belize/candid.jpg"),
                    desc: "Our first dives out of the country! We had so much fun trying new \
                        food, and experiencing a completely different culture! We couldn't \
                        go on all our planned dives due to high winds, but we managed to \
                        sneak a few in. We did get a chance to go flats fishing -- pulling up \
                        a Permit was definitely an unforgettable moment for me!"
                },
                {
                    id: 6,
                    title: 'Big Island, Hawaii',
                    when: 'May 2018',
                    img: require("@/assets/images/travel/2018/hawaii/hawaii_beach.jpg"),
                    desc: "My first visit to the beautiful island of Hawaii!\
                        The 10 day trip was the perfect amount of time for diving, snorkeling, \
                        relaxing on beaches. I was most excited for the manta ray night dive -- \
                        we were luck enough to see 13 rays that night. They were magnificent!"
                },
                {
                    id: 3,
                    title: 'Moab, Utah',
                    when: 'April 2018',
                    img: require("@/assets/images/travel/2018/utah/solo_sit.jpg"),
                    desc: "A girls trip to Moab for a few days of hiking! We visited Caynonlands and \
                        Arches National Parks. We started in Salt Lake City for a few days -- exploring the \
                        food scene and visiting our friend. Such a nice way to reconnect with friends."
                },
                {
                    id: 2,
                    title: 'Key West, Florida',
                    when: 'March 2017',
                    img: require("@/assets/images/travel/2017/keys/free_diving.jpg"),
                    desc: "We had a diving-turned-snorkeling trip at John Pennekamp Coral \
                        Reef. The reef was so pretty and we saw the Crist of the Abyss. \
                        I think it is one of the best places to snorkel in the continential US! \
                        We knew we would be back for a diving trip soon."
                },
                {
                    id: 1,
                    title: 'Saint Thomas, USVI',
                    when: 'January 2017',
                    img: require("@/assets/images/travel/2017/stt/sea_turtle_orig.jpg"),
                    desc: "I had my first diving experience on this trip, and also found my love for \
                        sea turtles. I logged 6 dives on Sain Thomas, 4 of which were part of the \
                        certification."
                }
            ]
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
    }
</style>