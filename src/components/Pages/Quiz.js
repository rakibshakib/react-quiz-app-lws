import React from 'react';
import Answers from '../QuizComponent/Answers';
import Miniplayer from '../QuizComponent/Miniplayer';
import ProgressBar from '../QuizComponent/ProgressBar';

const Quiz = () => {
    return (
        <div>
            <h1>Pick three of your favorite Star Wars Flims</h1>
            <h4>Question can have multiple answers</h4>
            <Answers />
            <ProgressBar />
            <Miniplayer />
        </div>
    );
};

export default Quiz;
