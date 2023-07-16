<template>
      <NavBar />

                <div class="container-fluid p-5 background hero-header ">
                    <div class="p-3">
                        <div class="row align-items-center ">
                            <div class="col-lg-6 text-center text-lg-start texto">
                                <h1 class="display-3 text-white animated slideInLeft">Sorry, this page does not extist!</h1>
                                <RouterLink class="btn-detalles py-sm-3 px-sm-5 me-3 animated slideInLeft" :to="{ name: 'home' }"> Back to Home</RouterLink>
                            </div>
                            <div class="col-lg-6 text-center text-lg-end overflow-hidden">
                                <img class="img-fluid" src="../assets/img/hero.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
</template>

<script setup>
import NavBar from '@/components/NavBar.vue'

</script>

<style lang="scss" scoped>

.background{
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("../assets/img/papas.jpg");
    
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    // position: relative;
    // display: grid;
    // grid-template-columns: 1fr 2fr;
}

.btn-detalles {
  text-decoration: none;
  color: #ffffff;
  border: 0px ;
  background-color: #4f4f4f;
}
.btn-detalles {
 display: inline-block;
 padding: 2px 24px;
 border: 0px solid #4f4f4f;
 border-radius: 4px;
 transition: all 0.2s ease-in;
 position: relative;
 overflow: hidden;
 font-size: 1.5rem;
 color: rgb(255, 255, 255);
 z-index: 1;
}

.btn-detalles:before {
 content: "";
 position: absolute;
 left: 50%;
 transform: translateX(-50%) scaleY(1) scaleX(1.25);
 top: 100%;
 width: 140%;
 height: 180%;
 background-color: rgba(0, 0, 0, 0.05);
 border-radius: 50%;
 display: block;
 transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
 z-index: -1;
}

.btn-detalles:after {
 content: "";
 position: absolute;
 left: 55%;
 transform: translateX(-50%) scaleY(1) scaleX(1.45);
 top: 180%;
 width: 160%;
 height: 190%;
 background-color: #39bda7;
 border-radius: 50%;
 display: block;
 transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
 z-index: -1;
}

.btn-detalles:hover a{
 color: #ffffff;
}

.btn-detalles:hover:before {
 top: -35%;
 background-color: #ffd035;
 transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
}

.btn-detalles:hover:after {
 top: -45%;
 background-color: #ffd035;
 transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
}

.texto h1{
    font-weight: 500;
}
</style>