import React, { useState, useEffect } from 'react';
import Question from './question';

const SectionSeven = () => {
    const [sectionSevenScores, setSectionSevenScores] = useState(Array(6).fill(0)); // Scores for questions in section seven

    // Function to handle radio button changes for section seven
    const handleSectionSevenRadioChange = (index, score) => {
        setSectionSevenScores(prevScores => {
            const newScores = [...prevScores];
            newScores[index] = score;
            return newScores;
        });
    };

    // Function to calculate total and percentage for section seven
    const calculateSectionSevenTotalAndPercentage = () => {
        const total = sectionSevenScores.reduce((acc, score) => acc + (score || 0), 0);
        const percentage = (total / (sectionSevenScores.length * 3)) * 100; // Assuming 3 questions with a max score of 3 each
        return { total, percentage };
    };

    // Use useEffect to recalculate total and percentage whenever sectionSevenScores changes
    useEffect(() => {
        const { total, percentage } = calculateSectionSevenTotalAndPercentage();
        document.getElementById('sectionSevenTotal').value = total;
        document.getElementById('getavg7').value = percentage.toFixed(2) + '%';
    }, [sectionSevenScores]);
    const handleReset = () => {
        // Reset scores to 0
        setSectionSevenScores(Array(6).fill(0));
    
        // Uncheck all radio buttons with the classname "calc" inside the element with id "sectionSevenId"
        const calcRadioButtons = document.querySelectorAll('#sectionSevenId .calc');
        calcRadioButtons.forEach(button => {
            button.checked = false;
        });
    
        // Reset total and percentage fields to 0
        document.getElementById('sectionSevenTotal').value = 0;
        document.getElementById('getavg7').value = '0%';
    };
    

    return (
        <div id="sectionSevenId" className="question">
            <h4>HighestScore - 18</h4>
            <p>7.Mobility and Hand Functioning</p>

            {/* Questions for section seven */}
            <Question questionText="A) Finds ways in a building" name="q67" onRadioChange={(score) => handleSectionSevenRadioChange(0, score)} />
            <Question questionText="B) Finds ways in neighbourhood to reach a destination" name="q68" onRadioChange={(score) => handleSectionSevenRadioChange(1, score)} />
            <Question questionText="C) Can pour without spilling" name="q69" onRadioChange={(score) => handleSectionSevenRadioChange(2, score)} />
            <Question questionText="D) Can cut a drawn shape with scissors" name="q70" onRadioChange={(score) => handleSectionSevenRadioChange(3, score)} />
            <Question questionText="E) Can pick up pins from a surface using fingers" name="q71" onRadioChange={(score) => handleSectionSevenRadioChange(4, score)} />
            <Question questionText="F) Travels by bus independently" name="q72" onRadioChange={(score) => handleSectionSevenRadioChange(5, score)} />
            {/* Add more questions if needed */}
            
            <br />
            <center>
                <input id="sectionSevenTotal" type="text" name="sectionSevenTotal" defaultValue="0" /><strong> Total</strong>&nbsp;&nbsp;
                <input id="getavg7" type="text" name="getavg7" defaultValue="0" /><strong> Percentage</strong>&nbsp;&nbsp;
                <button className="reset" type="button" onClick={handleReset}>Reset</button>
            </center>
            <br />
            <br />
        </div>
    );
};

export default SectionSeven;
