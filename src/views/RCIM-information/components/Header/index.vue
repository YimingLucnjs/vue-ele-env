<template>
    <div class="header_wrap">
        <div class="logo_info fl">
            <div class="info_logo fl">
                <img src="../../../../assets/info_images/logo_info.png" alt="">
            </div>
            <div class="enter_tit fl">
                高风险放射源在线监控系统
            </div>
        </div>
        <div class="router_info fl">
            <div class="router_item fl choose">信息舱</div>
            <div class="router_item fl">核安全排名</div>
        </div>
        <div class="infor_user fr">
            <el-dropdown trigger="click" @visible-change="clickuserdrop">
                <div class="el-dropdown-link">
                    <div class="user_img fl">
                        <img :src="userImg" alt="">
                    </div>
                    <div class="user_name fl">
                        系统管理员
                    </div>
                    <div class="triangle fl">
                        <i class="el-icon-caret-bottom" :class="isdropdownUser?'click':''"></i>
                    </div>
                    
                </div>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item icon="el-icon-plus">黄金糕</el-dropdown-item>
                    <el-dropdown-item icon="el-icon-circle-plus">狮子头</el-dropdown-item>
                    <el-dropdown-item icon="el-icon-circle-plus-outline">螺蛳粉</el-dropdown-item>
                    <el-dropdown-item icon="el-icon-check">双皮奶</el-dropdown-item>
                    <el-dropdown-item icon="el-icon-circle-check">蚵仔煎</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>

<script>

import userImg from '$public/user.png'
export default {
    data(){
        return {
            userImg,
            isdropdownUser: false,
        }
    },
    methods: {
        // 点击下拉
        clickuserdrop(value){
            this.isdropdownUser = value;
        },
    }
}
</script>

<style lang="scss" scoped>
    
    // 头部导航
    .header_wrap{
        width: 100%;
        height: 60px;
        @include unSelectTextPC();
        @include clearfix();
        .logo_info{
            width: 472px;
            height: 100%;
            @include clearfix();
            @include bacgroundImg("~@/assets/info_images/ent_title_bg.png");
            .info_logo{
                width: 150px;
                height: 100%;
                padding: 6px 15px;
                @include rightLine(#383C48, 1PX, 48px);
                &:after {
                    top: 0;
                    bottom: 0;
                    right: 0;
                    margin: auto;
                }
                img{
                    width: 100%;
                    height: 100%; 
                }
            }
            .enter_tit{
                font-size: 20px;
                line-height: 60px;
                text-indent: 15px;
                color: #fefefe;
            }
        }
        .router_info{
            height: 100%;
            padding-top:24px;
            @include clearfix();
            .router_item{
                width: 128px;
                height: 100%;
                text-align: center;
                line-height: 36px;
                padding: 0 10px;
                cursor: pointer;
                @include ellipsis();
                @include bacgroundImg("~@/assets/info_images/router_bg.png");
            }
            .router_item.choose{
                @include bacgroundImg("~@/assets/info_images/router_choose_bg.png");
            }
        }
        .infor_user{
            width: 185px;
            padding: 24px 14px 0 7px;
            height: 100%;
            @include clearfix();
            .el-dropdown-link{
                width: 100%;
                height: 36px;
                @include clearfix();
                .user_img{
                    width: 32px;
                    height: 32px;
                    margin-right: 7px;
                    margin-top: 2px;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
                .user_name{
                    width: 84px;
                    height: 100%;
                    line-height: 36px;
                    color: #fefefe;
                    @include ellipsis();
                }
                .triangle{
                    width: 21px;
                    line-height: 36px;
                    color: #fefefe;
                    i{
                        transition: all .5s;
                    }
                }
                .triangle{
                    .click{
                        transform: rotateZ(180deg);
                    }
                }
            }
        }
    }
</style>