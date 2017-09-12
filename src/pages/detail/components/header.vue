<template>
    <div class="hd">
        <div class="clearfix btn-container">
            <div class="lamp" id="lampCount"></div>
            <a class="myPrize" @click.prevent='showMyPrize' id="myPrize"></a>
            <a class="intro" @click.prevent="showIntro" id="intro"></a>
        </div>
        <div class="banner"></div>
    </div>
</template>

<script>
export default {
  name: 'Headers',  // 可以去掉
  data () {
    return {

    }
  },
  methods: {
      showMyPrize: function() {
          this.$emit('showPrizeToMe')
      },
      showIntro: function() {
          this.$emit('showIntro')
      }
  },
  mounted() {

  },
  components: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scope>
.hd{
    width: 360px;
    margin: 0 auto;
    padding-top: 12px;
    .btn-container{
        margin: 0 13px;
        .lamp{
            float:left;
            width: 66px;
            height:36px;
            background:url(../images/header/lamp.png) no-repeat left top;
            background-size:cover;
        }
        .myPrize{
            float:left;
            margin-left:-3px;
            display:block;
            width:77px;
            height:36px;
            background:url(../images/header/myPrize.png) no-repeat left top;
            background-size:cover;
        }
        .intro{
            float:right;
            display:block;
            width:66px;
            height:36px;
            background:url(../images/header/info.png) no-repeat left top;
            background-size:cover;
        }
    }
    .banner{
        margin: 0 auto;
        margin-top: 22px;
        width:326px;
        height:108px;
        background:url(../images/header/banner.png) no-repeat center center;
        background-size:cover;
    }
}
</style>