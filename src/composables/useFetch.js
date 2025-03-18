export default async function useFetch({
    data = [],
    error = false,
    loading = true,
    link = null,
    totalPage = true,
}) {
    try {
        loading.value = true;
        let response = await fetch(link);
        if (!response.ok) {
            throw new Error(
                "Oop, an error occurred. Status: ",
                response.status
            );
        }
        const resData = await response.json();
        if (resData instanceof Array) {
            data.value.push(resData);
            data.value = data.value.flat();
        } else {
            data.value = resData;
        }
        if (!totalPage.vlaue) {
            totalPage.value = parseInt(
                response.headers.get("X-WP-TotalPages"),
                10
            );
        }
        loading.value = false;
    } catch (err) {
        error.value = err.message;
        console.log(err.message);
        loading.value = false;
    } finally {
        loading.value = false;
    }
}
