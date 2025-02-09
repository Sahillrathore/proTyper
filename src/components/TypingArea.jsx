import React, { useEffect, useRef, useState } from "react";
import { generate } from "random-words";
import TestOptions from "./TestOptions";

const TypingArea = () => {
    const [randomWords, setRandomWords] = useState(generate({ exactly: 40 }));
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentInput, setCurrentInput] = useState("");
    const [letterStatuses, setLetterStatuses] = useState([]); // Array to track letter colors
    const inputRef = useRef();

    const focusInput = () => {
        inputRef?.current?.focus();
    };

    const handleInputChange = (e) => {
        const value = e.target.value;
        setCurrentInput(value);

        const targetWord = randomWords[currentWordIndex];
        const statuses = [];

        for (let i = 0; i < targetWord.length; i++) {
            if (value[i] === targetWord[i]) {
                statuses.push("correct"); // Letter matches
            } else if (value[i] === undefined) {
                statuses.push("neutral"); // Letter hasn't been typed yet
            } else {
                statuses.push("incorrect"); // Letter is wrong
            }
        }

        // Handle extra characters beyond the target word
        for (let i = targetWord.length; i < value.length; i++) {
            statuses.push("extra"); // Extra characters
        }

        setLetterStatuses(statuses);

        // Check if the word is fully typed
        if (value.endsWith(" ") && value.trim() === targetWord) {
            setCurrentWordIndex((prev) => prev + 1); // Move to the next word
            setCurrentInput(""); // Reset input
            setLetterStatuses([]); // Reset letter statuses
        }
    };

    useEffect(() => {
        focusInput();
    }, []);

    return (
        <div className="min-h-[90vh] flex flex-col justify-center items-center max-w-[70%] mx-auto">
            <TestOptions />

                <div
                    className="p-6 min-h-44 bg-black/30 rounded-lg w-full mx-auto items-center relative flex-wrap flex"
                    onClick={focusInput}
                >
                    {randomWords.map((word, wordIndex) => (
                        <span
                            className={`text-gray-200 leading-normal font-normal text-2xl ${wordIndex === currentWordIndex ? "underline" : ""
                                }`}
                            key={wordIndex}
                        >
                            &nbsp;
                            {word.split("").map((letter, letterIndex) => {
                                let color = "text-gray-200"; // Default color
                                if (wordIndex === currentWordIndex && letterStatuses[letterIndex]) {
                                    switch (letterStatuses[letterIndex]) {
                                        case "correct":
                                            color = "text-green-500";
                                            break;
                                        case "incorrect":
                                            color = "text-red-500";
                                            break;
                                        case "extra":
                                            color = "text-yellow-500";
                                            break;
                                        default:
                                            color = "text-gray-200";
                                    }
                                }
                                return (
                                    <span key={letterIndex} className={`${color}`}>
                                        {letter}
                                    </span>
                                );
                            })}
                        </span>
                    ))}
                </div>

            <input
                type="text"
                value={currentInput}
                onChange={handleInputChange}
                ref={inputRef}
                className="opacity-0"
            />
        </div>
    );
};

export default TypingArea;
