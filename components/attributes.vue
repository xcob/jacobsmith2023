<template>
    <div>
          <b-container align-h="center" id="attributesSection">
            <b-row align-h="center">
                <b-col md="auto">
            <h3 class="workExp">Skillset</h3>
            <!-- <span class="dotLoad">HTML <div></div><div></div><div></div><div></div>
            </span> -->
            <p class="dotLoad">HTML/CSS <span>.</span><span>.</span><span>.</span><span>.</span></p>
            <p class="dotLoad">Wordpress <span>.</span><span>.</span><span>.</span><span>.</span></p>
            <p class="dotLoad lastDot">PHP/MySQL <span>.</span><span>.</span><span>.</span><span>.</span></p>
            <p class="dotLoad lastDot">Javascript <span>.</span><span>.</span><span>.</span><span>.</span></p>
            <p class="dotLoad lastDot">React/Vue <span>.</span><span>.</span><span>.</span><span>.</span></p>
            <p class="dotLoad lastDot">NextJS/NuxtJS <span>.</span><span>.</span><span>.</span><span>.</span></p>
            <p class="dotLoad lastDot">DNS Management <span>.</span><span>.</span><span>.</span><span>.</span></p>
            <p class="dotLoad lastDot">Project Management <span>.</span><span>.</span><span>.</span><span>.</span></p>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<style>

.workExp{
    text-align: center;
}
#attributesSection{
    text-align: center;
}

#attributesSection p{
    margin: 5px;
    margin-top: -75px;
    word-wrap: break-word;
}

#attributesSection p:nth-child(1){
    margin: 5px;
    margin-top: -45px;
}

@keyframes load {
    0% {
      opacity: .1;
    }
    20% {
      opacity: .4;
    }
    100% {
      opacity: 1;
    }
}

@keyframes lastload {
    0% {
      opacity: .1;
    }
    50% {
      opacity: .2;
    }
    100% {
      opacity: .3;
    }
}

.dotLoad span {
    font-size: 80px;
    animation-name: load;
    animation-duration: 1.8s;
    animation-fill-mode: both;
}

.dotLoad span:nth-child(2) {
    animation-delay: .2s;
}

.dotLoad span:nth-child(3) {
    animation-delay: .4s;
}

.dotLoad span:nth-child(4) {
    animation-delay: .6s;
}

.lastDot span:nth-child(4) {
    animation-name: lastload;
    animation-duration: 1.8s;
    animation-fill-mode: both;
}

/* .dotLoad:nth-child(4) span:nth-child(3){
    opacity: 0;
} */
</style>