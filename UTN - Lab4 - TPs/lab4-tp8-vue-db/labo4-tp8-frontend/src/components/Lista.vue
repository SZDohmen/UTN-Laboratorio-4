<template>
    <div>
        <detalle-lista
            class="justify-content-center"
            v-for="instrumento in instrumentos"
            :key="instrumento.id"
            :id="instrumento.id"
            :imagen="instrumento.imagen"
            :instrumento="instrumento.instrumento"
            :precio="instrumento.precio"
            :costoEnvio="instrumento.costoEnvio"
            :cantidadVendida="instrumento.cantidadVendida"
            :marca="instrumento.marca"
            :modelo="instrumento.modelo"
            :descripcion="instrumento.descripcion"
        />
    </div>
</template>

<script> 
import DetalleLista from './DetalleLista.vue';

export default {
  components: { DetalleLista },
  name: 'Lista',
  data(){
    return{
        instrumentos: []
    }
  },
  methods:{
      async getInstrumentos(){
          try{
              let temp = await fetch('http://localhost:8081/instrumentos')
              let tempJSON = await temp.json()
              this.instrumentos = tempJSON._embedded.instrumentos
          }catch(error){
              console.error(error)
          }
      }
  },
  mounted(){
      this.getInstrumentos()
  }
}
</script>