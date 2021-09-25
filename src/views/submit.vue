<template>
  <Header headerText="写真を提出"/>
  <section>
    <div class="box">
      <h2>選択された画像</h2>
      <img src="@/assets/img/DSCF0675.jpg" alt="">
      <Button linkText="ファイルを選択" link="getcoupon"/>
      <Button linkText="カメラを起動" link="getcoupon"/>
    </div>
  </section>
</template>

<script>
import Header from '@/components/header.vue'
import Button from '@/components/button.vue'

export default {
  components:{
    Header,
    Button,
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

.button{
  margin-top: 30px;
}

</style>