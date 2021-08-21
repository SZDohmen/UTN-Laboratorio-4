<template>
    <div>
       <h3 style="margin:10px"> Catálogo de Instrumentos </h3>
    
        <div class="d-flex flex-wrap" style="width: auto;">
            <div v-for="(item, i) in datosArray" :key="i" style="margin:10px">
                <b-card style="width: 300px;">
                    <img v-bind:src="item.imagen" style="max-width: 100px; margin-bottom: 10px;"> 
                    <h5 style="font-weight: bold;"> {{ item.instrumento }} </h5>

                    <div v-if="item.costoEnvio==='G'" style="color: #3cb21b "> Envio a Todo el País </div>
                    <div v-else style="color: #ec7a2c "> Costo Envio Interior De Argentina ${{ item.precio }} </div>
                    <div> Vendidos: {{ item.cantidadVendida }} </div>
                    <hr/>
                    <router-link class="btn btn-dark" :to="{ path: '/detalle/'+item.id, query: { detalleItem:item } }" > Detalles </router-link>
                </b-card>
            </div>
        </div>
        
    </div>
</template>

<script> //-----------------------------------------SCRIPT--------------------------------------------
export default{
    name:'Home',
    props: {
        datosArray:Array
    },

}
</script>