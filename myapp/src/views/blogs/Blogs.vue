<template>
  <div class="home">
    <Navbar/>
    <div class="square" style="margin-top:0;margin-bottom:80%;">
      <div class="grid" style="margin-top:10px;">
        <div class="center grid">
          <vs-row style="bottom:40px;">
            <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="3" style="font-size:400%;">
              <b>Blogs</b>
            </vs-col>
          </vs-row>
          <div class="backgrounds" style="height:550px;">
            <vs-row style="bottom:280px;">
              <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="12">
                <vs-row>
                  <vs-col w="8" offset="2">
                    <div class="center content-inputs side-menu">
                      <vs-input id="input-search" shadow success type="email" icon-after v-model="value3" label-placeholder="Search">
                        <template #icon>
                          <span class="material-icons" style="font-size:38px;">search</span>
                        </template>
                      </vs-input>
                    </div>
                  </vs-col>
                  <vs-col class="card-blogs" vs-type="flex" vs-justify="flex-end" vs-align="space-around" w="12" v-for="post in blogspost" :key="post">
                    <vs-card type="3" id="blogs-content-cards">
                      <template #title>
                        <h3 class="title-contents">{{post.title}}</h3>
                      </template>
                      <template #img>
                        <img class="foto-content" src="../../assets/public/img/woman-with-beauty-long-brown-hair-fashion-model-with-long-straight-hair-fashion-model-posing_186202-8460.jpg" alt="">
                      </template>
                      <template #text>
                        <p class="text-contents">
                          {{post.content}}
                        </p>
                      </template>
                      <template #interactions>
                        <vs-button danger icon>
                          <span class="material-icons">favorite_border</span>
                        </vs-button>
                        <vs-button class="btn-chat" shadow primary>
                          <span class="material-icons">chat_bubble_outline</span>
                          <span class="span">
                            54
                          </span>
                        </vs-button>
                      </template>
                    </vs-card>
                  </vs-col>
                </vs-row>
              </vs-col>
            </vs-row>
          </div>
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
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default {
  data: () => ({
    page: 1,
    blogspost: ''
  }),
  name: 'Blogs',
  components: {
    // agile: VueAgile,
    Navbar,
    Footer
  },
  mounted() {
    axios.get('http://127.0.0.1:8000/rest-api/blogspost/')
    .then(response => {
      this.blogspost = response.data
    })
    .catch(er => {
      console.log(er)
    })
  },
}
</script>

<style>

</style>
