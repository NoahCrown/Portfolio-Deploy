import resume from '../links/RESUME_Charles_Noah_De_Rama.pdf'
import certificates from '../links/CERTIFICATES_Charles_Noah_De_Rama.pdf'


const Info = (props) => {
    return(
        <div className="informations">
            <h3 className="info-title"> {">"} {props.title}</h3>
            {props.isClickable ? <a className="info-link info" download href={props.type === 'resume' ? resume : certificates}>{props.info} </a> : <p className="info"> {props.info}</p> }
        </div>
        
        
    )
}

export default Info