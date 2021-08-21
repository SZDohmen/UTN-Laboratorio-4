<template>
    <div>
        <editar-formulario :enviarDatos="enviarDatos" :eliminar="eliminar"/>
    </div>
</template>

<script>
    import Formulario from '../components/Formulario.vue'
    import Vue from 'vue'
    export default{
        components:{
            'editar-formulario': Formulario
        },methods:{
            async enviarDatos (datos){
                try {
                    await Vue.axios.put(`http://localhost:8081/instrumentos/${datos.id}`, datos);
                    alert('Instrumento modificado satisfactoriamente')
                    this.$router.push({name:'Instrumentos'})
                } catch (error) {
                    console.error(error)
                }
            },
            async eliminar(datos){
                try{
                    await Vue.axios.delete(`http://localhost:8081/instrumentos/${datos.id}`);
                    alert('Eliminado satisfactoriamente')
                    this.$router.push({name:'Instrumentos'})
                }catch(error){
                    console.error(error)
                }
            }
        }
    }
</script>