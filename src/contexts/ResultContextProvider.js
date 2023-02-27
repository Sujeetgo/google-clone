import React, { createContext, useContext, useState } from 'react';

const ResultContext = createContext();
const baseUrl = 'https://google-search72.p.rapidapi.com';

// const url = 'https://google-search72.p.rapidapi.com/search?query=word%20cup&gl=us&lr=en&num=10&start=0&sort=relevance';

export const ResultContextProvider = ({children})=>{
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '2a644a650bmsha3f3b086083b926p1b55b6jsn0b5ea8b92eef',
          'X-RapidAPI-Host': 'google-search72.p.rapidapi.com'
        }
      };
    const getResults = async(type) =>{
        setLoading(true);
        const response = await fetch(`${baseUrl}${type}`,options);
        const data = await response.json();
        setResults(data);
        setLoading(false);
    }
    return (
        <ResultContext.Provider value={{getResults, results, searchTerm,setSearchTerm, loading}}>
            {children};
        </ResultContext.Provider>
    )
};
export const useResultContext = () => useContext(ResultContext);