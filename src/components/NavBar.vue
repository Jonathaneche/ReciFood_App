<template>
    <nav class="navbar navbar-expand-sm navbar-light bg-light  px-lg-5 px-sm-1 shadow-sm">
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
                <router-link :to="{ name: 'meals' }" class="nav-link mx-2">Meals</router-link>
            </li>
            <!-- <li class="nav-item"> 
                 <router-link :to="{ name: 'about' }" class="nav-link mx-2">About</router-link>
            </li> -->
            <li class="nav-item">
                <router-link :to="{ name: 'dashboard' }" class="nav-link mx-2" v-if="isLoggedIn && !isAdmin" >Favorite Meals</router-link>
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
        
            <img v-if="isLoggedIn" :src="avatarSrc" class=" nav-avatar mx-1 avatar_user " alt="Avatar" data-bs-toggle="modal" data-bs-target="#exampleModal"/>

        
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
            <div v-for="avatar in availableAvatars" :key="avatar.id" class="avatar-option" @click.prevent="selectedAvatar(avatar.url)">
                <img :src="require(`@/assets/img/avatars/${avatar.url}.png`)" alt="Avatar" class="avatar_user" />
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click.prevent="actualizarAvatar()">Cambiar</button>
          </div>
        </div>
      </div>
    </div>
    <router-view />
</template>

<script setup>

import { onMounted, ref, watch, computed } from 'vue';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import router from '../router'
import { useUsersStore } from '@/store/usersStore';

const usersStore = useUsersStore();

const isLoggedIn = ref(false)
const isAdmin = ref(false);
let auth;


onMounted(() => {
    auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if (user) {
            isLoggedIn.value = true;
            // Verificar si el userId es igual a "123ass654123"
            isAdmin.value = user.uid === "2rYuR8uoHqNxeKuWnmRlJeGqy6F3";
            usersStore.getUserName();
        } else {
            isLoggedIn.value = false;
            isAdmin.value = false; // Restablecer isAdmin si el usuario no está autenticado
        }
    });
});

//const avatarImg = 'chef-3'
const avatarImg = ref("")

onMounted(async () => {
    usersStore.loadFavMeals(); // Cargar los datos de favoritos desde el LocalStorage
    avatarImg.value = usersStore.userAvatar;
});

watch(() => usersStore.userAvatar, (newUserAvatar) => {
    avatarImg.value = newUserAvatar;
});


const handleSignOut = () => {
    signOut(auth).then(() => {
        usersStore.isLoggedIn = false; // Actualizar el estado isLoggedIn en el store
        router.push("/");
    });
};



const availableAvatars = [
    { id: 1, url: 'chef-1' },
    { id: 2, url: 'chef-2' },
    { id: 3, url: 'chef-3' },
    { id: 4, url: 'chef-4' },
    { id: 5, url: 'chef-5' },
    { id: 6, url: 'chef-6' },
    { id: 7, url: 'chef-7' },
    { id: 8, url: 'chef-8' },
    { id: 9, url: 'chef-9' },
];


function selectedAvatar(avatar_id) {
    usersStore.userAvatar = avatar_id;
}

function actualizarAvatar() {
    usersStore.updateAvatar();
}

// Propiedad computada para obtener la URL de la imagen del avatar 
const avatarSrc = computed(() => {
    if (avatarImg.value) {
        return require(`@/assets/img/avatars/${avatarImg.value}.png`);
    } else {
        return require('@/assets/img/avatars/chef-1.png');
    }
});

</script>

<style lang="scss" scoped>

.avatar_user {
    width: 4rem;
    height: 4rem;
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
.avatar_user{
    margin: 0 auto;
}
}
</style>