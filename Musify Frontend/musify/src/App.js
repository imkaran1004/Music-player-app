import "./output.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginComponent from "./Routes/Login";
import SignupComponent from "./Routes/Signup";
import HomeComponent from "./Routes/Home";
import LoggedInHomeComponent from "./Routes/loggedInHome";
import MyMusic from "./Routes/MyMusic";
import UploadSong from "./Routes/UploadSong";
import SearchPage from "./Routes/SearchPage";
import SearchPageByArtist from "./Routes/SearchPaheByArtist";
import { useCookies } from "react-cookie";
import SongContext from "./Context/SongContext";
import Library from "./Routes/Library";
import SinglePlaylistView from "./Routes/SinglePlaylistView";
function App() {
  const [currentSong, setCurrentSong] = useState(null);
  const [cookie, setCookie] = useCookies(["token"]);
  const [soundPlayed, setSoundPlayed] = useState(null);
  const [isPaused, setIsPaused] = useState(true);
  return (
    <div className="w-screen h-screen font-Poppins">
      <BrowserRouter>
        {cookie.token ? (
          <SongContext.Provider value={{ currentSong, setCurrentSong, soundPlayed, setSoundPlayed, isPaused, setIsPaused }}>
            <Routes>
              <Route path="/" element={<div>Hello</div>} />
              <Route path="/home" element={<LoggedInHomeComponent />} />
              <Route path="/UploadSong" element={<UploadSong />} />
              <Route path="/myMusic" element={<MyMusic />} />
              <Route path="/Search" element={<SearchPage/>} />
              <Route path="/Search" element={<SearchPageByArtist/>} />
              <Route path="/Library" element={<Library/>} />
              <Route path="/playlist/:playlistId" element={<SinglePlaylistView/>} />
              <Route path="*" element={<Navigate to="/home" />} />
            </Routes>
          </SongContext.Provider>
        ) : (
          <Routes>
            <Route path="/home" element={<HomeComponent />} />
            <Route path="login" element={<LoginComponent />} />
            <Route path="signup" element={<SignupComponent />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
