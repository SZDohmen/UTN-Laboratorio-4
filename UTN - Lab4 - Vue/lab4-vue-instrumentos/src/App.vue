<template> 
  <div> 
    <Menu v-bind:datosArray="datosArray" />
    <router-view v-bind:datosArray="datosArray" />
  </div> 
</template> 
 
<script> //-----------------------------------------SCRIPT--------------------------------------------
import instrumentosJson from './fakedb/instrumentos.json'
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
    getData() {
      this.datosArray = instrumentosJson;
      console.log(this.datosArray);
    },
  },

  mounted() {
    this.getData();
  },
  
} 
</script>