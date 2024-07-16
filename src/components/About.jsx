import headerImg from '../assets/portfolio-banner.jpg';
import '../css/about.css';

const About = () => {
    const techStack = [
        "JavaScript",
        "ES6",
        "React",
        "HTML",
        "CSS",
        "Node.js",
        "Express",
        "AJAX/HTTP",
        "Mongoose",
        "MongoDB",
        "JSON",
        "Git"
    ];

    const techElements = techStack.map((s, i) => <span className='skill' key={i}>• {s}</span>)

    return (
        <div className="about-container">
            <div className='header'>
                <img src={headerImg} className='header-img' alt='Header' />
                <p>I am a dedicated web developer who thrives on problem-solving and continuous learning. With a passion for backend development using Mongoose and Express, I have built and taught full stack MERN modules, sharing my knowledge to empower new coders. My goal is to create impactful technology that improves people's lives. As an instructor, I stay updated with the latest trends and pride myself on explaining complex concepts in an accessible way. I value communication and problem-solving, always striving to grow and excel in my field.</p>
            </div>
            <div className='skill-stack'>
                {techElements}
            </div>
            <div className='experience'>
                <h3>Professional Experience</h3>
                <ul>
                    <li>
                        <h4>Full Stack MERN Instructor at V School</h4>
                        <ul>
                            <li>Built and taught modules on full stack development, including a module on user authentication using bcrypt, express-jwt, and jsonwebtoken.</li>
                            <li>Worked with students in 1:1 situations, taught weekly workshops to an average group of ten students, and helped around 70 students complete the program.</li>
                            <li>Focused on hands-on applications of concepts and breaking down complex ideas for students.</li>
                            <li>Received positive feedback from students for approachability and dedication to their success.</li>
                        </ul>
                    </li>
                    <li>
                        <h4>Restaurant Manager at Maddox Ranch House</h4>
                        <ul>
                            <li>Managed day-to-day operations, kept the kitchen and serving area clean, and handled prep work for shifts.</li>
                            <li>Managed roughly 20 staff members per shift, with about 50 staff members total.</li>
                            <li>Implemented cooking standards, prep work procedures, and closing procedures, improving overall efficiency.</li>
                            <li>Developed skills in managing high-stress environments and leading people, which I find highly applicable to web development.</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default About;
