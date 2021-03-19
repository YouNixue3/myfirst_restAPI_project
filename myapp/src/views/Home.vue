<template>
  <div class="home" style="margin-top:-13vh;">
    <b style="position:relative;margin-left:auto;top:250px;font-size:800%;z-index:1;color:rgb(238, 238, 238);">LeafLife</b>
    <agile ref="carousel" autoplay :autoplay-speed="8000" :timing="'ease'" :speed="1000">
      <img class="slide" src="https://images.unsplash.com/photo-1506260408121-e353d10b87c7?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ" alt="">
      <img class="slide" src="https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ" alt="">
      <img class="slide" src="https://images.unsplash.com/photo-1524260855046-f743b3cdad07?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ" alt="">
    </agile>
    <div style="position:relative; margin-top:-70px;">
      <button @click="$refs.carousel.goTo(1)" style="background-color:white;height:1vh;width:1vw;border-radius:50%;border:none;margin-left:5px;">
      </button>
      <button @click="$refs.carousel.goTo(2)" style="background-color:white;height:1vh;width:1vw;border-radius:50%;border:none;margin-left:5px;">
      </button>
      <button @click="$refs.carousel.goTo(3)" style="background-color:white;height:1vh;width:1vw;border-radius:50%;border:none;margin-left:5px;">
      </button>
    </div>
    <div class="grid" style="margin-top:10px;">
      <vs-row justify="center">
        <vs-col vs-type="flex" vs-align="right" w="5">
        <vs-card id="test" type="3">
            <template #title>
              <h3>Pot with a plant</h3>
            </template>
            <template #text>
              <vs-alert gradient :page.sync="page">
                <template #page-1>
                  Pagina 1 - esta pagina es un slot y aquí adentro puedes agregar ya sea texto,
                  elementos html o componentes
                </template>

                <template #page-2>
                  Pagina 2 - En esta otra pagina puedes poner también lo que necesites
                  y es dinámico osea que puedes agregar cuantas paginas necesites
                </template>

                <template #page-3>
                  Pagina 3 - esta es la ultima pagina de el ejemplo
                </template>
              </vs-alert>
            </template>
          </vs-card>
        </vs-col>
      </vs-row>
      <div class="backgrounds">
        <vs-card-group id="overflow-hidden" style="bottom:200px;">
          <vs-row style="width:3000px;">
            <vs-col vs-align="center" w="6" class="col-mar">
              <vs-card id="content-blog">
                <template #title>
                  <h3>Pot with a plant</h3>
                </template>
                <template #img>
                  <img src="https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ" alt="">
                </template>
                <template #text>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  </p>
                </template>
                <template #interactions>
                  <vs-button danger icon>
                    <i class="fi-white fi-xwluxl-heart-wide"></i>
                  </vs-button>
                  <vs-button class="btn-chat" shadow primary>
                    <i class="fi-xnluxl-comment"></i>
                    <span class="span">
                      54
                    </span>
                  </vs-button>
                </template>
              </vs-card>
            </vs-col>
            <vs-col vs-align="center" w="5" id="col-mar">
              <vs-row id="top-sec">
                <vs-card>
                  <template #title>
                    <h3>Pot with a plant</h3>
                  </template>
                  <template #img>
                    <img src="https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ" alt="">
                  </template>
                  <template #text>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    </p>
                  </template>
                  <template #interactions>
                    <vs-button danger icon>
                      <i class="fi-white fi-xwluxl-heart-wide"></i>
                    </vs-button>
                    <vs-button class="btn-chat" shadow primary>
                      <i class="fi-xnluxl-comment"></i>
                      <span class="span">
                        54
                      </span>
                    </vs-button>
                  </template>
                </vs-card>
              </vs-row>
              <vs-row id="top-third">
                <vs-card>
                  <template #title>
                    <h3>Pot with a plant</h3>
                  </template>
                  <template #img>
                    <img src="https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ" alt="">
                  </template>
                  <template #text>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    </p>
                  </template>
                  <template #interactions>
                    <vs-button danger icon>
                      <i class="fi-white fi-xwluxl-heart-wide"></i>
                    </vs-button>
                    <vs-button class="btn-chat" shadow primary>
                      <i class="fi-xnluxl-comment"></i>
                      <span class="span">
                        54
                      </span>
                    </vs-button>
                  </template>
                </vs-card>
              </vs-row>
            </vs-col>
            <vs-col vs-align="center" w="5" id="col-mar2">
              <vs-row id="top-sec">
                <vs-card>
                  <template #title>
                    <h3>Pot with a plant</h3>
                  </template>
                  <template #img>
                    <img src="https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ" alt="">
                  </template>
                  <template #text>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    </p>
                  </template>
                  <template #interactions>
                    <vs-button danger icon>
                      <i class="fi-white fi-xwluxl-heart-wide"></i>
                    </vs-button>
                    <vs-button class="btn-chat" shadow primary>
                      <i class="fi-xnluxl-comment"></i>
                      <span class="span">
                        54
                      </span>
                    </vs-button>
                  </template>
                </vs-card>
              </vs-row>
              <vs-row id="top-third">
                <vs-card>
                  <template #title>
                    <h3>Pot with a plant</h3>
                  </template>
                  <template #img>
                    <img src="https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ" alt="">
                  </template>
                  <template #text>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    </p>
                  </template>
                  <template #interactions>
                    <vs-button danger icon>
                      <i class="fi-white fi-xwluxl-heart-wide"></i>
                    </vs-button>
                    <vs-button class="btn-chat" shadow primary>
                      <i class="fi-xnluxl-comment"></i>
                      <span class="span">
                        54
                      </span>
                    </vs-button>
                  </template>
                </vs-card>
              </vs-row>
            </vs-col>
          </vs-row>
        </vs-card-group>
      </div>
      <div class="center grid">
        <vs-row style="bottom:40px;">
          <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="3" style="font-size:400%;">
            <b>Blogs</b>
          </vs-col>
        </vs-row>
        <div class="backgrounds" style="height:350px;">
          <vs-row style="bottom:280px;">
            <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="12">
              <vs-row>
                <vs-col w="8" offset="2">
                  <div class="center content-inputs side-menu">
                    <vs-input id="input-search" shadow success type="email" icon-after v-model="value3" label-placeholder="Search">
                      <template #icon>
                        <i class="fi-xnsuxl-magnifying-glass-solid"></i>
                      </template>
                    </vs-input>
                  </div>
                </vs-col>
                <vs-col class="card-blogs" vs-type="flex" vs-justify="flex-end" vs-align="space-around" w="12">
                  <vs-card type="3" id="blogs-content-cards">
                    <template #title>
                      <h3 class="title-contents">Pot with a plant</h3>
                    </template>
                    <template #img>
                      <img class="foto-content" src="../assets/public/img/woman-with-beauty-long-brown-hair-fashion-model-with-long-straight-hair-fashion-model-posing_186202-8460.jpg" alt="">
                    </template>
                    <template #text>
                      <p class="text-contents">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      </p>
                    </template>
                    <template #interactions>
                      <vs-button danger icon>
                        <i class="fi-white fi-xwluxl-heart-wide"></i>
                      </vs-button>
                      <vs-button class="btn-chat" shadow primary>
                        <i class="fi-xnluxl-comment"></i>
                        <span class="span">
                          54
                        </span>
                      </vs-button>
                    </template>
                  </vs-card>
                </vs-col>
                <vs-col class="card-blogs" vs-type="flex" vs-justify="flex-end" vs-align="space-around" w="12">
                  <vs-card type="3" id="blogs-content-cards">
                    <template #title>
                      <h3 class="title-contents">Pot with a plant</h3>
                    </template>
                    <template #img>
                      <img class="foto-content" src="../assets/public/img/woman-with-beauty-long-brown-hair-fashion-model-with-long-straight-hair-fashion-model-posing_186202-8460.jpg" alt="">
                    </template>
                    <template #text>
                      <p class="text-contents">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      </p>
                    </template>
                    <template #interactions>
                      <vs-button danger icon>
                        <i class="fi-white fi-xwluxl-heart-wide"></i>
                      </vs-button>
                      <vs-button class="btn-chat" shadow primary>
                        <i class="fi-xnluxl-comment"></i>
                        <span class="span">
                          54
                        </span>
                      </vs-button>
                    </template>
                  </vs-card>
                </vs-col>
                <vs-col class="card-blogs" vs-type="flex" vs-justify="flex-end" vs-align="space-around" w="12">
                  <vs-card type="3" id="blogs-content-cards">
                    <template #title>
                      <h3 class="title-contents">Pot with a plant</h3>
                    </template>
                    <template #img>
                      <img class="foto-content" src="../assets/public/img/fashion-portrait-young-elegant-woman_1328-2691.jpg" alt="">
                    </template>
                    <template #text>
                      <p class="text-contents">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      </p>
                    </template>
                    <template #interactions>
                      <vs-button danger icon>
                        <i class="fi-white fi-xwluxl-heart-wide"></i>
                      </vs-button>
                      <vs-button class="btn-chat" shadow primary>
                        <i class="fi-xnluxl-comment"></i>
                        <span class="span">
                          54
                        </span>
                      </vs-button>
                    </template>
                  </vs-card>
                </vs-col>
                <vs-col class="card-blogs" vs-type="flex" vs-justify="flex-end" vs-align="space-around" w="12">
                  <vs-card type="3" id="blogs-content-cards">
                    <template #title>
                      <h3 class="title-contents">Pot with a plant</h3>
                    </template>
                    <template #img>
                      <img class="foto-content" src="../assets/public/img/woman-with-beauty-long-brown-hair-fashion-model-with-long-straight-hair-fashion-model-posing_186202-8460.jpg" alt="">
                    </template>
                    <template #text>
                      <p class="text-contents">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      </p>
                    </template>
                    <template #interactions>
                      <vs-button danger icon>
                        <i class="fi-white fi-xwluxl-heart-wide"></i>
                      </vs-button>
                      <vs-button class="btn-chat" shadow primary>
                        <i class="fi-xnluxl-comment"></i>
                        <span class="span">
                          54
                        </span>
                      </vs-button>
                    </template>
                  </vs-card>
                </vs-col>
                <vs-col class="card-blogs" vs-type="flex" vs-justify="flex-end" vs-align="space-around" w="12">
                  <vs-card type="3" id="blogs-content-cards">
                    <template #title>
                      <h3 class="title-contents">Pot with a plant</h3>
                    </template>
                    <template #img>
                      <img class="foto-content" src="../assets/public/img/fashion-portrait-young-elegant-woman_1328-2691.jpg" alt="">
                    </template>
                    <template #text>
                      <p class="text-contents">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      </p>
                    </template>
                    <template #interactions>
                      <vs-button danger icon>
                        <i class="fi-white fi-xwluxl-heart-wide"></i>
                      </vs-button>
                      <vs-button class="btn-chat" shadow primary>
                        <i class="fi-xnluxl-comment"></i>
                        <span class="span">
                          54
                        </span>
                      </vs-button>
                    </template>
                  </vs-card>
                </vs-col>
                <vs-col class="backgrounds" style="height:300px;">
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
                                    <textarea class="vs-input" id="input-massage" name="" cols="10" rows="5" style="float:left;border-radius:20px;"></textarea>
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
              </vs-row>
            </vs-col>
          </vs-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import {VueAgile} from 'vue-agile'

