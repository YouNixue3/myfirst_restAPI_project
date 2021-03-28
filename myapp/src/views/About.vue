<template>
  <div class="about" style="margin-top:5vh;margin-bottom:-20%;">
    <img class="backgrounds" style="width:100%;height:500px;object-fit:cover;margin-top:0px;" src="../assets/public/img/greenhouse-2139526_1920.jpg" alt="">
    <div class="grid container">
      <vs-row id="row-about">
        <vs-col w="6">
          <vs-card type="5" id="about-card">
            <template #title>
              <h3>Pot with a plant</h3>
            </template>
            <template #img>
              <img src="../assets/public/img/hydroponics-4255403_1920.jpg" alt="">
            </template>
            <template #text>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </p>
            </template>
          </vs-card>
        </vs-col>
        <vs-col style="bottom:350px;" w="6">
          <h1 style="position:relative;color:white;font-size:100px;text-shadow: 2px 2px 10px #000000;text-align:start;">About Us</h1>
          <div style="margin-top:180px;">
            <p style="text-align:start;">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu mauris placerat, dictum arcu id, imperdiet quam. Fusce hendrerit eu dolor vitae mollis. Nam rhoncus luctus lectus, condimentum viverra eros blandit sit amet. Nunc tempus, enim vel pharetra feugiat, dui ante egestas mauris, sed fringilla tortor dolor vitae nisi. In laoreet quam sapien, non viverra lectus malesuada et. Mauris vitae dui et dui aliquet porta. Etiam pretium dolor vel bibendum mollis. In aliquet sodales euismod. Integer a auctor nisi. Fusce sagittis dignissim enim id venenatis. Sed magna nibh, accumsan eget nibh vestibulum, fermentum posuere neque. Fusce imperdiet tincidunt leo ut maximus. Mauris tempus, arcu ac iaculis porta, lectus justo facilisis enim, vitae pulvinar nunc diam in nunc.
            </p>
            <p style="text-align:start;"> 
              Donec sit amet egestas nulla. Sed lorem turpis, aliquam vitae sem at, pulvinar lacinia ipsum. Aenean et euismod eros, eleifend ultrices odio. Proin eget sapien vitae felis vulputate accumsan. Ut libero augue, hendrerit nec massa tempus, fringilla vestibulum diam. Ut mattis eros nec diam luctus, a suscipit sem dapibus. Integer suscipit felis diam, eget sollicitudin sapien eleifend quis. Nullam mauris orci, sagittis a diam ac, cursus vestibulum nisi. Vivamus velit turpis, scelerisque sed ante ac, fermentum luctus purus. Pellentesque at tempor est. 
            </p>
            <p style="text-align:start;">
              Donec faucibu Praesent tincidunt sapien nulla, vel lacinia diam rhoncus sed. Cras efficitur a tellus id facilisis. Ut dapibus dolor ipsum, ac placerat justo aliquam ac. Fusce mollis dui eu ex rutrum vehicula. Nunc iaculis semper faucibus. Nunc a nulla ultrices, posuere augue ac, feugiat nibh. Ut vel dictum justo. Nullam felis velit, posuere quis nisl quis, facilisis aliquam eros. Vivamus volutpat, nisi in fermentum vulputate, purus lectus volutpat ipsum, sed fermentum lorem est a justo. Sed vel tellus nibh. Cras mollis massa vitae mauris bibendum, sollicitudin luctus leo suscipit. Nullam malesuada nisi nec nisi rutrum porttitor quis non est. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </p>
          </div>
        </vs-col>
      </vs-row>
    </div>
  </div>
</template>
<style>
#row-about {
  height: 500px;
}
.container {
  margin:20px;
}
#about-card {
  bottom:-110px;
  position: absolute;
}
#about-card .vs-card {
  background: transparent !important;
  /* bottom:300px; */
  width:40vw;
  /* max-height: none; */
  max-width: none !important;
}
#about-card .vs-card .vs-card__img {
  max-height: none;
}
#about-card .vs-card img {
  /* height: 500px; */
}
</style>
