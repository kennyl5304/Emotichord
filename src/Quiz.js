import React, { useState } from 'react';
import Question from './Components/Question';
import Options from './Components/Options';
import Results from './Components/Results';
import { data } from './Components/Data';
import happy from './Assets/emotichord.mp3';
import sad from './Assets/big dasf.mp3';
import bgm from './Assets/underdogs.mp3';

const Quiz = () => {
    const [depressionScore, setDepressionScore] = useState(0);
    const [mainstreamScore, setMainstreamScore] = useState(0);
    const [musicScore, setMusicScore] = useState(0);
    const [emotionScore, setEmotionScore] = useState(0);
    const [ageScore, setAgeScore] = useState(0);
    const [genreScore, setGenreScore] = useState({pop: 0, rock: 0, hiphopelectronica: 0});
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const questions = data[currentQuestionIndex];
    //const [questions, setQuestions] = useState(data[currentQuestionIndex]);
    const [isCompleted, setIsCompleted] = useState(false);
    const [started, setStarted] = useState(false);
    
    console.log(depressionScore);
    const handleAnswer = (selectedOption) => {
        console.log(questions.answers[selectedOption]);
        //handle depression scores
        if([3,8,10,12,20].indexOf(currentQuestionIndex+1) > -1){
            if(questions.answers[selectedOption]==="depression"){
                 setDepressionScore(depressionScore - 1);
             }
             else{
                 setDepressionScore(depressionScore + 1);
             }
        }
        else if([1,2,5].indexOf(currentQuestionIndex+1) > -1){
            //handle mainstream score
            if(questions.answers[selectedOption]==="mainstream"){
                 setMainstreamScore(mainstreamScore + 1);
             }
             else{
                 setMainstreamScore(mainstreamScore - 1);
             }
        }
        else if([9,13,15].indexOf(currentQuestionIndex+1) > -1){
            //handle music score
            if(questions.answers[selectedOption]==="instrumentals"){
                 setMusicScore(musicScore + 1);
             }
             else{
                 setMusicScore(musicScore - 1);
             }
        }
        else if([6,14,19].indexOf(currentQuestionIndex+1) > -1){
            //handle emotional score
            if(questions.answers[selectedOption]==="feel"){
                 setEmotionScore(emotionScore + 1);
             }
             else{
                 setEmotionScore(emotionScore - 1);
             }
        }
        else if([7,16,17].indexOf(currentQuestionIndex+1) > -1){
            //handle age score
            if(questions.answers[selectedOption]==="classic"){
                 setAgeScore(ageScore + 1);
             }
             else if(questions.answers[selectedOption]==="modern"){
                 setAgeScore(ageScore - 1);
             }
        }
        else if([4,11,18].indexOf(currentQuestionIndex+1) > -1){
            //handle genre score
            setGenreScore(prev => {
            const updated = { ...prev };
            for (const genre in questions.answers[selectedOption]) {
                updated[genre] += questions.answers[selectedOption][genre];
            }

            return updated;
        });
        }

        if (currentQuestionIndex < data.length-1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            setIsCompleted(true);
        }
    };

    return (
       <>
            {!started ? (
                <div className="container">
                    <h1>Emotichord song recommender</h1>
                    <hr/>
                    <p>Welcome to the <i>Emotichord</i> song recommender, a musical therapy quiz meant to act as a mental wellness check that simultaneously gives you a handful of songs based on how you're currently feeling.</p>
                    <button onClick={() => setStarted(true)}>Begin</button>
                </div>
            ) : !isCompleted ? (
                <div className="container">
                    <h1>Mental Wellness Recommender</h1>
                    <hr/>
                    <h2>{questions.question}</h2>
                    
                    <ul>
                        {questions.options.map((option, index) => (
                            <li key={index} onClick={() => handleAnswer(index)}>
                                {option}
                            </li>
                        ))}
                    </ul>
                    <div className="index">{currentQuestionIndex+1} of {data.length}</div>
                    <audio src={bgm} autoPlay loop style={{display:"none"}}/>
                </div>      
            ) : (
                <div className="container">
                    <Results depressionScore={depressionScore} mainstreamScore={mainstreamScore} musicScore={musicScore} emotionScore={emotionScore} ageScore={ageScore} genreScore={genreScore}/>
                </div>
            )}
            {/*!isCompleted ? (      
                <div className="container">
                    <h1>Mental Wellness Recommender</h1>
                    <hr/>
                    <h2>{questions.question}</h2>
                    
                    <ul>
                        {questions.options.map((option, index) => (
                            <li key={index} onClick={() => handleAnswer(index)}>
                                {option}
                            </li>
                        ))}
                    </ul>
                    <div className="index">{currentQuestionIndex+1} of {data.length}</div>
                    <audio src={bgm} autoPlay loop style={{display:"none"}}/>
                </div>      
            ) : (
                <div className="container">
                    <Results depressionScore={depressionScore} mainstreamScore={mainstreamScore} musicScore={musicScore} emotionScore={emotionScore} ageScore={ageScore} genreScore={genreScore}/>
                </div>
            )*/}
        </>     
    );
};

export default Quiz;