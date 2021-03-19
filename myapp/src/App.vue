<template>
  <div id="app">
    <vs-navbar fixed :color="active" square center-collapsed v-model="active">
      <template #left>
        Logo
      </template>
      <template #default>
        <vs-navbar-item :active="active == 'home'" id="home">
          Home
        </vs-navbar-item>
        <vs-navbar-item :active="active == 'news'" id="news">
          News
        </vs-navbar-item>
        <vs-navbar-item :active="active == 'blogs'" id="blogs">
          Blogs
        </vs-navbar-item>
        <vs-navbar-item :active="active == 'farm'" id="farm">
          Hydroponic Farm
        </vs-navbar-item>
        <vs-navbar-item :active="active == 'about'" id="about">
          About Us
        </vs-navbar-item>
      </template>
      <template #right>
        <vs-navbar-group>
          <i class="fi-ewsdxl-equilateral-triangle" style="font-size:8px;margin-left:80px;"></i>
          <template #items>
            <vs-navbar-item id="account">
              <i class="fi-xnsuxl-user-solid" style="margin-right:5px;"></i>Account
            </vs-navbar-item>
            <vs-navbar-item id="settings">
              <i class="fi-xnsuxl-setting-solid" style="margin-right:5px;"></i>Settings
            </vs-navbar-item>
            <vs-navbar-item id="logout">
              <i class="fi-xnslxl-sign-out-solid" style="margin-right:5px;"></i>Logout
            </vs-navbar-item>
          </template>
        </vs-navbar-group>
        <vs-avatar circle size="40" badge badge-color="success" style="margin-top:10px;margin-bottom:10px;">
          <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" alt="">
        </vs-avatar>
        
      </template>
    </vs-navbar>
    <div class="square">
        <router-view></router-view>
    </div>
  </div>
</template>
<script>
  export default {
    data:() => ({
      active: 'guide',
      activeSidebar: false
    })
  }
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
