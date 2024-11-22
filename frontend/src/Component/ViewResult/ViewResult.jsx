import React, { useEffect, useState } from 'react';
import './ViewResult.css';
import { useParams } from 'react-router-dom';

export const ViewResult = () => {
    const { id } = useParams(); // Get ID from URL
    const [Sresult, SetResult] = useState([]); // Result state

    const SearchResult = async () => {
        try {
            const response = await fetch(`http://localhost:3001/GetResult/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const ResData = await response.json();
            console.log('Response Data:', ResData);

            if (!ResData.success) {
                alert(ResData.message);
            } else {
                SetResult(ResData.data);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        console.log("ID from URL params:", id);
        SearchResult();
    }, [id]);

    return (
        <div className="view-result-container">
            <h1 className="text-center mb-4">Student Result</h1>

            {Sresult.length > 0 ? (
                <>
                    <div className="result-details">
                        <h2 className="result-header">Student Information</h2>
                        <p><strong>Full Name:</strong> {Sresult[0].StudentName}</p>
                        <p><strong>NIC Number:</strong> {Sresult[0].NICNumber}</p>
                        <p><strong>School Name:</strong> {Sresult[0].SchoolName}</p>
                        <p><strong>Index Number:</strong> {Sresult[0].IndexNumber}</p>
                    </div>

                    <div className="result-scores">
                        <h2 className="result-header">Subject Results</h2>
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Subject</th>
                                    <th>Grade</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Sresult.map((row, index) => (
                                    <tr key={index}>
                                        <td>{row.Subject}</td> 
                                        <td style={{'color':'green'}}>{row.Grade}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};
