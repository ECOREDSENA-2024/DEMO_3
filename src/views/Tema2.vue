<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Cinemática 
    .row.mb-5
      .col-lg-6(data-aos="slide-right")
        p.texto_grande La cinemática 
          b es la rama de la mecánica que describe el movimiento de los objetos sólidos 
          | sin considerar las causas (fuerzas) que lo originan y se limita principalmente al estudio de las trayectorias en función del tiempo. Se basa en describir los cambios de velocidad y aceleración con respecto a la posición y el tiempo.      
      .col-lg-6(data-aos="slide-left")
        .titulo-sexto.color-acento-contenido
          h5.fw-normal
            b Figura 4.  
            | Trayectoria de una partícula (P) en el plano (x, y, z). (Arenas, F. C. 2020).
        img.mb-5(src="@/assets/curso/14.svg")
    #t_2_1.titulo-segundo(data-aos="slide-right")
      h2 2.1 Conceptos básicos 
    SlyderE(indicadores="")(data-aos="zoom-in-up").mb-5 
      .row
        .col-md-5.mb-4.mb-md-0
          h5 Un objeto está en movimiento
          p Cuando su posición cambia con respecto a otro en el transcurso del tiempo. Dicho de otro modo, si una persona pasa por un poste de energía en un tiempo determinado, indica que está en movimiento y genera un cambio en su posición con respecto al poste (objeto que no cambia de posición).
      
        .col-md-7
          figure
            img(src='@/assets/curso/15.png', alt='Texto que describa la imagen')
      .row
        .col-md-5.mb-4.mb-md-0
          h5 El plano de coordenadas cartesianas
          p Es el que permite la ubicación de los objetos en el espacio, dando la posibilidad de hacer la representación gráfica de las relaciones matemáticas, del movimiento o la posición en la física.  
            br
            br
            |En el sistema bidimensional (dos dimensiones) se consideran el eje x y eje y; plano (x, y). Para el caso de los sistemas en tres dimensiones se tiene en cuenta un tercer eje (eje z), plano (x, y, z).
      
        .col-md-7
          figure
            img(src='@/assets/curso/16.svg', alt='Texto que describa la imagen')
      .row
        .col-md-5.mb-4.mb-md-0
          h5 El sentido del movimiento 
          p Depende del recorrido del objeto y este puede ser positivo (+) o negativo (-), de avance o de retroceso.
      
        .col-md-7
          figure
            img(src='@/assets/curso/17.svg', alt='Texto que describa la imagen')
      .row
        .col-md-5.mb-4.mb-md-0
          h5 Un objeto está en reposo
          p Cuando los objetos no presentan variación en el tiempo. Ejemplo de esto es si al frente del poste de energía instalamos una estatua. Estos permanecerán allí en el transcurso del tiempo sin tener cambios en sus posiciones.
      
        .col-md-7
          figure
            img(src='@/assets/curso/18.svg', alt='Texto que describa la imagen')
      .row
        .col-md-5.mb-4.mb-md-0
          h5 El sistema referenciado 
          p Depende del punto de observación, por ejemplo, si a su lado pasa una persona conduciendo un automóvil, esa persona está en movimiento relativo con respecto a su punto de observación. Pero, si usted se encuentra dentro del automóvil con la persona, ella está en reposo relativo respecto a su punto de referencia.
      
        .col-md-7
          figure
            img(src='@/assets/curso/19.svg', alt='Texto que describa la imagen')
      .row
        .col-md-5.mb-4.mb-md-0
          h5 Una partícula 
          p Es una parte muy pequeña de algún objeto; para el caso de estudio de la física es un cuerpo material con pequeña dimensión de la materia.
      
        .col-md-7
          figure
            img(src='@/assets/curso/20.svg', alt='Texto que describa la imagen')
      .row
        .col-md-5.mb-4.mb-md-0
          h5 La materia 
          p Es el componente principal de los cuerpos, objetos o partículas, puede tener cualquier forma y también sufre cambios de acuerdo con las propiedades físicas o químicas. 
      
        .col-md-7
          figure
            img(src='@/assets/curso/21.svg', alt='Texto que describa la imagen')
      .row
        .col-md-5.mb-4.mb-md-0
          h5 El tiempo (t) 
          p Es una magnitud escalar con la que se mide la duración de los eventos, este permite establecer la diferencia entre los sucesos del pasado y las predicciones del futuro. 
      
        .col-md-7
          figure
            img(src='@/assets/curso/22.svg', alt='Texto que describa la imagen')
      .row
        .col-md-5.mb-4.mb-md-0
          h5 La distancia 
          p Es la longitud recorrida por un cuerpo de un punto a otro, por ejemplo del punto A al punto B, o ubicados en el plano cartesiano, del punto (x<sub>0</sub>, y<sub>0</sub>) al (x<sub>1</sub>, y<sub>1</sub>). Indica el desplazamiento de la partícula.
      
        .col-md-7
          figure
            img(src='@/assets/curso/23.svg', alt='Texto que describa la imagen')
      .row
        .col-md-5.mb-4.mb-md-0
          h5 La velocidad 
            span.color-amarillo
              |(v) 
          p Es una magnitud vectorial la cual indica que tiene dirección y sentido, se calcula dividiendo la distancia por la unidad de tiempo empleado en hacer ese recorrido. 
      
        .col-md-7
          figure
            img(src='@/assets/curso/24.svg', alt='Texto que describa la imagen')
      .row
        .col-md-5.mb-4.mb-md-0
          h5 La rapidez (v) 
          p Es una magnitud escalar que es el módulo de la velocidad, relaciona la distancia que recorre una partícula y el tiempo que tarda en el recorrido.
      
        .col-md-7
          figure
            img(src='@/assets/curso/25.png', alt='Texto que describa la imagen')
      .row
        .col-md-5.mb-4.mb-md-0
          h5 La aceleración (a) 
          p Es una magnitud vectorial que relaciona la variación de la velocidad con el tiempo. 
      
        .col-md-7
          figure
            img(src='@/assets/curso/26.svg', alt='Texto que describa la imagen')
      .row
        .col-md-5.mb-4.mb-md-0
          h5 La aceleración de la gravedad  (g)
          p Es una magnitud vectorial que, obedece a la aceleración experimentada debido a la gravedad que ejerce la tierra en un cuerpo al dejarlo caer.  
      
        .col-md-7
          figure
            img(src='@/assets/curso/27.svg', alt='Texto que describa la imagen')
    Separador 
    #t_2_2.titulo-segundo(data-aos="slide-right")
      h2 2.2 Movimiento Uniforme (MU)
    .row.mb-5
      .col-lg-6(data-aos="slide-right")
        p.mb-5 El mundo está constantemente en movimiento, todo cambia con respecto al tiempo y existen diferentes razones de cambios en los objetos. El MU o movimiento rectilíneo uniforme (MRU) se da cuando un objeto avanza en una trayectoria recta a una velocidad constante, debido a que su aceleración es nula (0). Es de notar que, en el MRU la dirección también es constante y la distancia se calcula al multiplicar la velocidad por el tiempo del recorrido. 
        .recuadro-verde.px-5.py-3.d-flex.justify-content-end.mb-5
          .contenido.w-90.ps-2
            h5 Las ecuaciones del MRU:
            p.fw-bold.mb-0 x = x<sub>0</sub> + v⋅t
              br
              |v = v<sub>0</sub> = cte.
              br
              |a=0
      .col-lg-6(data-aos="slide-left")
        .titulo-sexto.color-acento-contenido
          h5.fw-normal
            b Figura.   
            | Descripción del desplazamiento de una partícula del punto 0 al punto A y luego del punto A al punto B
        figure
          img(src='@/assets/curso/28.svg', alt='Texto que describa la imagen')
          figcaption Nota.  (Arenas, F. C. 2020)
    Separador
    #t_2_3.titulo-segundo(data-aos="slide-right")
      h2 2.3 Movimiento Uniformemente Acelerado (MUA)
    .row.mb-5
      .col-lg-6(data-aos="slide-right")
        p.mb-5 El MUA o movimiento rectilíneo uniforme acelerado (MRUA) es también llamado movimiento rectilíneo uniforme variado (MRUV) y cambia con respecto al MU porque en él, la partícula está sometida a una aceleración constante.   
        .recuadro-verde.px-5.py-3.d-flex.justify-content-end.mb-5
          .contenido.w-90.ps-2
            h5 Ecuaciones del MUA: 
            p.fw-bold.mb-0 v = v<sub>0</sub> + at
              br
              |x = x<sub>0</sub> + v<sub>0</sub>t + ½ at<sup>2</sup>
              br
              |a=cte.
      .col-lg-6(data-aos="slide-left")
        .titulo-sexto.color-acento-contenido
          h5.fw-normal
            b Figura.   
            | Movimiento de una partícula que desacelera y finaliza con velocidad cero (V=0) 
        figure
          img(src='@/assets/curso/29.svg', alt='Texto que describa la imagen')
          figcaption Nota. (Arenas, F. C. 2020).
    Separador
    #t_2_4.titulo-segundo(data-aos="slide-right")
      h2 2.4 Caída libre
    .row.mb-5
      .col-lg-6(data-aos="slide-right")
        p.mb-5 La caída libre es el movimiento influenciado por la aceleración de la gravedad 
          spam.texto-verde 
            b (g)  
          |y se debe al incremento de la velocidad por la unidad de tiempo, de un cuerpo que se deja caer.    
      .col-lg-6(data-aos="slide-left")
        .recuadro-verde.px-5.py-3.d-flex.justify-content-end.mb-5
          .contenido.w-90.ps-2
            h5 Ecuaciones de la caída libre:
            .row
              .col-4
                p.fw-bold.mb-0 a = - g
                  br
                  |h = h<sub>0</sub> - ½ gt²
              .col-4
                p.fw-bold.mb-0 v = - gt
                  br
                  |v² = 2gh
    p.mb-5 Para describir un movimiento, se deben tener en cuenta los siguientes pasos:
    figure.mb-5(data-aos="zoom-in-up")
      img(src='@/assets/curso/30.svg', alt='Texto que describa la imagen')
    p.mb-5 Un cuerpo es lanzado desde una montaña de altura x0 con velocidad v0, determinar las ecuaciones del movimiento, la altura máxima y el tiempo que tarda el cuerpo en alcanzar el origen situado en el suelo.
    .recuadro-info(data-aos="zoom-in-up")
      .recuadro-info_titulo.p-3
        h3.text-center.mb-0 Representación de caída libre
      .recuadro-info_contenido.p-3
        .row.p-4
          .col-lg-6
            img(src='@/assets/curso/31.png')
          .col-lg-6
            p.mb-3 Primero, se establece el origen y la dirección del movimiento (eje X). Luego, los valores y signos de la velocidad inicial y la aceleración, como se muestra en la figura. Obteniendo las siguientes ecuaciones:
            img(src='@/assets/curso/32.svg').mb-3
            p.mb-3 En el momento en que el cuerpo alcanza la altura máxima, su velocidad es igual a 0. Se puede obtener el tiempo que transcurre desde que se lanza hasta que llega esta posición por medio de la ecuación de la velocidad. El resultado de este se reemplaza en la ecuación de posición, obteniendo así, la altura máxima que alcanza el móvil medida desde el suelo.
            img(src='@/assets/curso/33.svg').mb-3
            p.mb-3 Por medio de la ecuación de la posición se puede obtener el tiempo transcurrido en llegar al suelo (poniendo x-0), resolviendo así, una ecuación de segundo grado.
            img(src='@/assets/curso/34.svg').mb-3
    Separador
    #t_2_5.titulo-segundo(data-aos="slide-right")
      h2 2.5 Movimiento curvilíneo
    p.mb-5 En esta clase de movimiento se encuentran el parabólico, el oscilatorio y el circular, en los que se describen movimientos curvos de partículas. Indicando que en su trayectoria inciden radios de curvatura que a su vez dependen de los ángulos de inclinación. 
    Separador
    #t_2_6.titulo-segundo(data-aos="slide-right")
      h2 2.6 Movimiento de proyectiles
    .row.mb-5
      .col-lg-6(data-aos="slide-right")
        p.mb-5 En el movimiento de proyectiles se describe un movimiento parabólico donde la partícula hace un movimiento con componente horizontal (eje x) y vertical (eje y). El movimiento y distancia del recorrido va a depender en gran medida del ángulo y la velocidad de lanzamiento del objeto.  
        .recuadro-verde.px-5.py-3.d-flex.justify-content-end.mb-5
          .contenido.w-90.ps-2
            h5 Ecuaciones del movimiento de proyectiles: 
            p.fw-bold.mb-0 
              spam.h5 Velocidad: 
              | v<sub>x</sub> = v<sub>0</sub>cos Ɵ<sub>0</sub>
              spam.px-2
              |	v<sub>y</sub> = v<sub>o</sub>senƟ<sub>0</sub> – gt
              br
              spam.h5 Alcance en x: 
              | L = x<sub>0</sub> + v<sub>0</sub>cos Ɵ<sub>0</sub> t
              br
              spam.h5 Altura máxima: 
              | h = y<sub>o</sub> + (v<sub>o</sub><sup>2</sup> sen<sup>2</sup>Ɵ<sub>0</sub> / 2g)
      .col-lg-6(data-aos="slide-left")
        .titulo-sexto.color-acento-contenido
          h5.fw-normal
            b Figura.   
            | Movimiento de proyectil
        figure
          img(src='@/assets/curso/35.svg', alt='Texto que describa la imagen')
          figcaption Nota. (Arenas, F. C. 2020)
    Separador
    #t_2_7.titulo-segundo(data-aos="slide-right")
      h2  2.7 Movimiento circular uniforme
    .row.mb-5
      .col-lg-6(data-aos="slide-right")
        p.mb-5 El movimiento circular uniforme describe la trayectoria de un objeto alrededor de un eje que cuenta con un radio y una velocidad 
          b (denominada angular) 
          |constante, lo cual permite el giro de la partícula. 
      .col-lg-6(data-aos="slide-left")
        .titulo-sexto.color-acento-contenido
          h5.fw-normal
            b Figura.   
            |  Movimiento circular uniforme
        figure
          img(src='@/assets/curso/36.svg', alt='Texto que describa la imagen')
          figcaption Nota. (Arenas, F. C. 2020)
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
                  p.text-small 
                    b Para profundizar sobre los movimientos anteriormente descritos puede consultar los siguientes libros:
                    br
                    br
                    |Serway, R. A. y Vuille, C. (2012). Fundamentos de física. Vol. 1 (9a. ed.). México, D. F., Cengage Learning Capítulos 2 y 3 a partir de la página 58.
                    br
                    br
                    |Arenas, F. C. (2020). Física universitaria. Jorge Sarmiento Editor – Universitas Capítulo 3 Cinemática. 

                .col-sm-auto.d-flex.flex-column
                  a.boton.color-acento-botones.mb-4(:href="('https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/93223?page=58')" target="_blank")
                    span Enlace web
                    i.fas.fa-link
                  a.boton.color-acento-botones(:href="('https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/174517?page=60')" target="_blank")
                    span Enlace web
                    i.fas.fa-link
              





</template>

<script>
export default {
  name: 'Tema2',
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
.recuadro-info
  &_titulo
    background-color: $color-acento-contenido
  &_contenido
    background-color: lighten($color-acento-contenido, 37%)
.color-amarillo
  color: $color-acento-contenido
</style>
