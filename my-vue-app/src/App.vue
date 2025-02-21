<template>
  <div id="app">
    <h2>To-Do List</h2>
    <input v-model="newTask" placeholder="Enter a task">
    <button @click="addTask">Add</button>

    <ul>
      <li v-for="(task, index) in tasks" :key="index">
        {{ task }} <button @click="removeTask(index)"> X </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTask: '',
      tasks: []
    };
  },
  methods: {
    addTask() {
      if (this.newTask.trim()) {
        this.tasks.push(this.newTask);
        this.newTask = '';
      }
    },
    removeTask(index) {
      this.tasks.splice(index, 1);
    }
  }
};
</script>

<style>
button {
  margin-left: 10px;
}
</style>
