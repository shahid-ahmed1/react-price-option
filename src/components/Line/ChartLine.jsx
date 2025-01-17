import React from 'react';
import PropTypes from 'prop-types';
import { LineChart, Line , XAxis , YAxis} from 'recharts';
const ChartLine = props => {

    const students = [
        { id: 1, name: "Arif", math: 85, english: 78, science: 92 },
        { id: 2, name: "Bithi", math: 92, english: 81, science: 88 },
        { id: 3, name: "Chandan", math: 78, english: 84, science: 80 },
        { id: 4, name: "Dip", math: 88, english: 77, science: 90 },
        { id: 5, name: "Esha", math: 95, english: 90, science: 93 },
        { id: 6, name: "Farhan", math: 67, english: 72, science: 68 },
        { id: 7, name: "Gita", math: 73, english: 70, science: 75 },
        { id: 8, name: "Hridoy", math: 80, english: 85, science: 79 },
        { id: 9, name: "Iqra", math: 90, english: 87, science: 94 },
        { id: 10, name: "Jahid", math: 76, english: 70, science: 82 }
      ];
      
    return (
        <div>
            <LineChart width={800} height={600} data={students} >
                <XAxis></XAxis>
                <YAxis></YAxis>
                <Line dataKey='math' stroke='red '></Line>
                <Line dataKey='english' stroke='green'></Line>
                <Line dataKey='science' stroke='yellow'></Line>
                
            </LineChart>
        </div>
    );
};

ChartLine.propTypes = {
    
};

export default ChartLine;