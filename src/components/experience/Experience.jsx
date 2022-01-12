
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
                <div class="experience_single">
                    <div class="experience_name">CodeChef ITGGV Chapter</div>
                    <div class="experience_role">President</div>
                    <div class="experience_date">Oct 2021 – Current</div>
                </div>
                <div class="experience_single">
                    <div class="experience_name">Google Developer Student Clubs</div>
                    <div class="experience_role">CP and AI/ML member</div>
                    <div class="experience_date">Oct 2020 – Current</div>
                </div>
            </div>

            <a href="#intro" className="backToTop">
                <DoubleArrowIcon className="backToHome" />
            </a>
        </div>
    )
}