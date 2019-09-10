<template>
<div id="bro4">
  <h1>Brother4</h1>
  <p>{{ countAlias }}</p>
</div>
</template>


<script>
import { mapState } from 'vuex'

export default {
  computed: mapState({
    // 문자열 값 'count'를 전달하는 것은 `state => state.count`와 같습니다.
    countAlias: 'count'
  })
}
</script>