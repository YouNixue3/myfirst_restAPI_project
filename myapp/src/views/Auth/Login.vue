<template>
    <div class="login">
        <div class="bg-login">
            <center style="margin-left:35%;margin-right:35%;">
                <div style="padding-top:100px;">
                    <div id="login-card">
                        <div class="content-inputs">
                            <div class="row">
                                <vs-row align="center" justify="center">
                                    <vs-col w='12'>
                                        <h1>Login</h1>
                                    </vs-col>
                                    <form @submit.prevent="login" id="loginForm">
                                        <vs-col w='12' style="margin-bottom:15px;">
                                            <vs-input id="input-login" name="username" v-model="username" placeholder="Username">
                                                <template #icon>
                                                <span class="material-icons" style="font-size:18px;margin-right:5px;">perm_identity</span>
                                                </template>
                                            </vs-input>
                                        </vs-col>
                                        <vs-col w='12'>
                                            <vs-input id="input-login" name="password" v-model="password" placeholder="Password">
                                                <template #icon>
                                                <span class="material-icons" style="font-size:18px;margin-right:5px;">vpn_key</span>
                                                </template>
                                            </vs-input>
                                        </vs-col>
                                    </form>
                                </vs-row>
                                <vs-row align="center" justify="center" style="margin-top:20px;">
                                    <router-link to="/" style="text-decoration:none;">
                                        Forgot password?
                                    </router-link>
                                </vs-row>
                                <vs-row align="center" justify="center" style="margin-top:20px;">
                                    <vs-col w='3'>
                                        <vs-button border form="loginForm"
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
import axios from 'axios';

export default {
    name:'app',
    data () {
        return {
            username: '',
            password: '',
            token: localStorage.getItem('user-token') || null,
        }
    },
    methods: {
        login() {
            axios.post('http://127.0.0.1:8000/rest-api/auth', {
                username: this.username,
                password: this.password
            })
            // console.log(username)
            .then(resp => {
                this.token = resp.data.token
                console.log(resp)
                localStorage.setItem('user-token', resp.data.token)
                localStorage.setItem('group-permission', resp.data.level)
                this.$router.push("/")
                // localStorage.setItem('role', resp.data.token)
            })
            .catch(e => {
                console.log(e)
                localStorage.removeItem('user-token')
                localStorage.removeItem('group-permission')
            })
            
        },
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
    width:20vw;
}
</style>