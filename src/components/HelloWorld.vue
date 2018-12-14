<template>
  <div class="hello">
      <form>
        <input v-model="name" />
      </form>
      <button v-on:click="hh()">saf asf </button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
     data () {
          return {
              name: ''
          }
     },
    created:function(){
          this.name="66666666666";
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
