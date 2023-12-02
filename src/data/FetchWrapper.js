import axios from "axios";
import { useEffect, useState } from "react";

export const Countries = () => {
    const [countries, setCountries] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false)
    const [message, setMessage] = useState(null)


    async function fetchData() {

        const options = {
            method: 'GET',
            url: 'https://covid-193.p.rapidapi.com/countries',
            headers: {
                'X-RapidAPI-Key': '8bffd7af86msh9c2827190400929p1240fbjsnc3504409a67c',
                'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
            }
        };

        try {
            setIsLoading(true)
            await axios.request(options)
                .then((response) => {
                    setIsLoading(true)
                    setCountries(response.data.response)
                    setIsLoading(false)
                    setError(false)
                    //console.log(response.data);
                })
        } catch (error) {
            setIsLoading(false)
            setError(true)
            setCountries(null)
            setMessage(error)
            // console.log(error)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return { countries, isLoading, error, message }

}

export const Statistics = (value) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false)
    const [message, setMessage] = useState(null)

    async function fetchData(country) {
        const options = {
            method: 'GET',
            url: 'https://covid-193.p.rapidapi.com/statistics',
            params: { country: country ? country : 'Usa' },
            headers: {
                'X-RapidAPI-Key': '8bffd7af86msh9c2827190400929p1240fbjsnc3504409a67c',
                'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
            }
        };

        try {
            setIsLoading(true)
            await axios.request(options)
                .then((response) => {
                    setIsLoading(true)
                    setData(response.data.response)
                    setIsLoading(false)
                    setError(false)
                })
        } catch (error) {
            setIsLoading(false)
            setError(true)
            setData(null)
            setMessage(error)
        }
    }

    useEffect(() => {
        fetchData(value)
    }, [value])

    return { data, isLoading, error, message }

}

export const History = (value) => {
    const [history, setHistory] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false)
    const [message, setMessage] = useState(null)


    async function fetchData(country) {
        const options = {
            method: 'GET',
            url: 'https://covid-193.p.rapidapi.com/history',
            params: {
                country: country ? country : 'Usa',
                day: '2023-11-30',
            },
            headers: {
                'X-RapidAPI-Key': '8bffd7af86msh9c2827190400929p1240fbjsnc3504409a67c',
                'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
            }
        };

        try {
            setIsLoading(true)
            await axios.request(options)
                .then((response) => {
                    setIsLoading(true)
                    setHistory(response.data.response)
                    setIsLoading(false)
                    setError(false)
                })
            //console.log(response.data);
        } catch (error) {
            setIsLoading(false)
            setError(true)
            setHistory(null)
            setMessage(error)
        }
    }

    useEffect(() => {
        fetchData(value)
    }, [value])

    return { history, isLoading, error, message }

}

