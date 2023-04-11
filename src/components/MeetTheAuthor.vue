<script>
import { looseIndexOf } from '@vue/shared';


export default {
  name: "MeetTheAuthor",
  data() {
    return {
      info: {
        title: "More About Damon Vaughn",
        text: 'Damon Vaughn is a professor of psychology at the University of Toronto, a clinical psychologist and the author of the multi-milion copy bestseller "The story of my life."'
      },
    };
  },
}

</script>

<template>
  <div class="container">
    <div class="title">{{ info.title }}</div>
    <div class="text">{{ info.text }}</div>
    <button class="btn-green">Meet The Author</button>
  </div>
</template>

<style lang="scss" scoped>
.container {
  text-align: center;
  padding-top: 4em;
  padding-bottom: 4em;

  .title {
    font-family: 'Kristi', cursive;
    color: #f4b429;
    font-size: 5em;
    margin: 0;
  }

  .text {
    font-size: 1.6em;
  }

  .btn-green {
    padding: .6em 1.8em;
    background-color: #49a987;
    border: transparent;
    border-radius: 5px;
    font-weight: 500;
    cursor: pointer;

    margin-top: 3em;

    transition: background-color .3s ease;

    &:hover {
      background-color: #357f60;
    }
  }
}
</style>
