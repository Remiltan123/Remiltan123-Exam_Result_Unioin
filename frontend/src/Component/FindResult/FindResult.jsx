import React, { useState } from 'react';
import './FindResult.css';
import { FaSearch } from "react-icons/fa";
import { useNavigate } from 'react-router-dom'; 
import result from '../../Assets/result.png';
import { Link } from 'react-router-dom';



export const FindResult = () => {

    const [Sid, SetId] = useState('');
    const navigate = useNavigate(); 

     const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            navigate(`/ResultPage/view-Result/${Sid}`)
        }
    };

    return (
        <div className="card">
            <div className="card-body">
                <h1 className='col-h'>Find Your Results</h1>
                <p className='col-p'>Enter your Index Number to find your results</p>

                <input
                    type="text"
                    placeholder='Index No'
                    value={Sid}
                    onChange={(e) => SetId(e.target.value)}
                    onKeyDown={handleKeyDown}
                />

                <div className='Search-icon'>
                    <button
                        type='button'
                        className="btn btn-primary"
                        onClick={()=>{navigate(`/ResultPage/view-Result/${Sid}`)}} 
                    >
                        <FaSearch /> <span>Search</span>
                    </button>

                    <Link to="/ResultPage/forgot-index" className='Link-tag'>Forgot index number</Link>
                </div>
            </div>

            <img src={result} className="card-img-top" alt="" />
        </div>
    );
}
