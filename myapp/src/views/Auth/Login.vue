<template>
    <div class="login">
        <div class="bg-login">
            <center style="margin-left:35%;margin-right:35%;">
                <div style="padding-top:100px;">
                    <div id="login-card">
                        <div class="container content-inputs">
                            <div class="row">
                                <vs-row align="center" justify="center">
                                    <vs-col w='12'>
                                        <h1>L<i class="fi-xnsuxl-lock-solid" v-bind:class="{'fi-xnsuxl-unlock-solid': isActive}" style="font-size:20px;margin:-4px;"></i>gin</h1>
                                    </vs-col>
                                    <vs-col w='10' style="margin-bottom:15px;">
                                        <vs-input id="input-login" v-model="value1" placeholder="E-Mail">
                                            <template #icon>
                                            <i class="fi-xnluxl-user"></i>
                                            </template>
                                        </vs-input>
                                    </vs-col>
                                    <vs-col w='10'>
                                        <vs-input id="input-login" v-model="value1" placeholder="Password">
                                            <template #icon>
                                            <i class="fi-xnsuxl-key-alt-solid"></i>
                                            </template>
                                        </vs-input>
                                    </vs-col>
                                </vs-row>
                                <vs-row align="center" justify="center" style="margin-top:20px;">
                                    <router-link to="/" style="text-decoration:none;">
                                        Forgot password?
                                    </router-link>
                                </vs-row>
                                <vs-row align="center" justify="center" style="margin-top:20px;">
                                    <vs-col w='3'>
                                        <vs-button border
                                        >
                                            Login
                                        </vs-button>
                                    </vs-col>
                                    <vs-col w='3'>
                                        <vs-button border danger 
                                        >
                                            Cancel
                                        </vs-button>
                                    </vs-col>
                                </vs-row>
                            </div>
                        </div>
                    </div>
                </div>
            </center>
        </div>
    </div>
</template>
<script>
export default {
    name:'app',
    data:() => ({
        isActive: true
    }),
    methods: {
        login: function() {
            this.isActive == false
        }

    },
}
</script>
<style>
.bg-login {
background: url('../../assets/public/img/hydroponics-4255403_1920.jpg') !important;
background-size: 100% !important;
width: 100vw;
height: 100vh;
}
#login-card {
    background: white;
    height: 400px;
    border-radius: 30px;
}
#input-login .vs-input{
    width:100%;
}
</style>