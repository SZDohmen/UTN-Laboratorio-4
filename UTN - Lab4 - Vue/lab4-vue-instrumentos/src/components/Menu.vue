<template>
    <div>
        <div>
            <b-navbar toggleable="lg" type="dark" variant="dark">
                <b-navbar-brand href="/">Home</b-navbar-brand>
            </b-navbar>
        </div>
    </div>
</template>

<script> //-----------------------------------------SCRIPT--------------------------------------------
export default {
    name:'Menu',
    props: {
        datosArray:Array
    },
}
</script>