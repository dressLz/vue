<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{$store.state.app.name}}</h2>
  </div>
</template>
<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '李卓vue项目架构'
    }
  },
  mounted () {
    console.log(this.$store.state.app.name)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
