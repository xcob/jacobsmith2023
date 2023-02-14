<template>
  <div>
    <Navigation-home />
    <b-container align-h="center" align-v="center" fluid="lg" id="heroCob">
      <b-row>
        <b-col align-v="" align-h="center">
          <b-img src="/circles-and-headshot-web.png" lg="6" sm="12" fluid-grow alt="headshot"></b-img>
        </b-col>
        <b-col align-self="center" align-v="left" lg="6" sm="12"  id="heroLeft" align-h="left" >
          <h1 id="greeting">Hello!</h1>
          <h3 id="subGreeting">I'm Jacob Smith</h3>
          <p id="subAbout">Software Engineer/Digital Marketing Specialist</p>
          <p id="" >With over 5 years of experience in web development I have helped clients, employers, and friends achieve their website goals. Everything from simple Wordpress installs to complex 
            API calls with the latest Javascript framework has come across my screen. I love the challenge that comes with being a developer and always look forward to the next project. In 
            my spare time I love playing guitar, building guitar pedals, cooking, and playing ice hockey. 
          </p>
        </b-col>

      </b-row>
    </b-container>
    <Projects />

  </div>
</template>

<style>

 

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

  #aboutTitle{
    font-size: 2em;
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
