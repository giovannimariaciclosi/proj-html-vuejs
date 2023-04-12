import { reactive } from "vue";

export const store = reactive({

  navList: [
    {
      text: "Home",
      active: true
    },
    {
      text: "About Me",
      active: false
    },
    {
      text: "Testimonials",
      active: false
    },
    {
      text: "My Blog",
      active: false
    },
    {
      text: "Meetups",
      active: false
    },
    {
      text: "Shop",
      active: false
    },
    {
      text: "Contact Me",
      active: false
    }
  ],

  slides: [
    {
      title: "Best-selling author and the most influential public intellectual in the western world right now.",
      source: "The New York Times"
    },
    {
      title: "Incredible, crazy, shocking, fantastic, absurd, speechless, the best of the best. Amazing!",
      source: "The Washington Post"
    },
    {
      title: "The most intellectual of intellectuals in the intellectual world, the most intellectual.",
      source: "The Intellectual"
    },
    {
      title: "Through his relentless pursuit of knowledge and intellectual curiosity, Damon a true visionary.",
      source: "Los Angeles Times"
    },
    {
      title: "Damon, the renowned intellectual, has revolutionized the way we think about the world.",
      source: "New York Post"
    },
    {
      title: "With his groundbreaking theories and insightful commentary, he remains a pillar of inspiration.",
      source: "Wall Street Journal"
    },
  ],

  activeSlideIndex: 0,

});