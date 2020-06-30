<template>
  <div>
    <section>
      <user-profile v-bind:info="fetchedItem">
        <router-link slot="username" v-bind:to="`/user/${fetchedItem.user}`">{{ fetchedItem.user }}</router-link>
        <template slot="time">{{ 'Posted ' + fetchedItem.time_ago }}</template>
      </user-profile>
    </section>
    <section>
      <h2>{{ fetchedItem.title }}</h2>
    </section>
    <section>
      <!-- 질문 댓글 -->
      <div v-html="fetchedItem.content"></div>
    </section>
  </div>
</template>

<script>
import UserProfile from "../components/UserProfile.vue";
import { mapGetters } from 'vuex';

export default {
  components: {
    UserProfile, 
  }, 
  computed: {
    // itemInfo() {
    //   console.log(this.$store.state.item);      
    //   return this.$store.state.item;
    // }, 
    // itemInfo() {
    //   return this.$store.state.item;
    // }, 
    // vuex의 헬퍼함수, store/index.js
    ...mapGetters([
      'fetchedItem'
    ])
  }, 

  created() {
    const itemId = this.$route.params.id;
    // console.log(itemId);
    // store/acton.js
    this.$store.dispatch('FETCH_ITEM', itemId);
  }, 

}
</script>

<style scoped>
.user-container {
  display: flex;
  align-items: center;
  padding: 0.5rem;
}
.fa-user {
  font-size: 2.4rem;
}
.user-description {
  padding-left: 8px;
}
.time {
  font-size: 0.7em;
}
</style>