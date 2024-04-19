import React, { useState, useEffect } from 'react';
import Question from './question';

const SectionOne = () => {
    const [sectionOneScores, setSectionOneScores] = useState(Array(3).fill(0)); // Scores for questions in section one

    // Function to handle radio button changes for section one
    const handleSectionOneRadioChange = (index, score) => {
        setSectionOneScores(prevScores => {
            const newScores = [...prevScores];
            newScores[index] = score;
            return newScores;
        });
    };

    // Function to calculate total and percentage for section one
    const calculateSectionOneTotalAndPercentage = () => {
        const total = sectionOneScores.reduce((acc, score) => acc + (score || 0), 0);
        const percentage = (total / (sectionOneScores.length * 3)) * 100; // Assuming 3 questions with a max score of 3 each
        return { total, percentage };
    };

    // Use useEffect to recalculate total and percentage whenever sectionOneScores changes
    useEffect(() => {
        const { total, percentage } = calculateSectionOneTotalAndPercentage();
        document.getElementById('sectionOneTotal').value = total;
        document.getElementById('getavg1').value = percentage.toFixed(2) + '%';
    }, [sectionOneScores]);
    const handleReset = () => {
        // Reset scores to 0
        setSectionOneScores(Array(3).fill(0));
    
        // Uncheck all radio buttons with the classname "calc" inside the element with id "sectionOneId"
        const calcRadioButtons = document.querySelectorAll('#sectionOneId .calc');
        calcRadioButtons.forEach(button => {
            button.checked = false;
        });
    
        // Reset total and percentage fields to 0
        document.getElementById('sectionOneTotal').value = 0;
        document.getElementById('getavg1').value = '0%';
    };
    return (
        <div id="sectionOneId" className="question">
            <nav id="nav2">
                <center>
                    GENERIC SKILL CHECKLIST
                </center>
            </nav>
            <br/><br/>
            <h4>HighestScore - 9</h4>
            <p>1.Personal</p>

            <Question questionText="A) Uses toilet whenever required independently" name="q1" onRadioChange={(score) => handleSectionOneRadioChange(0, score)} />
            <Question questionText="B) Keeps himself well dressed and groomed according to the occasion" name="q2" onRadioChange={(score) => handleSectionOneRadioChange(1, score)} />
            <Question questionText="C) Maintains meal time etiquettes as per need at home and gathering situations " name="q3" onRadioChange={(score) => handleSectionOneRadioChange(2, score)} />
            <br /><br />
            <center>
                <input id="sectionOneTotal" type="text" name="sectionOneTotal" defaultValue="0" /><strong> Total</strong>&nbsp;&nbsp;
                <input id="getavg1" type="text" name="getavg1" defaultValue="0" /><strong> Percentage</strong>&nbsp;&nbsp;
                <button className="reset" type="button" onClick={handleReset}>Reset</button>
            </center>
            <br />
            <br />
        </div>
    );
};

export default SectionOne;
