import React, { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap";
import '../App.css';
import { useState } from 'react';
import Axios from 'axios'

var QuestionNum = 0;

function SubmitQuiz(){
    var CorrectAnswers = 0;
    let elements = null;

    //FOR LOOP FOR EACH QUESTION
    for (var i = 0; i<QuestionNum; i++){
        elements = document.getElementsByName("a" + (i+1));
        //An element is the current 4 bubbles in a list
        //FOR LOOP FOR EACH BUBBLE (j->0->3)
        for (var j = 0; j<elements.length; j++){
            if (elements[j].checked && elements[j].value == elements[j].id){
                CorrectAnswers++
            }
        }
    }
    console.log("Correct Answers: " + CorrectAnswers);
    console.log("Question Amount: " + QuestionNum);
    DisplayAnswers(CorrectAnswers, QuestionNum);
}

function DisplayAnswers(Correct, Total){
    document.getElementById("Results").innerHTML = Correct + " / " + Total;
}




function Quiz(){
    const [questionList, setQuestionList] = useState([]);

    useEffect(() => {
        Axios.get('https://edufy-by-edufiers.herokuapp.com/grammar').then((response) => {
            setQuestionList(response.data);
        });
    }, []);
    QuestionNum = 0;
    return (
            //Iterates through questions
            questionList.map((val) => {
                {QuestionNum++}
                return (
                    <div class="accordion col-md  " id="Quiz">
                        <div class="accordion-item ">
                            <h2 class="accordion-header " id="panelsStayOpen-headingOne">               
                            <button class="accordion-button  text-black" type="button" data-bs-toggle="collapse" data-bs-target={`#a${val.questionNumber}`} aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                { val.question }
                            </button>
                            </h2>
                            <div id={`a${val.questionNumber}`} class="accordion-collapse collapse show " aria-labelledby="panelsStayOpen-headingOne">
                                <div class="accordion-body">
                                   
                                        
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name={`a${val.questionNumber}`} id="A" value={val.correctChoice}></input>
                                    <label class="form-check-label" for="inlineRadio1">A: {val.choiceA}</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name={`a${val.questionNumber}`} id="B" value={val.correctChoice}></input>
                                    <label class="form-check-label" for="inlineRadio1">B: {val.choiceB}</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name={`a${val.questionNumber}`} id="C" value={val.correctChoice}></input>
                                    <label class="form-check-label" for="inlineRadio1">C: {val.choiceC}</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name={`a${val.questionNumber}`} id="D" value={val.correctChoice}></input>
                                    <label class="form-check-label" for="inlineRadio1">D: {val.choiceD}</label>
                                </div>
                                    {/*Closes Accordion Body*/}
                                </div>
                            </div>
                      
                        {/*Closes Accordion then Quiz*/}
                        </div>
                    </div>

                );
            })

    );
        
} //END OF GENERATING QUIZ CODE

function Grammar() {
  return ( [

    <div class="center" id="Title">Grammar Quiz</div>
    ,
    Quiz() 
    ,
    <div class="center" id="Results"></div>
    ,
    //SUBMIT BUTTON GOES HERE, LEAVE COMMAS FOR CORRECT PAGE GEN
,
    <div class="containerQuizButton">  
        <div class="center button" onClick={SubmitQuiz} >Submit Quiz</div>
    </div>  


  ]);



}

export default Grammar;