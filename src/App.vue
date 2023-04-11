<script>
import AppHeader from './components/AppHeader.vue';
import MeetTheAuthor from './components/MeetTheAuthor.vue';
import Brands from './components/Brands.vue';

export default {
  data() {
    return {
    }
  },

  components: {
    AppHeader,
    MeetTheAuthor,
    Brands
  },
}

</script>

<template>
  <AppHeader></AppHeader>
  <MeetTheAuthor></MeetTheAuthor>
  <Brands></Brands>
</template>

<style lang="scss" scoped></style>
