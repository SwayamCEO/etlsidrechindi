import React, { useState, useEffect } from 'react';
import Question from './question';

const SectionFour = () => {
    const [sectionFourScores, setSectionFourScores] = useState(Array(10).fill(0)); // Scores for questions in section four

    // Function to handle radio button changes for section four
    const handleSectionFourRadioChange = (index, score) => {
        setSectionFourScores(prevScores => {
            const newScores = [...prevScores];
            newScores[index] = score;
            return newScores;
        });
    };

    // Function to calculate total and percentage for section four
    const calculateSectionFourTotalAndPercentage = () => {
        const total = sectionFourScores.reduce((acc, score) => acc + (score || 0), 0);
        const percentage = (total / (sectionFourScores.length * 3)) * 100; // Assuming 3 questions with a max score of 3 each
        return { total, percentage };
    };

    // Use useEffect to recalculate total and percentage whenever sectionFourScores changes
    useEffect(() => {
        const { total, percentage } = calculateSectionFourTotalAndPercentage();
        document.getElementById('sectionFourTotal').value = total;
        document.getElementById('getavg4').value = percentage.toFixed(2) + '%';
    }, [sectionFourScores]);
    const handleReset = () => {
        // Reset scores to 0
        setSectionFourScores(Array(10).fill(0));
    
        // Uncheck all radio buttons with the classname "calc" inside the element with id "sectionFourId"
        const calcRadioButtons = document.querySelectorAll('#sectionFourId .calc');
        calcRadioButtons.forEach(button => {
            button.checked = false;
        });
    
        // Reset total and percentage fields to 0
        document.getElementById('sectionFourTotal').value = 0;
        document.getElementById('getavg4').value = '0%';
    };
    

    return (
        <div id="sectionFourId" className="question">
            <h4>HighestScore - 30</h4>
            <p>4.Strengthening of Cognitive Skills</p>

            {/* Questions for section four */}
            <Question questionText="A) Sustain attention as per the duration of the activity for 5-10 min in an activity " name="q22" onRadioChange={(score) => handleSectionFourRadioChange(0, score)} />
            <Question questionText="B) Sustain attention as per the duration of the activity for 5-10 min in an activity" name="q23" onRadioChange={(score) => handleSectionFourRadioChange(1, score)} />
            <Question questionText="C) Have better observation & perception" name="q24" onRadioChange={(score) => handleSectionFourRadioChange(2, score)} />
            <Question questionText="D) Match images visually" name="q25" onRadioChange={(score) => handleSectionFourRadioChange(3, score)} />
            <Question questionText="E) Scan pictures, documents, work environment to find relevant object/information" name="q26" onRadioChange={(score) => handleSectionFourRadioChange(4, score)} />
            <Question questionText="F) Retain memory of relevant information related to self, family, peers, responsibilities, events etc." name="q27" onRadioChange={(score) => handleSectionFourRadioChange(5, score)} />
            <Question questionText="G) Develop concept formation- relevant to specific job roles" name="q28" onRadioChange={(score) => handleSectionFourRadioChange(6, score)} />
            <Question questionText="H) Undertake simple reasoning & judgment in daily tasks" name="q29" onRadioChange={(score) => handleSectionFourRadioChange(7, score)} />
            <Question questionText="I) Solve simple problems related to daily tasks/ situations" name="q30" onRadioChange={(score) => handleSectionFourRadioChange(8, score)} />
            <Question questionText="J) Take simple decision making related to self" name="q31" onRadioChange={(score) => handleSectionFourRadioChange(9, score)} />
            

            <br />
            <br />
            <center>
                <input id="sectionFourTotal" type="text" name="sectionFourTotal" defaultValue="0" /><strong> Total</strong>&nbsp;&nbsp;
                <input id="getavg4" type="text" name="getavg4" defaultValue="0" /><strong> Percentage</strong>&nbsp;&nbsp;
                <button className="reset" type="button" onClick={handleReset}>Reset</button>
            </center>
            <br />
            <br />
        </div>
    );
};

export default SectionFour;
