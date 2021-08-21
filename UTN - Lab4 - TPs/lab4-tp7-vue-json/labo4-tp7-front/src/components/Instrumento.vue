<template>
  <div class="d-flex">
      <div class="row justify-content-center h-100">
      <span class="col-lg-6">
        <img class="img-responsive Imagen" v-bind:src="`/images/${instrumento.imagen}`" />
        <div class="Descripcion">
          <p>Descripcion:</p>
          <p>{{ instrumento.descripcion }}</p>
        </div>
      </span>
      <span class="col-lg-3 border-left">
        <div>
          <p class="Vendidos">{{ instrumento.cantidadVendida }} vendidos</p>
          <p class="Nombre">{{ instrumento.instrumento }}</p>
          <p class="my-lg-4 Precio">$ {{ Number(instrumento.precio).toLocaleString('de-DE') }}</p>
          <div class="MarcaModelo mb-lg-5">
              <p>Marca: {{ instrumento.marca }}</p>
              <p>Modelo: {{ instrumento.modelo }}</p>
          </div>
          <div class="CostoEnvio">
            <p>Costo Envío:</p>
            <p v-bind:class="costoEnvio === 'G' ? 'EnvioGratis' : 'EnvioPago'">{{ instrumento.costoEnvio > 0 ? 'Envío Gratis' : `Costo de Envío Interior de Argentina $${instrumento.precio}` }}</p>
          </div>
        </div>
        <div class="d-flex h-25">
          <router-link class="btn btn-outline-primary align-self-end" v-bind:to="'/instrumentos'">Agregar al carrito</router-link>
        </div>
      </span>
    </div>
  </div>
</template>

<script>
    export default{
        name: 'Instrumento',
        props:{
          instrumento: {}
        },
        methods:{
              async getInstrumento(){
              try{
                  let temp = await fetch('/instrumentos.json')
                  let tempJSON = await temp.json()
                  this.instrumento = tempJSON.instrumentos.find(
                    i => i.id === this.$route.params.id
                  )
              }catch(error){
                  console.error(error)
              }
          }
        },
        mounted(){
          this.getInstrumento()
        }
    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500&display=swap');
  .Imagen{
    width: 100%;
    height: 55vh;
  }

  .MarcaModelo > p{
    line-height: 0.1vh;
    font-weight: 600;
  }

  .CostoEnvio > p{
    line-height: 0.5vh;
    font-size: small;
  }

  .Nombre{
    line-height: 3.3vh;
    font-size: 1.7em;
  }

  .Vendidos, .Descripcion > p{
    font-size: small;
  }

  .Precio{
    font-size: 2.5em;
    font-weight: 300;
  }

  .EnvioPago{
    color:darkorange;
  }

  .EnvioGratis{
    color:green;
  }
</style>