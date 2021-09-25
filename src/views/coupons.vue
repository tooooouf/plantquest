<template>
  <Header headerText="クーポン"/>
  <section class="coupons">
    <div class="box">
      <h2>一覧</h2>
      <div class="questList" v-for="(coupon, key) in coupons" :key="key">
        <div class="questCard">
          <div class="imgWrap">
            <img class="couponImg" src="@/assets/img/couponticket.svg" alt="">
          </div>
          <div class="questDesctiption">
            <h3 class="couponName">{{coupon.couponShop}}</h3>
            <p>{{coupon.couponSummery}}</p>
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
      coupons: [
        {
          couponShop: '○○レストラン',
          couponSummery: '100円引クーポン',
        },
        {
          couponShop: '△△ショップ',
          couponSummery: '20円引クーポン',
        },
        {
          couponShop: '□□コンビニ',
          couponSummery: '70円引クーポン',
        },
      ]
    }
  }
}
</script>

<style scoped>

.questCard{
  height: 100px;
}

.imgWrap{
  display: flex;

}

.couponImg{
  width: 100%;
}

</style>