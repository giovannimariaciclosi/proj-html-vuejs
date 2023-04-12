<script>

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
    <h2 class="title">{{ info.title }}</h2>
    <div class="text">{{ info.text }}</div>
    <button class="btn-green">Meet The Author</button>
  </div>
</template>

<style lang="scss" scoped>
// file scss con le variabili
@use "../variable" as *;

.container {
  text-align: center;
  padding: 4em 4em;

  .title {
    @include title-kristi;
  }

  .text {
    font-size: 1.4em;
  }

  .btn-green {
    @include btn-green;
    margin-top: 3em;
  }
}
</style>
