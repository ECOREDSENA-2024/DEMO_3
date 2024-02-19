<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Física
    .row.mb-5.justify-content-between.align-items-center 
      .col-lg-7(data-aos="slide-right")
        p.texto_grande.fw-normal Comprender el concepto de la física no es complicado, esta 
          span.resaltado.p-1
            | es una ciencia exacta que estudia y describe el comportamiento de los fenómenos naturales que ocurren en nuestro universo,
          | teniendo en cuenta cuatro propiedades fundamentales (energía, materia, tiempo y espacio). Indicando que todo en el universo cambia y nada permanece fijo.  
      .col-lg-4: img(src="@/assets/curso/0.svg" style="width:430px")(data-aos="slide-left")
    .row.mb-5.justify-content-center(data-aos="zoom-in-up")
      .col-lg-10
        .tarjeta.color-acento-contenido.p-3.mb-5
          .row.justify-content-center.align-items-center
            .col-3.col-sm-2.col-lg-2
              img(src="@/assets/curso/1.svg")
            .col-9
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-1 Enlace web
                  p.text-small Para una mejor comprensión puede acceder la base de datos de la biblioteca del SENA en el libro: Serway, R. A. Jewett, J. W. y Cervantes González, S. R. (Ed.) (2015). Física para ciencias e ingeniería. Vol. 1 (9a. ed.). México, D. F., Cengage Learning especialmente en la página 35.  
                .col-sm-auto
                  a.boton.color-acento-botones(:href="('https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/93202?page=35')" target="_blank")
                    span Enlace web
                    i.fas.fa-link
    #t_1_1.titulo-segundo(data-aos="slide-right")
      h2 1.1 Variables físicas y sistema de unidades 
    p.mb-5 Una variable física, como su nombre lo dice, es un dato (número) que puede cambiar debido a un aspecto físico. Las variables principales son la distancia, la velocidad, la aceleración y el tiempo. Este dato o número se denomina magnitud y puede ser medido, 
      b ejemplo la velocidad, el tamaño, el peso, la aceleración, la fuerza, la longitud y otros.
      br
      br
      |Los sistemas de unidades, es el conjunto de elementos que permite que se puedan cuantificar y cualificar los datos (medidas) existen varios sistemas de unidades; para este caso se toma el 
      b Sistema Internacional de Unidades (SI).
    AcordeonB.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta-verde")
      .row(subtitulo="Concepto" titulo="Longitud").p-4
        .col-md-2
          p.mb-0 Nombre y símbolo
          h3 Metro (m)
      
        .col-md-10
          .contenedor-acordeon.p-3.ps-5.ps-md-0
            p.mb-5 El metro (m), es la unidad del SI para la longitud. Este se define al fijar el valor de la velocidad de la luz en el vacío (c), en 299,792458.
              br
              br
              |Se expresa en m·s<sup>-1</sup>, en donde los segundos están en función de la frecuencia del cesio, 133 (ΔνCs).
              br
              br
              |A partir de la relación de c=299,792458 m·s<sup>-1</sup>, se obtiene la expresión del metro.
            img.mb-5(src="@/assets/curso/2.svg")
            p Con esto, podemos concluir que la definición del metro se da por la longitud de la distancia recorrida por la luz durante un intervalo de 1/299,792458 segundos.
      .row(subtitulo="Concepto" titulo="Masa").p-4
        .col-md-2
          p.mb-0 Nombre y símbolo
          h3 Kilogramo (kg)
        .col-md-10
          .contenedor-acordeon.p-3.ps-5.ps-md-0
            p.mb-5 El Kilogramo (kg), es la unidad del SI para la masa. Este se define al fijar el valor de la constante Planck (h), en 6,626070 15 × 10<sup>-34</sup>, cuando se expresa en la unidad J·s, que es igual a kg·m<sup>2</sup>·s<sup>-1</sup>, donde el metro y el segundo están en función de c y ΔνCs.
              br
              br
              |De la relación exacta de h = 6,62607015 × 10<sup>-34</sup> kg·m<sup>2</sup>·s<sup>-1</sup>, se obtiene la unidad de kg·m<sup>2</sup>·s<sup>-1</sup>, y de esta, la expresión para el kilogramo, que está en función de la constante de Planck.
            img.mb-5(src="@/assets/curso/3.svg")
            p.mb-5 A partir de esto, y con las definiciones del segundo y el metro, se obtiene la definición del kilogramo en función de las constantes h, ΔνCs y c:
            img.mb-5(src="@/assets/curso/4.svg")
            p Basado en lo anterior, se define la unidad kg, m<sup>2</sup> y s<sup>-1</sup>, unidades de las magnitudes físicas en acción y movimiento angular, junto con las definiciones del segundo y el metro; esto lleva a la definición para la unidad de masa en función de la constante Planck (h).
      .row(subtitulo="Concepto" titulo="Tiempo").p-4
        .col-md-2
          p.mb-0 Nombre y símbolo
          h3 Segundo (s)
      
        .col-md-10
          .contenedor-acordeon.p-3.ps-5.ps-md-0
            p.mb-5 El segundo (s), es la unidad del SI para el tiempo. Este se define al fijar el valor de la frecuencia de la transición hiperfina del estado fundamental no perturbado del átomo de Cesio 133 ΔνCs, en 9.192.631.770, cuando se expresa en Hz=s<sup>-1</sup>.
              br
              br
              |De la relación exacta de ΔνCs=9.192.631.770 s<sup>-1</sup>, se obtiene la expresión para el segundo, que está en función de ΔνCs.
            img.mb-5(src="@/assets/curso/5.svg")
            p A partir de lo anterior, el segundo es la duración de 9.192.631.770 periodos de radicación en cuanto a la transición entre dos niveles hiperfinos del estado fundamental no perturbado del átomo del Cesio, 133.
      .row(subtitulo="Concepto" titulo="Intensidad de corriente eléctrica").p-4
        .col-md-2
          p.mb-0 Nombre y símbolo
          h3 Amperio (A)
      
        .col-md-10
          .contenedor-acordeon.p-3.ps-5.ps-md-0
            p.mb-5 El amperio (A), es la unidad del SI para la intensidad de una corriente eléctrica. Este se define al fijar el valor de la carga elemental (e), 1,602176634 × 10<sup>-19</sup>, cuando se expresa en la unidad C=A·s, donde el segundo se define en función de e y ΔνCs.
              br
              br
              |De la relación exacta de e=1,602176634×10<sup>-19</sup> A·s, se obtiene la definición del amperio en función de las constantes e y ΔνCs. 
            img.mb-5(src="@/assets/curso/6.svg")
            p En esta definición, se concluye que el amperio es la corriente eléctrica en cuanto al flujo de 1/ (1,602176634×10<sup>-19</sup>) =6,241509074×10<sup>18</sup> cargas elementales por segundo.
      .row(subtitulo="Concepto" titulo="Temperatura termodinámica").p-4
        .col-md-2
          p.mb-0 Nombre y símbolo
          h3 Kelvin (K)
      
        .col-md-10
          .contenedor-acordeon.p-3.ps-5.ps-md-0
            p.mb-5 El Kelvin (K), es la unidad del SI para la temperatura en termodinámica. Este se define al fijar el valor de la constante de Boltzmann (k), 1,380649 × 10<sup>-23</sup>, cuando se expresa en J·K<sup>-1</sup> =kg·m<sup>2</sup>·s<sup>-2</sup>·K<sup>-1</sup>, donde el kilogramo, el metro y el segundo están en función de h, c y ΔνCs.
              br
              br
              |De la relación exacta de k = 1,380649 × 10<sup>-23</sup> kg·m<sup>2</sup>·s<sup>-2</sup>·K<sup>-1</sup>, se obtiene la expresión para el Kelvin, que está en función de k, h y ΔνCs.
            img.mb-5(src="@/assets/curso/7.svg")
            p De acuerdo con lo anterior, se puede concluir que el Kelvin hace referencia a la variación de la temperatura termodinámica que da lugar, a su vez, a un cambio en la energía térmica de kT de 1,380649×10<sup>-23</sup>J.
      .row(subtitulo="Concepto" titulo="Cantidad de sustancia").p-4
        .col-md-2
          p.mb-0 Nombre y símbolo
          h3 Mol (mol)
      
        .col-md-10
          .contenedor-acordeon.p-3.ps-5.ps-md-0
            p.mb-5 El mol (mol) es la unidad del SI para la sustancia. Un mol contiene 6,02214076×10<sup>23</sup> entidades elementales, el cual es el valor de la constante de Avogadro (N<sub>A</sub>), cuando se expresa en mol<sup>-1</sup> se denomina como número de Avogadro.
              br
              br
              |La cantidad de sustancia (n) de un sistema, es una medida del número de entidades elementales especificadas, como un átomo, una molécula, un ion, un electrón, o cualquier otra partícula o grupo especificado de estas.
              br
              br
              |De la relación exacta de N<sub>A</sub>=6,02214076×10<sup>23</sup>mol<sup>-1</sup>, se obtiene la definición de un mol en función de la constante N<sub>A</sub>.
            img.mb-5(src="@/assets/curso/8.svg")
            p Teniendo en cuenta lo anterior, se puede definir el mol como la cantidad de sustancia de un sistema que contiene 6,02214076×10<sup>23</sup> entidades elementales especificadas.
      .row(subtitulo="Concepto" titulo="Intensidad luminosa").p-4
        .col-md-2
          p.mb-0 Nombre y símbolo
          h3 Candela (cd)
      
        .col-md-10
          .contenedor-acordeon.p-3.ps-5.ps-md-0
            p.mb-5 La candela (cd) es la unidad del SI para la intensidad luminosa en una dirección dada. Este se define al fijar el valor de la eficacia luminosa de la radiación monocromática con una frecuencia de 540×10<sup>12</sup> Hz, Kcd, en 683, cuando se expresa en lm·W<sup>-1</sup>cd·sr·W<sup>-1</sup> o cd·sr·kg<sup>-1</sup>·m<sup>-2</sup>·s<sup>3</sup>, donde el kilogramo, el metro y el segundo están en función de h, c y ΔνCs. 

              |De la relación exacta de Kcd=683cd·sr·kg<sup>-1</sup>·m<sup>-2</sup>·s<sup>3</sup> se obtiene la definición para la candela:
            img.mb-5(src="@/assets/curso/9.svg")
            p Con lo anterior, se puede definir la candela como la intensidad luminosa en una dirección dada, por una fuente que emite una radiación monocromática de frecuencia 540×10<sup>12</sup> Hz, además, tiene una intensidad radiante en esa dirección, igual a 1/683 W/sr.
    Separador  
    #t_1_2.titulo-segundo(data-aos="slide-right")
      h2 1.2 Marcos de referencia
    .row.mb-5.justify-content-between
      .col-lg-7(data-aos="slide-right")
        p.fw-normal El marco de referencia es el primer paso para estudiar los aspectos de la física del movimiento, este permite establecer los parámetros relacionados con la localización en el espacio. 
      .col-lg-4: img(src="@/assets/curso/10.jpg" style="width:430px")(data-aos="slide-left")
    .row.mb-5.justify-content-center(data-aos="zoom-in-up")
      .col-lg-10
        .tarjeta.color-acento-contenido.p-3.mb-5
          .row.justify-content-center.align-items-center
            .col-3.col-sm-2.col-lg-2
              img(src="@/assets/curso/1.svg")
            .col-9
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-1 Enlace web
                  p.text-small El tema en mención debe ser ampliado en Serway, R. A. y Vuille, C. (2012). Fundamentos de física. Vol. 1 (9a. ed.). México, D. F., Cengage Learning desde la página 59.  
                .col-sm-auto
                  a.boton.color-acento-botones(:href="('https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/93223?page=59')" target="_blank")
                    span Enlace web
                    i.fas.fa-link
    Separador
    #t_1_3.titulo-segundo(data-aos="slide-right")
      h2 1.3 Magnitudes escalares y vectoriales
    p.mb-5 Todas las magnitudes son medibles, son comparables con la unidad y la cantidad que contiene, ejemplo la longitud, su unidad es el metro (m).  Luego si se tiene que, una medida es de 10 metros, quiere decir que, tiene 10 cantidades de metros.
    .row.mb-5.justify-content-center
      .col-lg-4.mb-5.mb-lg-0
        .tarjeta.tarjeta-hover.p-5.text-center.h-100
          h4 Las magnitudes escalares 
          p Son aquellas que indican medidas con números reales en una escala adecuada, es decir tienen un valor numérico o módulo y sus unidades de medida.
      .col-lg-4.mb-5.mb-lg-0
        .tarjeta.tarjeta-hover.p-5.text-center.h-100
          h4 Los vectores
          p Son representaciones matemáticas expresadas mediante segmentos de rectas que indican la orientación de las magnitudes en el plano tridimensional.
      .col-lg-4.mb-5.mb-lg-0
        .tarjeta.tarjeta-hover.p-5.text-center.h-100
          h4 Las magnitudes vectoriales
          p Además de tener el valor numérico (módulo) y sus unidades, también se deben especificar la dirección y el sentido.
    .titulo-sexto.color-acento-contenido
      h5.fw-normal
        b Figura 
        | Fundamentos de física, 2012
    .tarjeta-amarilla(data-aos="zoom-in-up").p-5.mb-5.m-auto
      .row.justify-content-center
        .col-lg-4.mb-5.mb-lg-0
          .contenedor-figura.p-4.mb-5
            img(src="@/assets/curso/11.svg" style="width:253px")
          .texto-adorno
            p.py-3
              b a) 
              | Los 4 vectores son iguales tienen misma dirección y longitud.
        .col-lg-4.mb-5.mb-lg-0
          .contenedor-figura.p-4.mb-5
            img(src="@/assets/curso/12.svg").mb-4.m-auto
          .texto-adorno
            p.py-3
              b b) 
              | El vector R representa la suma de los vectores A y B, cuando A se une a B.
        .col-lg-4.mb-5.mb-lg-0
          .contenedor-figura.p-4.mb-5
            img(src="@/assets/curso/13.svg").mb-4.m-auto
          .texto-adorno
            p.py-3
              b c) 
              |  El vector R es la suma de los vectores A y B cuando B se une a A. 
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/09_Vykpi8nU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Física: Magnitudes escalares y vectoriales
    .row.mb-5.justify-content-center(data-aos="zoom-in-up")
      .col-lg-10
        .tarjeta.color-acento-contenido.p-3.mb-5
          .row.justify-content-center.align-items-center
            .col-3.col-sm-2.col-lg-2
              img(src="@/assets/curso/1.svg")
            .col-9
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-1 Enlace web
                  p.text-small Más información sobre el tema la encontrará en el siguiente enlace, Serway, R. A. y Vuille, C. (2012). Fundamentos de física. Vol. 1 (9a. ed.). México, D. F., Cengage Learning desde la página 89.  
                .col-sm-auto
                  a.boton.color-acento-botones(:href="('https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/93223?page=89')" target="_blank")
                    span Enlace web
                    i.fas.fa-link
    Separador
    #t_1_4.titulo-segundo(data-aos="slide-right")
      h2 1.4 Operaciones con vectores 
    .hover-personaje.d-flex.mb-3
      .hover-personaje_img.d-flex.p-3.justify-content-center.align-items-center
        .personaje
          img(src="@/assets/curso/personaje.svg")
        p.h1.text-center.text-white.mb-0 A 
      .hover-personaje_contenido.py-3.px-5.w-100.d-flex.align-items-center
        .textos
          h4 Igualdad de dos vectores
          p Dos vectores Vector A y Vector B son iguales, Vector A = Vector B, si tienen la misma magnitud y dirección.
    .hover-personaje.d-flex.mb-3
      .hover-personaje_img.d-flex.p-3.justify-content-center.align-items-center
        .personaje
          img(src="@/assets/curso/personaje.svg")
        p.h1.text-center.text-white.mb-0 B
      .hover-personaje_contenido.py-3.px-5.w-100.d-flex.align-items-center
        .textos
          h4 Suma de vectores
          p La suma de vectores se define mediante la ley del paralelogramo, es decir, la suma de los cuadrados de los cuatro lados de un paralelogramo es igual a la suma de los cuadrados de las dos diagonales. La suma de dos vectores A y B, se obtiene uniéndose en un mismo punto R y construyendo un paralelogramo que tiene por lados a A y B siendo la suma vectorial la diagonal que pasa por el punto R de este. 
    .hover-personaje.d-flex.mb-3
      .hover-personaje_img.d-flex.p-3.justify-content-center.align-items-center
        .personaje
          img(src="@/assets/curso/personaje.svg")
        p.h1.text-center.text-white.mb-0 C
      .hover-personaje_contenido.py-3.px-5.w-100.d-flex.align-items-center
        .textos
          h4 Negativo de un vector
          p Es el vector opuesto, ya que, cuando se suman el resultado es cero.
    .hover-personaje.d-flex.mb-3
      .hover-personaje_img.d-flex.p-3.justify-content-center.align-items-center
        .personaje
          img(src="@/assets/curso/personaje.svg")
        p.h1.text-center.text-white.mb-0 D
      .hover-personaje_contenido.py-3.px-5.w-100.d-flex.align-items-center
        .textos
          h4 Resta de vectores
          p La resta de los vectores A - B, es la suma del vector A con el negativo del vector B.
    .hover-personaje.d-flex.mb-5
      .hover-personaje_img.d-flex.p-3.justify-content-center.align-items-center
        .personaje
          img(src="@/assets/curso/personaje.svg")
        p.h1.text-center.text-white.mb-0 E
      .hover-personaje_contenido.py-3.px-5.w-100.d-flex.align-items-center
        .textos
          h4 Multiplicación de un vector por un escalar
          p Al multiplicar o dividir el vector por un escalar, el resultado da otro vector, es decir, siendo A un vector, al multiplicarlo por 4, da como resultado el vector 4A, es decir 4 veces el vector.
    .row.mb-5.justify-content-center(data-aos="zoom-in-up")
      .col-lg-10
        .tarjeta.color-acento-contenido.p-3.mb-5
          .row.justify-content-center.align-items-center
            .col-3.col-sm-2.col-lg-2
              img(src="@/assets/curso/1.svg")
            .col-9
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-1 Enlace web
                  p.text-small Para profundizar acerca de este tema ingrese al enlace, Serway, R. A. Jewett, J. W. y Cervantes González, S. R. (Ed.) (2015). Física para ciencias e ingeniería. Vol. 1 (9a. ed.). México, D. F., Cengage Learning desde la página 95.  
                .col-sm-auto
                  a.boton.color-acento-botones(:href="('https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/93202?page=95')" target="_blank")
                    span Enlace web
                    i.fas.fa-link
