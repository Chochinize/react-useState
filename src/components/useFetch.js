import {
    useState,
    useEffect
} from 'react'

const useFetch = (url) => {

    const [data, setData] = useState(null)
    const [isPendeing, setIsPending] = useState(true);
    const [error, setError] = useState(null)


    useEffect(() => {
        setTimeout(() => {
            fetch(url)
                .then(res => {
                    if (!res.ok) {
                        throw Error('BAD REQUYEST')
                    }
                    return res.json()
                })
                .then(data => {
                    setData(data);
                    setIsPending(false);
                    setError(null);
                })
                .catch(err => {
                    setIsPending(false);
                    setError(err.message);
                })
        }, 1000);
    }, [])
    return {data,isPendeing,error}
}
export default useFetch;