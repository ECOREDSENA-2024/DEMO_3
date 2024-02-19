<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Dinámica
    p.mb-5 <b>La dinámica</b> obedece al movimiento, en física esto se refiere a la relación que existe entre los acontecimientos, las causas que lo provocan, sus cambios y el tiempo en que estos suceden. 
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/6NeZlIiTzMk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption La ciencia de las cosas: dinámica
    Separador
    #t_3_1.titulo-segundo(data-aos="slide-right")
      h2 3.1 Primera ley de Newton 
    .row.justify-content-center.mb-5
      .col-md-8
        .cajon-verde.p-4
          .row.mb-5.align-items-end
            .col-md-6
              .bloque-texto-b.p-4
                .bloque-texto-b__texto
                  i.fas.fa-quote-left
                  p.mb-0 Isaac Newton nació en Inglaterra, fue científico y escribió 
                    b "Los principios matemáticos de la filosofía natural"
                    |, cuyo tema principal fueron sus leyes del movimiento.
                  i.fas.fa-quote-right
            .col-md-3
              img(src='@/assets/curso/38.jpg')
            .col-md-3
              h5.mb-0 - Isaac Newton
    p.mb-5 El movimiento se define como el desplazamiento que tienen los cuerpos en un espacio, frente a otro cuerpo, y es relativo, ya que depende de la posición del observador. La fuerza es la acción que tiene un cuerpo sobre otro y la masa es la magnitud que mide la cantidad de materia que tiene un cuerpo.
    figure.mb-5(data-aos="zoom-in-up")
      img(src='@/assets/curso/39.svg')
    p.mb-5 
      b La primera ley de Newton o ley de inercia, 
      | indica que todo cuerpo conserva su estado, en reposo o en movimiento uniforme y rectilíneo, si ninguna fuerza interviene sobre él para cambiar su estado. La inercia mecánica obedece cuando no se puede alterar el estado del movimiento o el reposo de un cuerpo. La inercia térmica es cuando un cuerpo se resiste al cambio en su temperatura si está en contacto con otros cuerpos o al ser sometido a calentamiento.
    .row.mb-5.justify-content-center
      .col-md-10
        figure.mb-5(data-aos="zoom-in-up")
          img(src='@/assets/curso/40.svg')
    Separador
    #t_3_2.titulo-segundo(data-aos="slide-right")
      h2 3.2 Conceptos básicos
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/U4mjPiDx4ew" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption La ciencia de las cosas: conceptos básicos
    .row.justify-content-center.mb-5
      .col-md-10
        #carouselExampleIndicators.carousel.slide.mb-5(data-bs-ride='carousel')
          .carousel-indicators
            button.active(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='0' aria-current='true' aria-label='Slide 1')
            button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='1' aria-label='Slide 2')
            button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='2' aria-label='Slide 3')
            button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='3' aria-label='Slide 4')
            button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='4' aria-label='Slide 5')
            button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='5' aria-label='Slide 6')
            button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='6' aria-label='Slide 7')
            button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='7' aria-label='Slide 1')
          .carousel-inner.bg-amarillo
            .carousel-item.active.px-5.py-2
              .row.px-2.py-3.mx-5.align-items-center
                .col-md-2
                  img(src='@/assets/curso/41.svg')
                .col-md-10
                  h4 La fuerza de gravedad (peso)
                  p Es la fuerza que ejerce la tierra sobre los cuerpos que están cerca o sobre ella, esto también aplica para los cuerpos celestes en el universo, cada fuerza en cada astro es diferente. ¿Por qué la fuerza de gravedad de cada planeta es diferente?
            .carousel-item.px-5.py-2
              .row.px-5.py-3.mx-5.align-items-center
                .col-md-2
                  img(src='@/assets/curso/42.svg')
                .col-md-10
                  h4 El Peso (P) 
                  p.mb-0 Es directamente proporcional a la multiplicación de la masa 
                    b (m) 
                    | por la aceleración de la gravedad 
                    b (g)
                    |. 
                    b P = mg; 
                    | para el caso de la tierra el valor de g es 
                    b 9.81 m/s<sup>2</sup>.
            .carousel-item.px-5.py-2
              .row.px-2.py-3.mx-5.align-items-center
                .col-md-2
                  img(src='@/assets/curso/43.svg')
                .col-md-10
                  h4 La masa (m)  
                  p.mb-0 Depende de la cantidad de materia o sustancia contenida en un cuerpo.
            .carousel-item.px-5.py-2
              .row.px-2.py-3.mx-5.align-items-center
                .col-md-2
                  img(src='@/assets/curso/44.svg')
                .col-md-10
                  h4 La fuerza normal (N) 
                  p.mb-0 Es la fuerza de reacción que ejerce la superficie de contacto con el cuerpo y es igual, pero en sentido contrario al peso del objeto.
            .carousel-item.px-5.py-2
              .row.px-2.py-3.mx-5.align-items-center
                .col-md-2
                  img(src='@/assets/curso/45.svg')
                .col-md-10
                  h4 Tensión (T) 
                  p.mb-0 Es la fuerza opuesta a la que se somete un cuerpo.
            .carousel-item.px-5.py-2
              .row.px-2.py-3.mx-5.align-items-center
                .col-md-2
                  img(src='@/assets/curso/46.svg')
                .col-md-10
                  h4 Fuerza de roce estático (f<sub>s</sub>) y fuerza de roce cinético (f<sub>k</sub>)
                  p.mb-0 Son las fuerzas que existen entre dos superficies en contacto.
            .carousel-item.px-5.py-2
              .row.px-2.py-3.mx-5.align-items-center
                .col-md-2
                  img(src='@/assets/curso/47.svg')
                .col-md-10
                  h4 La Torsión 
                  p.mb-0 Es la fuerza encargada de hacer que un cuerpo gire.
            
          button.carousel-control-prev.p-1(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide='prev')
            span.carousel-control-prev-icon(aria-hidden='true')
            span.visually-hidden Previous
          button.carousel-control-next.p-1(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide='next')
            span.carousel-control-next-icon(aria-hidden='true')
            span.visually-hidden Next
    Separador
    #t_3_3.titulo-segundo(data-aos="slide-right")
      h2 3.3 Segunda ley de Newton
    p.mb-5 La segunda ley de Newton indica que la causa de la aceleración se debe a la fuerza neta que se le aplique. A continuación, se describe la ecuación de fuerza: 
    .row.mb-5.justify-content-center
      .col-lg-10
        .imagen-animacion
          .img2.d-none.d-xxl-block
            img(src='@/assets/curso/49.png' style='width: 360px')
          .img3.d-none.d-xxl-block 
            img(src='@/assets/curso/50.svg' style='width: 150px')
          img.img1(src='@/assets/curso/48.png').d-none.d-xxl-block
          img.img1(src='@/assets/curso/51.png').d-block.d-xxl-none
    Separador
    #t_3_4.titulo-segundo(data-aos="slide-right")
      h2 3.4 Equilibrio dinámico
    p.mb-5 En las personas, es la capacidad de permanecer erguido y estable mientras se realiza movimiento o acciones, esto se logra variando su punto de gravedad. Visto de otro modo, es que un cuerpo mantenga una posición estable ante las fuerzas que actúan sobre él. La forma de hacer que esto ocurra es que intervengan procesos opuestos con la misma magnitud, es decir que, la suma de las componentes (x, y) de las fuerzas que actúan en el objeto deben ser iguales a cero. Existe equilibrio estático cuando las fuerzas que actúan sobre el cuerpo se encuentran balanceadas.
    Separador
    #t_3_5.titulo-segundo(data-aos="slide-right") 
      h2 3.5 Tercera ley de Newton 
    p.mb-5 La tercera ley de Newton se refiere a la de acción y reacción, indica que, si un objeto (A) aplica una fuerza a un cuerpo (B), este aplica la misma fuerza, pero en sentido contrario a dicho objeto (A). La expresión matemática es: la fuerza que A ejerce sobre B (F<sub>AB</sub>), es igual, pero negativa a la fuerza que B ejerce sobre A (-F<sub>BA</sub>).
      br
      |F<sub>AB</sub> = - F<sub>BA</sub>.
    figure.mb-5
      img(src='@/assets/curso/52.svg')(data-aos="zoom-in-up")
    Separador
    #t_3_6.titulo-segundo(data-aos="slide-right")
      h2 3.6  Inercia rotacional de los cuerpos sólidos
    .row.mb-5
      .col-lg-8(data-aos="slide-right")
        p Es un valor escalar y describe la propiedad que tienen los objetos de poder girar alrededor de un eje determinado y depende de la distribución de la masa con respecto a su eje. También indica la dificultad que tienen los cuerpos de cambiar su velocidad de rotación. <b>La inercia rotacional (I)</b> indica que cuando la masa se aleja del eje de rotación es más difícil cambiar su velocidad. 
          br
          br
          |La inercia rotacional es directamente proporcional a la masa por el radio del objeto. 
          br
          br
          |La relación de la inercia rotacional y la segunda ley de Newton se deben a que el movimiento ejerce una fuerza denominada tangencial y se debe a la aceleración (tangencial) por la masa del objeto.
      .col-lg-4(data-aos="slide-left")
        .recuadro-verde.px-5.py-3.d-flex.justify-content-end.my-5
          .contenido.w-90.ps-5
            p.fw-bold.mb-0 I = mr<sup>2</sup>
        .recuadro-verde.px-5.py-3.d-flex.justify-content-end.mb-5
          .contenido.w-90.ps-5
            p.fw-bold.mb-0 Fuerza tangencial (F<sub>t</sub>): 
              br
              |F<sub>T</sub>  = ma<sub>T</sub> =  mRα
    Separador
    #t_3_7.titulo-segundo(data-aos="slide-right")
      h2 3.7 Equilibrio rotacional
    p.mb-5 El equilibrio rotacional indica que no existe una fuerza o tendencia para que un objeto se mueva o registre cambios, similar a la primera ley de Newton, si no hay fuerza que actúe sobre un cuerpo se dice que hay equilibrio. Para el caso de rotación, se aplica el mismo principio solo que en este caso no hay fuerza que lo haga girar, es decir que no hay torsión. Es de tener en cuenta que, si un objeto está en reposo no es necesariamente porque no están actuando fuerzas sobre él. Ya que, pueden estar actuando fuerzas de manera balanceada.
    Separador 
    #t_3_8.titulo-segundo(data-aos="slide-right")
      h2 3.8 Ley de Gravitación universal 
    p.mb-5 Esta ley de Newton relaciona la fuerza de gravedad con el peso, indicando que esta depende de la fuerza con que se atraen los cuerpos a una distancia (r).
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-5(data-aos="slide-right")
        h5 F=G  m1m2/(〖 r〗^2  )
      .col-lg-5(data-aos="slide-right")
        p 
          b F 
          |es la fuerza.
          br
          b m1 
          |y 
          b m2 
          | las masas de los cuerpos que interactúan.
          br
          b r 
          |es la distancia entre los centros de masa.
          br
          b G 
          
          |es la constante gravitatoria.
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
                  p.text-small Le invito a acceder al enlace a continuación para apoyar su conocimiento del tema, Tejada Betancourt, L. (Ed.) y Gómez López, N. (2020). Física general. Universidad Abierta para Adultos (UAPA). 
                .col-sm-auto
                  a.boton.color-acento-botones(:href="('https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/175894?page=161')" target="_blank")
                    span Enlace web
                    i.fas.fa-link

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

