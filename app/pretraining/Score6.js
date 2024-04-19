import React, { useState, useEffect } from 'react';
import Question from './question';

const SectionSix = () => {
    const [sectionSixScores, setSectionSixScores] = useState(Array(8).fill(0)); // Scores for questions in section six

    // Function to handle radio button changes for section six
    const handleSectionSixRadioChange = (index, score) => {
        setSectionSixScores(prevScores => {
            const newScores = [...prevScores];
            newScores[index] = score;
            return newScores;
        });
    };

    // Function to calculate total and percentage for section six
    const calculateSectionSixTotalAndPercentage = () => {
        const total = sectionSixScores.reduce((acc, score) => acc + (score || 0), 0);
        const percentage = (total / (sectionSixScores.length * 3)) * 100; // Assuming 3 points for each question
        return { total, percentage };
    };

    // Use useEffect to recalculate total and percentage whenever sectionSixScores changes
    useEffect(() => {
        const { total, percentage } = calculateSectionSixTotalAndPercentage();
        document.getElementById('sectionSixTotal').value = total;
        document.getElementById('getavg6').value = percentage.toFixed(2) + '%';
    }, [sectionSixScores]);
    const handleReset = () => {
        // Reset scores to 0
        setSectionSixScores(Array(8).fill(0));
    
        // Uncheck all radio buttons with the classname "calc" inside the element with id "sectionSixId"
        const calcRadioButtons = document.querySelectorAll('#sectionSixId .calc');
        calcRadioButtons.forEach(button => {
            button.checked = false;
        });
    
        // Reset total and percentage fields to 0
        document.getElementById('sectionSixTotal').value = 0;
        document.getElementById('getavg6').value = '0%';
    };
    

    return (
        <div id="sectionSixId" className="question">
            <h4>HighestScore - 24</h4>
            <p>6.Work ethics</p>

            {/* Questions for section six */}
            <Question questionText="A) Report to work on time" name="q57" onRadioChange={(score) => handleSectionSixRadioChange(0, score)} />
            <Question questionText="B) Maintain a consistency in performance" name="q58" onRadioChange={(score) => handleSectionSixRadioChange(1, score)} />
            <Question questionText="C) Understand and maintain quality of work" name="q59" onRadioChange={(score) => handleSectionSixRadioChange(2, score)} />
            <Question questionText="D) Understand the targets of work that are to be met" name="q60" onRadioChange={(score) => handleSectionSixRadioChange(3, score)} />
            <Question questionText="E) Have dignity and respect of work" name="q61" onRadioChange={(score) => handleSectionSixRadioChange(4, score)} />
            <Question questionText="F) Report when complete work to immediate supervisor" name="q62" onRadioChange={(score) => handleSectionSixRadioChange(5, score)} />
            <Question questionText="G) Ask next task from supervisor" name="q63" onRadioChange={(score) => handleSectionSixRadioChange(6, score)} />
            <Question questionText="H) Maintain privacy at work place" name="q64" onRadioChange={(score) => handleSectionSixRadioChange(7, score)} />
          
            <br />
            <center>
                <input id="sectionSixTotal" type="text" name="sectionSixTotal" defaultValue="0" /><strong> Total</strong>&nbsp;&nbsp;
                <input id="getavg6" type="text" name="getavg6" defaultValue="0" /><strong> Percentage</strong>&nbsp;&nbsp;
                <button className="reset" type="button" onClick={handleReset}>Reset</button>
            </center>
            <br />
            <br />
        </div>
    );
};

export default SectionSix;
