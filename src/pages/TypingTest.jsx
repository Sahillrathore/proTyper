import React, { useState, useEffect } from "react";

const TypingTest = () => {
    const sampleTexts = [
        "the quick brown fox jumps over the lazy dog.",
        "typing fast and accurately is a valuable skill.",
        "javaScript is a versatile programming language.",
        "react makes building user interfaces efficient and fun.",
        "tailwindCSS simplifies styling in modern web development."
    ];

    const [text, setText] = useState("");
    const [input, setInput] = useState("");
    const [startTime, setStartTime] = useState(null);
    const [timeLeft, setTimeLeft] = useState(30); // Default 30 seconds
    const [wpm, setWpm] = useState(0);
    const [accuracy, setAccuracy] = useState(0);
    const [isFinished, setIsFinished] = useState(false);

    useEffect(() => {
        // Pick a random text at the start
        setText(sampleTexts[Math.floor(Math.random() * sampleTexts.length)]);
    }, []);

    useEffect(() => {
        let timer;
        if (startTime && timeLeft > 0) {
            timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
        } else if (timeLeft === 0) {
            finishTest();
        }
        return () => clearInterval(timer);
    }, [startTime, timeLeft]);

    const finishTest = () => {
        const wordsTyped = input.trim().split(" ").length;
        const timeTaken = (30 - timeLeft) / 60; // Convert seconds to minutes
        setWpm(Math.round(wordsTyped / timeTaken));
        setAccuracy(
            Math.round(
                (text.split(" ").filter((word, i) => word === input.split(" ")[i]).length / text.split(" ").length) * 100
            )
        );
        setIsFinished(true);
    };

    const handleChange = (e) => {
        if (!startTime) setStartTime(new Date());
        setInput(e.target.value);
    };

    const resetTest = () => {
        setInput("");
        setStartTime(null);
        // setTimeLeft(30); // Reset time
        setWpm(0);
        setAccuracy(0);
        setIsFinished(false);
        setText(sampleTexts[Math.floor(Math.random() * sampleTexts.length)]);
    };

    const renderHighlightedText = () => {
        const words = text.split(" ");
        const inputWords = input.trim().split(" ");

        return words.map((word, index) => {
            let className = "";
            if (inputWords[index] === word) {
                className = "text-green-500";
            } else if (inputWords[index] !== undefined) {
                className = "text-red-500";
            }
            return (
                <span key={index} className={`${className} mr-2`}>
                    {word}
                </span>
            );
        });
    };

    return (
        <div className="bg-[rgba(0, 0, 0, 0.718)] min-h-screen flex flex-col items-center justify-center p-4 max-w-[800px] mx-auto">
            <h1 className="text-4xl font-bold mb-6 text-white">Typing Speed Test</h1>
            <div className="bg-white p-4 rounded shadow text-lg text-gray-700 mb-4 w-full max-w-3xl">
                {renderHighlightedText()}
            </div>
           <div className="flex items-center justify-start w-full my-3"> 
                <div className="flex gap-2">
                    {
                        [5, 10, 15, 30].map((item) => (
                            <div className="font-semibold text-base min-w-[2.5rem] text-center cursor-pointer bg-gray-500 rounded-md p-1.5 text-white"
                            onClick={()=>{setTimeLeft(item)}}
                            >{item}</div>
                        ))
                    }
                </div>
                <div className="text-gray-200 ml-4 text-sm ">Time Left: {timeLeft}s</div>
           </div>
            <textarea
                className="w-full max-w-3xl p-4 border-2 border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
                value={input}
                onChange={handleChange}
                disabled={isFinished || timeLeft === 0}
                rows={4}
            />
           
            {isFinished && (
                <div className="bg-green-100 p-4 rounded shadow text-center w-full max-w-3xl">
                    <p className="text-2xl font-semibold">Results</p>
                    <p className="text-lg">WPM: <span className="font-bold text-green-600">{wpm}</span></p>
                    <p className="text-lg">Accuracy: <span className="font-bold text-green-600">{accuracy}%</span></p>
                    <button
                        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                        onClick={resetTest}
                    >
                        Retry
                    </button>
                </div>
            )}
        </div>
    );
};

export default TypingTest;
