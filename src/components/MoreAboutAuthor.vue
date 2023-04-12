<script>
export default {
  name: "MoreAboutAuthor",
  data() {
    return {
      cards: [
        {
          image: "box-1.jpg",
          title: "About Me",
          text: "Vestibulum ante ipsum primis",
        },
        {
          image: "box-4.jpg",
          title: "My Latest Book",
          text: "Vestibulum ante ipsum primis",
        },
        {
          image: "box-3.jpg",
          title: "Book Signing",
          text: "Vestibulum ante ipsum primis",
        },
      ],
    };
  },
}
</script>
<template>
  <div class="container">
    <h2 class="title">Dig A Little Deeper Into Damon Vaughn</h2>
    <div class="subtitle">FIND OUT MORE ABOUT THE AUTHOR HIMSELF</div>
    <div class="cards-container">
      <div v-for="card in cards" class="cards">
        <div class="background"></div>
        <img :src="'../../public/img/' + card.image" :alt="card.title">
        <div class="card-inner">
          <div class="card-title">{{ card.title }}</div>
          <hr class="card-divisor">
          <div class="card-text">{{ card.text }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
// file scss con le variabili
@use "../variable" as *;

.container {
  padding: 4em;
  text-align: center;

  .title {
    @include text-dm-serif-display-medium;
  }

  .subtitle {
    @include green-text;
    padding-top: 0.5em;
  }

  .cards-container {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    gap: 30px;

    padding-top: 3em;

    .cards {
      width: calc(100% / 3 - 30px);
      height: 400px;

      position: relative;
      overflow: hidden;
      border-bottom-right-radius: 10%;
      cursor: pointer;

      transition: all .4s linear;

      &:hover {
        box-shadow: 10px 10px 40px rgba(0, 0, 0, 0.4);
        transform: scale(1.05);
      }

      .background {
        height: 100%;
        width: 100%;
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, .7));

        position: absolute;

      }

      img {
        height: 100%;

      }

      .card-inner {
        position: absolute;
        bottom: 2em;
        left: 0;
        right: 0;

        .card-title {
          color: white;
          font-size: 1.4em;
          font-weight: 500;
        }

        .card-divisor {
          width: 50px;
          border: 1px solid #8f8e8d;
          margin: .5em auto;
        }

        .card-text {
          @include orange-text;
          font-weight: 400;
        }
      }
    }
  }
}
</style>
