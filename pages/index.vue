<template>
  <div>
    <div id="backgroundCurve"></div>
    <b-container id="social" fluid> 
       <b-row align-h="center">
         <b-col align-h="center" sm="12">
          <b-button class="heroButton" href="/resume">Resume</b-button>
          <b-button class="heroButton" href="mailto:jacobxxsmith@gmail.com">Contact</b-button>
          <a href="https://www.linkedin.com/in/jacob-smith-279060150/" target="_blank" rel="noopener noreferrer"><b-img src="/linkedin-icon.png" width="40px" alt="headshot"></b-img></a>
          <a href="https://github.com/xcob" target="_blank" rel="noopener noreferrer"><b-img src="/github-icon.png" width="40px" alt="headshot"></b-img></a>
        </b-col>
      </b-row>
    </b-container>
    <b-container align-h="center" align-v="center" fluid="lg" id="heroCob">
      <b-row>
        <b-col align-v="" align-h="center">
          <b-img src="/circles-and-headshot-web.png" lg="6" sm="12" fluid-grow alt="headshot"></b-img>
        </b-col>
        <b-col align-self="center" align-v="left" lg="6" sm="12"  id="heroLeft" align-h="left" >
          <h1 id="greeting">Hello!</h1>
          <h3 id="subGreeting">I'm Jacob Smith</h3>
          <p id="subAbout">Software Engineer/Digital Marketing Specialist</p>
        </b-col>

      </b-row>
    </b-container>
    <Projects />

  </div>
</template>

<style>


  #social{
    text-align:center;
    padding: .4em;
    background-color: #30344C;
  } 

  #greeting {
    font-size: 3em;
  }

  #subGreeting {
    font-size: 2em;
  }

  #subAbout {
    font-size: 1.2em;
  }

  #backgroundCurve{
    /* background-image: url('/blank-bg.png'); */
    position: absolute;
  }

  #heroCob {
    padding: 2em;
    padding-top: 4em;
    margin-bottom: 5em;
  }

  #heroLeft {
    padding-left: 2em;
  }

  .heroButton {
    background-color: #20A29E;
    border: none;
    margin-right: 10px;
    font-size: 1em;
  }

  .projectsHeader {
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


  @media only screen and (min-width: 500px)  {
    #social{
    text-align: right;
  } 

}

</style>

<script>
  export default {
    name: 'IndexPage',
    layout: 'theme',
  }

</script>
