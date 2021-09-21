<template>
  <Header headerText="クエスト"/>
  <section>
    <div class="box">
      <h2>パンジー</h2>
      <p>スミレ科スミレ属の園芸植物</p>
      <img src="" alt="">
      <p>パンジーを発見し、撮影しよう。</p>
      <p>報酬：××マート 50円引きクーポン</p>
      <p>レア度：★★☆☆☆</p>
      <div class="button">
        <router-link to="/submit">
          <p>引き受ける</p>
        </router-link> 
      </div>
    </div>
  </section>
</template>

<script>
import Header from '@/components/header.vue'

export default {
  name: 'quest',
  components: {
    Header
  }
}
</script>

<style>

.button{
  border-radius: 50px;
  height: 50px;
}

</style>