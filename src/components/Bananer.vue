<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="add">{{ count }}</button>
    <button @click="reduce">{{ count1 }}</button>
  </div>
</template>

<script>
export default {
    name: 'Bananer',
    data () {
        return {
             msg:'bananer'
        }
    },
    computed:{
        count(){
            return this.$store.state.count
        },
        count1(){
            return this.$store.state.count1
        }
    },
    methods:{
        add(){
            this.$store.commit('increment')
        },
        reduce(){
            this.$store.commit('reduce')
        }
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
