<template>
    <div>
        <h2>Weather</h2>
        <input v-model="city" placeholder="Enter your city" />
        <button @click="fetchWeather">Search</button>

        <p v-if="loading">Loading...</p>
        <p v-if="error">{{ error }}</p>

        <div v-if="weather">
            <p><strong>Temperature:</strong> {{ weather.temp }}.C</p>
            <p><strong>Condition:</strong> {{ weather.condition }}</p>
        </div>
    </div>
</template>

<script>
import { ref } from "vue"

export default {
    name: "WeatherApp",
    setup() {
        const city = ref("")
        const weather = ref(null)
        const loading = ref(false)
        const error = ref(null)
        
        const fetchWeather = async () => {
            if (!city.value) return

            loading.value = true
            error.value = null

            try {
                const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=${city.value}`)
                if (!response.ok) throw new Error("City not found")

                const data = await response.json()
                weather.value = {
                    temp: data.current.temp_c,
                    condition: data.current.condition.text
                }
            } catch (err) {
                error.value = err.message
            } finally {
                loading.value = false
            }
        }
        return { city, weather, loading, error, fetchWeather }
    }
}
</script>