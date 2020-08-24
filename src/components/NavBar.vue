<template>
    <nav class="navbar navbar-expand-md navbar-light">
        <router-link class="navbar-brand" to="/" style="width:140px">
            <img src="./../assets/logo-pixel.gif" alt="pokémon" class="img-fluid" />
        </router-link >
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
            <li class="nav-item">
                <router-link class="nav-link" to="/">Home</router-link >
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/favoritos">Mi equipo</router-link >
            </li>
            </ul>
        </div>
    </nav>
</template>
<style scoped>
nav{
    -webkit-backdrop-filter: saturate(180%) blur(5px);
    backdrop-filter: saturate(180%) blur(5px);
    background-color: hsla(0,0%,100%,0.8);
    position: sticky;
    top: 0;
    display: flex;
    justify-content: center;
    width: 100%;
    max-width: 100%;
    z-index: 101;
    min-height: 64px;
    transition: box-shadow .1s ease 0s;
    box-shadow: inset 0 -1px 0 0 rgba(0,0,0,0.1);
}
</style>