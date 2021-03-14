import Home from './components/Home.vue';
import TravelHome from "./components/TravelHome.vue"
import BirdHome from "./components/BirdHome.vue"

var routes= [
    {
        path: '/',
        component: Home,
        name:'home'
    },
    {
        path: '/bird',
        component: BirdHome,
        name:'birdHome'
    },
    {
        path: '/travel',
        component: TravelHome,
        name:'travelHome'
    },
]

export default routes;