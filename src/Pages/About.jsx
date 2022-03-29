import React, { useEffect } from "react";

import '../App.css';
import { useState } from 'react';
import Axios from 'axios'

function About() {
    const [questionList, setQuestionList] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:3000/questions').then((response) => {
            setQuestionList(response.data);
        });
    }, []);



    return (
            questionList.map((val) => {
                return (
                    <h3>
                        Index: {val.questionNumber} | Question: { val.question } | A: {val.choiceA} | B: {val.choiceB} | C: {val.choiceC} | D: {val.choiceD} | Correct: {val.correctChoice}
                    </h3>
                );
            })
    );
}

export default About;