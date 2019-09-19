<template>
  <div>
    <h1>TODO LIST</h1>
    <p> 리스트 전체 : {{totalCount}} </p>
    <p> 해야할 일 : {{todoCount}} / 완료한 일 : {{doneTodoCount}} </p>
    <todolist :todos="todos"></todolist>
    <p> 리스트 전체 (+100) : {{totalCountPlus100}} </p>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';

import Todolist from '@/components/Todolist';

export default {
  name: 'App',
  components: {
    Todolist
  },
  data() {
    return {
      newTodoTitle: '',
      plusCount:100
    }
  },
  computed: {
    ...mapGetters(['todoCount', 'doneTodoCount', 'totalCount']),
    totalCountPlus100() {
      return this.$store.getters.totalCountPlus100(this.plusCount)
    },
    todos() {
      return this.$store.state.todos
    }
  }
};
</script>
