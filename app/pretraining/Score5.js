import React, { useState, useEffect } from 'react';
import Question from './question';

const SectionFive = () => {
    const [sectionFiveScores, setSectionFiveScores] = useState(Array(15).fill(0)); // Scores for questions in section five

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
        setSectionFiveScores(Array(15).fill(0));
    
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
            <h4>HighestScore - 45</h4>
            <p>5.Socio-Emotional Maturity</p>

            {/* Questions for section five */}
            <Question questionText="A) Follow the stated norms by the industry" name="q50" onRadioChange={(score) => handleSectionFiveRadioChange(0, score)} />
            <Question questionText="B) Practice Social Etiquettes" name="q51" onRadioChange={(score) => handleSectionFiveRadioChange(1, score)} />
            <Question questionText="C) Understand emotions of oneself and others" name="q52" onRadioChange={(score) => handleSectionFiveRadioChange(2, score)} />
            <Question questionText="D) Use socially appropriate expressions of emotions" name="q53" onRadioChange={(score) => handleSectionFiveRadioChange(3, score)} />
            <Question questionText="E) Follow instructions" name="q54" onRadioChange={(score) => handleSectionFiveRadioChange(4, score)} />
            <Question questionText="F) Share belongings among peers and colleagues when required." name="q55" onRadioChange={(score) => handleSectionFiveRadioChange(5, score)} />
            <Question questionText="G) Cooperate and provide support to colleagues and peers when required" name="q56" onRadioChange={(score) => handleSectionFiveRadioChange(6, score)} />
            <Question questionText="H) Work as a team member" name="q57" onRadioChange={(score) => handleSectionFiveRadioChange(7, score)} />
            <Question questionText="i) Behave appropriately with seniors, juniors and other colleagues" name="q58" onRadioChange={(score) => handleSectionFiveRadioChange(8, score)} />
            <Question questionText="J) Engage in social conversations" name="q59" onRadioChange={(score) => handleSectionFiveRadioChange(9, score)} />
            <Question questionText="K) Understand inappropriate actions/ facial expression of others" name="q60" onRadioChange={(score) => handleSectionFiveRadioChange(10, score)} />
            <Question questionText="L) Adapt to new situations, people & routine" name="q61" onRadioChange={(score) => handleSectionFiveRadioChange(11, score)} />
            <Question questionText="M) Assist others when required other" name="q62" onRadioChange={(score) => handleSectionFiveRadioChange(12, score)} />
            <Question questionText="N) Understand the work environment situation" name="q63" onRadioChange={(score) => handleSectionFiveRadioChange(13, score)} />
            <Question questionText="O) Ask help when needed" name="q64" onRadioChange={(score) => handleSectionFiveRadioChange(14, score)} />
           

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
