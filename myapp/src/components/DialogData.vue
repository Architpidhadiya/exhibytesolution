<template>
  <div v-if="isVisible" class="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
    <div class="bg-white rounded-lg shadow-lg w-96 p-6">
      <h3 class="text-xl font-semibold mb-4">Edit Post</h3>
      <!-- <input v-model="title" type="text" class="w-full p-2 border border-gray-300 rounded mb-4" /> -->
    
      <!-- <div class="mb-4">
        <label for="title" class="block">Title:</label>
        <input v-model="data.title" type="text" class="w-full p-2 border border-gray-300 rounded" />
      </div>

      <div class="mb-4">
        <label for="body" class="block">Body:</label>
        <textarea v-model="data.body" class="w-full p-2 border border-gray-300 rounded"></textarea>
      </div> -->


      <div v-if="itemType === 'todo'">
        <label for="title" class="block">Title:</label>
        <input v-model="localItem.title" type="text" class="w-full p-2 border border-gray-300 rounded mb-4" />
        
        <label for="completed" class="block">Completed:</label>
        <input v-model="localItem.completed" type="checkbox" class="w-4 h-4 mt-1" />
      </div>

      <div v-if="itemType === 'post'">
        <label for="title" class="block">Title:</label>
        <input v-model="localItem.title" type="text" class="w-full p-2 border border-gray-300 rounded mb-4" />
        
        <label for="body" class="block">Body:</label>
        <textarea v-model="localItem.body" class="w-full p-2 border border-gray-300 rounded mb-4"></textarea>
      </div>

      <div v-if="itemType === 'user'">
        <label for="name" class="block">Name:</label>
        <input v-model="localItem.name" type="text" class="w-full p-2 border border-gray-300 rounded mb-4" />
        
        <label for="username" class="block">Username:</label>
        <input v-model="localItem.username" type="text" class="w-full p-2 border border-gray-300 rounded mb-4" />

        <label for="email" class="block">Email:</label>
        <input v-model="localItem.email" type="email" class="w-full p-2 border border-gray-300 rounded mb-4" />
        
        <label for="address" class="block">Address:</label>
        <input v-model="localItem.address" type="text" class="w-full p-2 border border-gray-300 rounded mb-4" />
        
        <label for="phone" class="block">Phone:</label>
        <input v-model="localItem.phone" type="text" class="w-full p-2 border border-gray-300 rounded mb-4" />
        
        <label for="website" class="block">Website:</label>
        <input v-model="localItem.website" type="text" class="w-full p-2 border border-gray-300 rounded mb-4" />
      </div>
      
      <div class="flex justify-end space-x-4">
        <button @click="confirmEdit" class="px-4 py-2 bg-yellow-500 text-white rounded">Save</button>
        <button @click="cancelEdit" class="px-4 py-2 bg-gray-300 text-black rounded">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, defineProps, defineEmits } from 'vue';

const props = defineProps({
  isVisible: Boolean,
  item: Object,
  itemType: String
});

const emit = defineEmits(['update:visible', 'edit']);

const localItem = ref(null);

watch(() => props.isVisible, (newVal) => {
  if (newVal) {
    localItem.value = JSON.parse(JSON.stringify(props.item));
  }
});

const cancelEdit = () => {
  emit('update:visible', false);
};

const confirmEdit = () => {
  if (localItem.value) {
    emit('edit', localItem.value);
  }
  emit('update:visible', false);
};
</script>

<style scoped>
.fixed {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.bg-gray-500 {
  background-color: rgba(0, 0, 0, 0.5);
}

.bg-opacity-50 {
  background-color: rgba(0, 0, 0, 0.5);
}
.z-50 {
  z-index: 50;
}
.bg-white {
  background-color: white;
}
.rounded-lg {
  border-radius: 0.5rem;
}
.shadow-lg {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
.w-96 {
  width: 24rem;
}
.p-6 {
  padding: 1.5rem;
}
.text-xl {
  font-size: 1.25rem;
}
.font-semibold {
  font-weight: 600;
}
.mb-4 {
  margin-bottom: 1rem;
}
.w-full {
  width: 100%;
}
.p-2 {
  padding: 0.5rem;
}
.border {
  border-width: 1px;
}


.mb-4 {
  margin-bottom: 1rem;
}
.flex {
  display: flex;
}
.justify-end {
  justify-content: flex-end;
}
.space-x-4 {
  gap: 1rem;
}
.px-4 {
  padding-left: 1rem;
  padding-right: 1rem;
}
.py-2 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

</style>
