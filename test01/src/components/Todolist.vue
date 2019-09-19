<template>
  <ul>
    <li v-for="todoItem in todos" :key="todoItem.id">
      <todo :title="todoItem.title" :id="todoItem.id" :completed="todoItem.completed" />
    </li>
  </ul>
</template>
<script>
import Todo from '@/components/Todo';

export default {
  name: 'Todolist',
  components: {
    Todo
  },
  props: {
    todos: {
      type: Array,
      required: true
    }
  }
};
</script>
