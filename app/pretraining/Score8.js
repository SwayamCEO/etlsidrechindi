import React, { useState, useEffect } from 'react';
import Question from './question';

const SectionEight = ({ grandTotal, grandPercentage,handleCalculateTotal }) => {


    // // Function to calculate the grand total when the button is clicked

    // const [sectionEightScores, setSectionEightScores] = useState(Array(6).fill(0)); // Scores for questions in section eight

    // // Function to handle radio button changes for section eight
    // const handleSectionEightRadioChange = (index, score) => {
    //     setSectionEightScores(prevScores => {
    //         const newScores = [...prevScores];
    //         newScores[index] = score;
    //         return newScores;
    //     });
    // };

    // // Function to calculate total and percentage for section eight
    // const calculateSectionEightTotalAndPercentage = () => {
    //     const total = sectionEightScores.reduce((acc, score) => acc + (score || 0), 0);
    //     const percentage = (total / (sectionEightScores.length * 3)) * 100; // Assuming 3 questions with a max score of 3 each
    //     return { total, percentage };
    // };

    // // Use useEffect to recalculate total and percentage whenever sectionEightScores changes
    // useEffect(() => {
    //     const { total, percentage } = calculateSectionEightTotalAndPercentage();
    //     document.getElementById('sectionEightTotal').value = total;
    //     document.getElementById('getavg8').value = percentage.toFixed(2) + '%';
      
    // }, [sectionEightScores]);
    // const handleReset = () => {
    //     // Reset scores to 0
    //     setSectionEightScores(Array(6).fill(0));
    
    //     // Uncheck all radio buttons with the classname "calc" inside the element with id "sectionEightId"
    //     const calcRadioButtons = document.querySelectorAll('#sectionEightId .calc');
    //     calcRadioButtons.forEach(button => {
    //         button.checked = false;
    //     });
    
    //     // Reset total and percentage fields to 0
    //     document.getElementById('sectionEightTotal').value = 0;
    //     document.getElementById('getavg8').value = '0%';
    // };
    

    return (
        <div id="sectionEightId" className="question">
            {/* <h3><strong><span style={{color: 'red'}}>0</span> - With Physical Assistance <span style={{color: 'blue'}}>1</span> - With Verbal Assistance <span style={{color: 'green'}}>2</span> - With Clue Assistance <span style={{color: 'darkviolet'}}>3</span> - With No Assistance</strong></h3>
            <h4>HighestScore - 18</h4>
            <p>8.Occupational Skills</p>

            {/* Questions for section eight */}
            {/* <Question questionText="A) Attends to an assigned task without disturbing others for one hour" name="q73" onRadioChange={(score) => handleSectionEightRadioChange(0, score)} />
            <Question questionText="B) Goes to an assigned area without reminder in a routine programme" name="q74" onRadioChange={(score) => handleSectionEightRadioChange(1, score)} />
            <Question questionText="C) Understands and completes a task" name="q75" onRadioChange={(score) => handleSectionEightRadioChange(2, score)} />
            <Question questionText="D) Increases speed of work when guided" name="q76" onRadioChange={(score) => handleSectionEightRadioChange(3, score)} />
            <Question questionText="E) Rises and leaves from residence to school on time" name="q77" onRadioChange={(score) => handleSectionEightRadioChange(4, score)} />
            <Question questionText="F) Follows routine" name="q78" onRadioChange={(score) => handleSectionEightRadioChange(5, score)} /> */} 
            {/* Add more questions if needed */}
            
            <br />
            <center>
                {/* <input id="sectionEightTotal" type="text" name="sectionEightTotal" defaultValue="0" /><strong> Total</strong>&nbsp;&nbsp;
                <input id="getavg8" type="text" name="getavg8" defaultValue="0" /><strong> Percentage</strong>&nbsp;&nbsp;
                <button className="reset" type="button" onClick={handleReset}>Reset</button> */}
                <div class="grandtotal" >
                 <input id="grandtotal" type="text" name="grandtotal" value={grandTotal} /><strong> Grandtotal:</strong>&nbsp;&nbsp;
                   
                   <input id="grandavg" type="text" name="grandavg" value={grandPercentage.toFixed(2) + '%'} /><strong> Percentage </strong>&nbsp;&nbsp;
                   
                <br/><br/>   <br/><br/>
                
          
                   
                   
                   
                   
                   <div class="wrap">
                        <button class="button" name="submit_btn" id="assessmentsubmit"onClick={handleCalculateTotal}>SUBMIT</button>
                        </div>  
                   <br/><br/> <br/><br/>
                   
                
  
                
                   </div>  
            </center>
            <br />
            <br />
        </div>
    );
};

export default SectionEight;
