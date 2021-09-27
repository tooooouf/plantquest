<template>
<Header headerText="プロフィール"/>
  <section class="profile">
    <div class="account">
        <svg class="accountIcon">
          <use xlink:href="@/assets/img/profile.svg#profile"/>
        </svg>
      <div class="accountInfo">
        <h2>ニックネーム：</h2>
        <h2>ID：850957012580</h2>
      </div>
    </div> 
  </section>
  <section class="profileTopic">
    <div class="box">
      <div class="topicList">
        <div class="topicWrap">
          <div class="topicIcon">
            <img src="@/assets/img/friends.svg" alt="">
          </div>
          <p>フレンド</p>
        </div>  
        <div class="topicWrap">
          <div class="topicIcon">
            <img src="@/assets/img/support.svg" alt="">
          </div>
          <p>フレンド</p>
        </div>
      </div>
    </div>
  </section>
  <section class="settings">
    <div class="box">
      <div class="settingLink">
        <h3>アプリ設定</h3>
      </div>
      <div class="settingLink">
        <h3>アカウント設定</h3>
      </div>
      <div class="settingLink">
        <h3>通知</h3>
      </div>
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

.account{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.accountIcon{
  margin-right: 10px;
  width: 80px;
  fill: #A1CE63;
}

.topicList{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
}

.topicWrap{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.topicIcon{
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  width: 70px;
  height: 70px;
  background-color: #3B933B;
}

img{
  width: 50%;
}

.settingLink{
  display: flex;
  align-items: center;
  height: 50px;
  border-bottom: rgb(146, 146, 146) solid 1px;
}

</style>