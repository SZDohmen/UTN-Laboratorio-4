<template>
  <div class="my-lg-3 border-bottom d-flex col-lg-7 py-lg-3 mx-auto row">
    <router-link v-bind:to="{path: `/instrumentos/${id}`, query: {...props}}" class="col-lg-3 mr-lg-3">
      <img v-bind:src="imagen" />
    </router-link>
    <span class="col-lg-7 d-flex">
      <span>
        <p class="Instrumento">{{ instrumento }}</p>
        <p class="Precio">${{ precio.toLocaleString("de-DE") }}</p>
        <p
          class="CostoEnvio"
          v-bind:class="costoEnvio > 0 ? 'EnvioPago' : 'EnvioGratis'"
        >
          {{
            costoEnvio > 0
              ? `Costo de Envio interior de Argentina: $${precio}`
              : `Envío gratis a todo el país`
          }}
        </p>
        <p class="Cantidad">{{ cantidadVendida }} vendidos</p>
      </span>
      <span class="d-flex align-items-center">
        <button class="btn btn-outline-dark" @click="editarValores()">Editar</button>
      </span>
    </span>
  </div>
</template>

<script>
export default {
  name: "DetalleLista",
  props: {
    id: Number,
    imagen: String,
    marca: String,
    modelo: String,
    descripcion: String,
    instrumento: String,
    precio: Number,
    costoEnvio: Number,
    cantidadVendida: Number,
  },
  methods:{
    editarValores(){
      this.$router.push({name:'Editar', params:{
        id: this.id,
        imagen: this.imagen,
        marca: this.marca,
        modelo: this.modelo,
        descripcion: this.descripcion,
        instrumento: this.instrumento,
        precio: this.precio,
        costoEnvio: this.costoEnvio,
        cantidadVendida: this.cantidadVendida,
      }})
    }
  },
  data(){
    return{
      props: undefined
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500&display=swap");

.Precio {
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: 1.5rem;
}

.Instrumento {
  font-weight: 300;
  font-size: 1.5rem;
  line-height: 1.5rem;
}

.CostoEnvio {
  font-size: small;
}

.EnvioGratis {
  color: green;
}

.EnvioPago {
  color: darkorange;
}

.Cantidad {
  font-size: medium;
}
</style>
