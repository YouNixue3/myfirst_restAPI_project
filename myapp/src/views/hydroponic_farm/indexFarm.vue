<template>
  <div class="home">
    <!-- <Navbar/> -->
    <div class="square" style="margin-top:5%;margin-bottom:0%;">
      <div class="container">
        <div class="row">
          <vs-row>
            <vs-col w="3" v-for="post in hydroponicpost" :key="post">
              <vs-card class="galleryfarm" type="2">
                <template #title>
                  <h3>{{post.title}}</h3>
                </template>
                <template #img>
                  <img src="../../assets/public/img/greenhouse-2139526_1920.jpg" alt="">
                </template>
                <template #text>
                  <p>
                    {{post.content}}
                  </p>
                </template>
                <template #interactions>
                  <vs-button class="btn-chat" shadow primary>
                    <span class="span">
                      Day 54
                    </span>
                  </vs-button>
                </template>
              </vs-card>
            </vs-col>
          </vs-row>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import axios from 'axios';
// @ is an alias to /src
// import {VueAgile} from 'vue-agile'
// import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default {
  data: () => ({
    page: 1,
    hydroponicpost: '',
  }),
  name: 'Blogs',
  components: {
    // agile: VueAgile,
    // Navbar,
    Footer
  },
  mounted() {
    axios.get('http://127.0.0.1:8000/rest-api/hydroponicpost/')
    .then(response => {
      this.hydroponicpost = response.data
    })
    .catch(er => {
      console.log(er)
    })
  },
}
</script>

<style>

</style>
