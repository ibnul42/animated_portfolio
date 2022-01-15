
import { Fade } from 'react-reveal';
import './experience.scss';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

export default function Experience() {

    return (
        <div className="experience" id="experience">
            <Fade left>
                <h1>Experience</h1>
            </Fade>

            <div className="experience_section">
                <div className="experience_single">
                    <div className="experience_name">CodeChef ITGGV Chapter</div>
                    <div className="experience_role">President</div>
                    <ul className='list_styles'>
                        <li>Details 01</li>
                        <li>Details 02</li>
                        <li>Details 03</li>
                    </ul>
                    <div className="experience_date">Oct 2021 – Current </div>                    
                </div>
                <div className="experience_single">
                    <div className="experience_name">Google Developer Student Clubs</div>
                    <div className="experience_role">CP and AI/ML member</div>
                    <ul className='list_styles'>
                        <li>Details 05</li>
                        <li>Details 06</li>
                        <li>Details 07</li>
                    </ul>
                    <div className="experience_date">Oct 2020 – Current</div>
                </div>
            </div>


            <a href="#intro" className="backToTop">
                <DoubleArrowIcon className="backToHome" />
            </a>
        </div>
    )
}