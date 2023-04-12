<script>
export default {
  name: "RecentArticles",
  data() {
    return {
      articleLong: {
        image: "20-Tips-scaled.jpg",
        title: "20 Creativity Tips",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, consectetur soluta rerum, molestias totam enim minus necessitatibus.",
        infos: {
          author: "admin",
          date: "October 24th, 2019",
          categories: "Event, Tips & Tricks"
        },
      },

      articleShort: [
        {
          image: "thumb-13-2x-700x441.jpg",
          title: "What's On Your Booklist?",
          infos: {
            date: "October 24th, 2019",
            comments: 0
          },
        },
        {
          image: "thumb-08-2x-700x441.jpg",
          title: "Istanbul Travel Guide",
          infos: {
            date: "October 24th, 2019",
            comments: 0
          },
        }
      ],

    };
  },
}
</script>
<template>
  <div class="main-container">
    <div class="container">
      <!-- articles top -->
      <div class="articles-top">
        <div class="top-right">
          <h2 class="title">Recent Articles</h2>
          <div class="subtitle">READ THE LATEST ENTRIES</div>
        </div>
        <div class="top-left">
          <div class="btn-orange">All Articles</div>
        </div>
      </div>
      <!-- /articles top -->

      <!-- articles bottom -->
      <div class="articles-bottom">
        <!-- bottom left -->
        <div class="bottom-left">
          <img :src="'../../public/img/' + articleLong.image" :alt="articleLong.title">
          <div class="title-container">
            <div class="title">{{ articleLong.title }}</div>
            <span class="text-grey">By
              <span class="text-black">{{ articleLong.infos.author }}</span>
              | {{ articleLong.infos.date }} | Categories: <span class="text-black">{{ articleLong.infos.categories
              }}</span></span>
          </div>
          <div class="subtitle">{{ articleLong.text }}</div>
        </div>
        <!-- /bottom left -->

        <!-- bottom right -->
        <div class="bottom-right">
          <div v-for="article in articleShort" class="card">
            <img :src="'../../public/img/' + article.image" :alt="article.title">
            <div class="text-container">
              <div class="title">{{ article.title }}</div>
              <span class="text-grey">{{ article.infos.date }} | <span class="text-black">{{ article.infos.comments
              }}</span> Comments</span>
            </div>
          </div>
        </div>
        <!-- /bottom right -->
      </div>
      <!-- /articles bottom -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../variable" as *;

.main-container {
  background-color: $cream;

  .container {
    padding: 4em;

    // articles top
    .articles-top {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .top-right {

        .title {
          @include text-dm-serif-display-medium;
        }

        .subtitle {
          @include green-text;
          padding-top: 0.5em;
        }
      }

      .top-left {

        .btn-orange {
          @include btn-orange;
          padding: .6em 4em;
        }
      }
    }

    // /articles top

    // articles bottom
    .articles-bottom {
      display: flex;
      gap: 3em;
      padding-top: 3em;

      // bottom left
      .bottom-left {
        background-color: white;
        width: 65%;

        padding: 2em;
        display: flex;
        flex-direction: column;
        gap: 2em;
        cursor: pointer;

        img {
          width: 100%;
        }

        .title-container {
          .title {
            font-size: 1.3em;
            font-weight: 500;
            padding-bottom: .1em;
          }

          .text-grey {
            font-size: .9em;
            color: $dark-grey;

            .text-black {
              color: black;
            }
          }
        }

        .subtitle {
          color: $dark-grey;
        }
      }

      // /bottom left

      // bottom right
      .bottom-right {
        display: flex;
        flex-direction: column;
        gap: 2em;
        padding: 2em;
        background-color: white;
        width: 35%;

        .card {
          border: transparent;
          cursor: pointer;

          &:hover .text-container {
            opacity: 0;
          }

          &:hover img {
            transform: scale(1.12);
          }

          img {
            transition: transform .3s ease;

          }

          .text-container {
            transition: opacity .2s linear;

            .title {
              font-size: 1.3em;
              font-weight: 500;
              padding-bottom: .1em;
              padding-top: .5em;
            }

            .text-grey {
              font-size: .9em;
              color: $dark-grey;

              .text-black {
                color: black;
              }
            }
          }
        }
      }

      // /bottom right
    }

    // /articles bottom
  }
}
</style>
