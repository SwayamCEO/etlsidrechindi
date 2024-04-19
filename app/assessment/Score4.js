import React, { useState, useEffect } from 'react';
import Question from './question';

const SectionFour = () => {
    const [sectionFourScores, setSectionFourScores] = useState(Array(28).fill(0)); // Scores for questions in section four

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
        setSectionFourScores(Array(28).fill(0));
    
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
            <h4>HighestScore - 84</h4>
            <p>4.Function Academics</p>

            {/* Questions for section four */}
            <Question questionText="A) Reads own name" name="q22" onRadioChange={(score) => handleSectionFourRadioChange(0, score)} />
            <Question questionText="B) Reads own address" name="q23" onRadioChange={(score) => handleSectionFourRadioChange(1, score)} />
            <Question questionText="C) Reads survival words (poison, man, woman, hot, stop, toilet etc)" name="q24" onRadioChange={(score) => handleSectionFourRadioChange(2, score)} />
            <Question questionText="D) Reads simple sentences" name="q25" onRadioChange={(score) => handleSectionFourRadioChange(3, score)} />
            <Question questionText="E) Comprehends what is read by him/her" name="q26" onRadioChange={(score) => handleSectionFourRadioChange(4, score)} />
            <Question questionText="F) Writes his/her name" name="q27" onRadioChange={(score) => handleSectionFourRadioChange(5, score)} />
            <Question questionText="G) Writes his/her address" name="q28" onRadioChange={(score) => handleSectionFourRadioChange(6, score)} />
            <Question questionText="H) Copies simple sentences" name="q29" onRadioChange={(score) => handleSectionFourRadioChange(7, score)} />
            <Question questionText="I) Writes simple sentences" name="q30" onRadioChange={(score) => handleSectionFourRadioChange(8, score)} />
            <Question questionText="J) Identifies and writes the numbers upto 10" name="q31" onRadioChange={(score) => handleSectionFourRadioChange(9, score)} />
            <Question questionText="K) Counts meaningfully up to 10" name="q32" onRadioChange={(score) => handleSectionFourRadioChange(10, score)} />
            <Question questionText="L) Identifies and writes the numbers upto 100" name="q33" onRadioChange={(score) => handleSectionFourRadioChange(11, score)} />
            <Question questionText="M) Counts upto 100" name="q34" onRadioChange={(score) => handleSectionFourRadioChange(12, score)} />
            <Question questionText="N) Does simple single digit addition" name="q35" onRadioChange={(score) => handleSectionFourRadioChange(13, score)} />
            <Question questionText="O) Does simple double digit addition" name="q36" onRadioChange={(score) => handleSectionFourRadioChange(14, score)} />
            <Question questionText="P) Does simple single digit subtraction" name="q37" onRadioChange={(score) => handleSectionFourRadioChange(15, score)} />
            <Question questionText="Q) Does simple double digit subtraction" name="q38" onRadioChange={(score) => handleSectionFourRadioChange(16, score)} />
            <Question questionText="R) Performs calculations using calculators" name="q39" onRadioChange={(score) => handleSectionFourRadioChange(17, score)} />
            <Question questionText="S) Identifies coins of all denomination" name="q40" onRadioChange={(score) => handleSectionFourRadioChange(18, score)} />
            <Question questionText="T) Identifies notes of all denomination" name="q41" onRadioChange={(score) => handleSectionFourRadioChange(19, score)} />
            <Question questionText="U) Counts money up to 100" name="q42" onRadioChange={(score) => handleSectionFourRadioChange(20, score)} />
            <Question questionText="V) Organises money up to 100" name="q43" onRadioChange={(score) => handleSectionFourRadioChange(21, score)} />
           <Question questionText="W) Transaction money up to 100" name="q44" onRadioChange={(score) => handleSectionFourRadioChange(22, score)} />
            <Question questionText="X) Answers correctly day or night, morning or afternoon, yesterday, today or tomorrow" name="q45" onRadioChange={(score) => handleSectionFourRadioChange(23, score)} />
            <Question questionText="Y) Tells the position of the long and short hand on the clock" name="q46" onRadioChange={(score) => handleSectionFourRadioChange(24, score)} />
            <Question questionText="Z) Tells his/her date of birth" name="q47" onRadioChange={(score) => handleSectionFourRadioChange(25, score)} />
           <Question questionText="A1) Tells time to the minute on the clock" name="q48" onRadioChange={(score) => handleSectionFourRadioChange(26, score)} />
           <Question questionText="A2) Associates time to the daily routine" name="q49" onRadioChange={(score) => handleSectionFourRadioChange(27, score)} />

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
