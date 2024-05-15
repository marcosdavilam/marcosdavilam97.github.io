<script setup>
import { onMounted, ref } from 'vue';
import HelloWorld from './components/HelloWorld.vue'



const images = ref([
  { src: '/images/teddy/teddyboy (1).jpg' },
  { src: '/images/teddy/teddyboy (2).jpg' },
  { src: '/images/teddy/teddyboy (3).jpg' },
  { src: '/images/teddy/teddyboy (4).jpg' },
  { src: '/images/teddy/teddyboy (5).jpg' },
  { src: '/images/teddy/teddyboy (6).jpg' },
  { src: '/images/teddy/teddyboy (7).jpg' },
  { src: '/images/teddy/teddyboy (8).jpg' },
  { src: '/images/teddy/teddyboy (9).jpg' },
  { src: '/images/teddy/teddyboy (10).jpg' },
  { src: '/images/teddy/teddyboy (1).jpg' },
  { src: '/images/teddy/teddyboy (2).jpg' },
  { src: '/images/teddy/teddyboy (3).jpg' },
  { src: '/images/teddy/teddyboy (4).jpg' },
  { src: '/images/teddy/teddyboy (5).jpg' },
  { src: '/images/teddy/teddyboy (6).jpg' },
  { src: '/images/teddy/teddyboy (7).jpg' },
  { src: '/images/teddy/teddyboy (8).jpg' },
  { src: '/images/teddy/teddyboy (9).jpg' },
  { src: '/images/teddy/teddyboy (10).jpg' },
]);

function getBodySize() {
  
}

let imagesContainer = ref(null)
let imagesRef = ref(null)

const sizes = ref(['wide', 'tall', 'square'])
function getRandomSize() {
  imagesContainer.value.forEach((element, index) => {
    let setSize = 'tall'
    let randomIndex = Math.floor(Math.random() * sizes.value.length); 
    console.log(randomIndex)

    if (imagesRef.value[index].naturalWidth > imagesRef.value[index].naturalHeight) {
      console.log('here')
      setSize = 'wide'
    }
    else if (imagesRef.value[index].naturalWidth === imagesRef.value[index].naturalHeight) {
      setSize = 'square'
    }
    element.classList.add(sizes.value[randomIndex])
  });
}

onMounted(() => {
  getRandomSize()
})
</script>

<template>
  <div id="gallery">
    <div class="box" v-for="(image, index) in images" :key="image.src" :ref="`imagesContainer`">
      <img v-intersection :src="image.src" alt="teddy photo" ref="imagesRef"/>
    </div>
  </div>
</template>

<style lang="scss" scoped>

#gallery {
  overflow: hidden;
  width: 100vw;
  max-width: 100%;
  display: grid;
  margin: 0 auto;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  grid-auto-rows: 100px;
  grid-auto-flow: row dense;
  grid-gap: 10px;
  counter-reset: boxes;
}

.box {
  position: relative;
  color: rgba(255,255,255,.7);
  font-size: 2rem;
  font-family: sans-serif;
  counter-increment: boxes;
  overflow: hidden;
  transition: all 0.2s ease-in-out;
   
  img {
    object-fit: cover;
    object-position: center;
    display: block;
    width: 100%;
    height: 100%;
  }

  &:hover {
    filter: drop-shadow(0 0 8px #ffff);
    transform: scale(1.1);

    z-index: 2;
  }
}

.tall {
  grid-column: span 1;
  grid-row: span 2;

  img {
    height: 100%;
  }
}

.wide {
  grid-row: span 1;
  grid-column: span 2;
}

.square {
  grid-row: span 1;
  grid-column: span 1;
  img {
    height: 100%;
  }
}

.shuffleWrap {
  padding: 20px;
  display: flex;
  justify-content: center;
}
  
</style>
