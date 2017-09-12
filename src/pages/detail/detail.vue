<template>
  <div class="root">
      <Headers @showPrizeToMe="showPrize" @showIntro='showIntroDialog'></Headers>
      <TimeLine :currentNum='2' @changed='getGoods'></TimeLine>
      <GoodsList></GoodsList>
      <Introduction v-if='introFlag' @closeModal='closeIntro' :smallShow='newPrizeFlag' @getPrize='confirmPrize'>
          <img v-if='showType===0' src='/static/images/textImg/prizeGet_tips.png' class='text-image'/>
          <div class='person-Info' v-if='showType===1'>
              <label for="phone">Phone:</label>
              <input type="text" class='phone-num' id='phone' v-model="userInput.phoneNum">
              <span class='otp-btn' @click='requestOTP'>OTP</span>
              <label for="otp">Please enter the OTP:</label>
              <input type="text" class='info-input' id='otp' v-model="userInput.OTP">
              <label for="email">EMail:</label>
              <input type="email" class='info-input' id='email' v-model="userInput.email">
              <span class='confirm-btn' @click='submitInfo'>Get the prize</span>
          </div>
          <ul class='prize-list' v-if='showType===2'>
              <li :key='index' v-for='(prize, index) in prizeList'>
                  <div class='thumbnail'><img :src="prize.imgUrl" alt=""></div>
                  <div class='prize-text'>
                      <p class='title'>{{prize.name}}</p>
                      <span @click='collectPrize(prize)'>To collect their prize >></span>
                  </div>
              </li>
          </ul>
      </Introduction>
  </div>
</template>

<script>
import Vue from 'vue';
import Headers from './components/header.vue';
import TimeLine from './components/timeLine.vue';
import GoodsList from './components/goodsList';
import Introduction from '../../components/intro';
export default {
    data() {
        return {
            msg: 'Welcome to Your Vue.js App',
            introFlag: false,
            newPrizeFlag: false,
            showType: 2, // 0代表的是领奖成功的文字提示 1代表的是表单  2代表的是用户拥有的奖品list
            userInput: {
                phoneNum: '',
                OTP: '',
                email: ''
            },
            prizeList: [{imgUrl: '/static/images/prize_small.png', name: 'MI MIX'}]
        }
    },
    methods: {
        showPrize() {
            // this.prizeFlag = true;
            this.introFlag = true;
            this.showType = 1;
        },
        getGoods(day) {
            console.log(day)
        },
        closeIntro() {
            this.introFlag = false;
            this.showType = 0;
        },
        confirmPrize(prize) {
            //实际逻辑是向后台发请求 传递这个用户获得了某个奖品 现在只写promise返回后的逻辑
            this.newPrizeFlag = false;
            this.showType = 0; // 显示那串文字
        },
        showIntroDialog() {
            this.showType = 0;
            this.introFlag = true;
        },
        submitInfo() {
            // 用户提交的表单提交到后端 记得要校验OTP
        },
        collectPrize(prizeInfo) {
            console.log(prizeInfo.name)
        },
        requestOTP() {
            console.log(userInput.phoneNum)  // 根据用户输入的手机号向后端发送请求
        }
    },
    components: {
        Headers,
        TimeLine,
        GoodsList,
        Introduction
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    .text-image{
        width: 100%;
        display: block;
        margin-top: 10px;
    }
    .person-Info {
        width: 100%;
        label{
            display: block;
            height: 16px;
            font-size: 12px;
            color: #fff;
            line-height: 18px;
            transform: scale(0.9);
            transform-origin: left center;
        }
        .phone-num{
            border: 1px solid #fff;
            border-radius: 5px;
            width: 140px;
            height: 32px;
            background-color: transparent;
            margin: 5px 0 7px 0;
            text-indent: 10px;
            color: #fff;
        }
        .otp-btn{
            display: inline-flex;
            width: 70px;
            height: 35px;
            justify-content: center;
            align-items: center;
            font-size: 12px;
            font-weight: bold;
            color: #fff;
            background-color: #f8d448;
            border-radius: 5px;
            margin-left: 8px;
        }
        .info-input{
            border: 1px solid #fff;
            border-radius: 5px;
            width: 222px;
            height: 33px;
            background-color: transparent;
            margin: 5px 0 7px 0;
            text-indent: 10px;
            color: #fff;
        }
        .confirm-btn{
            width: 100%;
            height: 34px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 12px;
            font-weight: bold;
            color: #fff;
            background-color: #f8d448;
            border-radius: 5px;
            margin-top: 5px;
        }
    }
    .prize-list{
        width: 100%;
        li{
            width: 100%;
            height: 54px;
            margin-left: 8px;
            margin-top: 8px;
            .thumbnail{
                vertical-align: middle;
                width: 50px;
                height: 49px;
                box-shadow: 0px 0px 12px #ac09cd;
                border-radius: 4px;
                background-color: #000;
                display: inline-block;
                img{
                    width: 50px;
                }
            }
            .prize-text{
                vertical-align: middle;
                margin-left: 18px;
                width: 140px;
                height: 50px;
                display: inline-block;
                .title{
                    margin: 6px 0 3px 0;
                    font-size: 14px;
                    font-weight: bold;
                    color: #fff;
                }
                span{
                    display: block;
                    font-size: 12px;
                    transform: scale(0.8);
                    color: gray;
                    margin-left: -14px;
                }
            }
        }  
    }
</style>
