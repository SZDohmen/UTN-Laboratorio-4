<template>
    <div>
        <Menu v-bind:datosArray="datosArray" />
        <router-view v-bind:datosArray="datosArray" />
    </div>
</template>

<script> //-----------------------------------------SCRIPT--------------------------------------------
import axios from 'axios';
import Menu from './components/Menu.vue'

export default{
    name:'App',

    components:{
        Menu
    },

    data() {
        return {
            datosArray: [],        
        };
    },

    methods: {
        async getData() {
            try {
                let dataJson = await axios.get( "http://localhost:8080/test/tb/zodiaco.json" );
                this.datosArray = dataJson.data;
                console.log(this.datosArray);
            } catch (error) {
                console.error('Error al obtener los datos: ' + error);
            }
        },
    },

    mounted() {
        this.getData();
    },

}
</script>
