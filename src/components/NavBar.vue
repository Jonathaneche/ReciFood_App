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
            <!-- <li class="nav-item"> 
                 <router-link :to="{ name: 'about' }" class="nav-link mx-2">About</router-link>
            </li> -->
            <li class="nav-item">
                <router-link :to="{ name: 'dashboard' }" class="nav-link mx-2" v-if="isLoggedIn && !isAdmin" >Dashboard</router-link>
            </li>
            <li class="nav-item">
                <router-link :to="{ name: 'dashboard' }" class="nav-link mx-2" v-if="isAdmin" >Admin</router-link>
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
                <router-link :to="{ name: 'login' }" class="nav-item nav-link mx-2 " v-if="isLoggedIn != true"><i class="fa-solid fa-user pe-1" ></i>Log in</router-link>
                
                
                <li class="nav-item dropdown" v-if="isLoggedIn">
                    <a class="nav-link mx-2 dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="fa-solid fa-right-from-bracket"></i>
                    </a>
                    
                    
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <li><a class="dropdown-item mx-1 " @click="handleSignOut" v-if="isLoggedIn" >Log Out</a></li>
                    </ul>
                </li>
                
            </ul>
        </div>
        </div>
        <img v-if="isLoggedIn" src="../assets/img/avatars/chef-1.png" class="nav-item nav-avatar mx-1 avatar_user" alt="Avatar" data-bs-toggle="modal" data-bs-target="#exampleModal"/>
    </nav>

    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Selecciona el avatar que mas te gusta</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body avatars-contenedor">
            <div v-for="avatar in availableAvatars" :key="avatar.id" class="avatar-option" @click="selectAvatar(avatar.id)">
                <img :src="avatar.url" alt="Avatar" class="avatar_user" />
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Cambiar</button>
          </div>
        </div>
      </div>
    </div>
    <router-view />
</template>

<script setup>

import { onMounted, ref, watch } from 'vue';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import router from '../router'
import { useUsersStore } from '@/store/usersStore';

const usersStore = useUsersStore();


const isLoggedIn = ref(false)
const isAdmin = ref(false);
let auth;

const userName = ref("")
userName.value = usersStore.userName;

watch(() => usersStore.userName, (newUserName) => {
    userName.value = newUserName;
});

onMounted(() => {
    auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if (user) {
            isLoggedIn.value = true;
            // Verificar si el userId es igual a "123ass654123"
            isAdmin.value = user.uid === "5RNhjzfJiBOKrCaTHCuEXfX8OZC3";
        } else {
            isLoggedIn.value = false;
            isAdmin.value = false; // Restablecer isAdmin si el usuario no está autenticado
        }
    });
});


const handleSignOut = () => {
    signOut(auth).then(() => {
        usersStore.isLoggedIn = false; // Actualizar el estado isLoggedIn en el store
        router.push("/");
    });
};


const availableAvatars = [
    { id: 1, url: '../assets/img/avatars/chef-1.png' },
    { id: 2, url: '../assets/img/avatars/chef-2.png' },
    { id: 3, url: '../assets/img/avatars/chef-3.png' },
    { id: 4, url: '../assets/img/avatars/chef-4.png' },
    { id: 5, url: '../assets/img/avatars/chef-5.png' },
    { id: 6, url: '../assets/img/avatars/chef-6.png' },
    { id: 7, url: '../assets/img/avatars/chef-7.png' },
    { id: 8, url: '../assets/img/avatars/chef-8.png' },
    { id: 9, url: '../assets/img/avatars/chef-9.png' },
];


function selectAvatar(avatar_id) {
    console.log("Seleccionaste el avatar", avatar_id)
}
</script>

<style lang="scss" scoped>

.avatar_user {
    width: 3rem;
    height: 3rem;
}

.avatar-option {
    justify-content: center;
}
.avatars-contenedor{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
}
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