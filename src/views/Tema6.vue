<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 6
      h1 Electromagnetismo (electromagnético)
    .row.mb-5
      .col-lg-6(data-aos="slide-right")
        p.mb-5 El magnetismo es un fenómeno físico por el que los objetos ejercen fuerzas de atracción o repulsión sobre otros materiales, ejemplo de esto son los imanes, la magnetita es el mineral con esta propiedad natural. El electromagnetismo es el campo magnético creado por la corriente eléctrica.  
          br
          br
          |El campo eléctrico es la región del espacio en la que interactúa la fuerza eléctrica; es un campo físico que se representa por medio de un modelo que describe la interacción entre cuerpos y sistemas con propiedades de naturaleza eléctrica.
          br
          br
          |Es un campo vectorial en el cual una carga eléctrica puntual de valor q sufre los efectos de una fuerza eléctrica F dada por la siguiente ecuación: 
        .recuadro-verde.px-5.py-3.d-flex.justify-content-end.my-5
          .contenido.w-90.ps-2
            p.fw-bold.mb-0 F = qE 
              br
              |q = carga eléctrica = 1.602*10<sup>-19</sup> Coulomb.
      .col-lg-6(data-aos="slide-left"): img(src="@/assets/curso/76.svg")
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
                  p.text-small Para más información sobre el tema, puede acceder al siguiente enlace, Serway, R. A. Jewett, J. W. y Cervantes González, S. R. (Ed.) (2015). Física para ciencias e ingeniería. Vol. 2 (9a. ed.). México, D. F., Cengage Learning en la parte 4 electricidad y magnetismo. 

                .col-sm-auto.d-flex.flex-column
                  a.boton.color-acento-botones.mb-3(:href="('https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/93203?page=30')" target="_blank")
                    span Enlace web
                    i.fas.fa-link

</template>

<script>
export default {
  name: 'Tema6',
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

<style lang="sass" scoped></style>
