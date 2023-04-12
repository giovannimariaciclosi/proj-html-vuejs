<script>

export default {
  name: "Audiobook",
  data() {
    return {
      info: [
        {
          title: "New Audiobook",
          subtitle: "NO TIME TO READ? NO PROBLEM. LISTEN TO IT",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet.",
          images: [
            {
              path: "audible-logo.png",
              alt: "Audible Logo"
            },
            {
              path: "bn-logo-tall.png",
              alt: "Barnes&Noble Logo"
            },
            {
              path: "kindle-logo-tall.png",
              alt: "Kindle Fire Logo"
            },
          ],
        },
      ],
    };
  },
}

</script>

<template>
  <div class="main-container">
    <div class="container">
      <img class="phone-photo" src="../../public/img/audible-app-2x.png" alt="Audible app photo">
      <div class="right-section">
        <h2 class="title">{{ info[0].title }}</h2>
        <div class="subtitle">{{ info[0].subtitle }}</div>
        <div class="text">{{ info[0].text }}</div>
        <div class="img-container">
          <!-- ciclo for sull'array images dentro a info -->
          <img v-for="image in info[0].images" :src="'../../public/img/' + image.path" :alt="image.alt">
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
// file scss con le variabili
@use "../variable" as *;

.main-container {
  background-image: url('../../public/img/banner.jpg');
  background-size: cover;
  background-position: center;

  .container {
    padding-top: 4em;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 100px;

    .phone-photo {
      max-width: 400px;
    }

    .right-section {
      max-width: 33%;
      text-align: center;

      display: flex;
      flex-direction: column;
      gap: 15px;

      .title {
        @include text-dm-serif-display-medium;
        color: white;
      }

      .subtitle {
        @include orange-text;
      }

      .text {
        @include text-small;
        color: $light-grey;
      }

      .img-container {
        display: flex;
        flex-flow: row wrap;
        gap: 30px;
        align-items: center;
        justify-content: center;

        img {
          width: 100px;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
