<template>
  <header>
    <div class="headerContents">
      <h2 class="headerText">Plant Quest</h2>
    </div>
  </header>
  <section class="quest">
    <div class="box">
      <h2>今日のクーポンクエスト</h2>
      <div class="questList">
        <div class="questCard" v-for="(quest, key) in quests" :key="key">
          <router-link class="questLink" to="/quest"/>
          <img class="questImg" v-bind:src="quest.plantImage" alt="">
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
  <section class="">
    <div class="box">
      <h2>季節の植物</h2>
      <img src="" alt="">
      <h3>紫陽花</h3>
      <p>アジサイ科アジサイ属の落葉低木。</p>
      <p>6月から7月にかけて開花する。日本原産で原種はガクアジサイ。よく見る花が球形のものは改良されたホンアジサイである。アジサイには毒性があるので取り扱いには気をつける必要がある。アジサイは生えている土のpHによって花の色を変える。pHが酸性なら青、アルカリ性なら赤になる。花の色が良く変わることから「七変化」や「八仙花」とも呼ばれる。</p>
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
          plantImage: null,
          plantSummery: 'スミレ科スミレ属の園芸植物',
          questSummery: 'パンジーを発見し、撮影しよう。',
          questReward: '××マート　50円引クーポン',
          questRarity: '★★☆☆☆',
        },
        {
          plantName: 'イチョウ',
          plantImage: null,
          plantSummery: '',
          questSummery: 'イチョウを発見し、撮影しよう。',
          questReward: '△△ショップ　20円引クーポン',
          questRarity: '★☆☆☆☆',
        },
        {
          plantName: 'ネムノキ',
          plantImage: null,
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

<style>

section{
  margin-top: 30px;
  padding: 0 3% 0 3%;
}

section:nth-child(2){
  margin-top: 90px;
}

.box{
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 10px;
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
  border-bottom: rgb(146, 146, 146) solid 2px;
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
  margin-left: 5px;
}

.questImg{
  width: 100px;
  height: 100px;
}


</style>
