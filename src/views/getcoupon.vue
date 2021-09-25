<template>
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
    <Button linkText="OK" link="result"/>
  </section>
</template>

<script>

import Button from '@/components/button.vue'

export default {
  components:{
    Button,
  }
}
</script>

<style>

.getcoupon{
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  box-sizing: border-box;
  height: 80vh;
  text-align: center;
}

.congrat{
  color: #3B933B;
  font-size: 20px;
}

.reward{
  font-size: 18px;
}

</style>