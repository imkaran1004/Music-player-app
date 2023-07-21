import { useLayoutEffect, useState, useRef } from "react";
import { useContext } from "react";
import { Icon } from "@iconify/react";
import { Howl } from "howler";
import IconText from "../components/shared/iconText";
import TextWithHover from "../components/shared/textWithHower";
import SongContext from "../Context/SongContext";
import CreatePlaylistModal from "../Modals/CreatePlaylistModal";
import AddToPlaylistModal from "../Modals/AddToPlaylistModal";
import { makeAuthenticatedPOSTRequest } from "../utils/serverHelpers";
import PremiumModal from "../Modals/PremiumModal";
import SupportModal from "../Modals/SupportModal";
const LoggedInContainers = ({ children, currentActiveScreen }) => {
  const [createPlaylistModalOpen, setCreatePlaylistModalOpen] = useState(false);
  const [premiumModalOpen, setPremiumModalOpen] = useState(false);
  const [supportModalOpen, setSupportModalOpen] = useState(false);
  const [addToPlaylistModalOpen, setAddToPlaylistModalOpen] = useState(false);
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

  const addSongToPlaylist = async (playlistId) => {
    const songId = currentSong._id;
    const payload = { playlistId, songId };
    console.log(playlistId);
    console.log(songId);
    const response = await makeAuthenticatedPOSTRequest(
      "/playlist/add/song",
      payload
    );
    if (response._id) {
      setAddToPlaylistModalOpen(false);
    }
  };

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
    <div className="h-full w-full bg-black">
      {createPlaylistModalOpen && (
        <CreatePlaylistModal
          closeModal={() => {
            setCreatePlaylistModalOpen(false);
          }}
        />
      )}
      {addToPlaylistModalOpen && (
        <AddToPlaylistModal
          closeModal={() => {
            setAddToPlaylistModalOpen(false);
          }}
          addSongToPlaylist={addSongToPlaylist}
        />
      )}
      {premiumModalOpen && (
        <PremiumModal
          closeModal={() => {
            setPremiumModalOpen(false);
          }}
        />
      )}
      {supportModalOpen && (
        <SupportModal
          closeModal={() => {
            setSupportModalOpen(false);
          }}
        />
      )}
      <div className={`${currentSong ? "h-9/10" : "h-full"} w-full flex`}>
        <div className="h-full w-1/5 bg-black flex flex-col justify-between pb-10">
          <div>
            <div className="logoDiv p-6 w-full flex justify-start">
              <Icon icon="entypo:music" color="white" width={42} />
              <p class="text-4xl text-white w-full flex justify-start">
                Musify
              </p>
            </div>
            <div className="py-3">
              <IconText
                iconName={"ic:baseline-home"}
                displayText={"Home"}
                targetLink={"/home"}
                active={currentActiveScreen === "home"}
              />
              <IconText
                iconName={"material-symbols:search"}
                displayText={"Search"}
                targetLink="/search"
                active={currentActiveScreen === "search"}
              />
              <IconText
                iconName={"icomoon-free:books"}
                displayText={"Library"}
                targetLink="/Library"
                active={currentActiveScreen === "library"}
              />
              <IconText
                iconName={"material-symbols:library-music"}
                displayText={"My Music"}
                targetLink="/myMusic"
                active={currentActiveScreen === "myMusic"}
              />
            </div>
            <div className="pt-4">
              <IconText
                iconName={"ph:plus-fill"}
                displayText={"Create Playlist"}
                onClick={() => {
                  setCreatePlaylistModalOpen(true);
                }}
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
                <TextWithHover
                  displayText={"Premium"}
                  onClick={() => {
                    setPremiumModalOpen(true);
                  }}
                />
                <TextWithHover
                  displayText={"Support"}
                  onClick={() => {
                    setSupportModalOpen(true);
                  }}
                />
                <TextWithHover
                  displayText={"Download"}
                  onClick={() => {
                    // setPremiumModalOpen(true);
                  }}
                />
                <div className="h-1/2 border-r border-white"></div>
              </div>
              <div className="w-1/3 flex justify-around h-full items-center">
                <TextWithHover displayText={"Upload Song"}/>
                <div className="bg-white text-black w-10 h-10 flex items-center justify-center rounded-full font-semibold cursor-pointer">
                  KG
                </div>
              </div>
            </div>
          </div>
          <div className="content p-8 pt-0 overflow-auto">{children}</div>
        </div>
      </div>
      {currentSong && (
        <div className="h-1/10 w-full bg-app-black bg-opacity-40 text-white flex items-center px-4">
          <div className="w-1/4 flex items-center">
            <img
              src={currentSong.thumbNail}
              alt="currentSongThumbnail"
              className="h-14 w-14 rounded"
            />
            <div className="pl-4">
              <div className="items-left justify-left cursor-pointer hover:underline">
                {currentSong.name}
              </div>
              <div className="text-xs text-gray-400 cursor-pointer hover:underline">
                {currentSong.artist.firstName +
                  " " +
                  currentSong.artist.lastName}
              </div>
            </div>
          </div>
          <div className="w-1/2 flex justify-center h-full flex-col items-center">
            <div className="flex w-1/3 justify-between items-center">
              <Icon
                icon="bx:shuffle"
                fontSize={30}
                className="cursor-pointer text-gray-500 hover:text-white"
              />
              <Icon
                icon="ic:sharp-skip-previous"
                fontSize={30}
                className="cursor-pointer text-gray-500 hover:text-white"
              />
              <Icon
                icon={
                  isPaused
                    ? "icon-park-solid:play"
                    : "icon-park-solid:pause-one"
                }
                fontSize={50}
                className="cursor-pointer text-gray-500 hover:text-white"
                onClick={togglePlayPaused}
              />
              <Icon
                icon="ic:sharp-skip-next"
                fontSize={30}
                className="cursor-pointer text-gray-500 hover:text-white"
              />
              <Icon
                icon="carbon:repeat"
                fontSize={30}
                className="cursor-pointer text-gray-500 hover:text-white"
              />
            </div>
            {/* <div>progress bar here</div> */}
          </div>

          <div className="w-1/4 flex justify-end pr-4 space-x-4 items-center">
            <Icon
              icon="mdi:heart-outline"
              fontSize={25}
              className="cursor-pointer text-gray-500 hover:text-white"
            />
            <Icon
              icon="ic:outline-playlist-add"
              fontSize={30}
              className="cursor-pointer text-gray-500 hover:text-white"
              onClick={() => {
                setAddToPlaylistModalOpen(true);
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default LoggedInContainers;