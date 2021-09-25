<template>
  <header>
    <div class="headerContents">
      <a @click="$router.back()">
        <img src="@/assets/img/arrow_back_ios_white_24dp.svg" alt="">
      </a>
      <h2 class="headerText">{{headerText}}</h2>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    headerText: String
  }
}
</script>

<style>
header{
  position: fixed;
  top: 0;
  width: 100%;
  height: 50px;
  border-top: 10px solid #A1CE63;
  box-shadow: 0px 2px 10px;
  background-color: #3B933B;
  z-index: 999;
}

.headerContents{
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.headerContents a {
  display: flex;
  align-items: center;
  height: 100%;
}

.headerText{
  color: #FFFFFF;
}
</style>