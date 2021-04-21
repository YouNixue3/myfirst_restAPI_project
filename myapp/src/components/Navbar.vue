<template>
    <div class="app">
        <vs-navbar fixed :color="active" square center-collapsed v-model="active">
            <template #left>
                Logo
            </template>
            <template #default>
                <vs-navbar-item to="/home" :active="active == 'indexHome'" id="indexHome">
                    Home
                </vs-navbar-item>
                <vs-navbar-item to="/home/news" :active="active == 'News'" id="News">
                    News
                </vs-navbar-item>
                <vs-navbar-item to="/home/blogs" :active="active == 'Blogs'" id="Blogs">
                    Blogs
                </vs-navbar-item>
                <vs-navbar-item to="/home/farm" :active="active == 'Farm'" id="Farm">
                    Hydroponic Farm
                </vs-navbar-item>
                <vs-navbar-item to="/home/about" :active="active == 'About'" id="About">
                    About Us
                </vs-navbar-item>
            </template>
            <template #right>
                <vs-navbar-group id="navbargrup">
                    <span class="md-size-5x material-icons">expand_more</span>
                    <template #items>
                        <vs-navbar-item>
                            <span class="material-icons" style="font-size:18px;margin-right:5px;">person</span>Account
                        </vs-navbar-item>
                        <vs-navbar-item>
                            <span class="material-icons" style="font-size:18px;margin-right:5px;">settings</span>Settings
                        </vs-navbar-item>
                        <vs-navbar-item v-on:click="logout" v-if="permission != null">
                            <span class="material-icons" style="font-size:18px;margin-right:5px;">logout</span>Logout
                        </vs-navbar-item>
                        <vs-navbar-item to="/login" v-if="permission == null">
                            <span class="material-icons" style="font-size:18px;margin-right:5px;">login</span>Login
                        </vs-navbar-item>
                    </template>
                </vs-navbar-group>
                <vs-avatar circle size="40" badge badge-color="success" style="margin-top:10px;margin-bottom:10px;">
                    <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" alt="">
                </vs-avatar>

            </template>
        </vs-navbar>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'app',
    data () {
        return {
            active: this.$router.history.current.name,
            permission: localStorage.getItem('group-permission') || null,
        }
    },
    methods: {
        logout() {
            // console.log('logout')
            localStorage.removeItem('user-token')
            localStorage.removeItem('group-permission')
            this.$router.push("/login")
        }
    },
    mounted() {
        // this.active = this.$router.history.current.name
        // console.log(this.active)
    },
}
</script>