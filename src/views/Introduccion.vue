<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    p.mb-5(data-aos="fade-left") Estimado aprendiz, la elaboración de informes implica una secuencia de procesos interconectados que pueden variar según el propósito del informe. En algunas ocasiones, se enfocará en un conjunto específico de datos, ya sean actuales o históricos. En otros casos, será necesario combinar información de múltiples fuentes. Todo dependerá del análisis que se requiera, os plazos pactados y los resultados esperados. En el siguiente vídeo podrá acceder a este interesante tema: 

    figure
    .video(data-aos="fade-right")
      iframe(width="560" height="315" src="https://www.youtube.com/embed/FSqncANUK7A?si=a_yqKqHUs8YPJ6WZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share")

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
