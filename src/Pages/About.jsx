import React, { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap";
import '../App.css';
import { useState } from 'react';
import Axios from 'axios'

var QuestionNum = 0;

function SubmitQuiz(){
    
    
    var As;
    
    let elements = null;


    for (var i = 0; i<QuestionNum; i++){
        elements = document.getElementsByName("a" + (i+1));
       
        for (var j = 0; j<elements.length; j++){
            if (elements[j].checked){
                console.log("A RADIO IS CHECKED");
            }
        }



    }


    console.log("Question Amount: " + QuestionNum);
    console.log("Amount of A's" + As);
    console.log (elements);




}


function About() {

    const [questionList, setQuestionList] = useState([]);

    useEffect(() => {
        Axios.get('https://edufy-by-edufiers.herokuapp.com/questions').then((response) => {
            setQuestionList(response.data);
        });
    }, []);
    QuestionNum = 0;
    return (
            
            questionList.map((val) => {
                {QuestionNum++}
                return (
                    
                    <div class="accordion" id="Quiz">
                        <div class="accordion-item">

                            <h2 class="accordion-header" id="panelsStayOpen-headingOne">               
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#a${val.questionNumber}`} aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                { val.question }
                            </button>
                            </h2>


                            <div id={`a${val.questionNumber}`} class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                                <div class="accordion-body">
                                    <h3>
                                        Index: {val.questionNumber} | Question: { val.question } | A: {val.choiceA} | B: {val.choiceB} | C: {val.choiceC} | D: {val.choiceD} | Correct: {val.correctChoice}
                                    </h3>                            
                        
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name={`a${val.questionNumber}`} id="A" value="option1"></input>
                                    <label class="form-check-label" for="inlineRadio1">A: {val.choiceA}</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name={`a${val.questionNumber}`} id="B" value="option1"></input>
                                    <label class="form-check-label" for="inlineRadio1">B: {val.choiceB}</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name={`a${val.questionNumber}`} id="C" value="option1"></input>
                                    <label class="form-check-label" for="inlineRadio1">C: {val.choiceC}</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name={`a${val.questionNumber}`} id="D" value="option1"></input>
                                    <label class="form-check-label" for="inlineRadio1">D: {val.choiceD}</label>
                                </div>

                                <button onClick={SubmitQuiz}>Click me</button>

                                    {/*Closes Accordion Body*/}
                                </div>
                            </div>
                      
                        {/*Closes Accordion then Quiz*/}
                        </div>
                    </div>

                   
                

                    
                );
            })

        
      
        
       

    );

}

export default About;