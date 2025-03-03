module.exports = {
    extends: [
      'plugin:vue/vue3-recommended',  // Or 'plugin:vue/vue3-essential' if you're using Vue 3
      'eslint:recommended',
      'plugin:import/errors',
      'plugin:import/warnings'
    ],
    parserOptions: {
      parser: 'babel-eslint',  // Use babel-eslint to parse modern JavaScript syntax
      ecmaVersion: 2020,  // Supports the latest JavaScript features
    },
    rules: {
      // Your custom ESLint rules here
    },
    plugins: ['vue', 'import'],
  };
  