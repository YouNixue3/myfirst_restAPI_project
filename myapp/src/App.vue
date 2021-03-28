<template>
  <div id="app">
    <vs-navbar fixed :color="active" square center-collapsed v-model="active">
      <template #left>
        Logo
      </template>
      <template #default>
        <vs-navbar-item to="/" class="li" :active="active == 'home'" id="home">
          Home
        </vs-navbar-item>
        <vs-navbar-item to="/news"  :active="active == 'news'" id="news">
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
    <div class="grid">
      <vs-col class="backgrounds" style="height:300px;top:120px;">
        <div class="grid">
          <vs-row style="bottom:100px;padding-left:20px;">
            <vs-col w="6">
              <vs-card id="foot-card">
                <template #title>
                  <h3 class="text-contents" style="font-size:30px;margin-bottom:20px;">Send us Email!</h3>
                </template>
                <template #text>
                  <div class="center content-inputs" id="foot-input">
                    <div class="grid">
                      <vs-row>
                        <vs-col w="5">
                          <vs-input id="name"
                          dark
                          v-model="firstname"
                          placeholder="First Name" />
                        </vs-col>
                        <vs-col w="5">
                          <vs-input id="name"
                          dark
                          v-model="firstname"
                          placeholder="Last Name" />
                        </vs-col>
                        <vs-col w="12">
                          <vs-input id="email"
                          dark
                          v-model="firstname"
                          placeholder="E-Mail" />
                        </vs-col>
                        <vs-col w="12">
                          <textarea class="vs-input vs-input-content vs-input-content--has-color" id="input-massage" name="" cols="10" rows="5" style="float:left;border-radius:20px;"></textarea>
                        </vs-col>
                        <vs-col w="12">
                          <vs-button
                            style="float:right;margin-right:5px;"
                            color="rgb(59,222,200)"
                            gradient
                            :active="active == 6"
                            @click="active = 6"
                          >
                            Send Your Massage
                          </vs-button>
                        </vs-col>
                      </vs-row>
                    </div>
                  </div>
                </template>
                <template #interactions>
                  <vs-button danger icon>
                    <i class='bx bx-heart'></i>
                  </vs-button>
                  <vs-button class="btn-chat" shadow primary>
                    <i class='bx bx-chat' ></i>
                    <span class="span">
                      54
                    </span>
                  </vs-button>
                </template>
              </vs-card>
            </vs-col>
            <vs-col w="6">
              <div class="grid" style="text-align:start;color:white;">
                <vs-row>
                  <vs-col w="6" style="top:64.5px;">
                    <ul style="color:black;"><h3>Our Social Media</h3></ul>
                    <ul><a class="link-text" style="color:white;" href="">Instagram</a></ul>
                    <ul><a class="link-text" style="color:white;" href="">Facebook</a></ul>
                  </vs-col>
                  <vs-col w="6" style="top:64.5px;">
                    <ul style="color:black;"><h3>Connect</h3></ul>
                    <ul><a class="link-text" style="color:white;" href="">Teams</a></ul>
                    <ul><a class="link-text" style="color:white;" href="">Github</a></ul>
                    <ul><a class="link-text" style="color:white;" href="">Forum</a></ul>
                  </vs-col>
                  <vs-col w="12" style="margin-top:100px;margin-right:30px;text-align:right;">
                    Made with <i class="fi-xnsuxl-heart-solid" style="color:red;"></i> by <a class="link-text bolders" style="color:white;" href="">Ricko Tiaka</a>
                  </vs-col>
                </vs-row>
              </div>
            </vs-col>
          </vs-row>
        </div>
      </vs-col>
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
