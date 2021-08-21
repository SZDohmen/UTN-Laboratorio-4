<template>
    <div>
        <h1 class="text-center my-lg-3">Av. Las Heras y Av. San Martin, Ciudad de Mendoza</h1>
        <donde-estamos/>
    </div>
</template>

<script>
import Donde from '../components/Donde.vue'
export default{
    components:{
        "donde-estamos": Donde
    }
}
</script>