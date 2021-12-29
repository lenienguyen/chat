<template>

  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body{
  background:#e3e1ff;
  color:#444;
}

.container{
  width: 90%;
  max-width:960px;
  margin:80px auto;
  border-radius:20px;
  box-shadow:2px 4px 6px rgba(28, 6, 49, 0.1);
  background:#fff;

  .error{
    color:#ff3f80;
    font-size:.93rem;
    margin-bottom:1rem;
  }

  button{
    text-decoration:none;
    background:#5ae4ca;
    color:#fff;
    font-weight:bold;
    border:0;
    border-radius:20px;
    padding:10px 20px;
  }
}
</style>
