// About.js
import React, {useState, useLayoutEffect} from 'react';
import '../assests/styling/About.css'


const About = () => {

  const [isMobile, setIsMobile] = useState(
    window.matchMedia('(max-width: 768px)').matches
  );

  useLayoutEffect(() => {
    const handleResize = (event) => {
      setIsMobile(event.matches);
    };

    // Attach event listener for changes in the media query
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    mediaQuery.addListener(handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      mediaQuery.removeListener(handleResize);
    };
  }, []);

  
   const handleDownloadResume = async () => {
  try {
    // Fetch the latest commit hash
    const response = await fetch(
      'https://api.github.com/repos/kartik2318/MyResume/commits/main'
    );
    const data = await response.json();
    const commitHash = data.sha;

    // Dynamically update the resume URL with the commit hash as a query parameter
    const updatedResumeUrl = `https://raw.githubusercontent.com/kartik2318/MyResume/${commitHash}/MyResume.pdf`;

    // Create an anchor element
    const anchor = document.createElement('a');

    // Set the href and download attributes
    anchor.href = updatedResumeUrl;
    anchor.download = 'MyResume.pdf'; // Specify the desired file name

    // Append the anchor to the document
    document.body.appendChild(anchor);

    // Trigger a click on the anchor element
    anchor.click();

    // Remove the anchor from the document
    document.body.removeChild(anchor);
  } catch (error) {
    console.error('Error fetching commit hash:', error);
  }
};


  return (
    <section id="about-section" className="about-container">
      <div className="content">
        <div className="profile-image">
            {isMobile ? null : (
            <button className="download-button" onClick={handleDownloadResume}>
              <span> Resume </span>
            </button>
          )}
        </div>
        <div className="text-content">
          <h2 className="section-title">About Me</h2>
          <p className="fade-in">
            Hi, I'm Kartik, a passionate Web Developer with a strong
            background in creating innovative and creative web applications.
            With a keen eye for design and a commitment to creating seamless and
            interactive user experiences, I am dedicated to delivering
            high-quality software solutions.
          </p>
          <p className="fade-in">
            My skills include front-end development using HTML, CSS, and
            JavaScript, as well as proficiency in popular libraries and
            frameworks such as React. Looking forward to learn back-end
            development with Node.js and Express. My goal is turning complex
            problems into simple, beautiful, and intuitive designs.
          </p>
          <p className='fade-in'>
            <b> #Open for Internships &#x2705;</b>
          </p>
          {isMobile ? <button className="download-button-small" onClick={handleDownloadResume}>
              <span> Resume </span>
            </button> : (
            null
          )}
        </div>
      </div>
    </section>
  );
};

export default About;