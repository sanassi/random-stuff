import './App.css';
import './ProjectInfo'
import ProjectInfo from "./ProjectInfo";
import Experience from "./Experience";

function App() {
  return (
    <div className="App">
      <div className="experiences">
        <Experience duration={{'start' : 'Sept. 2023', 'end' : 'Jan. 2024'}}
                    title='Backend Developer Intern'
                    description='Teaching computer science and programming to 1st year students.
                    Writing, testing and deploying weekly programming practicals for students in C'
                    company='Rakuten France'
                    techs={['Java']}
        />
        <Experience duration={{'start' : 'Sept. 2022', 'end' : 'July 2023'}}
                    title='Teaching Assistant'
                    description='Did stuff in C#'
                    company='Epita Paris'
                    techs={['C#']}
        />
      </div>

      <div className="projects">
        <ProjectInfo name="Rash"
                     lang="C"
                     description={["Posix Shell", "Written in C"]}
                     link="https://github.com/sanassi/rash"
        />
        <ProjectInfo name="Red Panda IDE"
                     lang="Java"
                     description={["IDE for beginners", "Basic Features"]}
                     link="https://github.com/sanassi/red-panda"
        />
        <ProjectInfo name="PixElArt"
                     lang="Javascript"
                     description={["Pixel Art Editor", "poop"]}
                     link="https://github.com/sanassi/pixElArt"
        />
      </div>
    </div>
  );
}

export default App;