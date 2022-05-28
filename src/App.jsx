import styles from "./App.module.css";

// Para el widget de chat
import { Widget, addResponseMessage } from "react-chat-widget";
import botIcon from "./imgs/movie-bot.png";
import userAvatar from "./imgs/userAvatar.jpg";
import './components/Bot.css'
import {handleNewUserMessage} from "./components/Bot"

// Para realizar enrutamientos
import { Link, Routes, Route } from "react-router-dom";

import { MovieDetails } from "./pages/MovieDetails";
import { LandingPage } from "./pages/LandingPage";
import { useEffect } from "react";

export function App() {

  useEffect(() => {
    addResponseMessage('Welcome 😁🖖! write me the **movie** 🎥 and I will show you relevant information ( max 3 movies ).');
  }, []);

  return (
    <div>
      <header>
        <Link to="/react-movie-flix/"><h1 className={styles.title}>MovieFlix</h1></Link>
      </header>

      <main>
        <Routes>
          <Route path="/react-movie-flix/" element={<LandingPage/>} />
          <Route path="/react-movie-flix/movies/:movieId" element={<MovieDetails/>} />
        </Routes>

        {/* Chat Bot */}
        <Widget
          title = "MovieBot 🍿"
          subtitle = "Your best movie virtual assistant"
          senderPlaceHolder = "Just write the movie..."
          profileAvatar = {botIcon}
          showCloseButton = {true}
          fullScreenMode = {false}
          emojis = {false}
          profileClientAvatar = {userAvatar}
          handleNewUserMessage = {handleNewUserMessage}
        />
      </main>

    </div>
  );
}
