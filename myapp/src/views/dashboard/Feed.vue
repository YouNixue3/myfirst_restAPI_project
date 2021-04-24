<template>
  <div class="home">
    <div class="square backgrounds" style="margin-top:-30px;height:350px;margin-bottom:0%;">
      <div class="container" style="margin-left:8vh;">
        <div class="grid" style="padding-top:100px;">
          <vs-row style="margin-bottom:30px;">
              <vs-col offset="1" w="11"><h1 style="float:left;color:white;font-size:45px;">Welcome Ricko Tiaka</h1></vs-col>
              <vs-col offset="1" w="4" style="display:inherit !important;">
                <vs-button
                  icon
                  color="danger"
                  gradient
                  style="margin-right:20px;"
                >
                  <span class="material-icons">home</span>
                </vs-button>
                <span style="margin-top:auto;margin-bottom:auto;font-size:20px;"><b>/</b><span> Account</span><b> /</b><span> My Feed</span></span>
              </vs-col>
          </vs-row>
          <vs-row>
            <vs-col offset="1" w="10" style="padding:5px;">
              <div style="background:white;padding:25px;border-radius:50px;">
                <vs-card id="cardfeeddash" type="3" v-for="post in dataget.results" :key="post">
                  <template #title>
                    <h3>{{post.title}}</h3>
                  </template>
                  <template #img>
                    <img src="https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ" alt="">
                  </template>
                  <template #text>
                    <div class="grid">
                      <vs-row>
                        <vs-col w="12">
                          <p style="height:130px;max-height:130px;">
                            {{post.content}}
                          </p>
                        </vs-col>
                        <vs-col offset="10" w="2">
                          <div style="display:flex;">
                          <vs-button
                          icon
                            size="small"
                            color="rgb(59,222,200)"
                            gradient
                            :active="active == 6"
                            @click="active = 6"
                          >
                            <span class="material-icons">edit</span>
                          </vs-button>
                          <vs-button
                          icon
                            size="small"
                            color="rgb(255,68,71)"
                            gradient
                            :active="active == 6"
                            @click="active = 6"
                          >
                            <span class="material-icons">delete</span>
                          </vs-button>
                          </div>
                        </vs-col>
                      </vs-row>
                    </div>
                  </template>
                  <template #interactions>
                    <vs-button class="btn-chat" primary>
                      <span class="material-icons" style="font-size:20px;margin-right:2px;">thumb_up</span>
                      <span class="span">
                        54
                      </span>
                    </vs-button>
                    <vs-button class="btn-chat" danger>
                      <span class="material-icons" style="font-size:20px;margin-right:2px;">thumb_down</span>
                      <span class="span">
                        54
                      </span>
                    </vs-button>
                  </template>
                </vs-card>
                <div class="center">
                  <div @click="pagi()">
                    <vs-pagination color="success" v-model="page" :length="pagedata" />
                  </div>
                <!-- <button @click="pagi()"></button> -->
              </div>
              </div>
            </vs-col>
          </vs-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  components: {

  },
  data() {
    return {
      page: 1,
      dataget: null,
      pagedata: null 
    }
  },
  mounted() {
    axios.get('http://127.0.0.1:8000/rest-api/homepost/')
    .then(response => {
      this.dataget = response.data
      var beforedatapage = response.data.count / 5 
      var afterdatapage = Math.round(beforedatapage)
      if (afterdatapage < beforedatapage) {
        this.pagedata = afterdatapage + 1
      } else {
        this.pagedata = afterdatapage
      }
    })
    .catch(er => {
      console.log(er)
    })
  },
  methods: {
    pagi() {  
      // this.page = this.page+1
      // console.log(this.page)
      // console.log()
      axios.get('http://127.0.0.1:8000/rest-api/homepost/?page=' + this.page)
    .then(response => {
      this.dataget = response.data
      console.log(this.dataget)
    })
    .catch(er => {
      console.log(er)
    })
      // location.reload()
      // axios.get('http://127.0.0.1:8000/rest-api/homepost/?page=' + this.page)
      // .then(response => {
      //   this.dataget = response.data
      //   console.log(this.dataget)
      // })
      // .catch(er => {
      //   console.log(er)
      // })
    }
  },
} 
</script>
<style>
#cardfeeddash .vs-card {
  width: 100%;
  max-width: 100% !important;
  margin-bottom: 20px;
}
#cardfeeddash .vs-card .vs-card__img {
  max-width: 450px;
}
#cardfeeddash .vs-card .vs-card__text {
  width: 1000px;
}
</style>