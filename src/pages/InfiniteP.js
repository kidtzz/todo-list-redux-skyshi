import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const InfiniteP = () => {
    const [card, setCard] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState();

    useEffect(() => {
        const getCardData = async () => {
            const res = await fetch(
                `https://jsonplaceholder.typicode.com/posts?_limit=9&_page=${page}`
            );
            const data = await res.json();
            setCard((prev) => [...prev, ...data]);
        };
        getCardData();
    }, [page]);

    const handelInfiniteScroll = async () => {
        try {
            if (
                window.innerHeight + document.documentElement.scrollTop + 1 >=
                document.documentElement.scrollHeight
            ) {
                setTimeout(() => {
                    setPage((prev) => prev + 1);
                }, 500);
                setLoading(<h5>Loading..........</h5>);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handelInfiniteScroll);
        return () => window.removeEventListener("scroll", handelInfiniteScroll);
    }, []);

    return (
        <div>
            <h1>ini infinite </h1>
            {card.map((i, index) => {
                return (
                    <div key={index}>
                        <p>
                            div + {index + 1} - {i.title}
                        </p>
                    </div>
                );
            })}
            {loading}
        </div>
    );
};

export default InfiniteP;
