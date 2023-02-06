<template>
    <div>
        <b-container id="powerfooter">
            <b-row align-h="center">
                <b-col cols="12">
                    <p>Powered By:</p>
                <span></span> 
                <a href="https://nuxtjs.org/" target="_blank"><svg width="50" height="50" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg" alt="Nuxt"><path d="M31.4918 17.1505C29.8172 14.2712 25.6308 14.2712 23.9562 17.1505L5.70589 48.5305C4.03131 51.4099 6.12453 55.009 9.4737 55.009H23.7209C22.2898 53.7583 21.7598 51.5946 22.8428 49.7382L36.6648 26.0451L31.4918 17.1505Z" fill="#80EEC0"></path><path d="M43.0556 24.0338C44.4415 21.678 47.9061 21.678 49.292 24.0338L64.3957 49.7083C65.7816 52.0641 64.0493 55.0089 61.2775 55.0089H31.0701C28.2984 55.0089 26.566 52.0641 27.9519 49.7083L43.0556 24.0338Z" fill="#00DC82"></path></svg></a>
                <a href="https://fleek.co/" target="_blank"><b-img src="/fleek-icon.png" fluid width="40%" alt="Fleek Logo Mark"></b-img></a></b-col>
            </b-row>
        </b-container>    
        
    </div>
    
</template>

<script>
  export default {
    
    head() {
      // Set Meta Tags for this Page
    }
    // ...
  }
</script>

<style>
#powerfooter{
    padding-top: 3em;
    text-align: center;
}

#circles-footer{
  position: absolute;
  z-index: -1;
  left: -80px;
  bottom: -200px;
  opacity: .5;
}

#circles-footer2{
  position: absolute;
  z-index: -1;
  left: -40px;
  bottom: -1000px;
  opacity: .5;
}

#circles-footer3{
  position: absolute;
  z-index: -1;
  right: 0px;
  bottom: -800px;
  opacity: .5;
  overflow-x: hidden;
}


</style>