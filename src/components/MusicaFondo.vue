<template>
    <div>
        <!-- Renderizar el ícono de audífonos -->
        <i class="fas fa-headphones" :class="{ 'fa-play': paused, 'fa-pause': !paused }" @click="toggleAudio"></i>
    </div>
</template>

<script>
export default {
    data() {
        return {
            audio: null,
            paused: true
        };
    },
    mounted() {
        // Crea un objeto de audio
        this.audio = new Audio('../assets/music/musica_de_fondo.mp3');
        this.audio.volume = 0.2;
    },
    methods: {
        toggleAudio() {
            // Verificar si el audio se está reproduciendo
            if (this.paused) {
                // Si está pausado, reproducir y actualizar el estado
                this.audio.play();
                this.paused = false;
            } else {
                // Si se está reproduciendo, pausar y actualizar el estado
                this.audio.pause();
                this.paused = true;
            }
        }
    }
};
</script>
