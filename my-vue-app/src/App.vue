<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
nav {
  padding: 10px;
}
nav a {
  margin-right: 10px;
  text-decoration: none;
  color: blue;
}
</style>
