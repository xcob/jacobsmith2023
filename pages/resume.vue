<template>
  <div>
    <Header-resume />
    <b-container align-h="center" fluid="lg">
      <b-row align-h="center">
        <b-col order-lg="1" order="2">
          <Workhistory />
        </b-col>
        <b-col order-lg="2">
          <Edu-skills />
        </b-col>
      </b-row>
    </b-container>
    <b-container align-h="center" >
      <b-row align-h="center" align-self="center">
        <b-col align-h="center" class="btnContainer">
          <b-button class="heroButton" style="color: #fff;" download href="https://theknobshoppe.com/wp-content/uploads/2023/02/Jacob_Smith_Resume-22.pdf">Download Resume</b-button>
        </b-col>
      </b-row>
    </b-container>
    
  </div>
</template>

<style>
 .btnContainer{
   text-align: center;
 }
</style>

<script>
export default {
  name: 'AboutPage',
  layout: 'theme',
}
</script>