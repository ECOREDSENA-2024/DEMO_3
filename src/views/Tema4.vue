<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Conservación de la energía
    p.mb-5 Por ley, la conservación de energía en cualquier sistema permanece sin variación en el tiempo, la cual puede transformarse en otras formas de energía, demostrando que la energía no se crea ni se destruye.
      br
      br
      |A continuación, se describe el comportamiento de la conservación de la energía mecánica, en la cual, la cantidad de energía es la suma de las energías cinética y potencial; que en ausencia de fuerzas de fricción o influencia de fuerzas externas la cantidad de energía permanece constante. La energía cinética es debida al movimiento de los cuerpos y la energía potencial depende de la posición que ocupa la masa en el espacio. 
      br
      br
      |En la imagen se observa que cuando el <i>skater</i> está en la parte de arriba preparando el impulso, conserva una energía potencial que es debida a su posición en el espacio. Mientras que, cuando inicia a rodar conserva una energía cinética producto de su movimiento. Se puede apreciar que la energía potencial se transforma en energía cinética.
    .row.mb-5.justify-content-center
      .col-lg-10
        figure.mb-5
          img(src='@/assets/curso/53.svg')
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/xDUXHYmei1A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption La ciencia de las cosas: conservación de la energía
    Separador
    #t_4_1.titulo-segundo(data-aos="slide-right")
      h2 4.1 Trabajo efectuado por una fuerza (constante - variable)
    .row.mb-5
      .col-lg-6(data-aos="slide-right")
        p 
          b El trabajo (W) 
          | es una magnitud escalar resultado de la fuerza (
          b F
          | ) que se aplica a un cuerpo para desplazarse una distancia (
          b d
          | ), en este caso el objeto experimenta la transferencia de energía, lo cual hace que este se mueva.
      .col-lg-6(data-aos="slide-left")
        .recuadro-verde.px-5.py-4.d-flex.justify-content-end.my-4
          .contenido.w-90.ps-2
            h3.fw-normal 
              b Hay que recordar que 
              | la fuerza es magnitud vectorial y sus componentes en 
              b x (Fx) 
              | y en   
              b y (Fy) 
              | son:
              br
              b Fx = F cos θ 
              span.px-5 
              |y 
              span.px-5  
              b  Fy = F Sen θ
    br
    br
    br
    .contenedor-azul.p-4.d-flex.m-5(data-aos="zoom-in-up")
      .textos
        p.texto_grande.mb-0 
          b El trabajo efectuado por una fuerza constante 
          | es generado por una 
          b fuerza paralela 
          |al desplazamiento la cual no varía en tiempo ni en posición.
      .imagen-salida
        img(src='@/assets/curso/54.svg' style='width: 567px')
    p.mb-5 A continuación, se describe la ecuación:
    .row.mb-5
      .col-lg-5
        .recuadro-verde.px-5.py-4.d-flex.justify-content-end
          .contenido.w-90.ps-5.ps-lg-4
            h4.mb-0 W = Fd = (Fcosθ)d = Fdcosθ
    p.mb-5 
      b Cuando θ es 0⁰ (cero grados) 
      | el trabajo se determina por la fuerza y la distancia entonces es 
      b W = Fd
      |  y 
      b cuando es 180⁰ 
      | el trabajo es 
      b W = - Fd
      |. La unidad de medida es Newton por metro 
      b (Nm) 
      | y se denomina 
      b Joule (J)
      |. Tenga presente que, las unidades utilizadas en el documento obedecen a las del Sistema Internacional (S.I.).
      br
      br
      |El trabajo efectuado por una fuerza variable resulta por su variación en magnitud, ángulo, posición u otro factor que hace que la fuerza sea diferente a la anterior en un tiempo determinado. Este fenómeno da como resultado que, el cuerpo tenga desplazamientos cortos y la fuerza en dirección del desplazamiento sea casi constante en cada intervalo.
    .row.mb-5
      .col-lg-5(data-aos="slide-right")
        img(src='@/assets/curso/55.jpg')
      .col-lg-6(data-aos="slide-left")
        p.mb-5 Un ejemplo es la fuerza en el resorte que se estira, para estirar el resorte, se debe hacer una fuerza mayor a la que ejerce para su restauración (fuerza de restauración del resorte) lo que indica que, la fuerza es directamente proporcional al cambio en la longitud del resorte (desplazamiento). Esta se denomina la ley de Hooke y expresado de forma matemática es:
        .recuadro-verde.px-5.py-4.d-flex.justify-content-end
          .contenido.w-90.ps-4
            h4 F = k (x−x<sub>0</sub>);
            p.mb-0 
              b Donde k 
              | es la constante de elongación del resorte.
    p.mb-5 De modo que: F = kΔx = k (x−x<sub>0</sub>); de la ecuación de trabajo tenemos que, W = Fd. Quiere decir que: d = desplazamiento y esto es = Δx, que indica el cambio de longitud, es decir, posición final (x) – posición inicial (x<sub>0</sub>). 
    Separador 
    #t_4_2.titulo-segundo(data-aos="slide-right")
      h2 4.2 Energía cinética 
    .row.mb-5
      .col-lg-8(data-aos="slide-right")
        img(src='@/assets/curso/56.png')
      .col-lg-4(data-aos="slide-left")
        p.mb-5 
          b La energía cinética (E<sub>cinética</sub> o K) 
          | con respecto al trabajo es la relación del movimiento con la fuerza que lo intervienen, es decir que:
        .recuadro-verde.px-5.py-4.d-flex.justify-content-end
          .contenido.w-90.ps-4
            h4 K = 1/2  mv<sup>2</sup>
            p.mb-0 Donde m es la masa y v es la velocidad.








































      

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

<style lang="sass" scoped>
.contenedor-azul
  position: relative
  background-color: #D2F3F8
  @media (min-width: $bp-min-sm)
    display: block !important
  @media (min-width: $bp-min-xxl)
    .textos
      width: 50% !important

  .imagen-salida
    position: absolute
    bottom: 0
    right: 0
    transform: translateY(15%)
    @media (max-width: $bp-max-xl)
      position: relative !important
</style>
