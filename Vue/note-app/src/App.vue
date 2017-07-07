<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 400px;
  height: 80%;
  margin: auto auto;
  border: 1px solid #EFEFEF;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, .08);
  display: flex;
  flex-direction: column;
}
.app-header {
  border-bottom: 1px solid #EFEFEF;
  padding: 10px 20px;
  font-weight: 700;
}
.app-header .back-button {
  display: inline-block;
  border-right: 1px solid #EFEFEF;
  padding-right: 10px;
}
.app-header a {
  margin-right: 10px;
  border-right: 1px solid #EFEFEF;
  padding-right: 10px;
}
.app-header a {
  border-right: 1px solid #EFEFEF;
  margin-right: 10px;
  padding-right: 10px;
  cursor: pointer;
}
.app-header a:hover {
  color: #006699;
}
.app-header a:last-child {
  margin-right: 0;
  border-right: none;
  padding-right: 0;
}
.u-flex-row {
  display: flex;
}
.u-absolute-flex-column {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
}
.u-scroller {
  flex-grow: 1;
  overflow-y: scroll;
  margin: 0;
  padding: 0;
}
.u-elastic {
  flex-grow: 1;
  border-radius: 0 !important;
}
</style>
