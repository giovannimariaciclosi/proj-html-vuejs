<script>
import AppHeader from './components/AppHeader.vue';
import MeetTheAuthor from './components/MeetTheAuthor.vue';
import Brands from './components/Brands.vue';
import Audiobook from './components/Audiobook.vue';
import Testimonials from './components/Testimonials.vue';

export default {
  data() {
    return {
    }
  },

  components: {
    AppHeader,
    MeetTheAuthor,
    Brands,
    Audiobook,
    Testimonials
  },
}

</script>

<template>
  <AppHeader></AppHeader>
  <MeetTheAuthor></MeetTheAuthor>
  <Brands></Brands>
  <Audiobook></Audiobook>
  <Testimonials></Testimonials>
</template>

<style lang="scss" scoped></style>
