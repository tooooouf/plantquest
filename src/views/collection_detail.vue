<template>
  <Header headerText="コレクション詳細"/>
  <section class="collection">
    <div class="box">
      <h2>パンジー</h2>
      <img src="@/assets/img/DSCF0675.jpg" alt="">
      <p>スミレ科スミレ属の園芸植物</p>
      <p>冬から春にかけて開花が始まる。寒さにとても強く、雪に埋もれても、寒さで凍っても損傷することなく暖かくなれば元通り活動を再開することができる。交配によってさまざまな色が存在する。日本では夏が暑すぎて枯れてしまうが、寒い地域では夏を越し、もう1年生きる多年草である。</p>
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