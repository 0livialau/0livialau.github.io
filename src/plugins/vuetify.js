import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import '@mdi/font/css/materialdesignicons.css'
import '@fortawesome/fontawesome-free/css/all.css'

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: 'mdi' || 'fa'
      },
      theme: {
        themes: {
          light: {
            primary: "#d6eef5",
            secondary: "#15a0bc",
            orange: "#f7a813",
            yellow: "#fdf4b8",
            gray: "#7f7f7f"
          },
          dark: {
            primary: "#d6eef5",
            secondary: "#15a0bc",
            orange: "#f7a813",
            yellow: "#fdf4b8",
            gray: "#7f7f7f"
          }
        }
      }
});
