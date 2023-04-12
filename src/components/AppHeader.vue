<script>

export default {
  name: "AppHeader",
  data() {
    return {

      // link della navbar
      navList: [
        "Home",
        "About Me",
        "Testimonials",
        "My Blog",
        "Meetups",
        "Shop",
        "Contact Me"
      ],

      //elemento on sale in position absolute
      saleInfo: {
        currency: "$",
        price: 39,
        status: "On Sale"
      }
    };
  },
}

</script>

<template>
  <div class="header-container">

    <!-- elementi position absolute demos e on sale -->
    <div class="floating-elements">
      <div class="demos">
        <i class="fa-solid fa-layer-group"></i>
        <span class="status">Demos</span>
      </div>
      <div class="on-sale">
        <span class="currency">{{ saleInfo.currency }}</span>
        <span class="price">{{ saleInfo.price }}</span>
        <span class="status">{{ saleInfo.status }}</span>
      </div>
    </div>
    <!-- /elementi position absolute demos e on sale -->



    <!-- elemento position absolute latest book release -->
    <div class="latest-book-release">
      <div class="info-container">
        <div class="left-section">
          <img class="latest-book" src="../../public/img/book-widget.png" alt="Latest Book">
        </div>
        <div class="right-section">
          <div class="info">Latest Book Release</div>
          <div class="title">D.VAUGHN AUTOBIOGRAPHY</div>
          <div class="text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo quisquam eligendi culpa sed a
            quos laboriosam perspiciatis!</div>
        </div>
      </div>

      <!-- bootstrap button group -->
      <div class="btn-group">
        <button type="button" class="btn">
          <i class="fa-brands fa-amazon"></i>
          <span>Buy On Amazon</span>
        </button>
        <button type="button" class="btn">
          <i class="fa-brands fa-apple"></i>
          <span>Buy On AppStore</span>
        </button>
      </div>
      <!-- /bootstrap button group -->

    </div>
    <!-- /elemento position absolute latest book release -->


    <div class="container">
      <img class="logo" src="../../public/img/author-logo-round.png" alt="Logo">
      <ul class="link-list">
        <!-- ciclo for per i link della navbar -->
        <li v-for="link in navList">{{ link }}</li>
        <li><i class="fa-solid fa-cart-shopping"></i></li>
      </ul>

      <div class="container">
        <div class="author-card">
          <h1 class="title">Damon Vaughn</h1>
          <div class="text">Best-selling author and the most influential public intellectual in the western world right
            now.
          </div>
          <div class="author"><i> - The New York Times</i></div>
          <div class="slider">
            <i class="fa-solid fa-arrow-left"></i>
            <i class="fa-solid fa-arrow-right"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
// file scss con le variabili
@use "../variable" as *;

.header-container {
  position: relative;
  // aggiungo immagine di sfondo con linear gradient dall'alto verso il basso
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)), url('../../public/img/hero-07-2x.jpg');
  background-size: cover;
  background-position: center;

  .floating-elements {

    position: absolute;
    top: 15%;
    right: 10px;

    display: flex;
    flex-direction: column;
    gap: 10px;

    .demos,
    .on-sale {
      height: 60px;
      width: 60px;
      position: relative;
      z-index: 2;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;


      background-color: white;
      border-radius: 8px;
      color: $blue;
      cursor: pointer;

      .fa-solid {
        font-size: 1.6em;
        padding-bottom: 10px;
      }

      .currency {
        position: absolute;
        top: 4px;
        left: 8px;
        color: $green;
      }

      .price {
        font-size: 1.8em;
        color: $green;
      }

      .status {
        font-size: .8em;
        margin-top: -7px;
      }

    }
  }

  .latest-book-release {
    position: absolute;
    bottom: 0;
    right: 0;

    width: 550px;
    background-color: white;

    padding: 2em 4em;
    z-index: 2;

    .info-container {
      display: flex;
      align-items: center;

      .left-section {
        min-width: 220px;

        img {
          width: 100%;
        }
      }

      .right-section {
        display: flex;
        flex-direction: column;
        gap: 10px;

        .info {
          @include text-dm-serif-display-small;
        }

        .title {
          @include orange-text;
        }

        .text {
          @include text-small;
          color: $dark-grey;
        }
      }
    }

    .btn-group {
      width: 100%;
      box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);

      button {
        border: 1px solid #a4d2c2;
        padding: .5em 2em;
        cursor: pointer;
        transition: border .3s ease;

        span {
          padding-left: .6em;
        }

        &:hover {
          border: 1px solid $green;
        }
      }
    }

    .button-container {
      display: flex;
      justify-content: center;

      .buy-button {
        padding: .5em 2em;
        background-color: transparent;
        color: black;
        border: 1px solid $green;
      }
    }
  }

  .container {
    position: relative;

    .logo {
      position: absolute;
      width: 180px;
      top: 0;
      left: -50px;
    }

    .link-list {
      display: flex;
      justify-content: flex-end;
      flex-wrap: wrap;
      gap: 25px;

      color: white;
      font-weight: 500;

      li {
        cursor: pointer;
        padding: 2em 0;
        position: relative;

        &:hover {

          color: $orange;

          &::before {

            content: '';
            width: 100%;
            height: 6px;
            background-color: $orange;
            position: absolute;
            top: 0;
          }
        }
      }

      li.active {
        color: $orange;
      }

      li.active::before {
        content: '';
        width: 100%;
        height: 6px;
        background-color: $orange;
        position: absolute;
        top: 0;
      }
    }
  }


  .author-card {
    max-width: 45%;
    display: flex;
    flex-direction: column;
    gap: 10px;

    padding-top: 5em;
    padding-bottom: 8em;

    .title {
      @include title-kristi;
    }

    .text {
      @include text-dm-serif-display-big;
      color: white;
    }

    .author {
      color: $light-grey;
      font-size: 1.2em;
    }

    .slider {
      color: white;
      font-size: 0.8em;
      padding-top: 1em;

      display: flex;
      gap: 2px;

      .fa-solid {
        padding: 15px 15.8px;
        background-color: #0a0a0ad8;
        border-radius: 2px;
        cursor: pointer;

        transition: opacity .1s ease;

        &:hover {
          opacity: .5;
        }
      }
    }
  }
}
</style>
