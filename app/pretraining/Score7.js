import React, { useState, useEffect } from 'react';
import Question from './question';

const SectionSeven = () => {
    const [sectionSevenScores, setSectionSevenScores] = useState(Array(14).fill(0)); // Scores for questions in section seven

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
        setSectionSevenScores(Array(14).fill(0));
    
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
            <h4>HighestScore - 42</h4>
            <p>7.Motor Skills (as per the requirement of specific vocations)</p>

            {/* Questions for section seven */}
            <Question questionText="A) Work in a required posture ( sitting/ standing) for at least 15-30 minutes" name="q67" onRadioChange={(score) => handleSectionSevenRadioChange(0, score)} />
            <Question questionText="B) Perform gross movement of arms & elbow joint" name="q68" onRadioChange={(score) => handleSectionSevenRadioChange(1, score)} />
            <h2>C) Demonstrate Pincer Grasp</h2>
            <Question questionText="i) Pick big objects ( eg blocks)" name="q69" onRadioChange={(score) => handleSectionSevenRadioChange(2, score)} />
            <Question questionText="ii)	Pick small objects ( eg beads)" name="q70" onRadioChange={(score) => handleSectionSevenRadioChange(3, score)} />
            <Question questionText="D) Demonstrate Tripod Grasp - i) Hold brush/pen/scissors" name="q71" onRadioChange={(score) => handleSectionSevenRadioChange(4, score)} />
            <Question questionText="E) Demonstrate Spherical Grasp - i) Transfer small objects (eg lemons) with one hand" name="q72" onRadioChange={(score) => handleSectionSevenRadioChange(5, score)} />
            <Question questionText="F) Demonstrate Cylindrical Grasp" name="q73" onRadioChange={(score) => handleSectionSevenRadioChange(6, score)} />
            <Question questionText="G) Demonstrate Hand, Wrist & Finger Function- Hook Gras" name="q74" onRadioChange={(score) => handleSectionSevenRadioChange(7, score)} />
            <h2>H) Increase perceptual motor coordination</h2>
            <Question questionText="i) Eye-Hand Coordination" name="q75" onRadioChange={(score) => handleSectionSevenRadioChange(8, score)} />
            <Question questionText="ii) Bilateral Hand Coordination" name="q76" onRadioChange={(score) => handleSectionSevenRadioChange(9, score)} />
            <Question questionText="iii) Increase body balance" name="q77" onRadioChange={(score) => handleSectionSevenRadioChange(10, score)} />
            <Question questionText="I) Demonstrate hand & finger dexterity" name="q78" onRadioChange={(score) => handleSectionSevenRadioChange(11, score)} />
            <Question questionText="J) Apply required pressure using hands" name="q79" onRadioChange={(score) => handleSectionSevenRadioChange(12, score)} />
            <Question questionText="K) Apply required pressure using Foot on machinery or item" name="q80" onRadioChange={(score) => handleSectionSevenRadioChange(13, score)} />
          
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
