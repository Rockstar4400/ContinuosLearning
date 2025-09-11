
// Type-safe Promise creation
interface ApiResponse {
    data: string;
    timestamp: number;
}

const fetchData = new Promise<ApiResponse>((resolve, reject) => {

    try{
    // Simulating API call
    setTimeout(() => {
        resolve({
            data: "Success!",
            timestamp: Date.now()
        });
    }, 1000);
    } 
    catch (error){
        reject(error);
    }
});

console.log(fetchData);

// Snippet 1
const myAsyncFunction = async(url: string): Promise<T> => {
    const { data } = await fetch(url)
    return data
}

// Snippet 2
const immediatelyResolvedPromise = (url: string) => {
    const resultPromise = new Promise ((resolved, reject) => {
        resolved(fetch(url))
    })
    return resultPromise
}