</template>

<script>
import Muestras from '../components/Muestras'
import AcordeonB from '../components/AcordeonB.vue'

// borrar una vez el componente "Muestras" no se necesite
export default {
  name: 'Tema1',
  components: {
    Muestras,
    AcordeonB, // borrar una vez el componente "Muestras" no se necesite
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
.contenedor-acordeon
  p, img
    padding-left: 20px

  position: relative
  &:before
    content: ''
    position: absolute
    top: 0
    left: 0
    background-color: $color-primario
    width: 3px
    height: 100%
.tarjeta-amarilla
  background-color: lighten($color-acento-botones, 31% )
.texto-adorno
  position: relative
  &:before
    content: ''
    position: absolute
    top: 0
    left: 0
    background-color: $color-acento-botones
    width: 102px
    height: 5px
    margin-bottom: 100px
.contenedor-figura
  max-width: 353px
  max-height: 178px
.hover-personaje
  &_img
    overflow: hidden
    font-size: 40px
    width: 190px
    min-height: 160px
    position: relative
    background-color: $color-primario
    .personaje
      transition:  bottom 0.3s ease-out
      width: 190px
      position: absolute
      bottom: -100%
  &:hover
    .personaje
      bottom: 0
      transform-origin: bottom
  &_contenido
    background-color: lighten($color-acento-botones,25% )
    border-radius: 0px 10px 10px 0px
</style>
