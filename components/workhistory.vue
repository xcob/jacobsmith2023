<template>
    <div>
    <b-container align-h="center">
      <b-row align-h="center" class="workRow">
        <b-col md="auto">
            <h3 class="workExp">Work Experience</h3>
            <h4 class="workTitle">Marketing Web Developer</h4>
            <p class="workDate">March 2020 - Present | ADTRAV Travel Management</p>
            <ul>
                <li>Total website management including DNS, domains, backups, SSL's, plugins, updates</li>
                <li>Custom code creation utilizing API's</li>
                <li>Managment of Zoho/Dynamics CRM systems with lead/contact workflows</li>
                <li>Manage digital marketing campaigns with CRM emails, forms, landing pages, and stratgies</li>
                <li>Social media Management from within Zoho Social</li>  
            </ul>
            </b-col>
      </b-row>
      <b-row align-h="center" class="workRow">
        <b-col md="auto">
            <h4 class="workTitle">Founder/CEO</h4>
            <p class="workDate">April 2022 - Present | The Knob Shoppe</p>
            <ul>
                <li>Build custom guitar pedal clones and modded clones</li>
                <li>Manage Woocommerce powered Wordpress store</li>
                <li>Manage Double Scoop newsletter distribution and content</li>
                <li>Manage The Knob Shoppe/Double Scoop social media presence</li>
            </ul>
            <p style="text-align: center;">Check out <a href="https://theknobshoppe.com/" style="color: #208587;" target="_blank">The Knob Shoppe!</a></p>
            </b-col>
      </b-row>
      <b-row align-h="center" class="workRow">
        <b-col md="auto">
            <h4 class="workTitle">Website Support Specialist</h4>
            <p class="workDate">Nov. 2018 - March 2020 | High Level Marketing (Formerly Bell Media)</p>
            <ul>
                <li>Launch and QA custom Wordpress sites</li>
                <li>Create custom functionality for new and existing client websites</li>
                <li>Maintain, update, and bugfix existing client websites</li>
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
    padding: 2em;
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
    margin-bottom: 1em;
}  




</style>