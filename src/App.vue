<template>
  <div class="main-container" id="app">
    <ImageInputComponent></ImageInputComponent>
  </div>
</template>

<script>
import ImageInputComponent from './components/ImageInputComponent'
export default {
  name: 'app',
  components: {
    ImageInputComponent
  }
}
</script>
 
<style>
.main-container {
    font-family: "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", Geneva, Verdana, sans-serif;
} 
</style>