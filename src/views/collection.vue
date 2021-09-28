<template>
  <Header headerText="コレクション"/>
  <section class="collection">
    <div class="box">
      <h2>一覧</h2>
      <div class="questList">
        <div class="questCard" v-for="(quest, key) in quests" :key="key">
          <router-link class="questLink" to="/collection_detail"/>
          <div class="imgWrap">
            <img class="questImg" v-bind:src="quest.plantImage" alt="">
          </div>
          <div class="questDesctiption">
            <h3 class="plantName">{{quest.plantName}}</h3>
            <p>{{quest.plantSummery}}</p>
            <p>レア度：{{quest.questRarity}}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Header from '@/components/header.vue'

export default {
  components:{
    Header
  },

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
          plantName: 'タンポポ',
          plantImage: require('@/assets/img/DSCF0827.jpg'),
          plantSummery: 'キク科タンポポ属の植物',
          questSummery: 'タンポポを発見し、撮影しよう。',
          questReward: null,
          questRarity: '★☆☆☆☆',
        },
        {
          plantName: 'アジサイ(紫陽花)',
          plantImage: require('@/assets/img/IMG_20210618_160314.jpg'),
          plantSummery: 'アジサイ科アジサイ属の落葉低木。',
          questSummery: 'アジサイを発見し、撮影しよう。',
          questReward: null,
          questRarity: '★★☆☆☆',
        },
      ]
    }
  },
}
</script>