<template>
  <div class="container">
    <router-view/>
  </div>
  <FootNav/>
</template>

<script>

import FootNav from '@/components/footNav.vue'

export default {
  components: {
    FootNav
  }
}
</script>

<style>

.container{
  padding: 70px 0 70px 0;
}

h2,h3,p{
  margin: 0;
  width: auto;
  word-break: break-all;
}
img{
  border-radius: 10px;
}
</style>