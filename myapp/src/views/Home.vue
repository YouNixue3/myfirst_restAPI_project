<template>
  <div class="home" style="margin-top:-13vh;margin-bottom:80%;">
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
      <div class="container" style="margin-top:80px;">
        <vs-row>
          <vs-col vs-align="center" w="6">
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
          <vs-col vs-align="center" w="6">
            <vs-row>
              <vs-col w="6">
                <vs-card style="margin-left:10px;">
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
              <vs-col w="6">
                <vs-card style="margin-left:10px;">
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
              <vs-col w="6">
                <vs-card style="margin-left:10px;">
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
              <vs-col w="6">
                <vs-card style="margin-left:10px;">
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
            </vs-row>
          </vs-col>
        </vs-row>
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

</style>
