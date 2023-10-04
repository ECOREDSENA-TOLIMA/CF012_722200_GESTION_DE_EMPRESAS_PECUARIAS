<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p Para recapitular, dentro del componente formativo Análisis de datos y elaboración de informes, vale la pena destacar lo relativo a la estadística, porque son herramientas fundamentales para la acertada toma de decisiones en la empresa. Así mismo, cobra importancia la normativa de seguridad, que garantiza la conservación de la información y la protección para la compañía, y los terceros vinculados a esta. De la misma forma, se resalta la elaboración de informes según sus tipos y aplicando normas APA. Finalmente, el tema sobre el plan de mejora a partir de hallazgos, aplicando acciones correctivas y de mejora.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
