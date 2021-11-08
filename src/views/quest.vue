<template>
  <Header headerText="クエスト"/>
  <section>
    <div class="box">
      <h2>パンジー</h2>
      <p>スミレ科スミレ属の園芸植物</p>
      <img src="@/assets/img/DSCF0676.jpg" alt="">
      <p>パンジーを発見し、撮影しよう。</p>
      <p>報酬：××マート 50円引きクーポン</p>
      <p>レア度：★★☆☆☆</p>
      <Button linkText="引き受ける" link="submit" @click="clearUrl"/>
    </div>
  </section>
</template>

<script>
import Header from '@/components/header.vue'
import Button from '@/components/button.vue'

export default {
  name: 'quest',
  components: {
    Header,
    Button,
  },
  methods:{
    clearUrl(){
      this.$store.state.url = ''
    }
  }
}
</script>

<style scoped>

.box{
  align-items: center;
}

img{
  width: 100%;
}

</style>