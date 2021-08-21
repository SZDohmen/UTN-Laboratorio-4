<template>
    <div>
        <div>
            <b-navbar toggleable="lg" type="dark" variant="dark">
                <b-navbar-brand href="/">Home</b-navbar-brand>

                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                <b-collapse id="nav-collapse" is-nav>
                    <b-navbar-nav>
                        <b-nav-text>
                            <router-link :to="{ path: '/agrupados-por-elemento', query: { menuData:this.datosArray } }"> Elementos </router-link>
                        </b-nav-text>
                        
                    </b-navbar-nav>

                    <b-navbar-nav>
                        <b-nav-item-dropdown right>
                            <template #button-content>
                                <em>Buscar por mes</em>
                            </template>

                            <b-dropdown-item href="#">Enero</b-dropdown-item>
                            <b-dropdown-item href="#">Febrero</b-dropdown-item>
                            <b-dropdown-item href="#">Marzo</b-dropdown-item>
                            <b-dropdown-item href="#">Abril</b-dropdown-item>
                            <b-dropdown-item href="#">Mayo</b-dropdown-item>
                            <b-dropdown-item href="#">Junio</b-dropdown-item>
                            <b-dropdown-item href="#">Julio</b-dropdown-item>
                            <b-dropdown-item href="#">Agosto</b-dropdown-item>
                            <b-dropdown-item href="#">Septiembre</b-dropdown-item>
                            <b-dropdown-item href="#">Octubre</b-dropdown-item>
                            <b-dropdown-item href="#">Noviembre</b-dropdown-item>
                            <b-dropdown-item href="#">Diciembre</b-dropdown-item>              
                        </b-nav-item-dropdown>

                    </b-navbar-nav>
                </b-collapse>
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