<template>
    <div>
        <h2> Contact Form </h2>
        <form @submit.prevent="submitForm">
        <div>
            <label>Name: </label>
            <input v-model="name" type="text" placeholder="Enter your name" />
            <p v-if="errors.name">{{ errors.name }}</p>
        </div>

        <div>
            <label> Email: </label>
            <input v-model="email" type="email" placeholder="Enter your email" />
            <p v-if="errors.email">{{ errors.email }}</p>
        </div>

        <div>
            <label> Message: </label>
            <textarea v-model="message" placeholder="Enter your message" />
            <p v-if="errors.message">{{ errors.message }}</p>
        </div>

            <button type="submit">Submit</button>
        

        <p v-if="submitted">Form submitted Successfully</p>
        </form>
    </div>
</template>

<script>
import { ref } from "vue"
import * as yup from "yup"

export default {
    name: "ContactForm",
    setup() {
        const name = ref("")
        const email = ref("")
        const message = ref("")
        const errors = ref({})
        const submitted = ref(false)

        const schema = yup.object({
            name: yup.string().required("Name is required").min(3, "Min. 3 characters"),
            email: yup.string().email("Invalid Email").required("Email is required"),
            message: yup.string().required("Message is required").min(5, "Min. 5 characters"),
        })

        const submitForm = async() => {
            errors.value = {}
            try {
                await schema.validate({ name: name.value, email: email.value, message: message.value}, { abortEarly: false })
                submitted.value = true
            } catch (err) {
                err.inner.forEach((e) => (errors.value[e.path] = e.message))
            }
        }
        return { name, email, message, errors, submitted, submitForm}
    }
}
</script>