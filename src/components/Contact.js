const Contact = () => {
    return(
        <div id="contact">
        <h1 className="contact-title">Contact Me!</h1>
        <hr></hr>
        <div className="contact-info-container">
            <a target="_blank" className="e-mail contact-links"><i class=" contact-icons fa-solid fa-envelope fa-3x"></i></a>
            <a target="_blank" href="https://www.linkedin.com/in/noah-de-rama-811baa236/" className=" linked-in contact-links"><i class=" contact-icons fa-brands fa-linkedin fa-3x"></i></a>
            <a target="_blank" href="https://github.com/NoahCrown" className="git-hub contact-links"><i class=" contact-icons fa-brands fa-square-github fa-3x"></i></a>

        </div>
    </div>
    )
   
}

export default Contact