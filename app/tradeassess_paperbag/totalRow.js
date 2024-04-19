import React from 'react';

const TotalRow = ({ totalMarks, outOf, ti, sums,theory,practical }) => {
    const id = (2 * ti) - 1;

    // Calculate sum for the corresponding id
    const sumId = sums[id] || 0;
    const sumId1 = sums[id+1] || 0;
    const percentageId = ((sumId / theory) * 100).toFixed(2);
    const percentageId1 = ((sumId1 / practical) * 100).toFixed(2);
    

    return (
        <>
            <tr>
                <td />
                <td>कुल</td>
                <td align="center">{outOf}</td>
                <td align="center">{totalMarks}</td>
                <td align="center">
                    <input type="text" id={"sum" + id} className="forgrand" value={sumId} disabled />
                </td>
                <td align="center">
                    <input type="text" id={"sum" + (id + 1)} className="forgrand1" value={sumId1} disabled />
                </td>
            </tr>
            <tr>
                <td />
                <td>प्रतिशतता</td>
                <td align="center" />
                <td align="center" />
                <td align="center">
                    <input type="text" id={"p" + id} className="p" value={percentageId} disabled />
                </td>
                <td align="center">
                    <input type="text" id={"p" + (id + 1)} className="p1" value={percentageId1} disabled />
                </td>
                
            </tr>
        </>
    );
}

export default TotalRow;
