import React from 'react'
import './CSS/Modelpaper.css'
import { FaRegHeart } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

export const ModelPaper = () => {
    
    const navigate = useNavigate();

    const HandleClick = ()=>{
        navigate('Modelpaper/view')
    }

    return (
        <div className='ModelPaper-container'>
            <div className='ModelPaper-container-heading'>
                <h1>JTamil Exams 2024 Schemes</h1>
            </div>
            <div className='ModelPaper-container-sub'>
                <p>Access the Tamil and English medium schemes for Mora Exams 2024 through the links provided below for easy </p>
                <p style={{ marginTop: -18 }}>download and reference</p>
            </div>

            <div className='ModelPaper-boxes'>
                {['Tamil', 'English', 'Maths', 'Science', 'History'].map((subject, index) => (
                    <div className='ModelPaper-box' key={index}>
                        <h3>{subject} Paper</h3>
                        <div className='paper-info'>

                            <a href="https://drive.google.com/file/d/17W_NPxUibXQhKNVv1kXNwZDhSVcpb_i1/view" className='mt-2 text-decoration-none'pb-2 ><p className='paper-text'>By Tamil</p></a>

                            <a href="https://drive.google.com/file/d/1yzerIoQ42GVjlI5IE40KSjCb5qc9o0aZ/view" className='pb-2 text-decoration-none'><p className='paper-text'>By English</p></a>

                        </div>
                    </div>
                ))}
            </div>

            <hr />
            <div className='botton-model'>
                <p>Made with <FaRegHeart className='haret-icon' /><span style={{ color: "green", marginLeft: 5, fontWeight: 'bold' }}>By JTamil Exams</span></p>
            </div>

        </div>
    )
}
