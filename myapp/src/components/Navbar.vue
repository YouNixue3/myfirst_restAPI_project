<template>
    <div class="app">
        <vs-navbar fixed :color="active" square center-collapsed v-model="active">
            <template #left>
                Logo
            </template>
            <template #default>
                <vs-navbar-item to="/" class="li" :active="active == 'home'" id="home">
                    Home
                </vs-navbar-item>
                <vs-navbar-item to="/news" :active="active == 'news'" id="news">
                    News
                </vs-navbar-item>
                <vs-navbar-item to="/blogs" :active="active == 'blogs'" id="blogs">
                    Blogs
                </vs-navbar-item>
                <vs-navbar-item to="/farm" :active="active == 'farm'" id="farm">
                    Hydroponic Farm
                </vs-navbar-item>
                <vs-navbar-item to="/about" :active="active == 'about'" id="about">
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
                        <vs-navbar-item>
                            <span class="material-icons" style="font-size:18px;margin-right:5px;">logout</span>Login
                        </vs-navbar-item>
                        <vs-navbar-item>
                            <span class="material-icons" style="font-size:18px;margin-right:5px;">login</span>Login
                        </vs-navbar-item>
                    </template>
                </vs-navbar-group>
                <vs-avatar circle size="40" badge badge-color="success" style="margin-top:10px;margin-bottom:10px;">
                    <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" alt="">
                </vs-avatar>

            </template>
        </vs-navbar>
    </div>
</template>

<script>
export default {
    name: 'app'
}
</script>