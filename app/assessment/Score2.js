import React, { useState, useEffect } from 'react';
import Question from './question';

function SectionTwo() {
    const [sectionTwoScores, setSectionTwoScores] = useState(Array(9).fill(0)); // Scores for questions in section two

    // Function to handle radio button changes for section two
    const handleSectionTwoRadioChange = (index, score) => {
        setSectionTwoScores(prevScores => {
            const newScores = [...prevScores];
            newScores[index] = score;
            return newScores;
        });
    };

    // Function to calculate total and percentage for section two
    const calculateSectionTwoTotalAndPercentage = () => {
        const total = sectionTwoScores.reduce((acc, score) => acc + (score || 0), 0);
        const percentage = (total / (sectionTwoScores.length * 3)) * 100; // Assuming 3 questions with a max score of 3 each
        return { total, percentage };
    };

    // Use useEffect to recalculate total and percentage whenever sectionTwoScores changes
    useEffect(() => {
        const { total, percentage } = calculateSectionTwoTotalAndPercentage();
        document.getElementById('sectionTwoTotal').value = total;
        document.getElementById('getavg2').value = percentage.toFixed(2) + '%';
    }, [sectionTwoScores]);
    const handleReset = () => {
        // Reset scores to 0
        setSectionTwoScores(Array(9).fill(0));
    
        // Uncheck all radio buttons with the classname "calc" inside the element with id "sectionOneId"
        const calcRadioButtons = document.querySelectorAll('#sectionTwoId .calc');
        calcRadioButtons.forEach(button => {
            button.checked = false;
        });
    
        // Reset total and percentage fields to 0
        document.getElementById('sectionTwoTotal').value = 0;
        document.getElementById('getavg2').value = '0%';
    };

    return (
        <div id="sectionTwoId" className="question">
            <h4>HighestScore - 27</h4>
            <p>2.Communication</p>
            <Question questionText="A) Can use gestures as an adjunct to verbal communication" name="q4" onRadioChange={(score) => handleSectionTwoRadioChange(0, score)} />
            <Question questionText="B) Communicates using words" name="q5" onRadioChange={(score) => handleSectionTwoRadioChange(1, score)} />
            <Question questionText="C) Gesturally or verbally makes himself understood to others" name="q6" onRadioChange={(score) => handleSectionTwoRadioChange(2, score)} />
            <Question questionText="D) Communicates properly in sentences" name="q7" onRadioChange={(score) => handleSectionTwoRadioChange(3, score)} />
            <Question questionText="E) Engages in meaningful conversation" name="q8" onRadioChange={(score) => handleSectionTwoRadioChange(4, score)} />
            <Question questionText="F) Follows a group communication" name="q9" onRadioChange={(score) => handleSectionTwoRadioChange(5, score)} />
            <Question questionText="G) Using cell phone as communication device" name="q10" onRadioChange={(score) => handleSectionTwoRadioChange(6, score)} />
            <Question questionText="H) Can retain verbal messages and convey to the respective person" name="q11" onRadioChange={(score) => handleSectionTwoRadioChange(7, score)} />
            <Question questionText="I) Can attend to a telephone call" name="q12" onRadioChange={(score) => handleSectionTwoRadioChange(8, score)} />
            <br />
            <br />
            <center>
                <input id="sectionTwoTotal" type="text" name="sectionTwoTotal" defaultValue="0" /><strong> Total</strong>&nbsp;&nbsp;
                <input id="getavg2" type="text" name="getavg2" defaultValue="0" /><strong> Percentage</strong>&nbsp;&nbsp;
                <button className="reset" type="button" onClick={handleReset}>Reset</button>
            </center>
            <br />
            <br />
        </div>
    );
}

export default SectionTwo;
