<template>
    <div>
       <h3 style="margin:10px"> Signos del Zodiaco </h3>
    
        <div class="d-flex flex-wrap" style="width: auto;">
            <div v-for="(item, i) in datosArray" :key="i" style="margin:10px"> <!-- Contenedor que recorre el arreglo de Datos con un for-->
                <b-card style="max-width: 20rem;">
                    <img v-bind:src="item.imagen"> 
                    <b-card-text> {{ item.signo }} </b-card-text>               
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
    }
}
</script>