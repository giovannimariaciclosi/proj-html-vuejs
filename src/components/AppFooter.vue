<script>

export default {
  name: "AppFooter",
  data() {
    return {
      links: [
        {
          title: "About Me",
          text: "Vivamus suscipit tortor eget felis porttitor volutpat. Nulla quis lorem ut libero malesuada feugiat. Vivamus suscipit tortor eget felis porttitor volutpat."
        },
        {
          title: "Useful Links",
          text: ["Latest Books", "Upcoming Events", "Recent Articles", "Business Enquiries", "Visit My Foundation"]
        },
        {
          title: "Contact Info",
          text: ["63 E. Studebaker Street Bolingbrook, IL 60440", "Phone: (800) 000-0000", "Mobile: (800) 000-0000", "Email: info@your-company.com"]
        },
      ],
    };
  },
}

</script>

<template>
  <div class="main-container">

    <!-- elemento absolute per tornare in cima alla pagina -->
    <a href="#"><i class="fa-solid fa-chevron-up go-up"></i></a>
    <!-- elemento absolute per tornare in cima alla pagina -->

    <div class="header-container">
      <div class="links-container">
        <a href="#">
          <img class="logo" src="../../public/img/author-logo-round.png" alt="Logo">
        </a>

        <!-- about me -->
        <div class="links">
          <div class="title">{{ links[0].title }}</div>
          <div class="text">{{ links[0].text }}</div>
        </div>
        <!-- /about me -->

        <!-- useful links -->
        <div class="links">
          <div class="title">{{ links[1].title }}</div>
          <div class="list-container">
            <a v-for="link in links[1].text" class="text"><i class="fa-solid fa-chevron-right"></i> <span>{{ link
            }}</span></a>
          </div>
        </div>
        <!-- useful links -->

        <!-- contact info -->
        <div class="links">
          <div class="title">{{ links[2].title }}</div>
          <div class="list-container">
            <a v-for="link in links[2].text" class="text">{{ link
            }}</a>
          </div>
          <div class="socials">
            <a><i class="fa-brands fa-facebook"></i></a>
            <a><i class="fa-brands fa-twitter"></i></a>
            <a><i class="fa-brands fa-instagram"></i></a>
            <a> <i class="fa-brands fa-linkedin-in"></i></a>
            <a><i class="fa-brands fa-youtube"></i></a>
          </div>
        </div>
        <!-- /contact info -->

      </div>
    </div>
    <div class="container">
      <div class="copyright">@ Copyright 2012 - 2020 | Avada Theme by <a>ThemeFusion</a> | All
        Rights Reserved |
        Powered by <a>WordPress</a></div>
    </div>

  </div>
</template>

<style lang="scss" scoped>
// file scss con le variabili
@use "../variable" as *;

.main-container {
  position: relative;
  // aggiungo immagine di sfondo con linear gradient dall'alto verso il basso
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7)), url('../../public/img/hero-07-2x.jpg');
  background-size: cover;
  background-position: top;

  padding: 4em;

  .go-up {
    position: absolute;
    bottom: 0;
    right: 50px;
    color: white;
    background-color: #2f2f2f;
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
    padding: 12px 20px;
    cursor: pointer;

    transition: opacity .1s ease;

    &:hover {
      opacity: .7;
    }
  }

  .header-container {
    display: flex;
    gap: 6em;

    max-width: 1440px;
    margin: 0 auto;

    .logo {
      height: 130px;
    }

    .links-container {
      display: flex;
      flex-flow: row wrap;
      justify-content: space-between;
      gap: 4em;
      padding-bottom: 6em;

      .links {
        display: flex;
        flex-direction: column;
        gap: 1.5em;

        max-width: 25%;
        min-width: 150px;
        color: white;

        .title {
          @include text-dm-serif-display-small;
          font-size: 1.2em;
          // trasformo il testo in maiuscolo
          text-transform: uppercase;
        }

        .text {
          @include text-small;
          color: white;
          text-decoration: none;

          display: flex;
          align-items: center;
          gap: 1.2em;

          span {

            &:hover {
              text-decoration: underline;
            }
          }
        }

        .list-container {
          display: flex;
          flex-direction: column;
          gap: 1em;
        }

        .socials {
          display: flex;
          align-items: center;
          gap: 1em;
          padding-top: .5em;

          a {
            transition: opacity .1s linear;

            &:hover {
              opacity: .3;
            }
          }
        }

      }
    }
  }

  .container {
    .copyright {
      @include text-small;
      text-align: center;
      color: $light-grey;

      a {
        color: white;
        font-weight: 500;
      }
    }
  }


}
</style>
