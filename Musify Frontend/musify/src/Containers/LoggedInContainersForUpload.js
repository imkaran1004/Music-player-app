import { useState, useEffect, Children } from "react";
import { useLayoutEffect, useRef } from "react";
import { Icon } from "@iconify/react";
import IconText from "../components/shared/iconText";
import TextWithHover from "../components/shared/textWithHower";
import TextInput from "../components/shared/textInput";
import CloudinaryUpload from "../components/shared/CloudinaryUpload";
import { makeAuthenticatedPOSTRequest } from "../utils/serverHelpers";
import { makeAuthenticatedGETRequest } from "../utils/serverHelpers";
import { useNavigate } from "react-router-dom";
import LoggedInContainers from "../Containers/LoggedInContainers";
import { Howl, Howler } from "howler";
import { useContext } from "react";
import SongContext from "../Context/SongContext";


const LoggedInContainersForUpload = ({ children, currentActiveScreen }) => {
    const {
      currentSong,
      setCurrentSong,
      soundPlayed,
      setSoundPlayed,
      isPaused,
      setIsPaused,
    } = useContext(SongContext);
    const firstUpdate = useRef(true);
  
    useLayoutEffect(() => {
      if (firstUpdate.current) {
        firstUpdate.current = false;
        return;
      }
      if (!currentSong) {
        return;
      }
      changSong(currentSong.track);
    }, [currentSong && currentSong.track]);
    const playSound = () => {
      if (!soundPlayed) {
        return;
      }
      soundPlayed.play();
    };
    const changSong = (songSrc) => {
      if (soundPlayed) {
        soundPlayed.stop();
      }
      let sound = new Howl({
        src: [songSrc],
        html5: true,
      });
      setSoundPlayed(sound);
      sound.play();
      setIsPaused(false);
    };
  
    const pausedSound = () => {
      soundPlayed.pause();
    };
  
    const togglePlayPaused = () => {
      if (isPaused) {
        playSound(currentSong.track);
        setIsPaused(false);
      } else {
        pausedSound();
        setIsPaused(true);
      }
    };

  return (
      <div className="h-full w-full flex">
      <div className="h-full w-1/5 bg-black flex flex-col justify-between pb-10">
        <div>
          <div className="logoDiv p-6 w-full flex justify-start">
            <Icon icon="entypo:music" color="white" width={42} />
            <p class="text-4xl text-white w-full flex justify-start">Musify</p>
          </div>
          <div className="py-3">
            <IconText
              iconName={"ic:baseline-home"}
              displayText={"Home"}
              active
            />
            <IconText
              iconName={"material-symbols:search"}
              displayText={"Search"}
            />
            <IconText iconName={"icomoon-free:books"} displayText={"Library"} />
            <IconText
              iconName={"material-symbols:library-music"}
              displayText={"My Music"}
            />
          </div>
          <div className="pt-4">
            <IconText
              iconName={"ph:plus-fill"}
              displayText={"Create Playlist"}
            />
            <IconText
              iconName={"ant-design:heart-filled"}
              displayText={"Liked Songs"}
            />
          </div>
        </div>
        <div className="px-5">
          <div className="border border-gray-100 text-white w-2/5 flex px-1  py-1 rounded-full items-center justify-center hover:border-white cursor-pointer">
            <Icon icon="tabler:world" color="white" width={30} />
            <div className="ml-2 text-sm font-semibold">English</div>
          </div>
        </div>
      </div>

      <div className="h-full w-4/5 bg-app-black overflow-auto">
        <div className="navbar w-full h-1/10 bg-black bg-opacity-40 flex item-center justify-end">
          <div className="w-1/2 flex h-full">
            <div className="w-2/3 flex justify-around items-center">
              <TextWithHover displayText={"Premium"} />
              <TextWithHover displayText={"Support"} />
              <TextWithHover displayText={"Download"} />
              <div className="h-1/2 border-r border-white"></div>
            </div>
            <div className="w-1/3 flex justify-around h-full items-center">
              <TextWithHover displayText={"Upload Song"} />
              <div className="bg-white w-10 h-10 flex items-center justify-center rounded-full font-semibold cursor-pointer">
                KG
              </div>
            </div>
          </div>
        </div>

        <div className="content p-8 pt-0 overflow-auto">
          {Children}
      </div>
      </div>
      </div>
  );
};

export default LoggedInContainersForUpload;
