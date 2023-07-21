import { useState, useEffect } from "react";
import { makeAuthenticatedGETRequest } from "../utils/serverHelpers";
// import LoggedInContainers from "../Containers/LoggedInContainers";
const AddToPlaylistModal = ({ closeModal,addSongToPlaylist }) => {
  const [myPlaylists, setMyPlaylists] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const response = await makeAuthenticatedGETRequest("/playlist/get/me");
      setMyPlaylists(response.data);
      console.log(response.data);
    };
    getData();
  }, []);
  return (
    <div
      className="absolute bg-black w-screen h-screen bg-opacity-50 text-white flex justify-center items-center"
      onClick={closeModal}
    >
      <div
        className="bg-gray-900 w-1/3 text-black rounded-md p-4"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="mb-3 font-bold text-lg flex items-center justify-center text-white">
          Select Playlist
        </div>
        <div className="space-y-4 flex flex-col justify-center items-center">
          {myPlaylists.map((item) => {
            return <PlaylistListComponent info={item} addSongToPlaylist={addSongToPlaylist}/>;
          })}
        </div>
      </div>
    </div>
  );
};

const PlaylistListComponent = ({ info,addSongToPlaylist }) => {
  return (
    <div className="bg-gray-900 flex w-full items-center space-x-4 hover:bg-gray-100 hover:bg-opacity-20 cursor-pointer p-3" onClick={()=>{
        addSongToPlaylist(info._id);
    }}>
      <div>
        <img
          src={info.thumbNail}
          className="w-10 h-10 rounded"
          alt="thubNail"
        />
      </div>
      <div className="text-white font-semibold ftext-sm">{info.name}</div>
    </div>
  );
};

export default AddToPlaylistModal;
