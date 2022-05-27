import styles from "./App.module.css";

// Para el widget de chat
import { Widget } from "react-chat-widget";
import './components/Bot.css'
import {handleNewUserMessage} from "./components/Bot"

// Para realizar enrutamientos
import { Link, Routes, Route } from "react-router-dom";

import { MovieDetails } from "./pages/MovieDetails";
import { LandingPage } from "./pages/LandingPage";

export function App() {

  return (
    <div>
      <header>
        <Link to="/"><h1 className={styles.title}>Nexflix</h1></Link>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/movies/:movieId" element={<MovieDetails/>} />
        </Routes>

        <Widget
          title="Movie bot"
          subtitle="El bot de las pelis"
          senderPlaceHolder="Escribe la peli..."
          handleNewUserMessage={handleNewUserMessage}
        />
      </main>

    </div>
  );
}
