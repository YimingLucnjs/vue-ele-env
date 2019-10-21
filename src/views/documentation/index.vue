<template>
  <AbnormalTemplate />
</template>
<script>
import AbnormalTemplate from '@/template/abnormal.temp.vue'
export default {
  name: 'KdHistoryData',
  components: { AbnormalTemplate },
  data() {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
.documentation-container {
  margin: 50px;
  display: flex;
  flex-wrap: wrap;
  .document-btn {
    margin-left: 50px;
    display: block;
    cursor: pointer;
    background: black;
    color: white;
    height: 60px;
    width: 200px;
    margin-bottom: 16px;
    line-height: 60px;
    font-size: 20px;
    text-align: center;
  }
}
</style>
