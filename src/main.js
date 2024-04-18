import { createApp } from 'vue'
import './style.css'
// importo js di bootstrap 
import * as bootstrap from "bootstrap";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { faMagnifyingGlass, faPaperclip, faEllipsisVertical, faBellSlash, faCircleNotch, faMessage, faChevronDown, faFaceSmile, faMicrophone } from "@fortawesome/free-solid-svg-icons";

import App from './App.vue'
library.add(faMagnifyingGlass, faPaperclip, faEllipsisVertical, faBellSlash, faCircleNotch, faMessage, faChevronDown, faFaceSmile, faMicrophone);
// mostrare dati in console browser 
window.Vue = {};
window.Vue.App = createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount('#app')
