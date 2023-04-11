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
      <div class="title">Subscribe To My<br>Newsletter</div>
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
.main-container {
  background-image: url('../../public/img/banner-2.jpg');
  background-size: cover;
  background-position: center;
  text-align: center;

  .container {
    padding: 4em;
    width: 35%;

    .title {
      font-size: 1.6em;
      font-weight: bold;
      color: white;
    }

    .subtitle {
      padding-top: 1em;
      color: #f4b429;
      font-size: .9em;
      font-weight: 500;
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
        padding: .6em 1.8em;
        background-color: #49a987;
        border: transparent;
        border-radius: 5px;
        font-weight: 500;
        cursor: pointer;

        transition: background-color .3s ease;

        &:hover {
          background-color: #357f60;
        }
      }
    }

    .text {
      color: #c6c4c4;
      font-size: 0.9em;
    }
  }
}
</style>
