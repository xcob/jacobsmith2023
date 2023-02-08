<template>
  <div>
    <b-container align-h="center" fluid="lg">
      <b-row class="projectRow" align-h="center">
          <h3 class="workExp">Past Projects</h3>
          <b-row >
            <b-col>
              <a href="https://cosmanauts.com/" target="_blank"><b-img src="/cosmanauts-screen.png" fluid  alt=""></b-img></a>
            </b-col>
          </b-row>
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