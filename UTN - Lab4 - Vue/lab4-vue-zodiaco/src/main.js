import './plugins/bootstrap-vue'
import Vue from 'vue' 
import App from './App.vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Home from './components/Home.vue'
import Detalle from './components/Detalle.vue'
import Elementos from './components/Elementos.vue'

//variable que por consola indica si estamos usando Vue en produccion 
Vue.config.productionTip = false; //la desactivamos

Vue.use(VueRouter); //Router index
const routes = [
    { path: '/', component: Home },
    { path: '/detalle/:id', component: Detalle },
    { path: '/agrupados-por-elemento', component: Elementos },
];
const router = new VueRouter( {
    mode: 'history',
    base: process.env.BASE_URL, //ruta base de la Api, corresponde a la opción pública en vue.config.js
    routes
});

new Vue({ //nucleo del framework
    router:router, //gestor de rutas para Vue
    //store, //almacén de estados para Vue (esta Api no lo usa)
    render: h => h(App) //render --> se encarga de crear una estructura HTML para la aplicación principal
}).$mount('#app') //indica en el elemento HTML donde montaremos la Api

Vue.use(VueAxios, axios) //con use() encadenamos los plugins