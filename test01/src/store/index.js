import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

const store = new Vuex.Store({
  strict: true,
  state:{
    todos : [
      {
        id: 'ID1',
        title: 'AAA',
        completed: true
      },
      {
        id: 'ID2',
        title: 'BBB',
        completed: false
      }
    ]
  },
  getters:{
    todoCount(state) {
      return state.todos.filter(todo => !todo.completed).length;
    },
    doneTodoCount(state) {
      return state.todos.filter(todo => todo.completed).length;
    },
    totalCount(state, getters) {
      return getters.todoCount + getters.doneTodoCount;
    },
    totalCountPlus100(state, getters) {
      return (count) => getters.totalCount + count;
    },
    getIndexByTodoId(state) {
      return id => {
        const todo = state.todos.find(todo => todo.id === id);
        return state.todos.indexOf(todo);
      };
    }
  },
  mutations:{
    addTodo(state, title) {
      state.todos.push({
        title: title,
        completed: false,
        id: Date.now().toString()
      })
    },
    deleteTodo(state, index) {
      state.todos.splice(index, 1)
    },
    updateTodoTitle (state, {index, title}){
      state.todos[index].title = title;
    }
  }
})

export default store
