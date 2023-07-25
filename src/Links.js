import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import'./Links.css'

export default function Links() {
  return (
    <div className="Links">
      <a href='https://github.com/sanassi'>
        <GitHubIcon/>
      </a>
      <a href='https://www.linkedin.com/in/sanassi-ciss%C3%A9-23854b19a/'>
        <LinkedInIcon/>
      </a>
    </div>
  );
};