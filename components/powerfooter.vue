<template>
    <div>
        <b-container id="powerfooter">
            <b-row align-h="center">
                <b-col cols="12">
                    <p>Powered By:</p>
                <span></span> 
                <a href="https://nuxtjs.org/" target="_blank"><svg width="50" height="50" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg" alt="Nuxt"><path d="M31.4918 17.1505C29.8172 14.2712 25.6308 14.2712 23.9562 17.1505L5.70589 48.5305C4.03131 51.4099 6.12453 55.009 9.4737 55.009H23.7209C22.2898 53.7583 21.7598 51.5946 22.8428 49.7382L36.6648 26.0451L31.4918 17.1505Z" fill="#80EEC0"></path><path d="M43.0556 24.0338C44.4415 21.678 47.9061 21.678 49.292 24.0338L64.3957 49.7083C65.7816 52.0641 64.0493 55.0089 61.2775 55.0089H31.0701C28.2984 55.0089 26.566 52.0641 27.9519 49.7083L43.0556 24.0338Z" fill="#00DC82"></path></svg></a>
                <a href="https://fleek.co/" target="_blank"><b-img src="/fleek-icon.png" fluid width="40%" alt="Fleek Logo Mark"></b-img></a>
                <a href="https://bootstrap-vue.org/" target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50"  viewBox="0 0 2041 2160" clip-rule="evenodd" fill-rule="evenodd" data-v-05031895=""><title data-v-05031895="">BootstrapVue logo</title> <path d="m1397 271-370 642-371-642h-592l963 1667 962-1667z" fill="#34495e" data-v-05031895=""></path> <path d="m44 0h1952l-979 1696z" fill="#563d7c" fill-rule="nonzero" data-v-05031895=""></path> <path d="m1633 392-612 1061-613-1061h-408l1021 1768 1020-1768z" fill="#41b883" data-v-05031895=""></path> <path d="m767 196h339c62 0 112 14 150 43 38 28 56 71 56 129 0 36-8 66-25 91s-42 44-74 58v2c43 9 75 29 98 61 22 31 33 71 33 118 0 28-5 53-15 77s-25 44-46 61c-21 18-47 31-80 41-32 11-71 16-116 16h-320zm122 292h199c29 0 54-9 73-25 20-17 29-41 29-72 0-35-8-60-26-75-17-14-43-21-76-21h-199zm0 305h216c37 0 66-10 86-29s31-46 31-81-10-61-31-80-49-28-86-28h-216z" fill="#fff" data-v-05031895=""></path></svg></a>
                </b-col>
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