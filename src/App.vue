<script>
import AppHeader from './components/AppHeader.vue';
import MeetTheAuthor from './components/MeetTheAuthor.vue';
import Brands from './components/Brands.vue';
import Audiobook from './components/Audiobook.vue';

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
  },
}

</script>

<template>
  <AppHeader></AppHeader>
  <MeetTheAuthor></MeetTheAuthor>
  <Brands></Brands>
  <Audiobook></Audiobook>
</template>

<style lang="scss" scoped></style>
