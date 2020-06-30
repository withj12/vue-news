<template>
    <div>
        <ul class="news-list">
        <li v-for="item in listItem" v-bind:key="item.id" class="post">
            <!-- 포인트 영역 -->
            <div class="points">{{ item.points || 0 }}</div>
            <!-- 기타정보 영역 -->
            <div>
            <!-- 타이틀 영역 -->
            <p class="news-title">
                <!-- 도메인 링크 News, Jobs-->
                <template v-if="item.domain">
                    <a v-bind:href="item.url" target="_blank">{{ item.title }}</a>
                </template>
                <!-- 질문상세정보 Ask -->
                <template v-else>
                    <router-link v-bind:to="`/item/${item.id}`">
                        {{ item.title }}
                    </router-link>
                </template>
            </p>
            <small class="link-text">
                {{ item.time_ago }} by 
                <router-link 
                    v-if="item.user"
                    v-bind:to="`/user/${item.user}`" class="link-text">{{ item.user }}</router-link>
                <a 
                     v-else
                     v-bind:href="item.url" target="_blank">
                    {{ item.domain }}
                </a>
            </small>
            </div>
        </li>
        </ul>
    </div>
</template>

<script>
export default {
    computed: {
        listItem() {
            return this.$store.state.list;
        }
    }
}
</script>

<style scoped>
.news-list {
  margin: 0;
  padding: 0;
}
.post {
  list-style: none;
  display: flex;
  margin: 10px 0;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.points {
  width: 80px;
  height: 60px;
  display: flex;      /* 수직중앙정렬 */ 
  align-items: center;
  justify-content: center;
  color: #42b883;
}
.news-title {
  margin: 0;
}
.link-text {
  color: #828282;
}
</style>