const TechnologyUsed = (props) => {
    return (
        <div className="tech-container">
            {props.tech.map((val) => (
                <div className="tech-used"><span className="tech-text">{val}</span></div>

            ))}
             
        </div>
        
    )
}

export default TechnologyUsed