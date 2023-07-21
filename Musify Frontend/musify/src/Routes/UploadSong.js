import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import IconText from "../components/shared/iconText";
import TextWithHover from "../components/shared/textWithHower";
import TextInput from "../components/shared/textInput";
import CloudinaryUpload from "../components/shared/CloudinaryUpload";
import { makeAuthenticatedPOSTRequest } from "../utils/serverHelpers";
import { makeAuthenticatedGETRequest } from "../utils/serverHelpers";
import { useNavigate } from "react-router-dom";
import LoggedInContainers from "../Containers/LoggedInContainers";
const UploadSong = () => {
  const [name, setName] = useState("");
  const [thumbNail, setThumbNail] = useState("");
  const [playlistUrl, setPlaylistUrl] = useState("");
  const [UplodedSongFileName, setUplodedSongFileName] = useState();
  const navigate = useNavigate();
  const submitSong = async () => {
    const data = { name, thumbNail, track: playlistUrl };
    const response = await makeAuthenticatedPOSTRequest("/song/create", data);
    if (response.error) {
      alert("could not create a song");
      return;
    } else {
      alert("success");
      navigate("/uploadsong");
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
          <div className="text-2xl font-semibold mb-5 text-white mt-8">
            Upload Your Music
          </div>
          <div className="w-2/3 flex space-x-3">
            <div className="w-1/2">
              <TextInput
                label={"Name"}
                labelClassName={"text-white"}
                placeholder={"Name"}
                value={name}
                setValue={setName}
              />
            </div>
            <div className="w-1/2">
              <TextInput
                label={"Thumbnail"}
                labelClassName={"text-white"}
                placeholder={"Thumbnail"}
                value={thumbNail}
                setValue={setThumbNail}
              />
            </div>
          </div>
          <div className="py-5">
            {UplodedSongFileName ? (
              <div className="bg-white rounded-full p-3 w-1/3">
                {UplodedSongFileName}
              </div>
            ) : (
              <CloudinaryUpload
                setUrl={setPlaylistUrl}
                on
                setName={setUplodedSongFileName}
              />
            )}
          </div>
          <div
            className="bg-white w-40 flex item-center justify-center p-4 rounded-full cursor-pointer font-semibold"
            onClick={submitSong}
          >
            Submit Song
          </div>
        </div>
      </div>
    </div>
  );
};

// const uploadsong = () => {
//   return <LoggedInContainers>
    
//   </LoggedInContainers>;
// };

export default UploadSong;
