<template>
  <div class="home">
    <div>
      <img class="robot" src="../assets/robot-home.png" aria-hidden="true">
    </div>
    <div>
      <router-link to="/build">НАЧНИ</router-link> собирать робота
    </div>
  </div>
</template>

<script>
export default{
  
}


</script>

<style>
.home{
  text-align: center;
}

.robot{
  height: 300px;
}
</style>
