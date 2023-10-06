<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Estadística

    .row.justify-content-center.align-items-center
      .col-sm-3
        figure(data-aos="flip-up")
          img(src='@/assets/curso/temas/tema1/1.svg', alt='Texto que describa la imagen')
      .col-sm-8
        p(data-aos="fade-left") La toma de decisiones demanda una previa recolección de información y su análisis; para ello, la estadística como ciencia encargada de abordar la correcta gestión de los datos a través de metodologías y sistemas, aporta herramientas útiles para #[b ordenarlos, clasificarlos y obtener conclusiones a través de ellos.] Su avance ha llevado a que a la fecha existan metodologías centradas en la proyección de eventos futuros con una considerable precisión.
        p(data-aos="fade-left") La mayor ventaja de la estadística en el ámbito empresarial es su amplia aplicabilidad; sus metodologías son transversales a una inmensa variedad de campos, puesto que prácticamente todas las áreas sociales y económicas hacen uso de la información para la generación de nuevo contenido.

    

    separador
    #t_1_1.titulo-segundo.color-acento-contenido
      h2 1.1	Objetivos
    
    p.mb-5(data-aos="fade-left") El principal objetivo de la estadística es la comprensión de los hechos a partir de los datos recolectados; sin embargo, de él se derivan otra serie de objetivos dignos de mención:

    TabsA.color-acento-botones
      .tarjeta(style="background-color:#DBF9BD").p-4(titulo="Análisis de población")
        .row
          .col-xl-8
            p Analizar una población objetivo para comprender sus características y, de ser necesario, elaborar proyecciones a partir de los datos recolectados. Situación de amplia aplicación en el aspecto comercial de las empresas, donde se realizan estudios de mercado en los que se describen los aspectos demográficos de una población para predecir la aceptación que tendrá un producto que planea lanzarse.
          .col-xl-4.mb-4
            figure
              img(src='@/assets/curso/temas/tema1/27.svg', alt='Texto que describa la imagen')

      .tarjeta(style="background-color:#DBF9BD").p-4(titulo="Estudio de variables")
        .row 
          .col-xl-8
            p Estudiar las relaciones entre dos o más variables para comprender un fenómeno determinado, ejemplo de ello, es un estudio que determine la forma en la que las ventas de un producto se ven afectadas por la variación en su precio.
          .col-xl-4.mb-4
            figure
              img(src='@/assets/curso/temas/tema1/28.svg', alt='Texto que describa la imagen')
      .tarjeta(style="background-color:#DBF9BD").p-4(titulo="Toma de decisiones")
        .row 
          .col-xl-8
            p Apoyar la toma de decisiones a partir de la información recolectada. Este evento resulta frecuente en todo tipo de entidades, tal es el caso del sector público donde a partir de la aplicación de trabajos estadísticos se toman decisiones asociadas a la ejecución del presupuesto público, por ejemplo, a través de un censo poblacional determinar los rangos de edad de una localidad, y a partir de ello, designar una cantidad específica de subsidios.
          .col-xl-4.mb-4
            figure
              img(src='@/assets/curso/temas/tema1/29.svg', alt='Texto que describa la imagen')
      .tarjeta(style="background-color:#DBF9BD").p-4(titulo="Recolección de datos")
        .row 
          .col-xl-8
            p Efectuar interpretaciones de una población mayor, aplicando estrategias de recolección de datos a una muestra determinada, ejemplo de esto son las encuestas previas a las elecciones populares, donde se consultan miles de personas para estimar el comportamiento de las elecciones que tendrán millones de votos.
          .col-xl-4.mb-4
            figure
              img(src='@/assets/curso/temas/tema1/30.svg', alt='Texto que describa la imagen')
      .tarjeta(style="background-color:#DBF9BD").p-4(titulo="Análisis de datos")
        .row 
          .col-xl-8
            p Servir de apoyo a otras disciplinas haciendo uso de técnicas de recolección de datos, análisis y proyecciones que anticipen comportamientos futuros, por ejemplo, estimar la extinción de una especie en peligro, tras una comparativa entre sus niveles de mortalidad y natalidad.
          .col-xl-4.mb-4
            figure
              img(src='@/assets/curso/temas/tema1/31.svg', alt='Texto que describa la imagen')



    separador
    #t_1_2.titulo-segundo.color-acento-contenido
      h2 1.2	Tipos

    p.mb-5(data-aos="fade-left") La estadística se divide en dos grandes ramas, cada una de ellas con un enfoque y objetivos diferentes así:

    .row.justify-content-center.mb-5
      .col-10
        .row.mb-5
          .col-md-3.col-lg.mb-5.mb-lg-0
            .tarjeta-avatar
              img(src='@/assets/curso/temas/tema1/2.svg' alt='AvatarTop').p-4
              //- .tarjeta debe ir acompañado de una de una de estas clases => 
              //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
              //- estas clases tambien tienen un modificador --borde
              .tarjeta(style="width:100%; background-color:#1B3F5E")
                .p-4.text-white
                  h2.text-center Estadística descriptiva
                  p.text-center Se centra en el estudio y descripción de los fenómenos existentes. Para ello, hace uso de metodologías de recolección, medición y análisis de información. Esta vertiente suele apoyarse en el uso de tablas y gráficos para la extracción de las características fundamentales de un conjunto de datos.
          .col-md-3.col-lg.mb-5.mb-lg-0
            .tarjeta-avatar
              img(src='@/assets/curso/temas/tema1/3.svg' alt='AvatarTop').p-4
              //- .tarjeta debe ir acompañado de una de una de estas clases => 
              //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
              //- estas clases tambien tienen un modificador --borde
              .tarjeta.color-primario(style="width:100%")
                .p-4
                  h2.text-center Estadística inferencial
                  p.text-center Busca deducir comportamientos a partir del análisis de información y los parámetros propios de un conjunto de datos. Esto significa que se centra en la modelación de patrones a partir de unos datos recolectados de un fenómeno presente; por lo que mezcla aspectos descriptivos con la anticipación o predicción de eventos futuros, extrapolando la evidencia recolectada

        p.mb-5(data-aos="fade-left") Para complementar el tema sobre estadística, se invita a ver el siguiente vídeo:

    figure
    .video(data-aos="fade-right")
      iframe(width="560" height="315" src="https://www.youtube.com/embed/AW1LM-d0YWE?si=af5Ri8ga3jS8hAyQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share")

    separador
    #t_1_3.titulo-segundo.color-acento-contenido
      h2 1.3	Codificación de la información

    p.mb-5(data-aos="fade-left") Los datos recolectados deben #[b ser organizados de una forma coherente y que facilite el análisis] a través de mecanismos de sistematización. Para ello, la codificación se erige como una herramienta en la edición de datos para prepararlos para su interpretación, usualmente a partir de la asignación de caracteres o números a variables cualitativas consultadas o a las casillas con ausencia de datos. Vea una explicación al respecto y unos ejemplos que hacen alusión a lo mencionado:

    .tarjeta.tarjeta.color-secundario.p-4.mb-5(data-aos="flip-up")
      h4.titulo-cuarto
      SlyderA(tipo="b")
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Consulta cerrada
            p Cuando la información recolectada proviene de consultas cerradas, como las preguntas de opción múltiple, la codificación consiste en la asignación de caracteres a cada opción de respuesta y suele efectuarse previo acercamiento a la población objetivo. 
            h4 Por ejemplo
            ul.lista-ul--color
              li 
                i.fas.fa-atom(style="color:#3B5620")
                | Las opciones con respuesta de verdadero (v) o falso (f).
              li 
                i.fas.fa-atom(style="color:#3B5620")
                | Literales o numerales que preceden cada opción de respuesta (a, b, c, o 1, 2, 3, etcétera).
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/4.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h4 Respuestas abiertas
            p La situación es más compleja cuando el formulario se nutre con preguntas de respuestas abiertas, aquí se hace necesario recolectar en primera medida la información para luego asignarles un carácter o número a cada opción de respuesta. Si la pluralidad de respuestas es muy diversa, el investigador puede optar por crear categorías de respuesta para reducir las opciones. 
            h4 Por ejemplo
            p Una consulta asociada a los ingresos recibidos por una persona puede categorizarse en opciones como: de 0 a 1 millón, de 2 a 5 millones de 5 a 10 millones y más de 10 millones.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/5.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h4 Codificación
            p Dado que el principal objetivo de la codificación es facilitar la comprensión de la información, no suele recomendarse un sistema que codifique los datos en más de 10 variables por cada respuesta, además, en caso de ser necesario, pueden establecerse márgenes de materialidad.
            h4 Por ejemplo
            p Aquellas respuestas que se repitan menos de un 5 % de las veces, pueden desestimarse, puesto que no tienen influencia significativa en el análisis global.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/6.png', alt='Texto que describa la imagen')

    separador
    #t_1_4.titulo-segundo.color-acento-contenido
      h2 1.4	Tabulación de datos

    p.mb-5(data-aos="fade-left") Siguiendo la línea de los numerales anteriores, una vez la información ha sido recolectada por cualquiera de las metodologías aplicables #[b (observación, entrevistas, encuestas, entre otros)], es viable que la información sea organizada para ser representada de forma consolidada, y posibilitar un análisis más ágil y efectivo. Si se aplican sistemas de codificación, estos deben implementarse de manera previa, de tal forma que la tabulación contenga las variables ya codificadas 

    .row.justify-content-center.mb-5
      .tarjeta.p-4(style="background-color:#DBF9BD")(data-aos="flip-up")
        .row.justify-content-center.align-items-center
          .col-sm-3
            figure(data-aos="flip-up")
              img(src='@/assets/curso/temas/tema1/7.svg', alt='Texto que describa la imagen')
          .col-sm-8
            p(data-aos="fade-left") La tabulación de datos consiste en la #[b reorganización de la información a manera de tablas], de tal forma que el acceso a ella sea más ágil y amigable al usuario; esto posibilita la visualización de las características más relevantes de una forma rápida y efectuar apreciaciones que mediante otros métodos pueden pasar desapercibidos.

    h4 ● Tabulación de carácter cualitativo
    
    .row.justify-content-center.align-items-center.mb-5
      .col-sm-8
        p(data-aos="fade-left") Consolida aquella información que no es cuantificable, se compone principalmente por elementos de carácter descriptivo, por lo que la tabulación suele apuntar al conteo de respuestas coincidentes y su proporción en relación con la totalidad de respuestas obtenidas. Su estructura suele incluir las variables, sus frecuencias relativas y absolutas.
        p(data-aos="fade-left") La frecuencia absoluta presenta el número de ocasiones en las que un dato específico ha sido recolectado, es decir, el número de veces que se obtiene una misma respuesta, mientras que la frecuencia relativa indica la porción que una respuesta representa sobre la totalidad de respuestas obtenidas en ese mismo cuestionamiento. El siguiente ejemplo ilustra el formato sugerido para este tipo de información: 
      .col-sm-4
        figure(data-aos="flip-up")
          img(src='@/assets/curso/temas/tema1/8.png', alt='Texto que describa la imagen')
      
    

    .row.justify-content-center.mb-5
      .col-8
        .titulo-sexto.color-acento-contenido
          h5 Tabla 1
          span #[em Tabulación de datos cualitativos]
        .tabla-a
          table
            thead.text-white(style="background-color:#1B3F5E")(data-aos="flip-up") 
              tr.text-center
                th Variable
                th Frecuencia absoluta
                th Frecuencia relativa
            tbody.text-center
              tr
                td Matemáticas
                td 2
                td 20 %
              tr 
                td Inglés
                td 3
                td 30 %
              tr
                td Educación Física
                td 5
                td 50 %
              tr
                td #[b Total encuestados]
                td(colspan="2") 10

  
    
    .row.justify-content-center.align-items-center.mb-5
      .col-sm-4
        figure(data-aos="flip-up")
          img(src='@/assets/curso/temas/tema1/9.png', alt='Texto que describa la imagen')

      .col-sm-8
        h4 ● Tabulación de carácter cuantitativo
        p(data-aos="fade-left") Como complemento a la tabulación descrita previamente, la de tipo cuantitativo #[b aborda datos o información medible, usualmente distribuida en el número de variables consultadas.] Cuando son pocas (menos de 30 según la mayoría de los autores) se recomienda listarlas de forma semejante a la tabulación de tipo cualitativo, relacionando las frecuencias absolutas y relativas.
        p(data-aos="fade-left") Sin embargo, si el número de variables asciende a cifras que son poco prácticas para analizarse de forma individual, estas pueden ser agrupadas en intervalos para reducir el número de registros contenidos en la tabla. Si bien cada investigador podrá determinar el número de intervalos a su criterio, debe cumplir con las siguientes dos condiciones esenciales: 

    .row.justify-content-center.align-items-center.mb-5
      .col-8
        .cajon.color-secundario.p-4
          ul.lista-ul
            li 
              i.lista-ul__vineta
              | Los intervalos sean excluyentes entre sí, es decir, que una misma variable no pueda estar de forma simultánea en dos intervalos.
            li 
              i.lista-ul__vineta
              | Todos los datos obtenidos pueden ser asignados a alguno de ellos.
      
    p(data-aos="fade-left").mb-5 Por otra parte, es recomendable que todos los intervalos tengan una magnitud similar (cantidad de datos que contienen), por ejemplo, de cinco en cinco o de cien en cien; sin embargo, pueden presentarse situaciones donde resulte más conveniente clasificar en función de #[b otros parámetros], situación comúnmente apreciada en situaciones donde se quiere recolectar información como las edades, donde se busca identificar a los menores y a los integrantes de la tercera edad. La siguiente tabla presenta un formato de tabulación aplicable a un grupo de 100 personas consultadas con esta variable: 

    .row.justify-content-center.mb-5
      .col-8
        .titulo-sexto.color-acento-contenido
          h5 Tabla 2
          span #[em Tabulación de datos cuantitativos]
        .tabla-a
          table
            thead.text-white(style="background-color:#1B3F5E")(data-aos="flip-up") 
              tr.text-center
                th Variable
                th Frecuencia absoluta
                th Frecuencia relativa
            tbody
              tr
                td Menores de 18 años
                td.text-center 27
                td.text-center 27 %
              tr 
                td Mayores de 18 y menores de 60 años
                td.text-center 53
                td.text-center 53 %
              tr
                td Mayores de 60 años
                td.text-center 20
                td.text-center 20 %
              tr
                td #[b Total encuestados]
                td.text-center 100
                td.text-center N/A

    .tarjeta(style="background-color: #DBF9BD").p-4(data-aos="flip-up") 
      p Una vez diseñada la tabla es importante corroborar que todas las respuestas han sido tabuladas, la forma más sencilla de hacerlo es corroborando que la sumatoria de la frecuencia absoluta sea equivalente al número de personas consultadas, de la misma forma, la suma de frecuencias relativas debe ser del 100 %. 

    separador
    #t_1_5.titulo-segundo.color-acento-contenido
      h2 1.5	Gráficos

    .row.justify-content-center.align-items-center.mb-5
      .col-sm-8
        p(data-aos="fade-left") Los datos recolectados deben ser organizados y presentados de tal forma que ofrezcan información útil y relevante para sus usuarios, en este sentido, su compresibilidad es un elemento de gran importancia para lograr los objetivos planteados. Si bien la tabulación de los datos ofrece grandes ventajas y aporta en este aspecto, en ciertas ocasiones puede ser beneficioso adicionar #[b gráficas] que complementen la presentación de la información recolectada.
        p(data-aos="fade-left") Usualmente, las reuniones estratégicas al interior de una organización cumplen con una planeación que obedece a los informes generados por el personal directivo o encargado de las áreas a revisar. Comúnmente, estos informes se nutren de un texto que aborda la introducción, desarrollo y conclusiones de cada temática a abordar, así como tablas con cifras o información relevante y una serie de gráficas que resulten idóneas para facilitar el entendimiento y agilizar su comprensión.
      .col-sm-4
        figure(data-aos="flip-up")
          img(src='@/assets/curso/temas/tema1/10.png', alt='Texto que describa la imagen')

    .row.justify-content-center.align-items-center.mb-5
      .col-sm-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/11.svg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Los gráficos estadísticos son una solución que apunta a representar las series de datos obtenidas mediante los sistemas de recolección, y que usualmente ya han sido tabulados. Su objetivo es mostrar de forma visual la evolución de las variables evaluadas, en comparación con otras o con el global; este tipo de herramientas hacen más accesible información que de otra forma podría ser incomprensible para los usuarios, por lo que pueden adaptarse a todos los niveles según el propósito de las investigaciones.

    p(data-aos="fade-left").mb-5 Existen varios tipos de gráficos que pueden ser usados en diferentes ocasiones dependiendo del tipo de información recolectada y lo que se quiera mostrar de ella; así pues, se presentan las siguientes variedades que resultan las más populares y de fácil accesibilidad: 

    .tarjeta.tarjeta.color-secundario.p-4.mb-5(data-aos="flip-up")
      h4.titulo-cuarto
      SlyderA(tipo="b")
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Gráfico de barras
            p Se ubica sobre un plano cartesiano, e incluye las frecuencias de las variables. 
            p Su disposición puede ser vertical u horizontal a elección del investigador, por ejemplo, cuando los nombres de las categorías son muy largos, puede ser recomendable que se ubiquen de forma horizontal. 
        
          .col-md-6
            .titulo-sexto.color-acento-contenido
              h5 Figura 1
              span #[em Gráfico de barras]

            figure
              img(src='@/assets/curso/temas/tema1/12.svg', alt='Figura 1 Gráfico de barras En la figura se observan en el eje Y 10, 20, 30, 40, 50, un eje es utilizado para la condición o frecuencia, en el eje X se observan las barras, se listan las variables a representar.')

        .row
          .col-md-4.mb-4.mb-md-0
            p Este tipo de gráfico suele utilizarse para realizar comparaciones rápidas entre magnitudes o cantidades, así como para percibir la evolución en el tiempo de algún indicador o resultado, por ejemplo, ubicando en el eje horizontal los años en secuencia. 
            p Para ilustrar la aplicación de los gráficos de barras, se plantea una situación en la que 50 personas fueron consultadas por su color favorito, los resultados fueron los siguientes:

          .col-md-8
            .titulo-sexto.color-acento-contenido
              h5 Tabla 3
              span #[em Tabulación de los resultados]
            .tabla-a
              table
                thead.text-white(style="background-color:#1B3F5E")(data-aos="flip-up") 
                  tr.text-start
                    th Color favorito
                    th Frecuencia absoluta
                tbody.text-center
                  tr
                    td Blanco
                    td 8
                  tr 
                    td Negro
                    td 7
                  tr
                    td Rojo
                    td 15
                  tr 
                    td Azul
                    td 20
                  tr
                    td #[b Total]
                    td 50
        .row
          .col-md-6.mb-4.mb-md-0
            .titulo-sexto.color-acento-contenido
              h5 Figura 2
              span #[em Gráfico de barras horizontal y vertical]
          .row
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema1/13.svg', alt='Figura 2 Gráficos de barras horizontal y vertical En la figura se observan gráficos de barra horizontal con color favorito, y gráfica vertical con color favorito. ')

            .col-md-6
            
              figure
                img(src='@/assets/curso/temas/tema1/14.svg', alt='Figura 2 Gráficos de barras horizontal y vertical En la figura se observan gráficos de barra horizontal con color favorito, y gráfica vertical con color favorito. ')

        .row
          .col.mb-4.mb-md-0
            p En el ejemplo anterior, solo se presenta una serie de datos (color favorito) pero en un mismo gráfico de barras es posible presentar varias de ellas. Estas pueden presentarse agrupadas, o apiladas si juntas conforman otro indicador. Por ejemplo, un diagrama de barras agrupadas puede contener los estudiantes matriculados para carreras universitarias, agrupados por facultad, mientras que uno de barras apiladas puede mostrar el número de estudiantes hombres y de mujeres cuyo total coincide con los matriculados.
          .row
            .col-md-6
              .titulo-sexto.color-acento-contenido
                h5 Figura 3
                span #[em Gráfico de barras agrupadas]

              figure
                img(src='@/assets/curso/temas/tema1/15.svg', alt='Figura 3 Gráfico de barras agrupadas En la figura se observa en la gráfica los estudiantes por carreras agrupados por facultad: Ciencias económicas, hamnidades y ciencias de la salud.')

            .col-md-6
              .titulo-sexto.color-acento-contenido
                h5 Figura 4
                span #[em Gráfico de barras apiladas]

              figure
                img(src='@/assets/curso/temas/tema1/16.svg', alt='Figura 4 Gráfico de barras apiladas En la figura se observa en la gráfica estudiantes por género en cada carrera: psicología, medicina, economía, finanzas, por hombres y mujeres.')

        .row
          .col-md-6.mb-4.mb-md-0
            h4 Gráfico de líneas
            p Aplicando una metodología similar a los gráficos de barras, los gráficos de líneas se ubican sobre un plano cartesiano, buscando reflejar una evolución en una serie de datos compuestos por dos variables. Es un sistema especialmente útil cuando se busca presentar tendencias temporales, en donde el eje horizontal representa los periodos de tiempo, mientras que el vertical cuantifica la variable. Es posible agregar más de una serie de datos con el objeto de ofrecer comparaciones y análisis indexados. 
            p Para ejemplificar, se presentan una serie de datos que comparan la inflación de un país con el incremento de su salario mínimo.

          .col-md-6
            .titulo-sexto.color-acento-contenido
              h5 Figura 5
              span #[em Gráfico de líneas]

            figure
              img(src='@/assets/curso/temas/tema1/17.svg', alt='Figura 5 Gráfico de líneas En la figura se observa relación de la inflación con el incremento salarial, en el eje Y del 0,0 % al 7,0 %, y en el eje X del 2010 al 2020.')

        .row
          h4 Gráfico de sectores
          p Se presenta como la representación circular de las frecuencias relativas de una variable. A diferencia de los otros dos sistemas, que hacen uso de las frecuencias absolutas, este gráfico se concibe para determinar que porción del total ocupa cada una de las variables contenidas en el estudio.

          .col-md-6.mb-4.mb-md-0
            
            ul.lista-ul--color
              li 
                i.fas.fa-atom(style="color:#3B5620")
                | El circulo representa la totalidad de los datos, mientras que cada “tajada” implica la porción correspondiente a una variable, se recomienda que se exprese en porcentajes.
              li 
                i.fas.fa-atom(style="color:#3B5620")
                | Suele ser llamado diagrama de torta en el argot popular, ya que se asemeja a un pastel cortado en porciones para los comensales. 
              li 
                i.fas.fa-atom(style="color:#3B5620")
                | Es aconsejable hacer uso de este sistema si la cantidad de variables no es demasiado grande, puesto que así, las diferencias son percibidas con mayor facilidad.

          .col-md-6
            .titulo-sexto.color-acento-contenido
              h5 Figura 6
              span #[em Gráfico de sectores]

            figure
              img(src='@/assets/curso/temas/tema1/18.svg', alt='Figura 6 Gráfico de sectores En la figura se observa la gráfica con un sector en 50 % color aguamarina, otro sector con 25 % color verde, 15 % color naranja, 15 % color amarillo, y 10 % color abano.')

        .row
          .col-md-6.mb-4.mb-md-0
            p El siguiente ejemplo grafica la composición de los gastos incurridos en una empresa para mantener su operación:

          .col-md-6
            .titulo-sexto.color-acento-contenido
              h5 Figura 7
              span #[em Ejemplo de gráfico de sectores]

            figure
              img(src='@/assets/curso/temas/tema1/19.svg', alt='Figura 7 Ejemplo de gráfico de sectores En la figura se observa la gráfica con un sector en 40 % color aguamarina, otro sector con 12 % color verde, 8 % color azul, 25 % color verde claro, y 15 % color verde claro.')

    p.mb-5(data-aos="fade-left") Para complementar el tema sobre estadística, se invita a ver el siguiente vídeo:

    figure
    .video(data-aos="fade-right")
      iframe(width="560" height="315" src="https://www.youtube.com/embed/mHn4cjPKOUk?si=WLTcVxbZ0p8sy9lo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share")

    separador
    #t_1_6.titulo-segundo.color-acento-contenido
      h2 1.6	Análisis de datos
      
    .row.justify-content-center.mb-5
      .tarjeta.p-4(style="background-color:#DBF9BD")(data-aos="flip-up")
        .row.justify-content-center.align-items-center
          .col-sm-8
            p(data-aos="fade-left") Como el sistema de recolección de información, el análisis de datos funciona como una metodología en la que se interpreta información elaborada por otros autores, y con la cual se espera lograr un conocimiento nuevo. Aterrizado al ambiente empresarial, este tipo de análisis se centra en la resolución de las problemáticas evidenciadas en la operación de la organización, apoyándose en #[b información administrativa, financiera o comercial.]
          .col-sm-3
            figure(data-aos="flip-up")
              img(src='@/assets/curso/temas/tema1/20.svg', alt='Texto que describa la imagen')

    p.mb-5(data-aos="fade-left") El análisis de datos puede ser de dos tipos:

    .row.justify-content-center.align-items-center.mb-5
      .col-sm-8
        .titulo-sexto.color-acento-contenido
          h5 Figura 8
          span #[em Análisis de datos]

        figure
          img(src='@/assets/curso/temas/tema1/21.svg', alt='Figura 8 Análisis de datos: El análisis cuantitativo Centrado en la medición y cuantificación de la información, por ejemplo, la información de los estados financieros respecto a un periodo específico. El análisis cualitativo Mide aquellas situaciones que no son susceptibles de ser cuantificadas, por ejemplo, los niveles de satisfacción de los clientes con el producto ofertado.')

    .row.justify-content-center.align-items-center
      .col-sm-4
        figure(data-aos="flip-up")
          img(src='@/assets/curso/temas/tema1/22.png', alt='Texto que describa la imagen')
      .col-sm-8
        p(data-aos="fade-left") Este modelo se posiciona como una de las herramientas de mayor utilidad en la toma de decisiones. Los directivos de cualquier organización siempre requerirán información útil y relevante para encaminar cada una de las áreas principales de la empresa. Incluso los potenciales inversores hacen uso del análisis de datos para determinar si la empresa ha cumplido con las expectativas de sus dueños, y si se ubica en una posición privilegiada dentro del mercado en el que compite.
        p(data-aos="fade-left") En la actualidad, las empresas poseen #[b bases de datos] compuestas por la #[b información detallada] de todos los terceros que participan de alguna forma con el desarrollo del objeto social. Entre la información más relevante contenida, están los #[b datos de los clientes, de los proveedores, acreedores y empleados]; la diversidad contenida en estas bases de datos estará sujeta al criterio de los administradores que hacen uso de esta información, y de su debida conservación dependerán las ventajas competitivas que se mantengan en el mercado.

    h4 ● Análisis comparativos
    p.mb-5(data-aos="fade-left") El análisis de la información requiere de un punto de referencia contra el cual contrastar los datos. Esto implica que para conocer la posición de la empresa en el entorno en el que ejerce su actividad, inevitablemente deberá ser comparada con otras del mismo sector o con características similares.

    .row.justify-content-center.align-items-center
      .col-sm-8
        p(data-aos="fade-left")(style="background-color: #F7FEF1") #[b Comparadas con otras empresas del mismo sector:] Para identificar las ventajas competitivas que cada una tiene frente a la otra; por otra parte, si lo que se busca es ubicar la organización dentro del sector es posible compararse con los indicadores promedio de las demás empresas que coincidan con características de la organización objeto de análisis.
        p(data-aos="fade-left")(style="background-color: #E7FBD4") #[b Comparativa contra la misma organización:] En un periodo de tiempo diferente evaluar los mismos indicadores en diversos meses del año puede brindar orientaciones sobre aquellas temporadas en las que una empresa es más productiva, por ejemplo, una comercializadora de productos de papelería tendrá mejores ventas en diciembre y enero, meses previos al ingreso de los estudiantes a los colegios.
        p(data-aos="fade-left")(style="background-color: #F7FEF1") #[b Contrastar datos de diferentes años:] Puede medirse la evolución de la compañía con el paso del tiempo. De hecho, los requerimientos de información financiera vigentes en Colombia exigen que se presente de forma comparativa con el año anterior, de tal manera que se cree un contexto que permita evaluar si la empresa mejoró o empeoró sus resultados.


      .col-sm-4
        figure(data-aos="flip-up")
          img(src='@/assets/curso/temas/tema1/23.svg', alt='Texto que describa la imagen')
      
    .titulo-sexto.color-acento-contenido
      h5 Figura 9
      span #[em Diagrama de flujo análisis comparativos]

    figure
      img(src='@/assets/curso/temas/tema1/26.svg', alt='Comparadas con otras empresas del mismo sector Para identificar las ventajas competitivas que cada una tiene frente a la otra; así mismo, si lo que se busca es ubicar la organización dentro del sector es posible compararse con los indicadores promedio de las demás empresas que coincidan con características de la organización objeto de análisis. Comparativa contra la misma organización En un periodo de tiempo diferente, evaluar los mismos indicadores en diversos meses del año puede brindar orientaciones sobre aquellas temporadas en las que una empresa es más productiva, por ejemplo, una comercializadora de productos de papelería tendrá mejores ventas en diciembre y enero, meses previos al ingreso de los estudiantes a los colegios Contrastar datos de diferentes años Puede medirse la evolución de la compañía con el paso del tiempo. De hecho, los requerimientos de información financiera vigentes en Colombia exigen que se presente de forma comparativa con el año anterior, de tal manera que se cree un contexto que permita evaluar si la empresa mejoró o empeoró sus resultados.')

    h4.mt-5.mb-5 ● Cálculo de indicadores
    
    .row.mb-5.align-content-center
      .col-md-8(data-aos="fade-right")
        p.mb-3 Existen diversas formas de abordar la información para realizar los análisis de información, según su naturaleza y los objetivos que se esperan alcanzar puede hacerse uso de metodologías alternativas que complementan un análisis que, de otra forma, podría ser muy superficial. #[b Los indicadores] surgen como una herramienta que enriquece el análisis, puesto que favorecen la evaluación de las cifras al contrastarlas con otras, hallando razones o proporciones que aportan más elementos de juicio al estudio.
        .tarjeta.color-secundario.p-3(style="border-radius: 0")
          p Los indicadores ofrecen una gran ayuda para el #[b análisis de la información cuantitativa], su uso tiene tanta aceptación en la actualidad, que las compañías los calculan de manera previa a la publicación de sus resultados anuales, para que los usuarios de la información los tengan a su disposición como parte integral de los informes de gestión. 
      .col-md-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/tema1/24.png' alt='')

    p.mb-5(data-aos="fade-left") Aprender a calcularlos e interpretarlos resulta una necesidad para obtener una visión integral de la gestión empresarial. Basado en ello, a continuación, se presentan las categorías en las que encajan los indicadores obtenidos con los estados financieros de propósito general:

    .row.justify-content-center.align-items-center.mb-5
      .col-sm-8.desktop
        ImagenInfografica.color-acento-botones(data-aos="flip-up")
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema1/25.svg', alt='')

          .tarjeta.color-acento-botones--borde.p-3(x="10%" y="30%" numero="+")
            .h5.mb-2 Endeudamiento
            p Busca medir en qué proporción participan los acreedores en el financiamiento de la empresa. Así mismo, mide la capacidad de la empresa para contraer nuevas obligaciones para financiar su operación o la adquisición de nuevas inversiones


          .tarjeta.color-acento-botones--borde.p-3(x="90%" y="30%" numero="+")
            .h5.mb-2 Eficiencia
            p Permiten medir la productividad de la empresa, a través de su capacidad para administrar los recursos. En este sentido, miden la gestión con la que se ejecutaron los procesos, principalmente los asociados a la operación misma de la empresa.

          .tarjeta.color-acento-botones--borde.p-3(x="10%" y="70%" numero="+")
            .h5.mb-2 Rentabilidad
            p A partir de los costos, gastos e inversiones, busca determinar la efectividad del administrador para transformarlos en utilidades para la empresa. Gracias a lo anterior, ofrece una idea de las capacidades de la compañía para mantenerse operativa en el tiempo generando valor

          .tarjeta.color-acento-botones--borde.p-3(x="90%" y="70%" numero="+")
            .h5.mb-2 Liquidez
            p Se entiende por liquidez la capacidad de una organización para cubrir sus obligaciones a corto plazo de forma oportuna.
            p Estos indicadores no miden solo la cantidad de dinero en efectivo disponible, sino también las capacidades de la empresa para generarlo.

    .row.justify-content-center.align-items-center.mb-5
      .col-sm-8.movil 
        figure 
          img(src='@/assets/curso/temas/tema1/25-m.svg', alt='Clases de indicadores En la figura se observa indicadores financieros: endeudamiento, eficiencia, rentabilidad, liquidez.') 

    p.mb-5(data-aos="fade-left") Ahora, se describen los indicadores financieros de mayor utilidad para medir la gestión empresarial, así como sus fórmulas y una explicación breve que ofrece una aproximación a su adecuada interpretación: 

    h4.mb-5 Indicadores financieros por categoría

    p(data-aos="fade-left") Los índices financieros se clasifican en varias categorías, siendo las más comunes las siguientes: ratios de liquidez, ratios de eficiencia, y ratios de endeudamiento y ratios de rentabilidad. 
    p.mb-5(data-aos="fade-left") Es importante destacar que estos índices financieros se utilizan para evaluar la salud financiera de una empresa y su rendimiento en diversas áreas, proporcionando información clave para la toma de decisiones empresariales.

    .titulo-sexto.color-acento-contenido
          h5 Tabla 4
          span #[em Indicadores financieros de liquidez]
    .tabla-a.mb-5
      table
        thead.text-white(style="background-color:#1B3F5E")(data-aos="flip-up") 
          tr.text-center
            th Indicador
            th Fórmula
            th Explicación
        tbody.text-center
          tr
            td Razón corriente
            td Activo corriente/pasivo corriente
            td Indica la capacidad de la empresa para cubrir las deudas de corto plazo con sus activos de alta liquidez.
          tr 
            td Prueba ácida
            td (Activo corriente - inventarios) / pasivo corriente
            td Muestra la capacidad de la empresa para librar las deudas de corto plazo sin requerir la venta de sus inventarios.
          tr
            td Capital de trabajo
            td Activo corriente - pasivo corriente
            td Revela si los recursos del corto plazo cubren los pasivos de corto plazo, así como los disponibles para mantener la operación una vez cubiertas las deudas.

    .titulo-sexto.color-acento-contenido
      h5 Tabla 5
      span #[em Indicadores financieros de eficiencia]
    .tabla-a.mb-5
      table
        thead.text-white(style="background-color:#1B3F5E")(data-aos="flip-up") 
          tr.text-center
            th Indicador
            th Fórmula
            th Explicación
        tbody.text-center
          tr
            td Rotación de cartera
            td Ventas a crédito/Cuentas por cobrar promedio
            td Indica el tiempo que pasa entre la venta y el recaudo del dinero. Mayor tiempo de financiación a clientes puede afectar la liquidez o la carga financiera.
          tr 
            td Rotación de proveedores
            td Compras del periodo/proveedores promedio
            td Revela cuántas veces se pagan los proveedores en el ejercicio.
          tr
            td Rotación de inventarios
            td Costo de mercancías vendidas/inventario promedio
            td Indica el número de veces en el que los inventarios se convierten en efectivo o en cuentas por cobrar.

    .titulo-sexto.color-acento-contenido
      h5 Tabla 6
      span #[em Indicadores financieros de endeudamiento]
    .tabla-a.mb-5
      table
        thead.text-white(style="background-color:#1B3F5E")(data-aos="flip-up") 
          tr.text-center
            th Indicador
            th Fórmula
            th Explicación
        tbody.text-center
          tr
            td Endeudamiento
            td Pasivo total/Patrimonio
            td Muestra la proporción de la deuda que corresponde a terceros en relación con los propietarios de la empresa.
          tr 
            td Autonomía
            td Pasivo total/Patrimonio
            td Muestra la proporción de la deuda que corresponde a terceros en relación con los propietarios de la empresa.
          tr
            td Carga financiera
            td Gastos financieros/ventas netas
            td Indica cuántos ingresos tuvieron que destinarse a pagar los costos de la financiación. A menor valor, mejores políticas de financiamiento.

    .titulo-sexto.color-acento-contenido
      h5 Tabla 7
      span #[em Indicadores financieros de rentabilidad]
    .tabla-a
      table
        thead.text-white(style="background-color:#1B3F5E")(data-aos="flip-up") 
          tr.text-center
            th Indicador
            th Fórmula
            th Explicación
        tbody.text-center
          tr
            td Margen bruto de rentabilidad
            td Utilidad bruta/ventas netas
            td Indica el margen de rentabilidad que deja la venta de los productos una vez deducidos los costos de producción.
          tr 
            td Rentabilidad sobre activos
            td Utilidad neta/activos
            td Indica la rentabilidad generada en relación con los recursos controlados por la empresa.
          tr
            td Rentabilidad sobre patrimonio
            td Utilidad neta/patrimonio
            td Mide la utilidad generada en relación con los aportes efectuados por sus propietarios.

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
