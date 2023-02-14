<template>
    <div>
        <b-container id="social" fluid> 
            <b-row align-h="center">
                <b-col align-h="center">
                <b-button class="heroButton" href="/">Home</b-button>
                <b-button class="heroButton" href="mailto:jacobxxsmith@gmail.com">Contact</b-button>
                <a href="https://www.linkedin.com/in/jacob-smith-279060150/" target="_blank" rel="noopener noreferrer"><b-img src="/linkedin-icon.png" width="37px" alt="headshot"></b-img></a>
                <a href="https://github.com/xcob" target="_blank" rel="noopener noreferrer"><b-img src="/github-icon.png" width="40px" alt="headshot"></b-img></a>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<style>
  #social{
    text-align:center;
    padding: .6em 1em;
    background-color: #30344C;
    width: 100%;
  } 

  
  .heroButton {
    background-color: #20A29E;
    border: none;
    margin-right: 10px;
    font-size: 1em;
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

  

  @media only screen and (min-width: 500px)  {
    #social{
    text-align: right;
  } 

  }
</style>