import './App.css';
import './ProjectInfo'
import ProjectInfo from "./ProjectInfo";
import Experience from "./Experience";
import Me from "./Me";
import SideNavBar from "./SideNavBar";
import Links from "./Links";

function App() {
  return (
    <div className="App">
      <div className="side-bar">
        <Me />
        <SideNavBar/>
        <Links />
      </div>
      <div className="main">
        <label className='experience-label'>Experience</label>
        <div id='experiences' className="experiences">
          <Experience duration={{'start' : 'Jan. 2024', 'end' : 'July 2024'}}
                      title='Teaching Assistant'
                      description={['']}
                      company='Epita'
                      techs={['Java']}/>
          <Experience duration={{'start' : 'Sept. 2023', 'end' : 'Jan. 2024'}}
                      title='Backend Developer Intern'
                      description={['']}
                      company='Rakuten France'
                      techs={['Java']}/>
          <Experience duration={{'start' : 'Sept. 2022', 'end' : 'July 2023'}}
                      title='Teaching Assistant'
                      description={['Teaching computer science and programming to 1st year students.',
                      'Writing, testing and deploying weekly programming practicals for students in C#']}
                      company='Epita Paris'
                      techs={['C#']}/>
        </div>

        <label className='project-label'>Projects</label>
        <div id='projects' className="projects">
          <ProjectInfo name="Tiger Compiler Backend"
                       lang="C++"
                       description={['Compiler for the Tiger Language.', '14 weeks project.']}
                       link="https://assignments.lrde.epita.fr/tools/modern_compiler_implementation/first_editions.html" />
          <ProjectInfo name="Rash"
                       lang="C"
                       description={['Shell Command Line Interpreter.', 'Written in C']}
                       link="https://github.com/sanassi/rash" />
          <ProjectInfo name="Red Panda IDE"
                       lang="Java"
                       description={['IDE for beginners',
                         'Autocomplete', 'Syntax Highlighting']}
                       link="https://github.com/sanassi/red-panda" />
          <ProjectInfo name="PixElArt"
                       lang="Javascript"
                       description={['Pixel Art Editor', 'Built with Vanilla Javascript']}
                       link="https://github.com/sanassi/pixElArt" />
        </div>
      </div>

      <footer>Built by Sanassi Mory Cissé</footer>
    </div>
  );
}

export default App;