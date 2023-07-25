import './Experience.css'
export default function Experience(props) {
  let labels = props.techs.map((tech) => <label>{tech}</label>);
  let desc = props.description.map((elt) => <div>{elt}</div>);
  return (
    <div className="experience">
      <div className="experience-duration">
        <label>{`${props.duration['start']} - ${props.duration['end']}`}</label>
      </div>
      <div className='experience-description'>
        <label className='experience-title'>{props.title}</label>
        <label className='experience-company'>{props.company}</label>
        {desc}
        <div className='experience-techs'>
          {labels}
        </div>
      </div>
    </div>
  )
};