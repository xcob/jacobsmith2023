<template>
    <div>
    <b-container align-h="center">
        <h3 class="workExp">Work Experience</h3>

      <b-row align-h="center" class="workRow">
        <b-col md="auto">
            <h4 class="workTitle">Front End Developer</h4>
            <p class="workDate">March 2023 - Present | High Level Marketing</p>
            <ul>
                <li>Building websites from XD files in a proprietary PHP-based CMS</li>
                <li>Creating custom PHP/Javascript functionality</li>
                <li>Assisted in the development of a new CMS based on Handlebars.js</li>
                <li>Performing client website training</li>
                <li>Supporting websites post-launch with updates and bugfixes</li>  
            </ul>
            </b-col>
      </b-row>
      <b-row align-h="center" class="workRow">
        <b-col md="auto">
            
            <h4 class="workTitle">Founder/CEO</h4>
            <p class="workDate">April 2022 - Present | The Knob Shoppe</p>
            <ul>
                <li>Build custom guitar pedal clones and modded clones</li>
                <li>Upkeep of Woocommerce powered Wordpress store</li>
                <li>Write content for and distribute Double Scoop newsletter</li>
                <li>Manage The Knob Shoppe/Double Scoop social media</li>
            </ul>
            <p style="text-align: center;">Check out <a href="https://theknobshoppe.com/" style="color: #208587;" target="_blank">The Knob Shoppe!</a></p>
            </b-col>
      </b-row>
      <b-row align-h="center" class="workRow">
        <b-col md="auto">
            <h4 class="workTitle">Marketing Web Developer</h4>
            <p class="workDate">March 2020 - February 2023 | ADTRAV Travel Management</p>
            <ul>
                <li>Building custom webpages with HTML and Wordpress page builders (Elementor/Divi)</li>
                <li>Creating mobile responsive layouts and styling with CSS/Bootstrap</li>
                <li>Writing Javascript for custom functionality</li>
                <li>Utilizing REST API's with PHP/Javascript for data retrieval and display</li>
                <li>Managing digital marketing campaigns with CRM integrations with landing pages and forms</li>  
            </ul>
            </b-col>
      </b-row>
      <b-row align-h="center" class="workRow">
        <b-col md="auto">
            <h4 class="workTitle">Website Support Specialist</h4>
            <p class="workDate">Nov. 2018 - March 2020 | High Level Marketing (Formerly Bell Media)</p>
            <ul>
                <li>Updating/creating web pages with HTML and Wordpress page builders (Elementor/Divi/Bakery)</li>
                <li>Creating mobile responsive layouts and page styling with CSS/Bootstrap/Foundation</li>
                <li>Utilizing Javascript/PHP to create custom functionality or bugfix client websites</li>
                <li>Assist the launch team with QA and deployment/transfer of new client websites. </li>
            </ul>
            </b-col>
      </b-row>

    </b-container>
    
  </div>
</template>

<style>

@keyframes headerAnimate {
     0%{background-position:91% 100%}
    100%{background-position:10% 0%}
}


.workTitle{
    text-align: center;
}

.workExp{
    text-align: center;
}

.workDate{
    text-align: center;
    color: #7a7e92;
}

.workRow{
    padding: 1.5em;
}

#work-info{
    text-align: left;
    padding: 2em;
  }

#work-info li{
    margin: 10px 0px;
} 


.workExp{
    animation: headerAnimate ease;
    animation-duration: 1.5s;
    background: linear-gradient(to left, #13172B, #e9e9e9);
    background-size: 200% 200%;
    color: #13172B;
    padding: .5em;
    border-radius: 2em;
    margin: 1em 0em;
}  




</style>