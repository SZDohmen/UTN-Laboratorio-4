<template>
    <div>
        <b-card style="max-width: 800px; margin: 10px">
            <div>
                <img v-bind:src="dataRecibida.imagen" img-alt="Card image" img-left class="mb-3"> 
               
                <b-card-text> <h5> {{ dataRecibida.signo }} </h5> </b-card-text>
                <b-card-text> Descripción: {{ dataRecibida.descripcion }} </b-card-text>
                <b-card-text> Elemento: {{ dataRecibida.elemento }} </b-card-text>
                <b-card-text> Símbolo: {{ dataRecibida.simbolo }} </b-card-text>
                Meses: <ul v-for="(item, i) in dataRecibida.meses" :key="i" >
                    <li> {{ item }} </li>          
                </ul> 
                
                <router-link class="btn btn-dark" v-bind:to="`/`"> Volver </router-link>
            </div>             
        </b-card>
    </div>
</template>

<script> //-----------------------------------------SCRIPT--------------------------------------------
export default {
    name: "Detalle",

    data() 
    {
        console.log(this.$route.query);
        return {
            dataRecibida:this.$route.query.detalleItem
        }
    }, 
}
</script>