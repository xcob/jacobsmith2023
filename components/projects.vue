<template>
  <div>
    <b-container align-h="center" fluid="lg">
      <b-row class="projectRow" align-h="center">
        <h3 id="projectTitle">Projects</h3>
            <b-col sm="12">
              <a href="https://theknobshoppe.com/" target="_blank"><b-img class="imageOverlay" src="/tks-homepage.png"  fluid alt=""></b-img></a>
              <p class="project">The Knob Shoppe</p>
              <p class="projectType">Guitar Pedals Shop</p>
              <p class="technologies">Wordpress, Woocommerce, Stripe</p>
            </b-col>
            <b-col sm="12">
              <a href="https://cosmanauts.com/" target="_blank"><b-img class="imageOverlay" src="/cosmanauts-screen.png" fluid  alt=""></b-img></a>
              <p class="project">Cosmanauts</p>
              <p class="projectType">Crypto NFT Project</p>
              <p class="technologies">Vue, NuxtJS, Fleek, Cardano, Blockfrost, Nami Wallet</p>
            </b-col>
            <b-col sm="12">
              <a href="https://mute-sky-2058.on.fleek.co/" target="_blank"><b-img class="imageOverlay" src="/pokemon-app-ss-update.png" fluid  alt=""></b-img></a>
              <p class="project">Pokemon Randomizer</p>
              <p class="projectType">Pokemon Sprite and Card Generator</p>
              <p class="technologies">React, Pokemon API, Bootstrap</p>
            </b-col>
             <b-col sm="12">
              <a href="https://rapid-poetry-0657.on.fleek.co/" target="_blank"><b-img class="imageOverlay" src="/chips-sreenshot.png"  fluid  alt=""></b-img></a>
              <p class="project">Chips</p>
              <p class="projectType">Crypto NFT Project</p>
              <p class="technologies">Vue, NuxtJS, Fleek, Cardano, Blockfrost, Nami Wallet</p>
            </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style>
#projectTitle{
    font-size: 2em;
    text-align: center;
    background-color: #30344C;
    border-radius: 5px;
    margin-bottom: 2em;
    padding: .5em;
}

.project{
  font-size: 1.2em;
  padding: .5em 0em;
  margin-bottom:0px;
}

.projectType{
  font-size: 1em;
  color: #4C839D;
}

.technologies{
  color: #36ABA8;
  font-size: .8em;
  margin-bottom: 6em;
}

.projectRow{
    padding: 1em 1.5em;
}

.imageOverlay{
  filter: saturate(25%);
  transition: filter 0.5s ease-in-out;
  border-radius: 5px;
}

.imageOverlay:hover{
  filter: saturate(100%);
  transition: filter 0.5s ease-in-out;
}

@media only screen and (min-width: 500px)  {
.projectRow{
    padding: 1em 8em;
}

}
</style>