<template>
  <div class="user-container">
      <div>
          <i class="fa fa-user"></i>
      </div>
      <div class="user-description">
          <!-- 상위 컴포넌트에서 정의할 영역 slot테그 -->
          <slot name="username"></slot>
          <div class="time">
              <slot name="time"></slot>
              <slot name="karma"></slot>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  props: {
    info: Object
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