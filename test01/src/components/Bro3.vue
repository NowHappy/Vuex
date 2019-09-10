<template>
<div id="bro3">
  <h1>Brother3</h1>
  <p>{{ count }}</p>
</div>
</template>


<script>
import { mapState } from 'vuex'
export default {
  computed: mapState({
    // 화살표 함수는 코드를 매우 간결하게 만들어 줍니다!
    count: state => state.count
  })
}
</script>