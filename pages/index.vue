<template>
  <div>
    <Header />
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
    <Projects />
  </div>
</template>

<script>
  export default {
    name: 'IndexPage',
    layout: 'theme',
  }

</script>
