import React, { useState, useEffect } from "react";

const CharactersApi = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/character")
            .then((res) => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result.results);
                },

                (error) => {
                    setIsLoaded(true);
                    setError(error);
                },
            );
}, [])
    
    if (error) {
        return <div>Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Загрузка...</div>;
    } else {
        return (
            <ul>
                {items.map((item) => (
                    <li key={item.id}>{item.name} <img src={item.image}></img></li>
                ))}
            </ul>
        );
    }
};

export default CharactersApi;
