<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Termodinámica 
    p.mb-5 La energía térmica se puede transformar en energía mecánica, aplicando también la ley de la conservación de la energía, haciendo una acotación, que con el aumento de alguno de los tipos de energía debe haber una reducción a alguna de las otras formas de energía.  Esta se encarga del estudio de los cambios de temperatura, presión y volumen de un sistema físico. El término significa calor y dinámica hace referencia al movimiento. La termodinámica es el estudio del movimiento desordenado de las partículas.  En Termodinámica se establecen cuatro principios o leyes: 
    TabsD.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="Principio Cero" :icono="require('@/assets/curso/61.svg')" :icono2="require('@/assets/curso/78.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Principio Cero
            p Es el que define la temperatura como una propiedad, cuando dos sistemas que interactúan están en equilibrio térmico, comparten algunas propiedades. Cuando entra un tercer sistema en equilibrio, la propiedad que comparten es la temperatura.
          .col-md-6
            figure
              img(src='@/assets/curso/57.jpg', alt='Texto que describa la imagen')
      .py-4.py-md-5(titulo="Primer Principio" :icono="require('@/assets/curso/62.svg')" :icono2="require('@/assets/curso/78.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Primer Principio
            p Define la energía como magnitud conservativa. La primera ley de la termodinámica afirma que cuando un cuerpo se pone en contacto con otro cuerpo relativamente más frío, se produce una transformación que conduce a un estado de equilibrio en el que las temperaturas de los dos cuerpos son iguales. 
          .col-md-6
            figure
              img(src='@/assets/curso/58.jpg', alt='Texto que describa la imagen')
      .py-4.py-md-5(titulo="Segundo Principio" :icono="require('@/assets/curso/63.svg')" :icono2="require('@/assets/curso/78.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Segundo Principio
            p Establece la irreversibilidad  de los fenómenos físicos, define la entropía (desorden molecular de un sistema) como magnitud no conservativa. La transferencia de calor siempre va del cuerpo caliente al cuerpo frío.
          .col-md-6
            figure
              img(src='@/assets/curso/59.jpg', alt='Texto que describa la imagen')
      .py-4.py-md-5(titulo="Tercer Principio" :icono="require('@/assets/curso/64.svg')" :icono2="require('@/assets/curso/78.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Tercer Principio
            p Indica que es imposible que se alcance el cero absoluto con un número finito de transformaciones y postula algunas propiedades en el cero absoluto de temperatura, esta ley establece que la entropía (grado de desorden molecular) para un sólido perfectamente cristalino, a la temperatura de 0 Kelvin es igual a 0. 
          .col-md-6
            figure
              img(src='@/assets/curso/60.jpg', alt='Texto que describa la imagen')
    #t_5_1.titulo-segundo(data-aos="slide-right")
      h2 5.1 Parámetros termodinámicos fundamentales
    p.mb-5 Los parámetros termodinámicos son magnitudes físicas de carácter macroscópico que se pueden medir en un sistema termodinámico. La temperatura del sistema y el campo magnético presente son parámetros termodinámicos, mientras que la velocidad o la posición de alguna de las partículas que conforman el sistema no lo son. Dado que los parámetros termodinámicos del sistema están especificados por el estado termodinámico en que se encuentra el sistema, también reciben el nombre de variables de estado o funciones de estado.
    .row.mb-5(data-aos="zoom-in-up")
      .col-md-6.col-xl.mb-4.mb-xl-0
        //- .tarjeta-numerada debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta-numerada.color-primario.p-5.h-100
          .tarjeta-numerada__numero
            .h2 1
            .icono
              img(src='@/assets/curso/65.svg', alt='Texto que describa la imagen')
          h4 Variables térmicas 
          p Toda sustancia por encima de los 0 Kelvin (-273,15 ⁰C) emite calor. Si dos sustancias en contacto se encuentran a diferente temperatura, una de ellas emitirá más calor y calentará a la más fría. El equilibrio térmico se alcanza cuando ambas emiten y reciben la misma cantidad de calor, lo que iguala su temperatura.

      .col-md-6.col-xl.mb-4.mb-xl-0
        //- .tarjeta-numerada debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta-numerada.color-primario.p-5.h-100
          .tarjeta-numerada__numero
            .h2 2
            .icono
              img(src='@/assets/curso/65.svg', alt='Texto que describa la imagen')
          h4 Variables termodinámicas
          p Tienen relación con el estado interno de un sistema, también llamadas coordenadas termodinámicas, y entre ellas las más importantes son: la masa (m), el volumen (V), la densidad, la presión (P), la temperatura (T) y la constante de proporcionalidad (k).

      .col-md-6.col-xl.mb-4.mb-xl-0
        //- .tarjeta-numerada debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta-numerada.color-primario.p-5.h-100
          .tarjeta-numerada__numero
            .h2 3
            .icono
              img(src='@/assets/curso/65.svg', alt='Texto que describa la imagen')
          h4 Propiedades intensivas
          p Son aquellas que no dependen de la cantidad de sustancia o del tamaño de un sistema, por lo que cuyo valor permanece inalterable al subdividir el sistema inicial en varios subsistemas, por este motivo no son propiedades aditivas. 
    .row.mb-5(data-aos="zoom-in-up")
      .col-md-6.col-xl.mb-4.mb-xl-0
        //- .tarjeta-numerada debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta-numerada.color-primario.p-5.h-100
          .tarjeta-numerada__numero
            .h2 4
            .icono
              img(src='@/assets/curso/65.svg', alt='Texto que describa la imagen')
          h4 Variables intensivas
          p Valor que depende de la cantidad o porción del sistema que se considera para el análisis, por ejemplo: masa, volumen, número de moles, entre otras.

      .col-md-6.col-xl.mb-4.mb-xl-0
        //- .tarjeta-numerada debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta-numerada.color-primario.p-5.h-100
          .tarjeta-numerada__numero
            .h2 5
            .icono
              img(src='@/assets/curso/65.svg', alt='Texto que describa la imagen')
          h4 Propiedades extensivas
          p Dependen de la cantidad de sustancias del sistema, son recíprocamente equivalentes a las intensivas. Algunos ejemplos de propiedades extensivas son la masa, el volumen, el peso, cantidad de sustancia, energía, entropía, entalpía, etc. 

      .col-md-6.col-xl.mb-4.mb-xl-0
        //- .tarjeta-numerada debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta-numerada.color-primario.p-5.h-100
          .tarjeta-numerada__numero
            .h2 6
            .icono
              img(src='@/assets/curso/65.svg', alt='Texto que describa la imagen')
          h4 Estado de un sistema
          p Un sistema que puede describirse en función de coordenadas termodinámicas se llama sistema termodinámico y la situación en la que se encuentra definido por dichas coordenadas se llama estado del sistema. 
    p.mb-5 La clasificación de los sistemas termodinámicos, se debe al grado de aislamiento del entorno y se describen a continuación:
    .row.mb-5
      .col-lg-4
        .contenedor.h-100.p-4
          .img.p-2.mb-3.d-flex.justify-content-center.align-items-end
            img(src='@/assets/curso/66.png', alt='Texto que describa la imagen' style='width: 397px')
          h4 Sistemas abiertos 
          p Aquellos que intercambian libremente energía y materia con su entorno, como hacen la mayoría de los sistemas conocidos en la cotidianidad. Por ejemplo: un auto. Uno le entrega combustible y este devuelve al ambiente gases y calor.
      .col-lg-4
        .contenedor.h-100.p-4
          .img.p-2.mb-3.d-flex.justify-content-center.align-items-end
            img(src='@/assets/curso/67.png', alt='Texto que describa la imagen' style='width: 397px')
          h4 Sistemas cerrados
          p Aquellos que intercambian energía con su entorno, pero no materia. Es lo que ocurre con un envase cerrado, como una lata, cuyo contenido es invariable, pero pierde calor con el tiempo, disipándose en el aire alrededor.
      .col-lg-4
        .contenedor.h-100.p-4
          .img.p-2.mb-3.d-flex.justify-content-center.align-items-end
            img(src='@/assets/curso/68.png', alt='Texto que describa la imagen' style='width: 397px')
          h4 Sistemas aislados
          p Aquellos que, hasta cierto punto, no intercambian energía ni materia con el entorno. No existen los sistemas perfectamente aislados, claro está, pero sí hasta cierto grado: un termo que contiene agua caliente preservará su temperatura durante un rato, lo suficiente como para conservarse aislado durante un rato.
    p.mb-5 Un sistema está en equilibrio termodinámico si es incapaz de experimentar espontáneamente algún cambio de estado o proceso termodinámico cuando está sometido a las condiciones de un entorno.
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/s2vJUB2eCd4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Parámetros termodinámicos fundamentales
    Separador
    #t_5_2.titulo-segundo(data-aos="slide-right")
      h2 5.2 Escalas termométricas 
    p.mb-5 La temperatura es una magnitud física escalar que indica el grado de agitación de las moléculas de un cuerpo.
      br
      |Mientras mayor es el movimiento de las moléculas del cuerpo, mayor será su temperatura, quiere decir que, la temperatura del cuerpo es proporcional al movimiento de las moléculas que lo conforman.
      br
      br
      |Las escalas termométricas son usadas para medir las temperaturas de los cuerpos, existen diversas escalas y se utilizan según la necesidad de las temperaturas a medir, pueden ser absolutas o relativas.
    .contenedor-amarillo.px-5.py-3.mb-5(data-aos="zoom-in-up")
      p.fw-bold 
        span.color-verde
          |La escala termométrica absoluta 
        |indica el valor del cero absoluto, es decir, que bajo el cero no hay más valores de medida. En honor al científico británico Lord Kelvin, en temperatura se denomina el grado Kelvin (°K). 1 °K equivale a -273.16 grados Celsius (°C).
        br
        br
        span.color-verde
          |Las escalas termométricas relativas 
        |dependen del punto de referencia que se toma del cuerpo según sus propiedades físicas. Por ejemplo:
    AcordeonB.mb-5(tipo="b" clase-tarjeta="tarjeta ")
      .row(subtitulo="" titulo="Celsius (C)").px-5.align-items-center
        .col-md-10
          p Es una escala desarrollada por el científico sueco Anders Celsius que fue bautizada como Escala Celsius en su nombre. En esta escala definida en 1742, la medida se representa °C y su origen se debe a que el científico tomó como referencia las temperaturas necesarias para el punto de ebullición y congelación del agua, asignando valores entre 0 y 100, siendo 0 °C la temperatura más baja y 100 °C la más alta en esta escala.
        .col-md-2: img(src="@/assets/curso/69.svg")
      .row(subtitulo="" titulo="Kelvin (K)").px-5.align-items-center
        .col-md-10
          p En esta escala establecida por el científico Lord William Thomson Kelvin el incremento de 1 °K equivale a 1 °C, que es lo que se conoce como escala métrica absoluta. 0 °K equivale a -273 °C o a -459 °F, es decir un cero absoluto de temperatura, debajo de esa temperatura no se puede lograr descender más. Esta escala es comúnmente utilizada para los estudios científicos, mientras que para el resto de usos domésticos y clínicos se elige la escala Celsius y Fahrenheit, en ese orden.
        .col-md-2: img(src="@/assets/curso/70.svg")
      .row(subtitulo="" titulo="Fahrenheit (F)").px-5.align-items-center
        .col-md-10
          p Esta escala fue diseñada por el científico holandés-alemán de nombre Gabriel Daniel Fahrenheit y en la actualidad se utiliza principalmente en Estados Unidos y el Reino Unido, no de manera oficial sino más por costumbre popular. Sus valores se dividen en 180 partes iguales, su símbolo es °F; los puntos de congelación y ebullición están entre 32 °F y 212 °F respectivamente.
        .col-md-2: img(src="@/assets/curso/71.svg")
    .row.mb-5.justify-content-center(data-aos="zoom-in-up")
      .col-lg-10
        .tarjeta.color-acento-contenido.p-3.mb-5
          .row.justify-content-center.align-items-center
            .col-3.col-sm-2.col-lg-2
              img(src="@/assets/curso/37.svg")
            .col-9
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-1 e-libro
                  p.text-small Para ampliar la información sobre las escalas en Arenas, F. C. (2020). Física universitaria. Jorge Sarmiento Editor - Universitas.
                    
                .col-sm-auto.d-flex.flex-column
                  a.boton.color-acento-botones.mb-3(:href="('https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/174517?page=281. ')" target="_blank")
                    span Enlace web
                    i.fas.fa-link
    Separador
    #t_5_3.titulo-segundo(data-aos="slide-right")
      h2 5.3 Procesos termodinámicos
    p.mb-5 Son los procesos de cambio o evolución en las magnitudes o propiedades termodinámicas en los cuerpos debidas a los sistemas que lo componen. 
    .tarjeta.tarjeta-verde.p-5.mb-5
      SlyderA
        .row
          .col-md-5.mb-4.mb-md-0
            h5 Isotérmico
            p.mb-5 El proceso isotérmico o isotermo es el cambio reversible en un sistema termodinámico, siendo en dicho cambio la temperatura constante en todo el sistema. 
              br
              br
              |Una curva isoterma es una línea que sobre un diagrama representa los valores sucesivos de las diversas variables de un sistema en un proceso isotermo. Las isotermas de un gas ideal en un diagrama 
              b P-V
              |, llamado diagrama de Clapeyron, son hipérbolas equiláteras, cuya ecuación es:
            .col-lg-10
              .recuadro-verde.fondo-verde.px-5.py-3.d-flex.justify-content-end
                .contenido.w-90.ps-5
                  h4.text-white.mb-0 PV = T, donde T es constante.
        
          .col-md-6
            figure
              img(src='@/assets/curso/72.svg', alt='Texto que describa la imagen')
        .row
          .col-md-5.mb-4.mb-md-0
            h5 Isocórico
            p.mb-5 El proceso isocórico, isométrico o isovolumétrico es un proceso termodinámico en el cual el volumen permanece constante; ΔV = 0, implicando que el proceso no realiza trabajo presión-volumen, ya que este se define como: 
            .col-lg-10
              .recuadro-verde.fondo-verde.px-5.py-3.d-flex.justify-content-end
                .contenido.w-90.ps-5
                  h4.text-white.mb-0 ΔW = PΔV
          .col-md-6
            figure
              img(src='@/assets/curso/73.jpg', alt='Texto que describa la imagen')
        .row
          .col-md-5.mb-4.mb-md-0
            h5 Isobárico
            p.mb-5 El isobárico es un proceso termodinámico en el que la presión se mantiene constante: 
            .col-lg-10.mb-5
              .recuadro-verde.fondo-verde.px-5.py-3.d-flex.justify-content-end
                .contenido.w-90.ps-5
                  h4.text-white.mb-0 ΔP = 0
            p El calor transferido al sistema realiza trabajo, pero también cambia la energía interna del sistema. 
          .col-md-6
            figure
              img(src='@/assets/curso/74.svg', alt='Texto que describa la imagen')
        .row
          .col-md-5.mb-4.mb-md-0
            h5 Adiabático
            p.mb-5 Es aquel en el cual el sistema termodinámico (generalmente, un fluido que realiza un trabajo) no intercambia calor con su entorno. Un proceso adiabático que es además reversible se conoce como proceso isentrópico. El extremo opuesto, en el que tiene lugar la máxima transferencia de calor, causando que la temperatura permanezca constante, se denomina proceso isotérmico. Los nuevos valores de las variables de estado pueden ser cuantificados usando la ley de los gases ideales. 
            .col-lg-10.mb-5
              .recuadro-verde.fondo-verde.px-5.py-3.d-flex.justify-content-end
                .contenido.w-90.ps-5
                  h4.text-white.mb-0 ΔU + W = 0 y W = PΔV
          .col-md-6
            figure
              img(src='@/assets/curso/75.svg', alt='Texto que describa la imagen')
    .row.mb-5.justify-content-center(data-aos="zoom-in-up")
      .col-lg-10
        .tarjeta.color-acento-contenido.p-3.mb-5
          .row.justify-content-center.align-items-center
            .col-3.col-sm-2.col-lg-2
              img(src="@/assets/curso/37.svg")
            .col-9
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-1 e-libro
                  p.text-small Para ampliar la información en Arenas, F. C. (2020). Física universitaria. Jorge Sarmiento Editor - Universitas. En el capítulo 12 Termometría y dilatación.
                    
                .col-sm-auto.d-flex.flex-column
                  a.boton.color-acento-botones.mb-3(:href="('https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/174517?page=280')" target="_blank")
                    span Enlace web
                    i.fas.fa-link     
      
</template>

<script>
import AcordeonB from '../components/AcordeonB.vue'
import TabsD from '../components/TabsD.vue'

export default {
  name: 'Tema5',
  components: {
    AcordeonB,
    TabsD,
  },
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

<style lang="sass" scoped>
.tarjeta-numerada

  transition: background-color .3s
  .icono
    transition: opacity .3s
    opacity: 0
  &:hover
    background-color: $color-acento-botones
    border: 0
    .h2
      opacity: 0
    .icono
      opacity: 1
    .tarjeta-numerada__numero
      background-color: #FFCC4A
.img
  width: 300px
  height: 200px
  margin: 0 auto
.contenedor-amarillo
  background-color: #FFF5CC
.color-verde
  color: $color-secundario
.tarjeta-verde
  background-color: #C9F1F6
.fondo-verde
  background-color: $color-secundario
</style>
