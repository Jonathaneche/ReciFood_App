<template>
    <button @click="scrollToTop()" id="btnVolverArriba" title="Volver arriba"><i class="fa-solid fa-arrow-up"></i></button>
</template>

<script setup>

window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
    ) {
        document.getElementById("btnVolverArriba").style.display = "block";
    } else {
        document.getElementById("btnVolverArriba").style.display = "none";
    }
}

function scrollToTop() {
    document.body.scrollTop = 0; // Para Safari
    document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE y Opera
}

</script>

<style lang="scss" scoped>
#btnVolverArriba {
    display: none; /* Oculta el botón inicialmente */
    position: fixed;
    bottom: 20px;
    right: 30px;
    z-index: 99;
    font-size: 16px;
    border: none;
    outline: none;
    background-color: #555;
    color: white;
    cursor: pointer;
    padding: 15px;
    border-radius: 4px;
}

#btnVolverArriba:hover {
    background-color: #777;
}
</style>