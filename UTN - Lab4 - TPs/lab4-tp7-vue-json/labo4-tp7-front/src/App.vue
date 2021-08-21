<template>
  <div id="app" class="d-flex flex-column">
    <div class="align-self-center">
        <router-link class="Enlace" to="/">Home</router-link>
        <router-link class="mx-lg-2 Enlace" to="/instrumentos">Instrumentos</router-link>
        <router-link class="Enlace" to="/donde">Donde Estamos</router-link>
    </div>
    <router-view />
  </div>
</template>

<style scoped>
.Enlace{
  color: grey;
  text-decoration: none;
  transition: color 0.5s;
}

.Enlace:hover{
  color: black;
}
</style>
