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
        <!-- <button @click="openEditModal" class="px-4 py-2 bg-yellow-500 text-white rounded">Edit</button> |
        <button @click="deleteUser" class="px-4 py-2 bg-red-500 text-white rounded">Delete</button> -->
        <!-- :value="user.name"  -->

        <button @click="isModalVisible = true" class="px-4 py-2 bg-yellow-500 text-white rounded">Edit</button> |
        <!-- <button @click="emit('delete:user', user.id)" class="px-4 py-2 bg-red-500 text-white rounded">Delete</button> -->
        <button @click="confirmDelete" class="px-4 py-2 bg-red-500 text-white rounded">Delete</button>
      </div>
  
      <DialogData 
        :is-visible="isModalVisible" 
        :item="user"
      :itemType="'user'"
        @update:visible="isModalVisible = $event" 
        @edit="editUser"
      />
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import DialogData from './DialogData.vue';
  
  const props = defineProps({
    user: Object
  });

  const emit = defineEmits(['update:user', 'delete:user']);

  const isModalVisible = ref(false);

  const editUser = (updatedUser) => {
    emit('update:user', updatedUser);
  };

  const confirmDelete = () => {
  const isConfirmed = window.confirm("Are you sure you want to delete this post?");
  if (isConfirmed) {
    emit('delete:user', props.user.id); 
  }
};
</script>  