import Info from "./Info"

const About = () => {

    const informations = [

        {
            title:'Noah.currentLocation',
            info: '"San Pablo City, Laguna PH"',
            isClickable: false,

            
        },
        {
            title:'Noah.resume',
            info: '“charlesnoah.pdf”',
            isClickable: true,
            type: 'resume',
            link:'../links/RESUME_Charles_Noah_De_Rama.pdf'
        },
         {
            title: "Noah.interest",
            info: '[ “self-help books”, “gym”, “programming”, “music” ]',
            isClickable: false,
            type: 'list'

        },
        {
            title: 'Noah.education',
            info:'“BS Computer Engineering - Batangas State University”',
            isClickable: false,

        },
         {
            title:'Noah.skills',
            info:'[“HTML”, “CSS”, “JavaScript”, “React, “MongoDB”, “Node”, “Java”, “Python”, “Git”, “Express”]',
            isClickable: false,

        },
        {
            title:'Noah.certifications',
            info:'“certifications.pdf”',
            isClickable: true,
            type:'certifications',
            link: '../links/CERTIFICATES_Charles_Noah_De_Rama.pdf'
        }

    ]

    return (
        
        
        <div id="about-me" className="about-container">
            <div className="statement-nav">
                <div className=" circle red-button"></div>
                <div className=" circle yellow-button"></div>
                <div className=" circle green-button"></div>

            </div>
            <div className="statement-container">
            <div className="statements">
            <div className="informations">
                <h3 className="info-title"> {">"} Noah.contactInfo</h3>
                <p className="info">
                [<a target="_blank" href="noahimperium@gmail.com" className="info-link">"noahimperium@gmail.com", </a>
                <a target="_blank" href="https://www.linkedin.com/in/noah-de-rama-811baa236/" className="info-link">"LinkedIn", </a>
                <a target="_blank" href="https://github.com/NoahCrown" className="info-link">"GitHub"</a>]</p>
            </div>
            {informations.map((item) => {
                return (
                    <Info 
                    title={item.title} 
                    info={item.info} 
                    isClickable={item.isClickable}
                    type={item.type}
                    link={item.link}
                     />
                )
            })}
            <div className="blinking-arrow-container">
                <h3 className="blinking-arrow"> {">"} </h3>

            </div>
            </div>
            </div>
            
            



        </div>
    )
}

export default About