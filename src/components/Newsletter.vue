<script>
export default {
  name: "Newsletter",
  data() {
    return {

    };
  },
}
</script>
<template>
  <div class="main-container">
    <div class="container">
      <h2 class="title">Subscribe To My<br>Newsletter</h2>
      <div class="subtitle">BE NOTIFIED ABOUT BOOK SIGNING TOUR DATES</div>
      <div class="input-container">
        <input type="text" placeholder="Insert your email...*">
        <button class="btn-green">Subscribe</button>
      </div>
      <div class="text">Donec fringilla nunc eu turpis dignissim, at euismod sapien tincidunt.</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
// file scss con le variabili
@use "../variable" as *;

.main-container {
  background-image: url('../../public/img/banner-2.jpg');
  background-size: cover;
  background-position: center;
  text-align: center;

  .container {
    padding: 4em;
    width: 35%;

    .title {
      @include text-dm-serif-display-medium;
      color: white;
    }

    .subtitle {
      @include orange-text;
      padding-top: 1em;
    }

    .input-container {
      padding: 2em 0;
      display: flex;
      justify-content: center;
      gap: 15px;

      input {
        background-color: white;
        border: transparent;
        border-radius: 5px;
        padding: .6em 1.8em;
        color: black;
      }

      .btn-green {
        @include btn-green;
      }
    }

    .text {
      @include text-small;
      color: $light-grey;
    }
  }
}
</style>
