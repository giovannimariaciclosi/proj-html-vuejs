<script>
export default {
  name: "Testimonials",
  data() {
    return {
      testimonialsLong: {
        title: "Best Author Of His Generation",
        subtitle: "This book will change your perspective on life",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit dolorum facere autem impedit tempora sapiente velit odit optio consequatur, nostrum obcaecati nulla nesciunt error perspiciatis ea quo ad voluptates in.",
        subtext: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem fugiat fugit voluptatem eum aliquid itaque cum. Impedit accusantium, praesentium tempore esse quis, necessitatibus explicabo deleniti aliquam perspiciatis at iste culpa.",
        author: {
          imagePath: "nytimes-logo-white-xsmall.png",
          authorName: "Justine Kilpatrick,",
          authorNewspaper: "The New York Times",
        }
      },

      testimonialsShort: [
        {
          title: "A True Masterpiece, Bravo!",
          text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste nostrum reiciendis atque ipsum ratione repudiandae sed maiores sequi accusamus consequuntur unde, assumenda magni consequatur distinctio nihil architecto facilis deleniti? Minima?",
          author: {
            imagePath: "theguardian-xsmall.png",
            authorName: "Gerald Hendley,",
            authorNewspaper: "The Guardian",
          },
        },
        {
          title: "A Unique View On The World",
          subtitle: "This book will change your perspective on life",
          text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam praesentium dolorem cupiditate harum sint! Iusto facere odit omnis inventore et nobis aspernatur, ducimus tenetur optio dignissimos aliquid sint quibusdam fuga.",
          author: {
            imagePath: "globe-xsmall.png",
            authorName: "Mary Maxey,",
            authorNewspaper: "The Globe And Mail",
          },
        },
      ],
    };
  },
}
</script>

<template>
  <div class="container">
    <!-- testimonial top -->
    <div class="testimonial-top">
      <div class="top-left">
        <h2 class="title">
          What The Critics Say
        </h2>
        <div class="subtitle">
          TESTIMONIALS FROM AROUND THE WORLD
        </div>
      </div>
      <div class="top-right">
        <button class="btn-orange">Read All Testimonials</button>
      </div>
    </div>
    <!-- /testimonial top -->

    <!-- testimonial bottom -->
    <div class="testimonial-bottom">

      <!-- bottom left -->
      <div class="bottom-left">
        <div class="title">{{ testimonialsLong.title }}</div>
        <hr>
        <div class="subtitle">{{ testimonialsLong.subtitle }}</div>
        <div class="text">{{ testimonialsLong.text }}</div>
        <div class="text">{{ testimonialsLong.subtext }}</div>
        <div class="author-container">
          <img :src="'../../public/img/' + testimonialsLong.author.imagePath"
            :alt="testimonialsLong.author.authorNewspaper">
          <span class="author-name">{{ testimonialsLong.author.authorName }}</span>
          <span class="author-newspaper">{{ testimonialsLong.author.authorNewspaper }}</span>
        </div>
      </div>
      <!-- /bottom left -->

      <!-- bottom right -->
      <div class="bottom-right">
        <div v-for="testimonial in testimonialsShort" class="testimonial-card">
          <div class="card-top">
            <div class="title">{{ testimonial.title }}</div>
            <div class="text">{{ testimonial.text }}</div>
          </div>
          <div class="card-bottom">
            <img :src="'../../public/img/' + testimonial.author.imagePath" :alt="testimonial.author.authorNewspaper">
            <span class="author-name">{{ testimonial.author.authorName }}</span>
            <span class="author-newspaper">{{ testimonial.author.authorNewspaper }}</span>
          </div>
        </div>
      </div>
      <!-- /bottom right -->
    </div>
    <!-- /testimonial bottom -->
  </div>
</template>

<style lang="scss" scoped>
// file scss con le variabili
@use "../variable" as *;

.container {
  padding: 4em 4em;

  // testimonial top
  .testimonial-top {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .top-left {

      .title {
        @include text-dm-serif-display-medium;
        padding-bottom: .5em
      }

      .subtitle {
        @include green-text;
      }
    }

    .top-right {
      .btn-orange {
        @include btn-orange;
        padding: .6em 2.5em;
      }
    }
  }

  // /testimonial top

  // testimonial bottom
  .testimonial-bottom {
    display: flex;
    padding-top: 2em;
    gap: 3em;

    // bottom left
    .bottom-left {
      width: 60%;

      background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, .6)), url('../../public/img/testimonial2-2x.jpg');
      background-size: cover;
      background-position: center;

      padding: 6em 4em;

      display: flex;
      flex-direction: column;
      gap: 20px;

      color: white;
      border-bottom-right-radius: 15%;
      cursor: pointer;

      transition: all .3s linear;

      &:hover {
        box-shadow: 10px 10px 40px rgba(0, 0, 0, 0.4);
        transform: scale(1.03);
      }

      .title {
        @include text-dm-serif-display-big;
      }

      .subtitle {
        font-size: 1.1em;
        font-weight: 500;
      }

      .author-container {
        font-weight: 500;

        img {
          padding-right: 1em;
        }

        .author-newspaper {
          color: $green;
          padding-left: .2em;
        }
      }
    }

    // /bottom left

    // bottom right
    .bottom-right {
      display: flex;
      flex-direction: column;
      gap: 3em;

      width: 40%;

      .testimonial-card {

        .card-top {
          background-color: $cream;
          padding: 3em 2em;
          text-align: center;
          cursor: pointer;
          transition: all .3s linear;

          &:hover {
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
            transform: scale(1.03);
          }

          .title {
            @include text-dm-serif-display-small;
            padding-bottom: .5em;
          }

          .text {
            @include text-small;
            color: $grey-on-cream;
          }
        }

        .card-bottom {
          padding-top: .5em;

          img {
            padding-right: 2em;
          }

          .author-name {
            font-weight: 500;
            color: $grey-on-cream;

          }

          .author-newspaper {
            padding-left: .2em;
          }
        }
      }
    }

    // /bottom right
  }

  // /testimonial bottom
}
</style>
