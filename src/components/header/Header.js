import './Header.css';
import SkillCard from '../skill-card/SkillCard';

const Header = () => {
    const skills = [
        {
            title: 'HTML',
            strength: 'Strength: 90%',
            description: 'HTML is the standard markup language for Web pages',
        },
        {
            title: 'CSS',
            strength: 'Strength: 80%',
            description: 'CSS is the language we use to style an HTML document.',
        },
        {
            title: 'Javascript',
            strength: 'Strength: 65%',
            description: 'JavaScript is the programming language of the Web.',
        },
    ];

    return (
        <header>
            <p className="greeting">Hi, my name is</p>
            <h2 className="my-name">Brittany Chiang.</h2>
            <h2 className="what-i-do" >I build things for the web.</h2>
            <p className="about-me" >I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at <span className='green-text' >Upstatement</span>.</p>
            <div className="skills">
                {skills.map((skill) => (
                    <SkillCard key={skill.title} data={skill} />
                ))}
            </div>
        </header>
    );
}

export default Header;