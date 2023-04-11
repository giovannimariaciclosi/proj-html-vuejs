<script>
import AppHeader from './components/AppHeader.vue';
import MeetTheAuthor from './components/MeetTheAuthor.vue';
import Brands from './components/Brands.vue';
import Audiobook from './components/Audiobook.vue';
import Testimonials from './components/Testimonials.vue';
import UpcomingEvents from './components/UpcomingEvents.vue';
import Newsletter from './components/Newsletter.vue';
import MoreAboutAuthor from './components/MoreAboutAuthor.vue';

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
    Testimonials,
    UpcomingEvents,
    Newsletter,
    MoreAboutAuthor
  },
}

</script>

<template>
  <AppHeader></AppHeader>
  <MeetTheAuthor></MeetTheAuthor>
  <Brands></Brands>
  <Audiobook></Audiobook>
  <Testimonials></Testimonials>
  <UpcomingEvents></UpcomingEvents>
  <Newsletter></Newsletter>
  <MoreAboutAuthor></MoreAboutAuthor>
</template>

<style lang="scss" scoped></style>
