import './skill.scss';
import Fade from 'react-reveal/Fade';

export default function Skill() {
    return (
        <div className="skill" id="skill">
            <Fade left>
                <h1>Skills</h1>
            </Fade>
            <div className="section">
                <div className="languages">
                    <Fade left delay={1000}>
                        <h2>Languages</h2>
                    </Fade>
                    <div className="all_languages">
                        <ul>
                            <li>C++</li>
                            <li>HTML/CSS</li>
                            <li>React JS</li>
                            <li>SQL</li>
                            <li>Python</li>
                        </ul>
                    </div>
                </div>
                <div className="tools">
                    <Fade left delay={1000}>
                        <h2>Developer Tools</h2>
                    </Fade>
                    <div className="all_languages">
                        <ul>
                            <li>VS Code</li>
                            <li>Sublime Text</li>
                            <li>Google Cloud Platform</li>
                            <li>Android Studio</li>
                            <li>Github</li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}
