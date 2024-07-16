import '../css/portfolio.css';
import githubImg from '../assets/github-mark-white.png';

const Portfolio = () => {
    const portfolioProjects = [
        {
            githubUrl: 'https://github.com/jordanburger22/assignments',
            webpageUrl: 'https://www.project1.com',
            screenshot: 'https://images.unsplash.com/photo-1523821741446-edb2b68bb7a0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            appName: 'Project 1',
            appDescription: 'A web application for managing tasks and todos.',
            languagesAndLibraries: ['React', 'Node.js', 'Express', 'MongoDB', 'HTML', 'CSS']
        },
        {
            githubUrl: 'https://github.com/jordanburger22/assignments',
            webpageUrl: 'https://www.project2.com',
            screenshot: 'https://images.unsplash.com/photo-1523821741446-edb2b68bb7a0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            appName: 'Project 2',
            appDescription: 'An e-commerce platform for selling digital products.',
            languagesAndLibraries: ['React', 'Node.js', 'Express', 'MongoDB', 'HTML', 'CSS']
        },
        {
            githubUrl: 'https://github.com/jordanburger22/assignments',
            webpageUrl: 'https://www.project3.com',
            screenshot: 'https://images.unsplash.com/photo-1523821741446-edb2b68bb7a0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            appName: 'Project 3',
            appDescription: 'A social networking app for connecting people.',
            languagesAndLibraries: ['React', 'Node.js', 'Express', 'MongoDB', 'HTML', 'CSS']
        },
        {
            githubUrl: 'https://github.com/jordanburger22/assignments',
            webpageUrl: 'https://www.project4.com',
            screenshot: 'https://images.unsplash.com/photo-1523821741446-edb2b68bb7a0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            appName: 'Project 4',
            appDescription: 'A blog platform for sharing articles and posts.',
            languagesAndLibraries: ['React', 'Node.js', 'Express', 'MongoDB', 'HTML', 'CSS']
        }
    ];

    const portfolioElements = portfolioProjects.map((proj, i) => {
        const backgroundStyle = {
            backgroundImage: `url(${proj.screenshot})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '200px',
            margin: '20px 0',
            borderRadius: '8px'
        };

        return (
            <div className='project-container' key={i}>
                <div className='proj-header'>
                    <div className='proj-banner'>
                        <h3>{proj.appName}</h3>
                        <a className='link' href={proj.githubUrl} target="_blank" rel="noopener noreferrer">
                            <img src={githubImg} alt="GitHub Logo" className="github-logo" />
                        </a>
                    </div>
                    <p>{proj.appDescription}</p>
                </div>
                <div style={backgroundStyle}></div>
                <div className='proj-languages'>
                    {proj.languagesAndLibraries.map((str, i) => (
                        <span className='proj-languages-used' key={i}>•{str}</span>
                    ))}
                </div>
            </div>
        );
    });

    return (
        <div className="portfolio">
            {portfolioElements}
        </div>
    );
}

export default Portfolio;
