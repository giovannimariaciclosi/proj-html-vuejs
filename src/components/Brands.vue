<script>


export default {
  name: "Brands",
  data() {
    return {
      brandsPath: [
        {
          alt: "Ebay Logo",
          path: "ebay-logotan-2x.png"
        },
        {
          alt: "Audible Logo",
          path: "audible-logotan-2x.png"
        },
        {
          alt: "Barnes&Nobles Logo",
          path: "bb-logotan-2x.png"
        },
        {
          alt: "Kindle Fire Logo",
          path: "kindlefire-logotan-2x.png"
        },
      ],
    };
  },
}

</script>

<template>
  <div class="main-container">
    <div class="container">
      <img class="brands" v-for="brandPath in brandsPath" :src="'../../public/img/' + brandPath.path"
        :alt="brandPath.alt">
    </div>
  </div>
</template>

<style lang="scss" scoped>
// file scss con le variabili
@use "../variable" as *;

.main-container {
  background-color: $cream;

  .container {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
    gap: 50px;

    .brands {
      max-width: 200px;
      padding: 3em 0;
    }
  }
}
</style>
