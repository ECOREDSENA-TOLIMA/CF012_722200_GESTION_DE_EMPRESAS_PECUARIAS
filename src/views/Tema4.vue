<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Plan de mejora

    p.mb-5(data-aos="fade-left") Tiene cabida una vez los procesos de evaluación han sido implementados en las diferentes áreas de la empresa. Su objetivo principal es la #[b supresión de las ineficiencias identificadas y la solución de sus problemáticas, con miras a perfeccionar los sistemas organizacionales] hasta donde sea posible; para lograrlo se debe diseñar medidas centradas en la solución, eliminación o reducción de las causas. 

    .tarjeta(style="background-color:#DBF9BD").p-4.mb-5
      .row(data-aos="flip-up").align-items-center 
        .col-4
          img(src='@/assets/curso/temas/tema4/1.svg' alt='')
        .col-8 
          p Todos los procesos sujetos a la gestión administrativa inician con #[b la planeación], seguido de la ejecución, posteriormente la evaluación y para terminar, la aplicación de medidas para mejorarlo. Una vez se completa el ciclo se reinicia para seguir puliendo los resultados y alcanzar los mayores niveles de productividad.
          p La aplicabilidad de los planes de mejora es inherente a #[b todas las áreas de la empresa], esto se debe a que toda actividad realizada por personal humano es susceptible de perfeccionamiento. Dada esta característica, los planes de mejora son responsabilidad del personal directivo, normalmente formulados por la gerencia, con una supervisión y acompañamiento continuo por parte de los jefes de área. Pese a ello, la implementación involucra todos los niveles de personal, pues la retroalimentación de los funcionarios operativos resulta de vital importancia para identificar situaciones que de otra forma pasarían desapercibidos.




    separador
    #t_4_1.titulo-segundo.color-acento-contenido
      h2 4.1	Hallazgos

    p.mb-5(data-aos="fade-left") Corresponden a la identificación de problemáticas en los procesos productivos de la organización, se dan tras una labor de supervisión y suelen ser clasificados de la siguiente forma:

    .row.justify-content-center.mb-5
      .col
        .row.mb-5
          .col-md-3.col-lg.mb-5.mb-lg-0
            .tarjeta-avatar
              img(src='@/assets/curso/temas/tema4/2.svg' alt='AvatarTop').p-4
              //- .tarjeta debe ir acompañado de una de una de estas clases => 
              //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
              //- estas clases tambien tienen un modificador --borde
              .tarjeta.color-primario(style="width:100%")
                .p-4.text-white
                  h2.text-center No conformidad
                  p Se observa una situación que incumple con las exigencias técnicas o normativas aplicables, por ejemplo, una empresa que no da cumplimiento a su cronograma de pagos y por lo tanto, presenta mora con las entidades financieras. En estos casos la organización debe plantear una acción correctiva para solucionar la problemática.
          .col-md-3.col-lg.mb-5.mb-lg-0
            .tarjeta-avatar
              img(src='@/assets/curso/temas/tema4/3.svg' alt='AvatarTop').p-4
              //- .tarjeta debe ir acompañado de una de una de estas clases => 
              //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
              //- estas clases tambien tienen un modificador --borde
              .tarjeta.color-acento-contenido(style="width:100%")
                .p-4
                  h2.text-center No conformidad potencial
                  p Se identifica una situación que podría desencadenar en una no conformidad. A modo de ejemplo se puede hacer mención a una maquinaria cuyos repuestos con el ciclo de la vida sugerido por el fabricante, a pesar de que no ha generado ningún daño, la posibilidad de que se presente es elevada.
          .col-md-3.col-lg.mb-5.mb-lg-0
            .tarjeta-avatar
              img(src='@/assets/curso/temas/tema4/4.svg' alt='AvatarTop').p-4
              //- .tarjeta debe ir acompañado de una de una de estas clases => 
              //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
              //- estas clases tambien tienen un modificador --borde
              .tarjeta.color-primario(style="width:100%; background-color:#12263F")
                .p-4
                  h2.text-center Oportunidad de mejora
                  p Se evidencia una situación susceptible de ser mejorada para hacerla más eficiente. Tal es el caso de los desperdicios en una cadena de producción, donde la reutilización de esos podría abaratar los costos de otras líneas de producción, o bien podrían venderse a terceros que hagan uso de estos, para recuperar un valor de la inversión.

    .tarjeta(style="background-color:#DBF9BD").p-4.mb-5
      p(data-aos="fade-left") Estos hallazgos operan como puntos de partida para la implementación de una #[b nueva planeación] enfocada en corregir las no conformidades, prevenir que las no conformidades potenciales se materialicen y aprovechar las oportunidades de mejora para maximizar los resultados.
    separador
    #t_4_2.titulo-segundo.color-acento-contenido
      h2 4.2	Pasos para implementarlo

    p(data-aos="fade-left").mb-5 La ejecución de un plan de mejora que resulte efectivo en la consecución de objetivos requiere del cumplimiento de una serie de pasos, entre los que destacan los siguientes:

    PasosA.color-primario.mb-5(tipo="n")
      .row
        .col-md-6.mb-4.mb-md-0
          h3 Análisis de las causas 
          p En primer lugar deben identificarse los procesos que son susceptibles de mejora y organizarlos en función de su prioridad con respecto al objeto social de la empresa. A partir de ello, identificar las causas de las problemáticas y el impacto que cada una de ellas tiene sobre la operación.
        .col-md-6.align-items
          figure
            img(src='@/assets/curso/temas/tema4/5.svg', alt='Texto que describa la imagen')(style="width:30%; margin-left:60%")

      .row
        .col-md-6.mb-4.mb-md-0
          .titulo-sexto.color-acento-contenido.text-start
            h5 Tabla 8
            span #[em Hoja de trabajo por área de mejora]
          .tabla-a(style="overflow: hidden").text-start
            table
              caption Nota. Tomado de "Plan de mejoras. Herramienta de trabajo"
              thead.text-white(style="background-color:#1B3F5E")(data-aos="flip-up") 
                tr.text-center
                  th(colspan="2") ÁREA DE MEJORA N. 1:
              tbody
                tr
                  td Descripción del problema
                  td 
                tr 
                  td Causas que lo provocan
                  td 
                tr
                  td Objetivo a conseguir
                  td 
                tr 
                  td Acciones de mejora
                  td 
                tr 
                  td Beneficios esperados
                  td 

        .col-md-6
          h3 Propuesta de planificación
          p Se debe presentar una propuesta de plan que sea viable y flexible para la implementación de acciones adicionales a futuro. Se diseña basado en las causas identificadas previamente, y suele valerse de herramientas de gestión como la lluvia de ideas o el diagrama de Gantt.
          p Tras la elección de soluciones o estrategias que puedan ser más efectivas, se deben proponer las tareas específicas a realizar y los objetivos a alcanzar con su aplicación. Finalmente, se documenta todo el proceso en el plan de mejora.

      .row
        .col-md-6.mb-4.mb-md-0
          h3 Implementación y seguimiento
          p En esta fase los trabajadores propuestos para desarrollar las actividades inician la ejecución de las acciones de mejora. En ese proceso podrán retroalimentar el programa propuesto indicando si se hacen necesarias modificaciones desde su posición. Además, se debe hacer seguimiento a los indicadores de cumplimiento y desempeño, para medir el nivel de éxito obtenido con las propuestas.
      
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema4/6.svg', alt='Texto que describa la imagen')(style="width:30%; margin-left:60%")

      .row
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema4/7.svg', alt='Texto que describa la imagen')(style="width:30%; margin-right:60%")
        .col-md-6.mb-4.mb-md-0
          h3 La evaluación constante
          p Ofrece ventanas de oportunidad para aplicar modificaciones de manera rápida y medir el éxito de estas variaciones. Es recomendable que la planificación y ejecución estén delimitadas por cronogramas que den el espacio suficiente para evidenciar los resultados, no obstante, aquellas medidas que prueben ser exitosas podrán implementarse de forma permanente si la administración así lo considera.

      .row
        .col-md-6.mb-4.mb-md-0
          h3 La definición de indicadores de seguimiento
          p Podrá facilitar la evaluación en cuanto se tendrá una meta definida a la que se esperará alcanzar; de esta manera los juicios realizados por los supervisores serán más objetivos.
      
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema4/8.svg', alt='Texto que describa la imagen')(style="width:30%; margin-left:60%")
      
        


    separador
    #t_4_3.titulo-segundo.color-acento-contenido
      h2 4.3	Acciones correctivas y de mejora

    p(data-aos="fade-left") Las acciones son las actividades contenidas en el plan de mejora destinadas a la eliminación de la problemática, a la mitigación de los riesgos de las potenciales y a las ventanas de oportunidad para incrementar la eficiencia del proceso evaluado. Su ciclo se compone de una #[b formulación, posterior aplicación y finalmente, una evaluación.] 
    p(data-aos="fade-left").mb-5 Las acciones pueden dividirse en dos grandes grupos o categorías: 

    .row.justify-content-center.mb-5
      .col-8
        .row.mb-5
          .col-md-3.col-lg.mb-5.mb-lg-0
            .tarjeta-avatar
              img(src='@/assets/curso/temas/tema4/9.svg' alt='AvatarTop').p-4
              //- .tarjeta debe ir acompañado de una de una de estas clases => 
              //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
              //- estas clases tambien tienen un modificador --borde
              .tarjeta.color-primario(style="width:100%")
                .p-4.text-white
                  h2.text-center Las acciones correctivas
                  p.text-center Enfocadas en la solución de no conformidades ya existentes. 
          .col-md-3.col-lg.mb-5.mb-lg-0
            .tarjeta-avatar
              img(src='@/assets/curso/temas/tema4/10.svg' alt='AvatarTop').p-4
              //- .tarjeta debe ir acompañado de una de una de estas clases => 
              //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
              //- estas clases tambien tienen un modificador --borde
              .tarjeta(style="width:100%; background-color:#12263F")
                .p-4.text-white
                  h2.text-center Las acciones preventivas
                  p.text-center Centradas en prevenir las potenciales no conformidades o en aprovechar oportunidades de mejora.
                  
    h4.mb-5 ● Fuentes
    p(data-aos="fade-left").mb-5 Se equiparán a los motivos o causas que llevan a que la empresa deba implementar acciones correctivas y de mejora. Algunas de ellas son las siguientes:

    TabsA.color-acento-botones.mb-5
      .tarjeta(style="background-color:#DBF9BD").p-4(titulo="Análisis de contexto")
        .row
          .col-xl-8
            p Las empresas operan dentro de un entorno en el que se nutre de factores externos como los aspectos legales, sociales o económicos. Por otra parte, factores internos como la #[b cultura organizacional o la gestión de la administración] también juegan un papel importante a la hora de ubicar el contexto de la empresa. Comprender todos estos elementos facilita la identificación de problemáticas, por ejemplo, el incumplimiento de normativa técnica o legal.
          .col-xl-4.mb-4
            figure
              img(src='@/assets/curso/temas/tema4/11.png', alt='Texto que describa la imagen')
      .tarjeta(style="background-color:#DBF9BD").p-4(titulo="Partes interesadas")
        .row
          .col-xl-8
            p Son los terceros que tienen influencia significativa en la organización. Deben ser considerados, el no cumplimiento de sus expectativas puede traer #[b problemas en la sostenibilidad de la empresa]. Ejemplos de ellos son los proveedores, acreedores y clientes. De esta categoría pueden surgir acciones a causa de problemáticas como los incumplimientos en los pagos o poca satisfacción de los productos vendidos.
          .col-xl-4.mb-4
            figure
              img(src='@/assets/curso/temas/tema4/12.png', alt='Texto que describa la imagen')
      .tarjeta(style="background-color:#DBF9BD").p-4(titulo="Análisis de indicadores")
        .row
          .col-xl-8
            p Como #[b herramienta en la supervisión y evaluación] de los resultados alcanzados con la implementación de las estrategias propuestas, los indicadores funcionan como referencia para medir el #[b nivel de satisfacción] respecto a las metas planteadas. Así, si se observa una disminución de las ventas que no corresponde a situaciones propias del mercado, se pueden plantear acciones preventivas de forma oportuna para mitigar el impacto comercial.
          .col-xl-4.mb-4
            figure
              img(src='@/assets/curso/temas/tema4/13.png', alt='Texto que describa la imagen')
      .tarjeta(style="background-color:#DBF9BD").p-4(titulo="Informes de no conformidad")
        .row
          .col-xl-8
            p Las conclusiones alcanzadas en evaluaciones previas a los procedimientos operativos sirven como punto de partida para iniciar nuevamente el ciclo. #[b La mejora continua] consiste precisamente en #[b repetir estos procedimientos] de tal forma que cada evaluación identifica problemáticas nuevas o advierta de las recurrentes.
          .col-xl-4.mb-4
            figure
              img(src='@/assets/curso/temas/tema4/14.png', alt='Texto que describa la imagen')
      .tarjeta(style="background-color:#DBF9BD").p-4(titulo="Informes de auditoría")
        .row
          .col-xl-8
            p Las auditorías internas o externas funcionan como una herramienta más de supervisión, y con los hallazgos planteados en el informe del auditor se podrán tomar medidas para minimizar las problemáticas.
          .col-xl-4.mb-4
            figure
              img(src='@/assets/curso/temas/tema4/15.png', alt='Texto que describa la imagen')

    h4.mb-5 ● Etapas
    p(data-aos="fade-left").mb-5 Para un correcto diseño y aplicación de medidas correctivas y preventivas se recomienda tener presente el conducto regular expuesto a continuación:

    .tarjeta(style="background-color:#E6E9E3").p-4.mb-5
      PasosB.color-primario
        .row
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema4/16.png', alt='Texto que describa la imagen')
          .col-md-6.mb-4.mb-md-0
            h4 Definir la acción
            p Se debe presentar de manera clara y explícita la acción que se espera aplicar, definir sus responsables y aterrizar en un documento.
        
        .row
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema4/17.png', alt='Texto que describa la imagen')
          .col-md-6.mb-4.mb-md-0
           h4 Análisis de causa
            p Se aborda la causa de la problemática que motiva la acción. A mayor detalle, más acertadas serán las tareas para abordarla.
        
        .row
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema4/18.png', alt='Texto que describa la imagen')
          .col-md-6.mb-4.mb-md-0
            h4 Planificación de actividades
            p Es recomendable diseñar un cronograma de las actividades a ejecutar, definiendo el personal que llevará a cabo cada una de ellas y asignando los recursos necesarios para dar cumplimiento a los requerimientos.
        
        .row
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema4/19.png', alt='Texto que describa la imagen')
          .col-md-6.mb-4.mb-md-0
            h4 Registro de resultados
            p Documentar los resultados obtenidos en la aplicación de las acciones, detallando los pormenores que hayan surgido en el proceso, la forma en la que se llevaron a cabo las actividades y las dificultades que se evidenciaron.

        .row
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema4/20.png', alt='Texto que describa la imagen')
          .col-md-6.mb-4.mb-md-0
            h4 Evaluación de las acciones
            p Realizar la comparación entre los indicadores previos y los posteriores a la aplicación de las acciones. Las variaciones deben ser positivas y apuntar a la mejora de la efectividad, de lo contrario se deberá replantear la situación para abordarla desde otra perspectiva, recomendando tareas distintas que permitan dar solución a las problemáticas.
    
    p(data-aos="fade-left").mb-5 Para complementar el tema del plan de mejora, se invita a ver el siguiente vídeo:

    figure
    .video(data-aos="fade-right")
      iframe(width="560" height="315" src="https://www.youtube.com/embed/GfYF3i9EnYA?si=qMLN7gBj0xFkwRP6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share")

</template>

<script>
export default {
  name: 'Tema4',
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
