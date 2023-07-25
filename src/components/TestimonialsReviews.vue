<template>

    <section class="testimonials pb-5 ">
        <figure class="snip1197">
          <figcaption>
            <blockquote>I absolutely love the <span class="orange">ReciFood</span> app! For anyone who appreciates good food and loves to cook, Recifood app is an absolute must-have.</blockquote>
            <div class="arrow"></div>
          </figcaption>
          <img src="../assets/img/susanne.png" alt="sq-sample10"/>
          <!-- <div class="author">
            <h5>Pelican Steve <span>- LittleSnippets</span></h5>
          </div> -->
        </figure>
        <figure class="snip1197 hover">
          <figcaption>
            <blockquote>The <span class="orange">ReciFood</span> app is a game-changer! As someone who loves experimenting with flavors and cuisines, this app has become my ultimate kitchen companion.</blockquote>
            <div class="arrow"></div>
          </figcaption>
          <img src="../assets/img/kevin.png" alt="sq-sample33"/>
          <!-- <div class="author">
            <h5>Max Conversion<span>- LittleSnippets</span></h5>
          </div> -->
        </figure>
        
    </section>
</template>

<script setup>

</script>

<style lang="scss" scoped>

// html {
//   height: 100%;
// }
.testimonials {
  background-color: rgb(248,249,250);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: wrap;
  margin: 0;
  height: 100%;
}

.orange{
  color: orange;
}

figure.snip1197 {
  
  position: relative;
  margin: 0.6rem;
  min-width: 400px;
  max-width: 480px;
  width: 100%;
  color: #333;
  text-align: left;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
}
figure.snip1197 * {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
figure.snip1197 img {
  float: right;
  max-width: 40%;
  vertical-align: middle;
  border-radius: 0.2rem 0 0 0.2rem;
}
figure.snip1197 figcaption {
  top: 0;
  bottom: 0;
  left: 0;
  width: 60%;
  position: absolute;
  background-color: #ffffff;
  border-radius: 0.2rem 0 0 0.2rem;
}
figure.snip1197 blockquote {
  position: relative;
  padding: 1.6rem 3.125rem 1.6rem 3.125rem;
  font-size: 0.8em;
  font-weight: 500;
  text-align: left;
  margin: 0;
  line-height: 1.6em;
  font-style: italic;
  top: 20%;
}
figure.snip1197 blockquote:before,
figure.snip1197 blockquote:after {
  font-family: 'FontAwesome';
  content: "\201C";
  position: absolute;
  font-size: 50px;
  opacity: 0.3;
  font-style: normal;
}
figure.snip1197 blockquote:before {
  top: 25px;
  left: 20px;
}
figure.snip1197 blockquote:after {
  content: "\201D";
  right: 20px;
  bottom: 0px;
}
figure.snip1197 .arrow {
  top: 30%;
  left: 100%;
  width: 0;
  height: 0;
  border-left: 0 solid transparent;
  border-right: 25px solid transparent;
  border-top: 25px solid #ffffff;
  margin: 0;
  position: absolute;
}
figure.snip1197 .author {
  position: absolute;
  top: 100%;
  width: 60%;
  padding: 10px 15px;
  color: #ffffff;
  margin: 0;
  text-transform: uppercase;
}
figure.snip1197 .author h5 {
  opacity: 0.8;
  margin: 0;
  font-weight: 800;
}
figure.snip1197 .author h5 span {
  font-weight: 400;
  text-transform: none;
  padding-left: 0.4rem;
}


</style>