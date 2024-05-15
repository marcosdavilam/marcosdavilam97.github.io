import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { Intersection } from './directives/Intersection.js'

import gAuthPlugin from 'vue3-google-oauth2';

const app = createApp(App)

app.directive('intersection', Intersection)

let gauthClientId = "105483174393-dp65dvsd1ci8volqhv525a4oialsrk57.apps.googleusercontent.com";
app.use(gAuthPlugin, { clientId: gauthClientId, scope: 'readonly', prompt: 'consent', fetch_basic_profile: false })

app.mount('#app')
