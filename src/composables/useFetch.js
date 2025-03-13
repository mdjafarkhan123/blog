export default async function useFetch({ link, data, loading, error }) {
    try {
        const response = await fetch(link);
        if (!response.ok) {
            throw new Error(`HTTP error! Status:${response.status}`);
        }

        data.value = await response.json();
        loading.value = false;
    } catch (error) {
        error.value = error.message;
        console.log("Error:", error);
        loading.value = false;
    } finally {
        loading.value = false;
    }
}
