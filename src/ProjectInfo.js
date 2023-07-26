import './ProjectInfo.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';

let gitlabIcon = (
  <svg xmlns="http://www.w3.org/2000/svg"
       width="24" height="24" viewBox="0 0 24 24">
    <path fill="white"
          d="m21.94 13.11l-1.05-3.22c0-.03-.01-.06-.02-.09l-2.11-6.48a.859.859 0 0 0-.8-.57c-.36 0-.68.25-.79.58l-2 6.17H8.84L6.83 3.33a.851.851 0 0 0-.79-.58c-.37 0-.69.25-.8.58L3.13 9.82v.01l-1.07 3.28c-.16.5.01 1.04.44 1.34l9.22 6.71c.17.12.39.12.56-.01l9.22-6.7c.43-.3.6-.84.44-1.34M8.15 10.45l2.57 7.91l-6.17-7.91m8.73 7.92l2.47-7.59l.1-.33h3.61l-5.59 7.16m4.1-13.67l1.81 5.56h-3.62m-1.3.95l-1.79 5.51L12 19.24l-2.86-8.79M6.03 3.94L7.84 9.5H4.23m-1.18 4.19c-.09-.07-.13-.19-.09-.29l.79-2.43l5.82 7.45m11.38-4.73l-6.51 4.73l.02-.03l5.79-7.42l.79 2.43c.04.1 0 .22-.09.29"/>
  </svg>
);

export default function ProjectInfo(props) {
  let desc = props.description.map((elt) => <div>{elt}</div>);
  let techStack = props.lang.map((elt => <div>{elt}</div>));

  function getIcon() {
    switch (props.link.site) {
      case 'gitlab':
        return gitlabIcon;
      case 'github':
        return (<GitHubIcon/>);
      default:
        return (<LinkIcon/>);
    }
  }

  return (
    <div className="projectInfo">
      <div className="top">
        <label className="project-name">{props.name}</label>
        <div className="project-link">
          <a href={props.link.url}>{getIcon()}</a>
        </div>
      </div>
      <div className="project-description">
        {desc}
      </div>
      <div className="project-lang">
        {techStack}
      </div>
    </div>
  );
}