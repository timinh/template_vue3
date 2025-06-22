<script setup>
import { useUserStore } from '@/stores/user';
const store = useUserStore();
const user = {
    name: '',
    email: ''
};
const login = () => {
    store.setUser(user);
    user.name = '';
    user.email = '';
};
</script>

<template>
    <div v-if="store.name">
        <p>Current name: {{ store.name }}</p>
        <p>Current email: {{ store.email }}</p>
        <button @click="store.clearUser">Reset User</button>
    </div>
    <div v-else>
        <form @submit.prevent="login()">
            <label for="name">Name:</label>
            <input type="text" id="name" v-model="user.name" required>
            <label for="email">Email:</label>
            <input type="email" id="email" v-model="user.email" required>
            <button type="submit">Set User</button>
        </form>
    </div>
</template>
