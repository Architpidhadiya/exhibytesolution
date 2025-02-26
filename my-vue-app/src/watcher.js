import { reactive, ref, watch, watchEffect } from "vue";

export function useWatchExample() {
    const count = ref(0)
    const searchText = ref("")
    const searchResults = ref([])

    const user = reactive({
        name: "Archit Patel",
        age: 21
    })

    watch(count, (newValue, oldValue) => {
        console.log(`Count changed from ${oldValue} to ${newValue}`)
    })

    watch(searchText, async (newQuery) => {
        if (!newQuery) {
            searchResults.value = []
            return
        }
        setTimeout(() => {
            console.log(`Fetching results for: ${newQuery}`)
            searchResults.value = [`Results for: "${newQuery}"`]
        }, 500)
    })

    watch(
        () => user,
        (newValue) => { 
            console.log("User data changed:", newValue)
        }, {deep: true}
    )

    watch(
        count,
        (newValue) => {
            console.log(`Immediate watcher: Count is ${newValue}`)
        }, {immediate: true}
    )

    watchEffect(() => {
        console.log(`WatchEffect Triggered: Count is ${count.value}`)
    })

    return { count, searchText, searchResults, user}
}