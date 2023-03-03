const Info = (props) => {
    return(
        <div className="informations">
            <h3 className="info-title"> {">"} {props.title}</h3>
            {props.isClickable ? <a className="info-link info" href={props.type === "resume" ? "resume link" : 'certification-link'}>{props.info} </a> : <p className="info"> {props.info}</p> }
        </div>
        
        
    )
}

export default Info