<template>
    <div class="col-lg-6 mx-auto">
        <h1 class="text-center my-lg-2">Formulario: {{this.$route.name}}</h1>
        <div>
            <input class="form-control my-lg-5" v-model="instrumento" name="instrumento" type="text" placeholder="Instrumento">
            <label for="instrumento">Instrumento</label>
        </div>
        <div>
            <input class="form-control my-lg-5" v-model="marca" name="marca" type="text" placeholder="Marca">
            <label for="marca">Marca</label>
        </div>
        <div>
            <input class="form-control my-lg-5" v-model="modelo" name="modelo" type="text" placeholder="Modelo">
            <label for="modelo">Modelo</label>
        </div>
        <div>
            <input class="form-control my-lg-5" v-model="precio" name="precio" type="number" placeholder="Precio">
            <label for="precio">Precio</label>
        </div>
        <div>
            <input class="form-control my-lg-5" v-model="costoEnvio" name="costoEnvio" type="number" placeholder="Costo de Envío">
            <label for="costoEnvio">Costo de Envio</label>
        </div>
        <div>
            <input class="form-control my-lg-5" v-model="cantidadVendida" name="cantidadVendida" type="number" placeholder="Cantidad de Ventas">
            <label for="cantidadVendida">Cantidad de Ventas</label>
        </div>
        <div>
            <textarea class="form-control my-lg-5" rows="5" v-model="descripcion" name="descripcion" placeholder="Descripcion"></textarea>
            <label for="descripcion">Descripcion</label>
        </div>
        <div class="d-flex flex-column align-items-center"> 
            <p><b>{{imagen !== undefined ? 'Imagen Actual' : 'Seleccionar imagen'}}</b></p>
            <img class="img-thumbnail w-50" :src="imagen">
            <input @change="cambiarFoto" class="my-lg-2" name="imagen" type="file">
        </div>
        <div class="text-center my-lg-3">
            <button class="btn btn-outline-info" @click="enviarDatos({
                id,
                instrumento,
                marca,
                modelo,
                precio,
                costoEnvio,
                cantidadVendida,
                descripcion,
                imagen,
            })">{{this.$route.name}}</button>
            <button v-if="id !== undefined" class="btn btn-outline-danger ml-lg-3" @click="eliminar({id})">Eliminar</button>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'Formulario',
        props:{
            enviarDatos: {type: Function},
            eliminar: {type: Function}
        },
        data(){
            return{
                id: '',
                instrumento: '',
                marca:'',
                modelo:'',
                precio:'',
                costoEnvio:'',
                cantidadVendida:'',
                descripcion:'',
                imagen:'',
            }
        },
        mounted(){
            this.asignar()
        },
        methods:{
            asignar(){
                    this.id = this.$route.params.id
                    this.instrumento = this.$route.params.instrumento
                    this.marca = this.$route.params.marca
                    this.modelo = this.$route.params.modelo
                    this.precio = this.$route.params.precio
                    this.costoEnvio = this.$route.params.costoEnvio
                    this.cantidadVendida = this.$route.params.cantidadVendida
                    this.descripcion = this.$route.params.descripcion
                    this.imagen = this.$route.params.imagen
            },
            cambiarFoto(e){
                let reader = new FileReader()
                reader.readAsDataURL(e.target.files[0])
                reader.onloadend = () => {
                    this.imagen = reader.result
                }
            }
        }
    }
</script>

<style>
div > input, div > textarea{
    position: relative;
}

div > label{
    position: absolute;
    color:rgb(0,0,0,0);
    transition: all 1s;
}

input:focus + label{
    display: block;
    margin-top: -8vw;
    color:rgb(0,0,0,1);
}

textarea:focus + label{
    margin-top: -16vw;
    display: block;
    color:rgb(0,0,0,1);
}
</style>