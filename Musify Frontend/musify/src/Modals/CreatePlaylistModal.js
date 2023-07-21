import { useState } from "react";
import TextInput from "../components/shared/textInput";
import { makeAuthenticatedPOSTRequest } from "../utils/serverHelpers";
import LoggedInContainers from "../Containers/LoggedInContainers";
const CreatePlaylistModal = ({ closeModal }) => {
  const [plyalistName, setPlaylistName] = useState("");
  const [PlaylistThumbnail, setPlaylistThumbnail] = useState("");
  const createPlaylist = async () => {
    const response = await makeAuthenticatedPOSTRequest("/playlist/create", {
      name: plyalistName,
      thumbNail: PlaylistThumbnail,
      songs: [],
    });
    if (response._id) {
      closeModal();
    }
  };
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
          Create Playlist
        </div>
        <div className="space-y-4 flex flex-col justify-center items-center">
          <TextInput
            label={"Name"}
            labelClassName={"text-white"}
            placeholder={"Playlist Name"}
            value={plyalistName}
            setValue={setPlaylistName}
          />
          <TextInput
            label={"Thumbnail"}
            labelClassName={"text-white"}
            placeholder={"Thumbnail"}
            value={PlaylistThumbnail}
            setValue={setPlaylistThumbnail}
          />
          <div
            className="bg-white w-1/3 rounded flex font-semibold justify-center items-center py-3 mt-4 cursor-pointer"
            onClick={createPlaylist}
          >
            Create
          </div>
        </div>
      </div>
    </div>
  );
};
export default CreatePlaylistModal;
