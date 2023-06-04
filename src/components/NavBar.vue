<template>
    <nav class="navbar navbar-expand-sm navbar-light bg-light  px-lg-5 px-sm-1">
        <div class="container-fluid mx-3">
        <router-link :to="{ name: 'home' }" class="navbar-brand"><i class="fa fa-cutlery pe-2"></i>ReciFood</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class=" collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav ms-auto ">
            <li class="nav-item">
                <router-link :to="{ name:'home' }" class="nav-link mx-2" aria-current="page">Home</router-link>
            </li>
            <li class="nav-item">
            <router-link :to="{ name: 'meals' }" class="nav-link mx-2">Meals recipes</router-link>
            </li>
            <li class="nav-item">
                <a class="nav-link mx-2" href="#">About</a>
            </li>
            <!-- <li class="nav-item dropdown">
                <a class="nav-link mx-2 dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Company
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><a class="dropdown-item" href="#">Blog</a></li>
                <li><a class="dropdown-item" href="#">About Us</a></li>
                <li><a class="dropdown-item" href="#">Contact us</a></li>
                </ul>
            </li> -->
            </ul>
            <ul class="navbar-nav ms-auto nav_login">
            
                <!-- <a href="#" class="nav-item nav-link mx-2 "><i class="fa-solid fa-user-plus pe-1"></i>Sign up</a> -->
                <router-link :to="{name: 'login'}" class="nav-item nav-link mx-2 "><i class="fa-solid fa-user pe-1"></i>Log in</router-link>
            
            </ul>
        </div>
        </div>
    </nav>
    <router-view />
</template>

<script setup>

</script>

<style lang="scss" scoped>
.nav-item .router-link-exact-active {
      color: #128652;
      font-weight: 500;
    }


.navbar-brand {
    font-family: 'Dancing Script', cursive;
    font-size: 2rem;
    color: $logo_color;

}

.navbar-brand:hover{
    color: $logo_color;
}


/* Estilos para dispositivos móviles */
@media (max-width: 640px) {

    .nav_login{
    display: grid;
    grid-template-columns: 1fr 1fr;
}
}
</style>