<template>
<div id="hello">
  <h1>Brother1</h1>
  <p>{{ count }}</p>
  <p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </p>
</div>
</template>


<script>
import { mapMutations } from 'vuex'

export default {
  computed: {
    count () {
      //#1 this.$store 로 접근이 가능한 이유는
      //store 옵션을 추가했기 때문
      return this.$store.state.count
    }
  },
  methods: {
    ...mapMutations(['increment', 'decrement'])
  }
}
</script>