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
    };
  },
}

</script>

<template>
  <div class="container">
    <ul>
      <!-- ciclo for per i link della navbar -->
      <li v-for="link in navList">{{ link }}</li>
      <li><i class="fa-solid fa-cart-shopping" style="color: #ffffff;"></i></li>
    </ul>
  </div>
</template>

<style scoped>
ul {
  display: flex;
  justify-content: flex-end;
  gap: 25px;
}

.container {
  background-color: black;
}
</style>
