<template>
    <modalMask :opacity='0.8'>
        <div class="intro-container" v-if='!smallShow'>
            <span class='close' @click='closeFunc'></span>
            <div class='content'>
                <slot></slot>
            </div>
        </div>
        <div class='prize-container' v-if='smallShow'>
            <span class='close' @click='closeFunc'></span>
            <div class='prize-content'>
                <img :src="prizeInfo.url" alt="prize picture">
                <button class='getPrize' @click.prevent='getPrize'></button>
            </div>
            <button class='again' @click.prevent='pressAgain'></button>
        </div>
        <div class='user-list'>
            <div class="list-content">
                <p v-for='(user, index) in prizeList' :key='index'>
                    User {{user.id}} obtained the {{user.prize}}&nbsp;&nbsp;&nbsp;{{user.time}}
                </p>
            </div>
        </div>
    </modalMask>
</template>

<script>
    import Vue from 'vue';
    import modalMask from './modalMask.vue';
    export default {
        name: 'Introduction',
        props: {
            smallShow: {
                type: Boolean, // 用于规定显示大框还是小框
                default: false
            },
            prizeInfo: { //奖品信息属性
                type: Object,
                default: function() {
                    return {
                        type: 1,
                        url: '/static/images/prize.png'
                    }
                }
            }
        },
        data() {
            return {
                prizeList: [{id: '403......987', prize: 'phone one', time: '17-09-25 8:40pm'},
                            {id: '403......987', prize: 'phone one', time: '17-09-25 8:40pm'},
                            {id: '403......987', prize: 'phone one', time: '17-09-25 8:40pm'}]
            }
        },
        methods: {
            closeFunc: function() {
                this.$emit('closeModal')
            },
            pressAgain: function() {
                this.$emit('again')
            },
            getPrize: function() {
                console.log('prize');
                this.$emit('getPrize', this.prizeInfo.type)
            }
        },
        components: {
            modalMask
        }
    }
</script>

<style lang='scss' scope>
    .intro-container{
        position: relative;
        background: url('/static/images/modal_bg.png') no-repeat center;
        background-size: contain;
        width: 100%;
        height: 440px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        .close{
            background: url('/static/images/modal_close.png') no-repeat center;
            background-size: contain;
            width: 44px;
            height: 44px;
            position: absolute;
            right: 6%;
            top: 5px;
        }
        .content{
            width: 225px;
            height: 220px;
            margin-left: 6px;
            margin-top: 6px;
        }
    }
    .prize-container{
        position: relative;
        background: url('/static/images/prize_bg.png') no-repeat center;
        background-size: contain;
        width: 100%;
        height: 500px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        .close{
            background: url('/static/images/modal_close.png') no-repeat center;
            background-size: contain;
            width: 44px;
            height: 44px;
            position: absolute;
            right: 6%;
            top: 5px;
        }
        .prize-content{
            width: 100%;
            height: 180px;
            margin-top: 150px;
            position: relative;
            img{
                height: 100%;
                display: block;
                margin: 0 auto;
            }
            .getPrize{
                position: absolute;
                width: 80px;
                height: 33px;
                background: url('/static/images/button/get_prize.png') no-repeat center;
                background-size: contain;
                bottom: 5px;
                right: 55px;
                border-radius: 16px;
                border: none;
            }
        }
        .again{
            background: url('/static/images/button/again.png') no-repeat center;
            background-size: contain;
            padding: 0;
            border: none;
            width: 180px;
            height: 55px;
            margin-top: -25px;
            margin-bottom: 25px;
        }
    }
    .user-list{
            width: 286px;
            height: 90px;
            margin: 0 auto;
            margin-top: -40px;
            background-color: #f2d6ff;
            border: 1px solid #f55eff;
            box-shadow: inset 0px 0px 3px rgb(78,11,95);
            border-radius: 26px;
            .list-content{
                margin: 18px;
                height: 54px;
                p{
                    height: 17px;
                    line-height: 17px;
                    margin: 0 auto;
                    width: 145%;
                    font-size: 12px;
                    transform: scale(0.7);
                    color: #4f1b6a;
                    font-weight: bold;
                    text-align: center;
                    transform-origin: left center;
                }
            }
        }
</style>

