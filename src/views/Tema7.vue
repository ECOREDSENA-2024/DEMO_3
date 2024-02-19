<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 7
      h1 Oscilaciones y ondas
    p.mb-5 Se denomina oscilación a una variación, perturbación o fluctuación en el tiempo de un medio o sistema. En física, química e ingeniería es el movimiento repetido en torno a una posición central, o posición de equilibrio. El estudio de las oscilaciones también se utiliza como punto de partida para describir las ondas. Una onda consiste en la propagación de una perturbación de alguna propiedad del espacio, por ejemplo, densidad, presión, campo eléctrico o campo magnético, implicando un transporte de energía sin transporte de materia. El espacio perturbado puede contener materia (aire, agua, etc.) o no (vacío).
    figure.mb-5(data-aos="zoom-in-up")
      img(src="@/assets/curso/77.jpg")
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
                    | Para ampliar la información en Arenas, F. C. (2020). Física universitaria. Jorge Sarmiento Editor - Universitas. Recuperado de capítulo 15 Acústica.
                    br
                    br

                    |Para profundizar en el tema puede acceder en el siguiente enlace, Serway, R. A. Jewett, J. W. y Cervantes González, S. R. (Ed.) (2015). Física para ciencias e ingeniería. Vol. 1 (9a. ed.). México, D. F., Cengage Learning. Capítulo 17 Ondas sonoras. 

                .col-sm-auto.d-flex.flex-column
                  a.boton.color-acento-botones.mb-3(:href="('https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/174517?page=320')" target="_blank")
                    span Enlace web
                    i.fas.fa-link
                  a.boton.color-acento-botones(:href="('https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/93202?page=540')" target="_blank")
                    span Enlace web
                    i.fas.fa-link

</template>

<script>
export default {
  name: 'Tema7',
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
