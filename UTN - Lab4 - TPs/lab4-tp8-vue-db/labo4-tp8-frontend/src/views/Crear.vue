<template>
    <div>
        <crear-formulario :enviarDatos="enviarDatos" />
    </div>
</template>

<script>
    import Formulario from '../components/Formulario.vue'
    import Vue from 'vue'
    export default{
        components:{
            'crear-formulario': Formulario
        },methods:{
            async enviarDatos(datos){
                try{
                    await Vue.axios.post('http://localhost:8081/instrumentos', datos);
                    alert('Instrumento creado satisfactoriamente')
                    this.$router.push({name:'Instrumentos'})
                }catch(error){
                    console.error(error)
                }
            },
        }
    }
</script>