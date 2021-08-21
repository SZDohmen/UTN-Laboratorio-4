<template>
    <div>
        <detalle-lista
            class="justify-content-center"
            v-for="instrumento in instrumentos"
            v-bind:key="instrumento.id"
            v-bind:id="instrumento.id"
            v-bind:imagen="instrumento.imagen"
            v-bind:instrumento="instrumento.instrumento"
            v-bind:precio="instrumento.precio"
            v-bind:costoEnvio="instrumento.costoEnvio"
            v-bind:cantidadVendida="instrumento.cantidadVendida"
        />
    </div>
</template>

<script> 
import DetalleLista from './DetalleLista.vue';

export default {
  components: { DetalleLista },
  name: 'Lista',
  props: {
    instrumentos: Array
  },
  methods:{
      async getInstrumentos(){
          try{
              let temp = await fetch('/instrumentos.json')
              let tempJSON = await temp.json()
              this.instrumentos = tempJSON.instrumentos
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