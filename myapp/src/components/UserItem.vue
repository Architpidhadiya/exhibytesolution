<template>
    <div class="p-4 bg-white shadow-md rounded-lg mb-4">
      <h3 class="text-xl font-semibold">Name: {{ user.name }}</h3>
      <p class="text-sm">Username: {{ user.username }}</p>
      <p class="text-sm">Email: {{ user.email }}</p>
      <p class="text-sm">Address: {{ user.address }}</p>
      <p class="text-sm">Phone: {{ user.phone }}</p>
      <p class="text-sm">Website: {{ user.website }}</p>
      <p class="text-sm">Compnay: {{ user.address }}</p>
      <div class="mt-4">
        <button @click="openEditModal" class="px-4 py-2 bg-yellow-500 text-white rounded">Edit</button>
        <button @click="deleteUser" class="px-4 py-2 bg-red-500 text-white rounded">Delete</button>
      </div>
  
      <DialogData 
        :is-visible="isModalVisible" 
        :value="user.name" 
        @update:visible="isModalVisible = $event" 
        @edit="editUser"
      />
    </div>
  </template>
  
  <script>
  import DialogData from './DialogData.vue';
  
  export default {
    components: {
      DialogData
    },
    props: {
      user: Object
    },
    data() {
      return {
        isModalVisible: false
      };
    },
    methods: {
      openEditModal() {
        this.isModalVisible = true;
      },
      editUser(updatedName) {
        this.$emit('update:user', { ...this.user, name: updatedName });
      },
      deleteUser() {
        alert(`Delete user with id: ${this.user.id}`);
      }
    }
  };
  </script>
  