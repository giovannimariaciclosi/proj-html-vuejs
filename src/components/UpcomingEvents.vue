<script>
export default {
  name: "UpcomingEvents",
  data() {
    return {
      upcomingEvents: [
        {
          image: "event-05.jpg",
          title: "Chicago Book Signing",
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam adipisci quidem expedita maxime voluptatibus fugit quod accusamus assumenda."
        },
        {
          image: "event-04.jpg",
          title: "Meet & Greet With Amanda",
          text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, accusantium. Odio odit eligendi pariatur ea, ipsam laborum iusto sapiente soluta laboriosam."
        },
        {
          image: "event-07.jpg",
          title: "Open Book: Dialogues",
          text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quisquam sunt eos. Provident maxime soluta sapiente optio sint."
        },
      ],
    };
  },
}
</script>
<template>
  <div class="main-container">
    <div class="container">
      <div class="title">Upcoming Events</div>
      <div class="subtitle">MEET THE AUTHOR IN PERSON</div>

      <div class="card-container">
        <div v-for="event in upcomingEvents" class="card">
          <img :src="'../../public/img/' + event.image" :alt="event.title">
          <div class="card-inner">
            <div class="card-title">{{ event.title }}</div>
            <hr>
            <div class="card-subtitle">{{ event.text }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main-container {
  background-color: #fef7e9;

  .container {
    padding: 4em 1em;
    text-align: center;

    .title {
      font-size: 1.6em;
      font-weight: bold;
    }

    .subtitle {
      padding-top: .5em;
      color: #f4b429;
      font-size: .9em;
    }

    .card-container {
      padding-top: 2em;
      display: flex;
      flex-flow: row wrap;
      justify-content: space-between;
      gap: 30px;

      .card {
        width: calc(100% / 3 - 30px);
        border: transparent;

        display: flex;
        flex-direction: column;
        gap: 10px;

        .card-inner {
          padding: 1.3em;

          .card-title {
            font-size: 1.3em;
          }

          .card-subtitle {
            color: #333333;
            font-size: .9em;
          }
        }
      }
    }
  }
}
</style>
