<template>
  <div class="category-card">
    <h3 class="category-title">{{ title }}</h3>
    <slot name="center"></slot>
    <slot name="footer"></slot>
  </div>
</template>

<script>
export default {
  name: 'Catagory',
  props: {
    title: {
      type: String,
      required: true,
      default: '分类标题'
    }
  }
};
</script>

<style scoped>
.category-card {
  background-color: #f8f9fa;
  border-radius: 8px;
  width: 280px;
  min-height: 350px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  color: #333;
}

.category-title {
  color: #42b983;
  background: transparent;
  text-align: center;
  margin-top: 0;
  padding-bottom: 10px;
  border-bottom: 2px solid #eee;
}

/* 图片和视频样式已移至App.vue的scoped样式中 */
</style>