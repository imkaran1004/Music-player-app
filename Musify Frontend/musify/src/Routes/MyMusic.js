import { useState, useEffect } from "react";
import { Howl, Howler } from "howler";
import { Icon } from "@iconify/react";
import IconText from "../components/shared/iconText";
import TextWithHover from "../components/shared/textWithHower";
import TextInput from "../components/shared/textInput";
import SingleSongCard from "../components/shared/SingleSongCard";
import { makeAuthenticatedGETRequest } from "../utils/serverHelpers";
import LoggedInContainers from "../Containers/LoggedInContainers";

const MyMusic = () => {
  const [songData, setSongData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const response = await makeAuthenticatedGETRequest("/song/get/mysongs");
      setSongData(response.data);
    };
    getData();
  }, []);
  return (
    <LoggedInContainers currentActiveScreen={"myMusic"}>
      <div className="text-white text-xl font-semibold pb-4 pl-2 pt-8">
        My songs
      </div>
      <div className="space-y-0 overflow:auto">
        {songData.map((item) => {
          return <SingleSongCard info={item} playSound={() => {}} />;
        })}
      </div>
    </LoggedInContainers>
  );
};

export default MyMusic;