export default {
  data: () => ({
    page: 1
  }),
  name: 'Home',
  components: {
    agile: VueAgile,
  }
}
</script>

<style>
.link-text {
  text-decoration: none;
}
#foot-input .vs-input-content {
  margin-bottom: 5px;
}
#foot-input #vs-input--name {
  width:200px;
}
#foot-input #vs-input--email {
  width:300px;
}
#input-massage {
  width:450px;
  height: 100px;
}
#foot-card .vs-card {
  height: 300px;
  width: 100%;
  max-width: none !important;
}
.text-contents {
  text-align: start;
}
#input-search {
  font-size: 30px;
}
#input-search input, #input-search label {
  width: 100%;
  font-size: 30px;
}
#input-search .vs-input__icon {
  padding: 25px;
  right:-5px;
}
.content-img {
  border-radius: 20px;
  object-fit: cover;
  width: 130px;
  height: 130px;
}
.title-contents {
  font-size: 60px !important;
  text-align: start;
}
.lighters {
  font-weight: lighter;
}
.bolders {
  font-weight: bolder;
}
.boldes {
  font-weight: bold;
}
.chip {
  margin-bottom: 20px;
  border-radius: 20px;
  background: mediumseagreen;
  color: white;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
.card-blogs {
  margin-bottom:15px;
  margin-left: 30px;
}
#top-sec .vs-card-content {
  margin-bottom:10px;
}
#top-third .vs-card-content {
  margin-left:200px;
}
#col-mar2 {
  margin-left: 85%;
  position: absolute;
}
.foto-content{
  width: 500px !important;
  object-fit: cover;
  height: 100% !important;
}
.slide {
  display: block;
	height: 60vh;
	object-fit: cover;
	width: 100%;
}
.agile__actions {
  display: none;
}
#blogs-content-cards .vs-card {
  max-width:1260px;
  margin: auto;
}
#blogs-content-cards .vs-card__text {
  width: 50%;
}
#blogs-content-cards .vs-card .vs-card__img {
  height: 300px;
  max-height: 300px;
}
#blogs-content-cards .vs-card .vs-card__img img {
  width:100%;
  height: 100%;
  object-fit: cover;
}
#content-blog .vs-card {
  max-width:760px;
}
#content-blog .vs-card .vs-card__img {
  height: 500px;
  max-height: 500px;
}
#content-blog .vs-card .vs-card__img img {
  width:100%;
  height: 100%;
  object-fit: cover;
}
#test .vs-card {
  margin:auto;
}
#test .vs-card .vs-alert .vs-alert__pagination button {
  color:black;
}
#test .vs-alert--gradient::before {
  background: white;
}
#test .vs-alert--gradient {
  background: white;
}
#test .vs-alert {
  background: white;
  color: black;
}
.side-menu{
  background:white;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.1) ;
  border-radius: 20px;
  margin-bottom: 20px;
}
.fi-white {
  color:white;
  margin: -3px;
}
#overflow-hidden .vs-card__group-cards {
  overflow: hidden;
}
.backgrounds {
  background: mediumseagreen;
  margin-top: 300px;
  height: 500px;
}
</style>
