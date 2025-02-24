<template>
    <div>
        <h2> Contact Form </h2>
        <form @submit.prevent="submitForm">
            <label>Name: </label>
            <input v-model="form.name" required />

            <label> Email: </label>
            <input v-model="form.email" type="email" required />

            <button type="submit">Submit</button>
        </form>

        <p v-if="submitted">Form submitted Successfully</p>
    </div>
</template>

<script>
export default {
    name: "ContactForm",
    data() {
        return {
            form: {
                name: "",
                email: ""
            },
            submitted: false
        }
    },

    methods: {
        submitForm() {
            if (this.form.name && this.form.email) {
                this.submitted = true
            }
        }
    }
}
</script>