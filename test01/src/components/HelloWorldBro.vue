<template>
<div id="hellobro">
  <h1>Brother2</h1>
  <p>{{ count }}</p>
</div>
</template>


<script>
import store from '../store'
export default {
  computed: {
    count() {
      return store.state.count
    }
  }
}
</script>