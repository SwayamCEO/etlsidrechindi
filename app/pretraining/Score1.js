import React, { useState, useEffect } from 'react';
import Question from './question';

const SectionOne = () => {
    const [sectionOneScores, setSectionOneScores] = useState(Array(14).fill(0)); // Scores for questions in section one

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
        setSectionOneScores(Array(14).fill(0));
    
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
                PRETRAINING CHECKLIST
                </center>
            </nav>
            <br/>
            <br/>
            <h4>HighestScore - 42</h4>
            <p>1.Personal Adequacy Skills</p>

            <Question questionText="A) Anticipates needs, uses toilets independently" name="q1" onRadioChange={(score) => handleSectionOneRadioChange(0, score)} />
            <Question questionText="B) Is able to maintain good Personal Hygiene and grooming" name="q2" onRadioChange={(score) => handleSectionOneRadioChange(1, score)} />
            <Question questionText="C) Is able to practice social eating etiquettes  " name="q3" onRadioChange={(score) => handleSectionOneRadioChange(2, score)} />
            <Question questionText="D) Is able to develop a sense of Privacy" name="q4" onRadioChange={(score) => handleSectionOneRadioChange(3, score)} />
            <Question questionText="E) Understand the concept of Responsibility" name="q5" onRadioChange={(score) => handleSectionOneRadioChange(4, score)} />
            <Question questionText="E)i) Is able to take care of personal belongings/ others (family/ peer group) and responsibilities at hand" name="q6" onRadioChange={(score) => handleSectionOneRadioChange(5, score)} />
            <Question questionText="E)ii) Is able to carry out the activities of daily routine independently." name="q7" onRadioChange={(score) => handleSectionOneRadioChange(6, score)} />
            <Question questionText="F)Ensure ones’ safety" name="q8" onRadioChange={(score) => handleSectionOneRadioChange(7, score)} />
            <Question questionText="F) i) Has awareness about health and environmental hazards " name="q9" onRadioChange={(score) => handleSectionOneRadioChange(8, score)} />
            <Question questionText="F)ii) Awareness about good and bad touch" name="q10" onRadioChange={(score) => handleSectionOneRadioChange(9, score)} />
            <Question questionText="F)iii) Is able to protect self from abuse" name="q11" onRadioChange={(score) => handleSectionOneRadioChange(10, score)} />
            <Question questionText="F)iv) Awareness about own parts of the bodyis able to localize body part of concern- pain, pressure, inappropriate contact" name="q12" onRadioChange={(score) => handleSectionOneRadioChange(11, score)} />
            <Question questionText="F)v) Is able to intimate self-abuse seeks other to report abuse or distress" name="q13" onRadioChange={(score) => handleSectionOneRadioChange(12, score)} />
            <Question questionText="F)vi) Is able to Identify & report Abuse" name="q14" onRadioChange={(score) => handleSectionOneRadioChange(13, score)} />



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
