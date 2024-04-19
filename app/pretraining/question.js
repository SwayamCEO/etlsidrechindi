import React from 'react';

export default function Question({ questionText, name, onRadioChange }) {
    const options = [
        { iconClass: "icon icon-with-assist" },
        { iconClass: "icon-with-verbel-assist" },
        { iconClass: "icon-with-clue-assist" },
        { iconClass: "icon-with-no-assist" }
    ];

    // Function to handle radio button changes
    const handleRadioChange = (event) => {
        const score = parseInt(event.target.value);
        onRadioChange(score);
        // console.log(score)
    };

    return (
        <div>
            <h2>{questionText}</h2>
            <div className="radio">
                {options.map((option, index) => (
                    <div key={index}>
                        <input type="radio" className="calc" name={name} id={`${name}${index}`} value={index} onChange={handleRadioChange} />
                        <label htmlFor={`${name}${index}`}>
                            <i id="icon" className={option.iconClass}></i>
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
}
