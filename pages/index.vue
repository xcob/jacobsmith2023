<template>
  <div> 
    <b-container align-h="center" align-v="center" fluid="lg" id="heroCob">
      <b-row>
        <b-col align-self="center" align-v="center" id="heroLeft" align-h="center" order="2" order-md="1">
          <h1 id="greeting">Hello!</h1>
          <h3 id="subGreeting">I'm Jacob Smith</h3>
          <p id="subAbout">Web Developer/Marketing Specialist</p>
         <b-button class="heroButton" href="/resume">Resume</b-button>
         <!-- <b-button class="heroButton" href="#">More Info</b-button> -->
        </b-col>
        <b-col align-v="" align-h="" order="1" order-md="2">
          <b-img src="/circles-and-headshot-web.png" width="390px" alt="headshot"></b-img>
        </b-col>
      </b-row>
       
    </b-container>
    <Projects />
    
  </div>
</template>

<style>
  #greeting{
    font-size: 3em;
  }

  #subGreeting{
    font-size: 2em;
  }
  
  #subAbout{
    font-size: 1.2em;
  }
 #heroCob{
  margin-top: 2em;
  padding: 2em;
  background-color: #191e38;
  border-radius: 10px;
  box-shadow:   0px 12px 24px -12px rgba(0, 0, 0, 0.5);
 }

 #heroLeft{
  padding-left: 2em;
 }

 .heroButton{
  background-color: #20A29E;
  border: none;
  margin-right: 10px;
  font-size: 1.5em;
 }

 .projectsHeader{
    text-align: center;
    animation: headerAnimate ease;
    animation-duration: 1.5s;
    background: linear-gradient(to left, #13172B, #e9e9e9);
    background-size: 200% 200%;
    color: #13172B;
    padding: .5em;
    border-radius: 2em;
    margin: 1em 0em;
    padding-left: 4em;
    padding-right: 4em;
  
 }
</style>

<script>
  export default {
    name: 'IndexPage',
    layout: 'theme',
  }

</script>
