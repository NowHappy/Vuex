<template>
<div id="bro6">
  <h1>Brother6</h1>
  <h4>(store.count + localCount : 10)</h4>
  <p>{{ countPlusLocalState }}</p>
</div>
</template>


<script>
import { mapState } from 'vuex'
export default {
  data() {
        return {
            localCount: 10
        }
    },
 computed: mapState({
  // `this`를 사용하여 로컬 상태에 액세스하려면 일반적인 함수를 사용해야합니다
    countPlusLocalState (state) {
      return state.count + this.localCount
    }
 })
}
</script>