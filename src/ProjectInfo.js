import './ProjectInfo.css'
import GitHubIcon from '@mui/icons-material/GitHub';

export default function ProjectInfo(props) {
  let desc = props.description.map((elt) => <div>{elt}</div>);
  return (
    <div className="projectInfo">
      <div className="top">
        <label className="project-name">{props.name}</label>
        <div className="project-link">
          <a href={props.link}>
            <GitHubIcon/>
          </a>
        </div>
      </div>
      <div className="project-description">
        {desc}
      </div>
      <div className="project-lang">
        <label>{props.lang}</label>
      </div>
    </div>
  );
}