<style lang="sass" scoped>

.cajon-verde
  background-color:#D3EDEB
.carousel-inner
  border-radius: 20px
.bg-amarillo
  background-color: lighten($color-acento-botones, 20%)
.carousel-control-prev
  opacity: 1
  width: 60px
  background-color: $color-primario
  border-radius: 20px 0px 0px 20px
  span
    background-position: center
.carousel-control-next
  opacity: 1
  width: 60px
  background-color: $color-primario
  border-radius: 0px 20px 20px 0px
  span
    background-position: center
.imagen-animacion
  position: relative
  .img2
    animation: movimiento1 10s ease-in-out infinite
    animation-duration: a
    position: absolute
    top: 239px
    left: 0
  .img3
    animation: movimiento2 5s ease-in-out infinite
    position: absolute
    bottom: 3px
@keyframes movimiento1
  0%
      // transform: translateX(0%)
      left: 0

  80%
      // transform: translateX(300%)
      left: 60%
  100%
      // transform: translateX(300%)
      left: 60%
@keyframes movimiento2
  0%
      // transform: translateX(0%)
      left: 0
      transform: rotate(0deg)

  80%
      // transform: translateX(300%)
      left: 85%
      transform: rotate(360deg)
  100%
      // transform: translateX(300%)
      left: 85%
      transform: rotate(360deg)
</style>
