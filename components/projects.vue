<template>
  <div>
    <b-container align-h="center" fluid="lg">
      <h3 class="workExp">Projects</h3>
      <b-row class="projectRow" align-h="center">
            <b-col>
              <h4>The Knob Shoppe - E-Commerce (Wordpress)</h4>
              <a href="https://theknobshoppe.com/" target="_blank"><b-img src="/tks-homepage.png"  fluid alt=""></b-img></a>
            </b-col>
      </b-row>
      <b-row class="projectRow" align-h="center">
            <b-col>
              <h4>Cosmanauts - NFT Project (Vue/NuxtJS/Cardano)</h4>
              <a href="https://cosmanauts.com/" target="_blank"><b-img src="/cosmanauts-screen.png" fluid  alt=""></b-img></a>
            </b-col>
      </b-row>
      <b-row class="projectRow" align-h="center">
            <b-col>
              <h4>Chips - NFT Project (Vue/NuxtJS/Cardano)</h4>
              <a href="https://rapid-poetry-0657.on.fleek.co/" target="_blank"><b-img src="/chips-sreenshot.png"  fluid  alt=""></b-img></a>
            </b-col>
          </b-row>
    </b-container>
  </div>
</template>

<style>
.workExp{
    text-align: center;
}

.projectRow{
    padding: 1em 1.5em;
}

@media only screen and (min-width: 500px)  {
.projectRow{
    padding: 1em 8em;
}

}
</style>