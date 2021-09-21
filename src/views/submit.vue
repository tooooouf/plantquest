<template>
  <Header headerText="写真を提出"/>
  <section>
    <div class="box">
      <p>選択された画像</p>
      <div class="button">
        <router-link to="/getcoupon">
          <p>ファイルを選択</p>
        </router-link> 
      </div>
      <div class="button">
        <router-link to="/getcoupon">
          <p>カメラを起動</p>
        </router-link> 
      </div>
    </div>
  </section>
</template>

<script>
import Header from '@/components/header.vue'

export default {
  components:{
    Header,
  }
}
</script>