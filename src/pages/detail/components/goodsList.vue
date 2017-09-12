<template>
    <div class="goods-wrapper">
        <div class="content">
            <div v-for="(item, index) in dataList" :key="index" :class='[{active: item.active}, showBig && index===0 ? bigClass : smallClass, {nobig: !showBig}]'>
                <div class='show-top'><span class='top-image'></span></div>
                <div class='show-good'><img src="../images/goodsList/goods1.png"></div>
                <div class='show-btn'><span class='btn-image' @click="changeState(index)"></span></div>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
const INITIAL_STATE = ''
export default {
    name: 'GoodsList',  // 可以去掉
    data () {
        return {
            dataList: [
                {active: false, imageUrl: '../images/goodsList/goods1.png'},
                {active: false, imageUrl: '../images/goodsList/goods1.png'}, 
                {active: true, imageUrl: '../images/goodsList/goods1.png'},
                {active: false, imageUrl: '../images/goodsList/goods1.png'},
                {active: false, imageUrl: '../images/goodsList/goods1.png'}],
            bigClass: 'big-show',
            smallClass: 'small-show',
            selected: true,
            isSelected: false
        }
    },
    props:{
        // 需要给一个参数 从而知道展示哪些物品 用什么方式展示
        currentDay: {
            type: Number,
            default: 2
        },
        showBig: {
            type: Boolean,
            default: true
        }
    },
    methods: {
        changeBigState: function() {
            this.selected = !this.selected
        },
        changeSmallState: function() {
            this.isSelected = !this.isSelected
        },
        changeState: function(i) {
            this.dataList[i].active = !this.dataList[i].active
        }
    },
    created() {
        // 发送ajax请求，获取到数据 并按照dataList的格式来拼接
    },
    mounted() {

    },
    components: {

    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scope>
    .goods-wrapper{
        margin: 17px auto;
        width: 310px;
        .content{
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            .big-show{
                width: 100%;
                margin: 0 auto;
                margin-bottom: 8px;
                height: 210px;
                background: url("../images/goodsList/back_big.png") no-repeat center;
                background-size: contain;
                position: relative;
                .show-good {
                    position: absolute;
                    top: 20%;
                    margin: 0 auto;
                    left: 0;
                    right: 0;
                    width: 100px;
                    img {
                        width: 90%;
                        vertical-align: middle;
                        text-align: center;
                    }
                }
                .show-top{
                    margin: 0 auto;
                    width: 82px;
                    height: 40px;
                    .top-image {
                        display: block;
                        background: url("../images/goodsList/top_unactive.png") no-repeat center;
                        background-size: contain;
                        width: 84px;
                        height: 37px;
                    }
                }
                .show-btn{
                    width: 100%;
                    position: absolute;
                    bottom: -5px;
                    .btn-image{
                        display: block;
                        margin: 0 auto;
                        width: 130px;
                        height: 48px;
                        background: url("../images/goodsList/btn_unactive.png") no-repeat center;
                        background-size: contain;
                    }
                }
                &.active {
                    .show-top .top-image {
                        background: url("../images/goodsList/top_active.png") no-repeat center;
                        background-size: 92px 42px;
                        margin-top: 1px;
                    }
                    .show-btn .btn-image{
                        background: url("../images/goodsList/btn_active.png") no-repeat center;
                        background-size: contain;
                    }
                }
            }
            .small-show{
                width: 50%;
                height: 167px;
                background: url("../images/goodsList/back_unactive.png") no-repeat center;
                background-size: contain;
                position: relative;
                &:nth-child(even){
                    margin-left: -4%;
                    &.nobig{
                        margin-right: -4%;
                    }
                }
                &:nth-child(odd){
                    margin-right: -4%;
                    &.nobig{
                        margin-left: -4%;
                    }
                }
                .show-good {
                    position: absolute;
                    top: 20%;
                    margin: 0 auto;
                    left: 0;
                    right: 0;
                    width: 64px;
                    img {
                        width: 100%;
                        vertical-align: middle;
                        text-align: center;
                    }
                }
                .show-top{
                    width: 100%;
                    height: 40px;
                    position: absolute;
                    top: 0px;
                    z-index: 10;
                    .top-image {
                        display: block;
                        margin: 0 auto;
                        background: url("../images/goodsList/top_unactive.png") no-repeat center;
                        background-size: contain;
                        width: 80px;
                        height: 40px;
                    }
                }
                .show-btn{
                    width: 100%;
                    position: absolute;
                    margin-top: 114px;
                    .btn-image{
                        display: block;
                        margin: 0 auto;
                        width: 130px;
                        height: 48px;
                        background: url("../images/goodsList/btn_unactive.png") no-repeat center;
                        background-size: contain;
                    }
                }
                &.active {
                    background: url("../images/goodsList/back_active.png") no-repeat;
                    background-size: 155px 137px;
                    background-position: 0px 13px;
                    width:155px;
                    height: 167px;
                    .show-top .top-image {
                        background: url("../images/goodsList/top_active.png") no-repeat center;
                        background-size: 88px 43px;
                        width: 84px;
                        margin-top: 1px;
                    }
                    .show-btn .btn-image{
                        background: url("../images/goodsList/btn_active.png") no-repeat center;
                        background-size: contain;
                    }
                }
            }
        }
    }
</style>