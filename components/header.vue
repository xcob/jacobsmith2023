<template>
  <div id="header-info">
    <b-container align-h="center">
      <b-row align-h="center">
        <b-col md="auto"><b-img src="/roughheadshot.png" width="400px" alt="Fleek Logo Mark"></b-img></b-col>
        <b-col md="auto" align-self="center">
          <h1>Jacob Smith</h1>
          <h4>Web Developer & Digital Marketer</h4>
           <!-- <b-icon icon="bar-chart-fill"></b-icon>
           <b-icon-arrow-up></b-icon-arrow-up> -->
           <Attributes />
        </b-col>
      </b-row>
    </b-container>
    
  </div>
</template>

<script>

export default {
  name: 'header',
  layout: 'theme',
}
</script>

<style>
  #header-info{
    text-align: center;
    padding: 2em;
  }
</style>
