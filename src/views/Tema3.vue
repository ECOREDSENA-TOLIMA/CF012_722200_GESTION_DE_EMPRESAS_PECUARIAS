<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Informes

    .row.mb-5.align-content-center
      .col-md-6(data-aos="fade-right")
        p.mb-3 Aterrizar las estrategias propuestas en el ámbito organizacional requiere de la elaboración de documentos formales que puedan ser entregados a las personas involucradas y que sirvan como soporte para consultas posteriores. Es habitual que tengan un contenido significativo de lenguaje técnico y obedezcan a una estructura estandarizada que permita acceder a la información de manera organizada y siguiendo la secuencia esperada.
        .tarjeta.p-3(style="border-radius: 0; background-color:#DBF9BD")
          p Los informes son los documentos que buscan cumplir con esta y otras funciones, con ellos se busca comunicar una serie de datos obtenidos a través de la ejecución de determinada actividad o proceso, que ha sido previamente analizada de acuerdo con criterios específicos.
      .col-md-6(data-aos="fade-right")
        img(src='@/assets/curso/temas/tema3/1.svg' alt='')

    p.mb-5(data-aos="fade-left") Así, los informes suelen recopilar la información y los hechos estudiados por el autor, y los cuales aportan instrucciones o una serie de respuestas a los interrogantes que han sido planteados. Gracias a su formato, se facilita su comunicación a los interesados y permiten la divulgación, en forma resumida o detallada, de todos los datos alcanzados.

    separador
    #t_3_1.titulo-segundo.color-acento-contenido
      h2 3.1	Tipos

    p(data-aos="fade-left") La clasificación de los informes puede hacerse en función de diferentes criterios. Vea algunos de los más comunes de acuerdo con su extensión y su clasificación:
    p.mb-5(data-aos="fade-left") En función de la extensión o número de páginas, los informes pueden clasificarse así:

    .row.justify-content-center.mb-5
      .col-8
        .row.mb-5
          .col-md-3.col-lg.mb-5.mb-lg-0
            .tarjeta-avatar
              img(src='@/assets/curso/temas/tema3/2.svg' alt='AvatarTop').p-4
              //- .tarjeta debe ir acompañado de una de una de estas clases => 
              //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
              //- estas clases tambien tienen un modificador --borde
              .tarjeta.color-secundario(style="width:100%")
                .p-4
                  h2.text-center Ejecutivo
                  p.text-center Su extensión se limita a un máximo de 10 páginas, suele presentarse como un resumen de un informe más extenso, por lo que la información presentada es más precisa, relevante y concreta.
          .col-md-3.col-lg.mb-5.mb-lg-0
            .tarjeta-avatar
              img(src='@/assets/curso/temas/tema3/3.svg' alt='AvatarTop').p-4
              //- .tarjeta debe ir acompañado de una de una de estas clases => 
              //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
              //- estas clases tambien tienen un modificador --borde
              .tarjeta.color-secundario(style="width:100%")
                .p-4
                  h2.text-center Largo
                  p.text-center Cuentan con más de 10 páginas de contenido, de tal forma que el autor puede extenderse en cada temática, tanto como lo considere necesario. Esta falta de limitaciones respecto a su extensión favorece el abordaje de problemáticas más complejas o que requieran de una contextualización más detallada.

    p.mb-5(data-aos="fade-left") Otro sistema de clasificación obedece a la naturaleza del contenido del informe, se pueden clasificar hasta 4 categorías así:

    AcordionA(tipo="a" clase-tarjeta="tarjeta")(data-aos="flip-up").mb-5(style="background-color:#DBF9BD")
      .row(titulo="Divulgativo")
        .col-md-9.mb-4.mb-md-0
          p Se dirige a la población en general, sin ningún tipo de segmentación, es por ello que cuenta con un lenguaje de fácil acceso para la mayoría de la gente, gracias a esto, suelen ser de los de mayor facilidad de ser leído o interpretado.
        .col-md-3
          figure
            img(src='@/assets/curso/temas/tema3/17.svg', alt='Texto que describa la imagen')
      .row(titulo="Científico")
        .col-md-9.mb-4.mb-md-0
          p Se caracteriza por tener un lenguaje mucho más técnico, el tipo de información a presentar es de naturaleza científica, por lo que suele ser especialmente utilizado en trabajos de investigación.
        .col-md-3
          figure
            img(src='@/assets/curso/temas/tema3/18.svg', alt='Texto que describa la imagen')
      .row(titulo="Técnico")
        .col-md-9.mb-4.mb-md-0
          p Los temas a abordar suelen ser específicos y dedicados a problemáticas concretas. Tiene cabida en el ámbito organizacional, así como en el sector público, ya que puede incluir la evaluación de diversos escenarios que faciliten la toma de decisiones.
        .col-md-3
          figure
            img(src='@/assets/curso/temas/tema3/19.svg', alt='Texto que describa la imagen')
      .row(titulo="Mixto")
        .col-md-9.mb-4.mb-md-0
          p Es un punto medio entre los informes divulgativos y los técnicos. El uso de lenguaje técnico puede estar presente, pero con menos frecuencia, usualmente buscan abordar problemáticas específicas, pero usando un lenguaje mucho más coloquial.
        .col-md-3
          figure
            img(src='@/assets/curso/temas/tema3/20.svg', alt='Texto que describa la imagen')
    separador
    #t_3_2.titulo-segundo.color-acento-contenido
      h2 3.2	Estructura bajo Normas APA 

    .tarjeta.p-3(style="border-radius: 0; background-color:#E7EAE4").mb-5
      .row.align-content-center.align-items-center
        .col-md-4(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema3/4.svg' alt='').p-4
        .col-md-8(data-aos="fade-right")
          p Las Normas APA son una serie de lineamientos diseñados por la #[em “American Psychological Association”], centrados en la estandarización de trabajos escritos a nivel internacional. Su destinación principal es cualquier tipo de documento académico o de investigación.

    .row.BGIMG01.mb-5(data-aos="flip-up")
      h4.mb-5 ● Generalidades
      p.mb-5(data-aos="fade-left") La aplicación de la 7ª edición de las Normas APA incluye una serie de parámetros aplicables a la totalidad del documento, los más relevantes son los siguientes: 
      .col-8
        ul.lista-ul.p-4
          li 
            i.lista-ul__vineta
            | Las páginas deberán tener unas dimensiones de 21.59 x 27.94 cm (tamaño carta).
          li 
            i.lista-ul__vineta
            | Las márgenes deben ser de 2.54 cm (1 pulgada) para todos los lados, es decir, izquierda, derecha, superior e inferior.
          li 
            i.lista-ul__vineta
            | A partir de la 7ª edición se permite el uso de diversas fuentes y tamaños de letras en determinadas configuraciones, algunas de ellas son: Arial, Calibri o Georgia a 11 puntos, Times New Roman a 12 puntos, entre otras. Todo el documento debe tener la misma configuración, por lo que al elegir una deberá conservarse así.
          li 
            i.lista-ul__vineta
            | Se debe usar interlineado 2.0 y no incluir espacio entre los párrafos, además, utilizar alineación a la izquierda sin justificar y sangría en la primera línea de cada párrafo a 1.27 cm.
          li 
            i.lista-ul__vineta
            | La numeración de las páginas se ubicará en el extremo superior derecho, haciendo uso de números arábigos. Se cuentan las páginas desde la portada, pero se mostrará la numeración a partir del resumen.
          li 
            i.lista-ul__vineta
            | Se proponen hasta cinco niveles en los títulos así: 
          li
            ul
              li 
                i.lista-ul__vineta
                | Nivel 1: Encabezado centrado en negrita.
              li
                i.lista-ul__vineta
                | Nivel 2: Encabezado alineado a la izquierda en negrita.
              li
                i.lista-ul__vineta
                | Nivel 3: Encabezado alineado a la izquierda en negrita y cursiva.
              li
                i.lista-ul__vineta
                | Nivel 4: Encabezado de párrafo con sangría, negrita y punto al final.
              li
                i.lista-ul__vineta
                | Nivel 5: Encabezado de párrafo con sangría, negrita, cursiva y punto al final.
      .col-4
        img(src='@/assets/curso/temas/tema3/5.svg' alt='')
         
    h4.mb-5 ● Preliminares
    p.mb-5(data-aos="fade-left") Se presentan previo al texto del documento, aportan un acercamiento a las temáticas a desarrollar, usualmente constan de los siguientes elementos:
    .row(data-aos="flip-up").mb-5 
      .col-5 
        img(src='@/assets/curso/temas/tema3/6.png' alt='').mt-4
      .col-7 
        .tarjeta.color-secundario.p-4.mb-4
          p #[b Portada:] se mencionan dos tipos de portadas, una para estudiantes y otra para profesionales. Estas deben incluir el título del trabajo, el nombre de los autores y sus afiliaciones (empresa o universidad), encabezado, fecha y número de página. Como elemento propio de la portada para estudiantes debe incluir el nombre del curso o materia y del profesor al que se le presenta el trabajo.
        .tarjeta.color-secundario.p-4.mb-4
          p #[b Resumen:] un texto claro y conciso sobre el contenido del documento. Debido a que se constituye como el primer contacto con el contenido del trabajo, su redacción debe ser amigable e invitar a los lectores a profundizar en los temas. Se recomienda que su extensión esté entre las 150 y 250 palabras. El título debe estar centrado en negrilla, luego el contenido estará contenido en un solo párrafo sin sangría. Se pueden detallar palabras clave de forma opcional en un párrafo posterior al resumen, para facilitar la búsqueda a los usuarios que requieran indagar en las temáticas propuestas.
        .tarjeta.color-secundario.p-4
          p #[em #[b Abstract:]] es la versión en inglés del resumen. Dado que las Normas APA buscan estandarizar los trabajos de forma internacional, este apartado se encamina a ello a través del uso de un idioma de amplio espectro y aceptación.

    h4.mb-5 ● Texto o cuerpo
   
    .row.justify-content-center(data-aos="flip-up").mb-5 
      .col-10
        .row(data-aos="flip-up")
          .col-7
            p(data-aos="fade-left") Comprende el contenido del documento e incluye las siguientes secciones:
            ul.lista-ul.p-4
              li 
                i.lista-ul__vineta
                | #[b Introducción:] es un texto corto y preciso en el que se invita a conocer las hipótesis o problemáticas a tratar, debe ser de fácil comprensión.
              li 
                i.lista-ul__vineta
                | #[b Método:] en esta sección se explican las metodologías utilizadas para el desarrollo del trabajo, incluyendo los sistemas de recolección y análisis de información.
              li 
                i.lista-ul__vineta
                | #[b Resultados:] se deben presentar todos los resultados obtenidos a través del trabajo que sean de relevancia y pertinencia con el objetivo del documento, estos resultados deben responder a las exigencias planteadas a través de las hipótesis o problemáticas que incentivaron el trabajo.
              li 
                i.lista-ul__vineta
                | #[b Discusión:] comprende la interpretación y análisis de los resultados obtenidos, contrastados con el planteamiento inicial. En esta etapa se describen las conclusiones alcanzadas en función de la naturaleza del trabajo realizado.
          .col-5
            img(src='@/assets/curso/temas/tema3/7.png' alt='').mt-5
          
    h4.mb-5 ● Citas 
    
    .row.justify-content-center.BGIMG02.mb-5(data-aos="flip-up")
      .col-10
        p.mt-5.mb-5(data-aos="fade-left") Son ideas tomadas de otras fuentes de información en las que se les da la atribución correspondiente al autor, el Centro de Escritura Javeriano (2020) propone una serie de recomendaciones a la hora de usarlas:
        .row.align-items-center.mb-5
          .col-5
            img(src='@/assets/curso/temas/tema3/8.png' alt='')
          .col-7
            ul.lista-ul.p-4
              li 
                i.lista-ul__vineta
                | Citar principalmente fuentes primarias, solo hacer uso de fuentes secundarias cuando sea completamente necesario.
              li 
                i.lista-ul__vineta
                | Las fuentes deben ser confiables y estar debidamente respaldadas, por lo que es importante indagar si los datos son verídicos.
              li 
                i.lista-ul__vineta
                | Se recomienda que cifras, definiciones y otros datos exactos sean debidamente respaldados con la cita correspondiente.
              li 
                i.lista-ul__vineta
                | Dar especial atención al parafraseo, haciendo uso de este una vez se comprenda la idea para ser reelaborada.
              li 
                i.lista-ul__vineta
                | Verificar que las citas sean correspondidas en la sección de referencias que será presentada en la parte final del documento.

    h4.mb-5 ● Referencias

    .row.align-items-center.mb-5(data-aos="flip-up")
      .col-8
        p(data-aos="fade-left") Son un listado de las fuentes utilizadas y citadas en el cuerpo del documento. Con ellas se busca atribuir los créditos de autoría de aquellos autores que aportaron ideas para contextualizar o complementar el trabajo desarrollado.     
        p(data-aos="fade-left") A diferencia de la bibliografía, en las referencias solo se menciona aquellas fuentes que fueron mencionadas de forma expresa en el transcurso del documento, mientras que la bibliografía puede incluir fuentes que fueron consultadas y aportaron conocimientos al autor para desarrollar el trabajo pero que no fueron citadas en el escrito. 
        .tarjeta(style="background-color: #E7EAE4").p-4 
          p Los elementos clave de la referencia son #[b el autor, la fecha de publicación, el título de la obra y la fuente], es decir, donde puede localizarse.
      .col-4
        img(src='@/assets/curso/temas/tema3/9.svg' alt='').mt-5
    
    .tarjeta.color-primario.p-3.mb-5(data-aos="zoom-in-down")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/tema3/10.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3.mb-1 PDF Instructivo APA
              p.text-small Existen diversos parámetros adicionales para citar o referenciar según la naturaleza de la obra o los autores que la desarrollaron, para profundizar al respecto se recomienda consultar el Instructivo del uso de Normas APA del SENA:
            .col-sm-auto
              a.boton(style="background-color:#81C539").texto-blanco(href=('https://biblioteca.sena.edu.co/images/PDF/InstructivoAPA.pdf') target="_blank")
                span Descargar
                i.fas.fa-file-download

    separador
    #t_3_3.titulo-segundo.color-acento-contenido
      h2 3.3	Estructura bajo Norma Técnica de Calidad (NTC 1486)

    p.mb-5(data-aos="fade-left") Establece las reglas para la presentación de trabajos académicos escritos, cualquiera que sea su nivel de profundidad, tales como, trabajos de introducción a la investigación, trabajos de grado, trabajo de investigación profesional, ensayos, tesis, informes científicos y técnicos, otros del mismo tipo. La estructura recomendada incluye los siguientes elementos:

    h4.mb-5 ● Generalidades

    .row.BGIMG01.mb-5(data-aos="flip-up")
      p.mb-5(data-aos="fade-left") A continuación, se presentan algunas de las recomendaciones que se deben contemplar a la hora de elaborar este tipo de documentos:
      .col-6
        img(src='@/assets/curso/temas/tema3/11.png' alt='') 
      .col-6
        ul.lista-ul.p-4
          li 
            i.lista-ul__vineta
            | Se debe usar papel tamaño carta, color blanco, de buena calidad para facilitar la lectura. Si el trabajo se hace por medios electrónicos, puede utilizarse cualquier procesador de texto.
          li 
            i.lista-ul__vineta
            | Si el documento se va a imprimir por ambas caras, las márgenes deben ser todas de 3 centímetros y su impresión se realiza a partir de la página de contenido.
          li 
            i.lista-ul__vineta
            | Las márgenes deben ser: superior 3 centímetros, izquierdo 3 centímetros (4 si se va a imprimir), derecho 2 centímetros, inferior 3 centímetros, número de página 2 centímetros y centrado.
          li 
            i.lista-ul__vineta
            | Cada capítulo comienza en una hoja independiente y el título debe ir centrado a 3 centímetros del borde superior.
          li 
            i.lista-ul__vineta
            | El trabajo se escribe a una interlínea sencilla y después de punto aparte a dos interlíneas sencillas, cuando es punto seguido se deja un espacio.
         
      .col-6
        ul.lista-ul.p-4
          li 
            i.lista-ul__vineta
            | La redacción es impersonal y genérica, se debe hacer uso de cualquier fuente nítida y agradable a la vista, los tamaños recomendados son de 11 o 12 puntos y una vez elegidos, se mantendrán homogéneos en la totalidad del documento. 
          li 
            i.lista-ul__vineta
            | La numeración de las hojas debe hacerse en números arábigos, centrada y en forma consecutiva a partir de la introducción. 
          li 
            i.lista-ul__vineta
            | La cubierta y la portada no se numeran, pero sí se cuentan, por lo tanto, la numeración se debe iniciar en 3.
          li 
            i.lista-ul__vineta
            | Para trabajos muy extensos se recomienda publicar más de un volumen. La numeración puede ser consecutiva o independiente. Cada tomo debe empezar con un capítulo y no debe exceder las 200 páginas.
          li 
            i.lista-ul__vineta
            | Todo trabajo escrito está conformado por preliminares, texto o cuerpo y complementarios.

      .col-6
        img(src='@/assets/curso/temas/tema3/12.png' alt='') 
      
    h4.mb-5 ● Preliminares

    .row.BGIMG02.mb-5(data-aos="flip-up")
      p.mb-5(data-aos="fade-left") Anteceden el cuerpo del documento, presentan una aproximación al contenido o temática del informe, se componen por los siguientes elementos:
      .col-6
        ul.lista-ul.p-4
          li 
            i.lista-ul__vineta
            | #[b Tapa o pasta:] son las láminas de cartón, plástico u otros materiales que protegen el trabajo, encuadernado, anillado o empastado. La tapa o pasta puede llevar información o ilustración o ambas.
          li 
            i.lista-ul__vineta
            | #[b Guardas:] son las hojas en blanco puestas entre las tapas o pastas, al principio y al final del documento (son opcionales). 
          li 
            i.lista-ul__vineta
            | #[b Cubierta:] esta página es opcional, contiene los mismos datos que la pasta y conserva la misma distribución.
          li 
            i.lista-ul__vineta
            | #[b Portada:] es la página informativa del documento y proporciona los datos que permiten identificarlo. Incluye el título, el subtítulo (si lo hay), el nombre de él (los) autor(es), el tipo de trabajo realizado (tesis, monografía, trabajo, informe, etc.) y el nombre y título académico del director o asesor del trabajo. Estos elementos deben estar centrados en la página y a una distancia equidistante.
          li 
            i.lista-ul__vineta
            | #[b Página de aceptación:] en esta página se registran las firmas de los jurados que participan en la revisión, sustentación y aprobación del trabajo. También incluye la ciudad y fecha de entrega del trabajo.
          li 
            i.lista-ul__vineta
            | #[b Página de dedicatoria:] su uso es opcional. En ella el autor o autores del trabajo dedican su trabajo en forma especial a personas o entidades.

      .col-6
        img(src='@/assets/curso/temas/tema3/13.png' alt='') 
      
      .col-6
        img(src='@/assets/curso/temas/tema3/14.png' alt='') 

      .col-6
        ul.lista-ul.p-4
          li 
            i.lista-ul__vineta
            | Se conservan las márgenes de las demás páginas preliminares.
          li 
            i.lista-ul__vineta
            | #[b Página de agradecimientos:] es una página opcional. En ella el autor agradece a las personas o instituciones que colaboraron en la realización del trabajo. Deben aparecer los nombres completos, los cargos y su aporte al trabajo.
          li 
            i.lista-ul__vineta
            | #[b Contenido:] esta página es obligatoria. En ella aparecen los títulos de las divisiones y subdivisiones del trabajo, así como los materiales complementarios como índices, glosarios, bibliografías y anexos. Estos deben ir en el orden en que aparecen y con el número de página en que se encuentran.
          li 
            i.lista-ul__vineta
            | #[b Listas especiales:] son obligatorias. En ellas deben aparecer los títulos de las ilustraciones, gráficos, tablas, anexos, abreviaturas, etc., que hacen parte del trabajo. Su esquema es igual al de la tabla de contenido.
          li 
            i.lista-ul__vineta
            | #[b Glosario:] es la lista alfabética de los términos usados en el trabajo, con sus correspondientes definiciones. Los términos deben escribirse en mayúscula sostenida seguidos por dos puntos y a continuación la definición. Entre término y término se debe dejar un espacio interlineal.
          li 
            i.lista-ul__vineta
            | #[b Resumen:] su uso es obligatorio. Consiste en la presentación abreviada y clara del contenido del documento. Para las monografías y ensayos se recomienda un resumen de máximo 250 palabras. En trabajos muy extensos, el resumen debe ser de máximo 500 palabras. Al final del resumen se deben poner en mayúscula las palabras claves que permitan recuperar la información.

    h4.mb-5 ● Texto o cuerpo
    p.mb-5(data-aos="fade-left") Incluye aquellas secciones en las que se desarrolla la temática principal, abordando las hipótesis y su puesta a prueba, hacen parte de esta sección los siguientes elementos:

    .row 
      .col-7
        ul.lista-ul.p-4
          li 
            i.lista-ul__vineta
            | #[b Introducción:] esta es obligatoria. En ella el autor presenta el documento, explica por qué es importante, cuáles son los antecedentes del trabajo, los objetivos, el alcance, la metodología empleada y la aplicación en el área del conocimiento. No debe confundirse con el resumen, ni contener un recuento detallado de la teoría, el método o los resultados, como tampoco anticipar las conclusiones y recomendaciones.
          li 
            i.lista-ul__vineta
            | #[b Capítulos:] son las principales divisiones del trabajo. En estos se desarrolla el tema del documento, cada capítulo debe corresponder a uno de los temas o aspectos tratados en el documento y, por tanto, debe llevar un título que indique el contenido del capítulo, se subdividen solo hasta el cuarto nivel.
          li 
            i.lista-ul__vineta
            | #[b Conclusiones:] esta página es obligatoria. En ella se presentan en forma ordenada y clara los resultados de la investigación. No se deben confundir con las recomendaciones.
          li 
            i.lista-ul__vineta
            | #[b Recomendaciones:] cuando estas sean necesarias, se ubican después de las conclusiones, en un capítulo aparte. En algunas ocasiones, las conclusiones y recomendaciones de un trabajo pueden presentarse como un texto con características argumentativas, resultado de una reflexión acerca del trabajo de investigación.

      .col-5
        img(src='@/assets/curso/temas/tema3/15.svg' alt='') 

    h4.mb-5 ● Complementarios
    p.mb-5(data-aos="fade-left") Aporta información adicional al documento, los elementos que lo integran son los siguientes:
    .row(data-aos="flip-up").mb-5 
      .col-5 
        img(src='@/assets/curso/temas/tema3/16.png' alt='').mt-5
      .col-7 
        .tarjeta(style="background-color:#E7EAE4").p-4.mb-4
          p #[b Bibliografía:] es el listado completo de los materiales consultados por el investigador para documentar su trabajo. Es obligatorio incluirla. Las bibliografías se escriben según el modelo (la entrada principal será el autor. Se escribe primero el apellido en mayúscula inicial, la inicial del nombre con mayúscula, el año de publicación en paréntesis, el título y la editorial). 
        .tarjeta(style="background-color:#E7EAE4").p-4.mb-4
          p #[b Bibliografía complementaria:] es el listado de documentos que se relacionan con el tema, pero que no fueron consultados para la elaboración del trabajo y pueden servir como fuentes de información para ampliar el tema. Se organiza de la misma forma que la bibliografía principal.
        .tarjeta(style="background-color:#E7EAE4").p-4.mb-4
          p #[b Índices:] la inclusión de índices es opcional. Son listas detalladas y especializadas de los términos, nombres, autores, temas, etc. que aparecen en el trabajo. Sirven para facilitar su localización en el texto. Los índices pueden ser alfabéticos, cronológicos, numéricos, analíticos, entre otros. Luego de cada palabra, término, etc. se pone coma y el número de la página donde aparece esta información.
        .tarjeta(style="background-color:#E7EAE4").p-4
          p #[b Anexos:] son documentos o elementos que complementan el cuerpo del trabajo y que se relacionan, directa o indirectamente, con la investigación, tales como acetatos o CD.

    h4.mb-5 ● Citas
    p.mb-5(data-aos="fade-left") Una cita textual de menos de cinco renglones se inserta dentro del texto entre comillas y el número al final.

    .tarjeta(style="background-color:#DBF9BD").p-4.mb-5
      p #[b Cita] 
      p Ander Eqq presenta la siguiente definición: “Es un procedimiento reflexivo, sistemático, controlado y crítico que permite descubrir nuevos hechos o datos, relaciones o leyes en cualquier campo del conocimiento humano”.

      p #[b Bibliografía:] 
      p #[b 1.] Ander, E. (1969). #[em Técnicas de investigación social]. Humanitas.

    p.mb-5(data-aos="fade-left") Cuando una cita ocupa más de cinco renglones (extensa) aparece como una #[b inserción en el texto y se deja una sangría de cuatro espacios que se conserva hasta el final.]

    .tarjeta(style="background-color:#DBF9BD").p-4.mb-5
      p #[b Ejemplo:] 
      p #[b 1.] Ander, E. (1969). #[em Técnicas de investigación social]. Humanitas, p. 28.

    p.mb-5(data-aos="fade-left") Cuando sea necesario citar la obra de un autor ya citado anteriormente en forma completa se utiliza la abreviatura op. cit.

    .tarjeta(style="background-color:#DBF9BD").p-4.mb-5
      p #[b Ejemplo:] 
      p #[b 1.] Ander, E. (1969). #[em Técnicas de investigación social]. Humanitas, p. 28.
      p #[b 2.] Mabbet, T. (1994). Fruta chilena: un éxito fenomenal. #[em Agricultura de las Américas]. 4,(1), p.5.
      p #[b 3.] Ander, op. cit, p. 90.
</template>

<script>
export default {
  name: 'Tema3',
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
