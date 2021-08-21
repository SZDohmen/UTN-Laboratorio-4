<template>
    <div>
        <h3 style="margin: 10px"> Agrupados por elementos </h3>

        <b-card style="max-width: 800px; margin: 10px">
            <table class="table mx-auto">
                <thead>
                    <tr>
                        <th>ELEMENTO</th>
                        <th>SIGNOS</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(signos, index) in array" :key="index">
                        <td v-for="(elemento, indice) in signos" :key="indice">
                            <b v-for="(i, c) in elemento" :key="c">{{elemento[c]}} </b>
                        </td>
                    </tr>
                </tbody>
            </table>

            <router-link class="btn btn-dark" v-bind:to="`/`"> Volver </router-link>

        </b-card>
        

        
    </div>
</template>

<script> //-----------------------------------------SCRIPT--------------------------------------------
export default {
    name: 'Elementos',

    props: {
        menuData:[]
    },

    data() {
        console.log(this.$route.query.menuData);
        return {
            array:new Map(),            
        }
    },

    methods:{
        filterByElement(){
            let dataFromHome = this.$route.query.menuData;
            let tempArray = new Map();
            dataFromHome.map( data => {
                if(tempArray.get(data.elemento) === undefined ){
                    tempArray.set(data.elemento, []);
                }
                tempArray.get(data.elemento).push(data.signo);
            });
            this.array = tempArray;
        }
    },

    mounted(){
        this.filterByElement()
    }

}
</script>
