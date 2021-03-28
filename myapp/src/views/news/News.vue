<template>
  <div class="home" style="margin-top:0;margin-bottom:80%;">
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
                      <img class="foto-content" src="../../assets/public/img/woman-with-beauty-long-brown-hair-fashion-model-with-long-straight-hair-fashion-model-posing_186202-8460.jpg" alt="">
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
                      <img class="foto-content" src="../../assets/public/img/woman-with-beauty-long-brown-hair-fashion-model-with-long-straight-hair-fashion-model-posing_186202-8460.jpg" alt="">
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
                      <img class="foto-content" src="../../assets/public/img/fashion-portrait-young-elegant-woman_1328-2691.jpg" alt="">
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
                      <img class="foto-content" src="../../assets/public/img/woman-with-beauty-long-brown-hair-fashion-model-with-long-straight-hair-fashion-model-posing_186202-8460.jpg" alt="">
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
                      <img class="foto-content" src="../../assets/public/img/fashion-portrait-young-elegant-woman_1328-2691.jpg" alt="">
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
// import {VueAgile} from 'vue-agile'

export default {
  data: () => ({
    page: 1
  }),
  name: 'News',
  components: {
    // agile: VueAgile,
  }
}
</script>

<style>

</style>
