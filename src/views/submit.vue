<template>
  <Header headerText="写真を提出"/>
  <section>
    <div class="box">
      <h2>選択された画像</h2>
      <div class="selected" v-if="$store.state.url" style="position:relative">
        <div style="position:absolute" @click="delatePreview">✖</div>
        <img :src="$store.state.url" alt="">
        <Button class="buttonCenter" linkText="解析する！"  @click="openModal"/>
      </div>
      <div class="select" v-if="!$store.state.url">
          <label class="button">
            <input type="file" ref="previewFile" @change="uploadFile">
            <p>ファイルを選択</p>
          </label>
          <label class="button">
            <input type="file" ref="previewCamera" @change="uploadFile">
            <p>カメラを起動</p>
          </label>
      </div>
    </div>
    <div id="overlay" v-if="showModal">
      <transition name="modal" appear>
        <div class="modalBody" key="succeed" v-if="success>=50">
          <h3>解析が完了しました。</h3>
          <Button class="buttonCenter" linkText="OK" link="getcoupon" @click="closeModal"/>
        </div>
        <div class="modalBody" key="failure" v-else>
          <h3>これはパンジーではありません。</h3>
          <Button class="buttonCenter" linkText="別の画像で挑戦" link="quest" @click="closeModal"/>
        </div>
      </transition>
    </div>
  </section>
</template>

<script>
import Header from '@/components/header.vue'
import Button from '@/components/button.vue'

export default {
  components:{
    Header,
    Button
  },
  
  data: function() {
    return {
      showModal: false,
      success: ''
    };
},

  methods:{
    uploadFile(){
      const file = (this.$refs.previewFile.files[0]||this.$refs.previewCamera.files[0]);
      this.$store.state.url = URL.createObjectURL(file);
      this.success = this.randomInt(100);
      //console.log(this.success)
    },

    delatePreview(){
      this.$store.state.url = '';
      URL.revokeObjectURL(this.url);
      this.$refs.previewFile.value = '';
      this.$refs.previewCamera.value = '';
    },

    openModal(){
      this.showModal = true;
    },

    closeModal(){
      this.showModal = false;
    },
    randomInt(max){
      return Math.floor(Math.random() * max);
    }
  }
}
</script>

<style scoped>
.box{
  align-items: center;
}

.selected{
  text-align: center;
}

img{
  width: 100%;
}

.button{
  margin-top: 30px;
}


input[type="file"]{
  display: none;
}

#overlay{
  z-index:1;
  position:fixed;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background-color:#00000080;
  display: flex;
  align-items: center;
  justify-content: center;
  transition-duration: .3s;
}

.modalBody{
  z-index:2;
  width:80%;
  border-radius: 10px;
  padding: 1em;
  background:#ffffff;
  transform: translateY(-100px);
  transition-duration: .3s;
}

.modal-enter,
.modal-leave-active {
    opacity: 0;
}
 
.modal-enter .panel,
.modal-leave-active .panel{
    top: -200px;
}
</style>

<style>
.buttonCenter{
  margin-left: auto;
  margin-right: auto;
}
</style>