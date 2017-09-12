<template>
    <div class="dialog">
        <div class="mask" transition="modal-scale" @click="handleClick" @touchmove.prevent.stop :style='style'></div>
        <div class="dialog-content" @touchmove.prevent.stop>
            <slot></slot> 
        </div>
    </div>  
</template>

<script>
    import Vue from 'vue';
    export default {
        name: 'modalMask',
        props: {
            opacity: {
                type: Number,
                default: 0.4
            },
            color: {
                type: String,
                default: '#000'
            }
        },
        data() {
            return {}
        },
        mounted() {
            document.body.style.overflow = 'hidden'
        },
        beforeDestroy() {
            document.body.style.overflow = 'auto'
        },
        computed: {
            style() {
                return {
                    'opacity': this.opacity,
                    'background-color': this.color
                }
            }
        },
        methods: {
            handleClick() {
                if (this.onClick) {
                    this.onClick()
                }
            }
        }
    }
</script>

<style lang='scss'>
    .dialog{
        position: relative;
        .dialog-content {
            position: fixed;
            box-sizing: border-box;
            padding: 0px;
            width: 100%;
            min-height: 140px;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            z-index: 9999;
        }
        .mask {
            position: fixed;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            z-index: 9998;
            background: rgba(0,0,0,.5);
        }
        .modal-scale-transition{
            transition: opacity .3s linear;
            &.modal-scale-enter,
            &.modal-scale-leave{
                opacity: 0 !important;
            }
        }
        
    }
</style>
