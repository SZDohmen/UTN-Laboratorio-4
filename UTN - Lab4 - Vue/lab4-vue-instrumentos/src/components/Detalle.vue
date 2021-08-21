<template> 
  <div> 
    <div style="width: auto;">
        <div style="margin:10px">
            <b-card style="width: 500px;">
                <img v-bind:src="dataRecibida.imagen" style="max-width: 100px; margin-bottom: 10px;"> 
                <h5 style="font-weight: bold;"> {{ dataRecibida.instrumento }} </h5> 
                <div> Marca: {{ dataRecibida.marca }} </div>
                <div> Modelo: {{ dataRecibida.modelo }} </div>
                <div v-if="dataRecibida.costoEnvio==='G'" style="color: #3cb21b "> Envio a Todo el divaís </div>
                <div v-else style="color: #ec7a2c "> Costo Envio Interior De Argentina ${{ dataRecibida.divrecio }} </div>

                <div> Vendidos: {{ dataRecibida.cantidadVendida }} </div>
                Descripción:
                <div> {{ dataRecibida.descripcion }} </div>
                <hr/>
                <router-link class="btn btn-dark" v-bind:to="`/`"> Volver </router-link>
            </b-card>
        </div>
    </div>

  </div> 
</template> 
 
<script> //-----------------------------------------SCRIPT--------------------------------------------
export default{ 
    name:'Detalle',
    
    data()  {
        console.log(this.$route.query);
        return {
            dataRecibida:this.$route.query.detalleItem
        }
    }, 
 }

</script>