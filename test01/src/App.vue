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
    todoCount() {
      return this.$store.getters.todoCount
    },
    doneTodoCount() {
      return this.$store.getters.doneTodoCount
    },
    totalCount() {
      return this.$store.getters.totalCount
    },
    totalCountPlus100() {
      return this.$store.getters.totalCountPlus100(this.plusCount)
    },
    todos() {
      return this.$store.state.todos
    }
  }
};
</script>
