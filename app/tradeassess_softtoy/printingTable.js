import React from 'react';

const PrintingTableRow = ({ outcome, crieteria, outof, totalMarks, rowspan, marksCount, marks1Count, no, setSums }) => {
    // Function to generate marks array based on marksCount
    const id = (2 * no) - 1;

    // Function to handle select change
    const handleSelectChange = (event, index) => {
        const value = parseInt(event.target.value) || 0;
        setSums(prevSums => {
            const newSums = [...prevSums];
            newSums[index] += value;
            return newSums;
        });
    };

    // Generate marks arrays based on marksCount
    const generateMarks = (count) => {
        const marks = [];
        for (let i = 0; i <= count; i++) {
            marks.push(i);
        }
        return marks;
    };

    // Generate marks arrays based on marksCount
    const marks = generateMarks(marksCount);
    const marks1 = generateMarks(marks1Count);

    return (
        <tr>
            <td rowSpan={rowspan}>{outcome}</td>
            <td>{crieteria}</td>
            <td rowSpan={rowspan} align="center">{outof}</td>
            <td align="center">{totalMarks}</td>
            <td align="center">
                <div className="select">
                    <select className="mark" id="dropdownMarkId" onChange={(e) => handleSelectChange(e, id)}>
                        {marks.map((mark, index) => (
                            <option key={index} value={mark}>{mark}</option>
                        ))}
                    </select>
                </div>
            </td>
            <td align="center">
                <div className="select">
                    <select className="mark1" id="dropdownMark1Id" onChange={(e) => handleSelectChange(e, id + 1)}>
                        {marks1.map((mark, index) => (
                            <option key={index} value={mark}>{mark}</option>
                        ))}
                    </select>
                </div>
            </td>
        </tr>
    );
}

export default PrintingTableRow;
