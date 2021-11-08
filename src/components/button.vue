<template>
  <div class="button">
    <router-link :to="`${'/' + link}`" v-if="link">
    </router-link> 
    <p>{{linkText}}</p>
  </div>
</template>

<script>
export default {
  props:{
    linkText: String,
    link: String
  }
}
</script>

<style>
.button{
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  width: 200px;
  height: 50px;
  background-color: #3B933B;
}

.button a{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.button p{
  color: rgb(233, 233, 233);
  font-size: 17px;
}
</style>