<template>
    <div id="attributesSection">
        <!-- <span class="dotLoad">HTML <div></div><div></div><div></div><div></div>
        </span> -->
        <p class="dotLoad">HTML/CSS <span>.</span><span>.</span><span>.</span><span>.</span></p>
        <p class="dotLoad">Wordpress <span>.</span><span>.</span><span>.</span><span>.</span></p>
        <p class="dotLoad">PHP/MySQL <span>.</span><span>.</span><span>.</span><span>.</span></p>
        <p class="dotLoad">Javascript <span>.</span><span>.</span><span>.</span><span>.</span></p>
        <p class="dotLoad">DNS Management <span>.</span><span>.</span><span>.</span><span>.</span></p>
        <p class="dotLoad">Project Management <span>.</span><span>.</span><span>.</span><span>.</span></p>
    </div>
</template>

<style>
#attributesSection{
    text-align: center;
}

#attributesSection p{
    margin: 5px;
    margin-top: -85px;
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

.dotLoad span {
  font-size: 80px;
    animation-name: load;
    animation-duration: 1.8s;
    animation-fill-mode: both;
}
.dotLoad div {
    content: '*';
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #e9e9e9;
    animation-name: load;
    animation-duration: 1.4s;
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

/* .dotLoad:nth-child(4) span:nth-child(3){
    opacity: 0;
} */
</style>