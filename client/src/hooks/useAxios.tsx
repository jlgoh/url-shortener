import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';

const useAxios = (
    axiosParams: AxiosRequestConfig
): { response: AxiosResponse | undefined; error: string; loading: boolean } => {
    const [response, setResponse] = useState<AxiosResponse | undefined>(undefined);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    const fetchData = async (params: AxiosRequestConfig) => {
        try {
            const result = await axios.request(params);
            setResponse(result);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData(axiosParams);
    }, [axiosParams]); // execute once only

    return { response, error, loading };
};

export default useAxios;
