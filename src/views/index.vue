<template>
  <header>
    <div class="headerContents">
      <h2 class="headerText">Plant Quest</h2>
    </div>
  </header>
  <section class="season">
    <div class="box">
      <img src="@/assets/img/IMG_20211020_123747.jpg" alt="" class="seasonPhoto">
      <h2>季節の植物</h2>
      <h3>ヒャクニチソウ (百日草, ジニア)</h3>
      <p>キク科ヒャクニチソウ属の植物。</p>
      <p>メキシコ高原原産で強い日光と高温多湿を好む。花の色もさまざま。夏から秋にかけて長いこと花が咲くことからその名がついた。また、浦島草とも呼ばれる。</p>
    </div>
  </section>
  <section class="quest">
    <div class="box">
      <h2>今日のクーポンクエスト</h2>
      <div class="questList">
        <div class="questCard" v-for="(quest, key) in quests" :key="key">
          <router-link class="questLink" to="/quest"/>
          <div class="imgWrap">
            <img class="questImg" v-bind:src="quest.plantImage" alt="">
          </div>
          <div class="questDesctiption">
            <h3 class="plantName">{{quest.plantName}}</h3>
            <p>{{quest.plantSummery}}</p>
            <p>報酬：{{quest.questReward}}</p>
            <p>レア度：{{quest.questRarity}}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'index',

  data(){
    return{
      quests: [
        {
          plantName: 'パンジー',
          plantImage: require('@/assets/img/DSCF0676.jpg'),
          plantSummery: 'スミレ科スミレ属の園芸植物',
          questSummery: 'パンジーを発見し、撮影しよう。',
          questReward: '××マート　50円引クーポン',
          questRarity: '★★☆☆☆',
        },
        {
          plantName: 'イチョウ',
          plantImage: require('@/assets/img/DSCF0807.jpg'),
          plantSummery: 'イチョウ科イチョウ属の落葉高木',
          questSummery: 'イチョウを発見し、撮影しよう。',
          questReward: '△△ショップ　20円引クーポン',
          questRarity: '★☆☆☆☆',
        },
        {
          plantName: 'ネムノキ',
          plantImage: require('@/assets/img/DSCF0950.jpg'),
          plantSummery: 'マメ科ネムノキ亜科の落葉高木',
          questSummery: 'ネムノキを発見し、撮影しよう。',
          questReward: '○○レストラン　10%引クーポン',
          questRarity: '★★★★★',
        }
      ]
    }
  },
}
</script>

<style scoped>
header{
  display: block;
  text-align: start;
}
</style>

<style>

section{
  padding: 0 3% 0 3%;
}

.box{
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 10px;
  margin-bottom: 20px;
  padding: 10px;
  box-sizing: border-box;
  width: 100%;
  background-color: rgba(221, 221, 221, 0.788);
}

.questList{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.questCard{
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: 150px;
  border-bottom: rgb(146, 146, 146) solid 1px;
  padding: 10px 0 10px 0;
}

.questLink{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.questDesctiption{
  width: 65%;
  margin-left: 5px;
}

.imgWrap{
  border-radius: 10px;
  width: 100px;
  height: 100px;
  overflow: hidden;
}

.questImg{
  height: 100%;
}

.seasonPhoto{
  width: 100%;
}

</style>
