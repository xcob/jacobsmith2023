<template>
  <div id="header-info">
    <b-container align-h="center">
      <b-row align-h="center">
        <b-col align-self="center" order="2" order-md="1">
          <h1>Hi! I'm Jacob Smith</h1>
          <h4>Software Engineer & Digital Marketer</h4>
          <p>Developer at heart with a digital marketing mindset who is motivated by measurable results. 
            Active team-member and contributor when collaborating with distributed work-groups. 
            Experience in creating real world solutions for critical client issues and needs. 
          </p>
           <!-- <b-icon icon="bar-chart-fill"></b-icon>
           <b-icon-arrow-up></b-icon-arrow-up> -->
        </b-col>
        <b-col align-self="center" order="1" order-md="2"><b-img src="/circles-and-headshot-web.png" width="400px" alt="Fleek Logo Mark"></b-img>
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

  #header-info img {
    text-align: center;
  }
</style>
