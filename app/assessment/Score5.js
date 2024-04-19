import React, { useState, useEffect } from 'react';
import Question from './question';

const SectionFive = () => {
    const [sectionFiveScores, setSectionFiveScores] = useState(Array(7).fill(0)); // Scores for questions in section five

    // Function to handle radio button changes for section five
    const handleSectionFiveRadioChange = (index, score) => {
        setSectionFiveScores(prevScores => {
            const newScores = [...prevScores];
            newScores[index] = score;
            return newScores;
        });
    };

    // Function to calculate total and percentage for section five
    const calculateSectionFiveTotalAndPercentage = () => {
        const total = sectionFiveScores.reduce((acc, score) => acc + (score || 0), 0);
        const percentage = (total / (sectionFiveScores.length * 3)) * 100; // Assuming 3 questions with a max score of 3 each
        return { total, percentage };
    };

    // Use useEffect to recalculate total and percentage whenever sectionFiveScores changes
    useEffect(() => {
        const { total, percentage } = calculateSectionFiveTotalAndPercentage();
        document.getElementById('sectionFiveTotal').value = total;
        document.getElementById('getavg5').value = percentage.toFixed(2) + '%';
    }, [sectionFiveScores]);
    const handleReset = () => {
        // Reset scores to 0
        setSectionFiveScores(Array(7).fill(0));
    
        // Uncheck all radio buttons with the classname "calc" inside the element with id "sectionFiveId"
        const calcRadioButtons = document.querySelectorAll('#sectionFiveId .calc');
        calcRadioButtons.forEach(button => {
            button.checked = false;
        });
    
        // Reset total and percentage fields to 0
        document.getElementById('sectionFiveTotal').value = 0;
        document.getElementById('getavg5').value = '0%';
    };
    

    return (
        <div id="sectionFiveId" className="question">
            <h4>HighestScore - 21</h4>
            <p>5.Safety</p>

            {/* Questions for section five */}
            <Question questionText="A) Uses stairs and corridors in a safe manner" name="q50" onRadioChange={(score) => handleSectionFiveRadioChange(0, score)} />
            <Question questionText="B) Aware of hazards in the environment" name="q51" onRadioChange={(score) => handleSectionFiveRadioChange(1, score)} />
            <Question questionText="C) Knows danger of fire" name="q52" onRadioChange={(score) => handleSectionFiveRadioChange(2, score)} />
            <Question questionText="D) Aware of traffic signals" name="q53" onRadioChange={(score) => handleSectionFiveRadioChange(3, score)} />
            <Question questionText="E) Crosses street safely" name="q54" onRadioChange={(score) => handleSectionFiveRadioChange(4, score)} />
            <Question questionText="F) Uses sharp objects safely" name="q55" onRadioChange={(score) => handleSectionFiveRadioChange(5, score)} />
            <Question questionText="G) Uses household electrical items safely" name="q56" onRadioChange={(score) => handleSectionFiveRadioChange(6, score)} />

            <br />
            <center>
                <input id="sectionFiveTotal" type="text" name="sectionFiveTotal" defaultValue="0" /><strong> Total</strong>&nbsp;&nbsp;
                <input id="getavg5" type="text" name="getavg5" defaultValue="0" /><strong> Percentage</strong>&nbsp;&nbsp;
                <button className="reset" type="button" onClick={handleReset}>Reset</button>
            </center>
            <br />
            <br />
        </div>
    );
};

export default SectionFive;
