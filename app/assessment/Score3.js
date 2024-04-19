import React, { useState, useEffect } from 'react';
import Question from './question';

const SectionThree = () => {
    const [sectionThreeScores, setSectionThreeScores] = useState(Array(9).fill(0)); // Scores for questions in section three

    // Function to handle radio button changes for section three
    const handleSectionThreeRadioChange = (index, score) => {
        setSectionThreeScores(prevScores => {
            const newScores = [...prevScores];
            newScores[index] = score;
            return newScores;
        });
    };

    // Function to calculate total and percentage for section three
    const calculateSectionThreeTotalAndPercentage = () => {
        const total = sectionThreeScores.reduce((acc, score) => acc + (score || 0), 0);
        const percentage = (total / (sectionThreeScores.length * 3)) * 100; // Assuming 3 questions with a max score of 3 each
        return { total, percentage };
    };

    // Use useEffect to recalculate total and percentage whenever sectionThreeScores changes
    useEffect(() => {
        const { total, percentage } = calculateSectionThreeTotalAndPercentage();
        document.getElementById('sectionThreeTotal').value = total;
        document.getElementById('getavg3').value = percentage.toFixed(2) + '%';
    }, [sectionThreeScores]);
    const handleReset = () => {
        // Reset scores to 0
        setSectionThreeScores(Array(9).fill(0));
    
        // Uncheck all radio buttons with the classname "calc" inside the element with id "sectionThreeId"
        const calcRadioButtons = document.querySelectorAll('#sectionThreeId .calc');
        calcRadioButtons.forEach(button => {
            button.checked = false;
        });
    
        // Reset total and percentage fields to 0
        document.getElementById('sectionThreeTotal').value = 0;
        document.getElementById('getavg3').value = '0%';
    };
    

    return (
        <div id="sectionThreeId" className="question">
            <h4>HighestScore - 27</h4>
            <p>3.Social Behaviour</p>

            <Question questionText="A) Sits properly in a group situation" name="q13" onRadioChange={(score) => handleSectionThreeRadioChange(0, score)} />
            <Question questionText="B) Greets peers and elders appropriately" name="q14" onRadioChange={(score) => handleSectionThreeRadioChange(1, score)} />
            <Question questionText="C) Cooperates in group situation" name="q15" onRadioChange={(score) => handleSectionThreeRadioChange(2, score)} />
            <Question questionText="D) Offers help when needed without prompting" name="q16" onRadioChange={(score) => handleSectionThreeRadioChange(3, score)} />
            <Question questionText="E) Behaves acceptably and makes visitors feel welcome" name="q17" onRadioChange={(score) => handleSectionThreeRadioChange(4, score)} />
            <Question questionText="F) Recognizes and protects own property" name="q18" onRadioChange={(score) => handleSectionThreeRadioChange(5, score)} />
            <Question questionText="G) Asks permission to use the property of others" name="q19" onRadioChange={(score) => handleSectionThreeRadioChange(6, score)} />
            <Question questionText="H) Maintains discipline in a given situation" name="q20" onRadioChange={(score) => handleSectionThreeRadioChange(7, score)} />
            <Question questionText="I) Leads peer group in simple activities" name="q21" onRadioChange={(score) => handleSectionThreeRadioChange(8, score)} />

            <br />
            <br />
            <center>
                <input id="sectionThreeTotal" type="text" name="sectionThreeTotal" defaultValue="0" /><strong> Total</strong>&nbsp;&nbsp;
                <input id="getavg3" type="text" name="getavg3" defaultValue="0" /><strong> Percentage</strong>&nbsp;&nbsp;
                <button className="reset" type="button" onClick={handleReset}>Reset</button>
            </center>
            <br />
            <br />
        </div>
    );
};

export default SectionThree;
