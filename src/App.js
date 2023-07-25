import './App.css';
import './ProjectInfo'
import Me from "./Me";
import SideNavBar from "./SideNavBar";
import Links from "./Links";
import SpotifyEmbed from "./SpotifyEmbed";
import Projects from "./Projects";
import Experiences from "./Experiences";

function App() {
  return (
    <div className="App">
      <div className="side-bar">
        <Me />
        <SideNavBar/>
        <Links />
      </div>
      <div className="main">
        <Experiences/>
        <Projects/>
        <SpotifyEmbed src="https://open.spotify.com/embed/track/7ihVeKd4RjiZ3y12nDhPZO?utm_source=generator&theme=0"/>
      </div>

      <footer>Built by Sanassi Mory Cissé</footer>
    </div>
  );
}

export default App;