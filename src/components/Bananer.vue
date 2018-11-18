<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <a @click="add">{{ count }}</a></br>
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
            return this.$store.getters.sumWithRootCount
        }
    },
    methods:{
        add(){
            this.$store.dispatch('increment')
        },
        add1(){}
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
