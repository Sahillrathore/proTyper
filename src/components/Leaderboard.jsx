import React, { useState, useEffect } from "react";

const Leaderboard = () => {
    const [scores, setScores] = useState([]);

    useEffect(() => {
        const storedScores = JSON.parse(localStorage.getItem("scores")) || [];
        setScores(storedScores);
    }, []);

    return (
        <div>
            <h1>Leaderboard</h1>
            <ul>
                {scores.map((score, index) => (
                    <li key={index}>
                        WPM: {score.wpm}, Accuracy: {score.accuracy}%
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Leaderboard;
