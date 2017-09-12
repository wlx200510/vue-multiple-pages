<template>
    <div class="time-line">
        <div class='line-bg'></div>
        <div class='content'>
            <span v-for="(item, index) in items" :key="index" @click='infoChange(index)' :class="generateClass(index, item)">
                <template v-if="index%2===0">
                    <template v-if="currentNum*2===index">
                        <img src="../images/timeLine/cur_logo.png" alt="now" class='candle-cur'>
                    </template>
                    <template v-else-if="currentNum*2>index">
                        <img src="../images/timeLine/past_logo.png" alt="past" class='candle-past'>
                    </template>
                    <template v-else>
                        <img src="../images/timeLine/future_logo.png" alt="future" class='candle-future'>
                    </template>
                </template>
                <template v-else>
                    <template v-if="currentNum*2>index">
                        <img src="../images/timeLine/route_active.png" alt="delighted" class='route'>
                    </template>
                    <template v-else>
                        <img src="../images/timeLine/route_unactive.png" alt="darkled" class='route-dark'>
                    </template>
                </template>
            </span>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
const INITIAL_STATE = [{activated: false, type: 'candle'},{type: 'route'},
                {activated: false, type: 'candle'},{type: 'route'},
                {activated: false, type: 'candle'},{type: 'route'},
                {activated: false, type: 'candle'},{type: 'route'},{activated: false, type: 'candle'}]
export default {
    name: 'TimeLine',  // 可以去掉
    data () {
        return {
            tapped: true,
            items: JSON.parse(JSON.stringify(INITIAL_STATE))
        }
    },
    props:{
        // 传来的参数支持是第几天 从而有相关样式展示
        currentNum: {
            type: Number,
            default: 4
        }
    },
    methods: {
        infoChange: function(i) {
            if (i % 2 === 1 || i > this.currentNum*2) {
                return // 如果是点击了route和未开始点燃的蜡烛 不执行逻辑
            }
            this.items = JSON.parse(JSON.stringify(INITIAL_STATE))
            this.items[i].activated = true
            this.$emit('changed', i/2)
        },
        generateClass: function(i, item) {
            return {
                active: i % 2 === 0 && item.activated,
                'route-base': i % 2 === 1,
                'candle-base': i % 2 === 0
            }
        }
    },
    created() {
        this.items[this.currentNum * 2].activated = true
    },
    mounted() {

    },
    components: {

    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scope>
    .time-line{
        margin: 5px auto;
        width: 276px;
        height: 26px;
        position: relative;
        .line-bg{
            width: 100%;
            height: 14px;
            position: absolute;
            bottom: 0;
            border-radius: 7px;
            background-color: rgba(62, 14, 87,0.8)
        }
        .content{
            width: 100%;
            display: flex;
            flex-wrap: nowrap;
            align-items: flex-end;
            justify-content: space-around;
            position: absolute;
            z-index: 10;
            .candle-base{
                width: 32px;
                .candle-cur{
                    display: block;
                    height: 26px;
                    margin: 0 auto;
                }
                .candle-past{
                    display: block;
                    height: 26px;
                    margin: 0 auto;
                    padding-right: 0.5px;
                }
                .candle-future{
                    display: block;
                    height: 7px;
                    margin: 0 auto;
                    margin-bottom: 5px;
                }
            }
            .route-base{
                height: 13px;
                width: 33px;
                .route{
                    width: 100%;
                    display: block;
                    margin: 0 auto;
                }
                .route-dark{
                    width: 20px;
                    display: block;
                    margin: 0 auto;
                    padding: 5px;
                }
            }
            .active{
                background: url("../images/timeLine/cur_select.png") no-repeat center;
                background-size: 34px;
            }
        }
    }
</style>