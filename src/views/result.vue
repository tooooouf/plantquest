<template>
  <Header headerText="クエスト結果"/>
  <section class="result">
    <div class="box">
      <h2>パンジー</h2>
      <img :src="$store.state.url" alt="" class="resultImg">
      <p>スミレ科スミレ属の園芸植物</p>
      <p>冬から春にかけて開花が始まる。寒さにとても強く、雪に埋もれても、寒さで凍っても損傷することなく暖かくなれば元通り活動を再開することができる。交配によってさまざまな色が存在する。日本では夏が暑すぎて枯れてしまうが、寒い地域では夏を越し、もう1年生きる多年草である。</p>
    </div>
  </section>
  <section class="getcoupon">
    <div class="congrat">
      <h2>クーポンゲット</h2>
      <h2>おめでとう！！！</h2>
    </div>
    <img src="@/assets/img/couponticket.svg" alt="">
    <div class="reward">
      <h3>××マート</h3>
      <h3>50円引き</h3>
    </div>
  </section>
</template>

<script>

import Header from '@/components/header.vue'

export default {
  components:{
    Header
  }
}
</script>

<style scoped>

.couponImg{
  width: 200px;
}

.getcoupon{
  height: auto;
}

.resultImg{
  width: 100%;
}

</style>