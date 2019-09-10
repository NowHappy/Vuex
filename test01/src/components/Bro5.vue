<template>
<div id="bro5">
  <h1>Brother5</h1>
  <p>{{ count }}</p>
</div>
</template>


<script>
import { mapState } from 'vuex'
export default {
 computed: mapState([
  // this.count를 store.state.count에 매핑 합니다.
  'count'
])
}
</script>