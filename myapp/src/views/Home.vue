<template>
  <div class="home" style="margin-top:3%;">
    <agile ref="carousel" autoplay :autoplay-speed="8000" :timing="'ease'" :speed="1000">
      <img class="slide" src="https://images.unsplash.com/photo-1506260408121-e353d10b87c7?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ" alt="">
      <img class="slide" src="https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ" alt="">
      <img class="slide" src="https://images.unsplash.com/photo-1524260855046-f743b3cdad07?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ" alt="">
    </agile>
    <div style="position:relative; margin-top:-20px;">
      <button @click="$refs.carousel.goTo(1)" style="background-color:white;height:1vh;width:1vw;border-radius:50%;border:none;margin-left:5px;">
      </button>
      <button @click="$refs.carousel.goTo(2)" style="background-color:white;height:1vh;width:1vw;border-radius:50%;border:none;margin-left:5px;">
      </button>
      <button @click="$refs.carousel.goTo(3)" style="background-color:white;height:1vh;width:1vw;border-radius:50%;border:none;margin-left:5px;">
      </button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import {VueAgile} from 'vue-agile'

export default {
  name: 'Home',
  components: {
    agile: VueAgile,
  }
}
</script>

<style>
.slide {
  display: block;
	height: 450px;
	object-fit: cover;
	width: 100%;
}
.agile__actions {
  display: none;
}

</style>
