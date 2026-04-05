import React, { useState } from 'react';
import Question from './Components/Question';
import Options from './Components/Options';
import Results from './Components/Results';
import { data } from './Components/Data';
import happy from './Assets/emotichord.mp3';
import sad from './Assets/big dasf.mp3';
import bgm from './Assets/underdogs.mp3';

const Quiz = () => {
    const [score, setScore] = useState(0);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const questions = data[currentQuestionIndex];
    //const [questions, setQuestions] = useState(data[currentQuestionIndex]);
    const [isCompleted, setIsCompleted] = useState(false);
    
    console.log(score);
    const handleAnswer = (selectedOption) => {
        console.log(selectedOption);
        if (selectedOption == "Yes"){
            if(questions.answers[0]==="depression"){
                setScore(score - 1);
            }
            else{
                setScore(score + 1);
            }
        }
        if (selectedOption == "No"){
            if(questions.answers[1]==="depression"){
                setScore(score - 1);
            }
            else{
                setScore(score + 1);
            }
        }
        /*
        if (selectedOption === questions[currentQuestionIndex].answer) {
            setScore(score + 1);
        }        
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setQuestions(data[currentQuestionIndex]);
        */        
        if (currentQuestionIndex < data.length-1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            //setQuestions(data[currentQuestionIndex]);
        } else {
            setIsCompleted(true);
        }
    };

    return (
        /*
        <div className="container">
            <h1>Quiz Test</h1>
            <hr/>
            <h2>{currentQuestionIndex+1}. {questions.question}</h2>
            <ul>
                <li onClick={(selectedOption)=>{handleAnswer(selectedOption)}}>{questions.options[0]}</li>
                <li onClick={(selectedOption)=>{handleAnswer(selectedOption)}}>{questions.options[1]}</li>
            </ul>
            <div className="index">{currentQuestionIndex+1} of {data.length}</div>
        </div>
        */
       <>
            {!isCompleted ? (      
                <div className="container">
                    <h1>Quiz Test</h1>
                    <hr/>
                    <h2>{currentQuestionIndex+1}. {questions.question}</h2>
                    <ul>
                        <li onClick={(selectedOption)=>{handleAnswer(questions.options[0])}}>{questions.options[0]}</li>
                        <li onClick={(selectedOption)=>{handleAnswer(questions.options[1])}}>{questions.options[1]}</li>
                    </ul>
                    <div className="index">{currentQuestionIndex+1} of {data.length}</div>
                    <audio src={bgm} autoPlay loop style={{display:"none"}}/>
                </div>      
            ) : (
                <div>
                    <h1>Results</h1>
                    <div className="container">
                        {score > 0 ?(
                            <>
                                <h2>You do not have depression!</h2>        
                                <audio src={happy} autoPlay style={{display:"none"}}/>
                            </>
                        ) : (
                            <>
                                <h2>You have depression!</h2>        
                                <audio src={sad} autoPlay style={{display:"none"}}/>
                            </>
                        )}
                    </div>
                </div>
            )}
        </>     
    );
};

export default Quiz;