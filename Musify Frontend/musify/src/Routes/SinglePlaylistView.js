// import { resolvePath, useParams } from "react-router-dom";
// import LoggedInContainers from "../Containers/LoggedInContainers";
// import { useEffect, useState } from "react";
// import { makeAuthenticatedGETRequest } from "../utils/serverHelpers";
// import SingleSongCard from "../components/shared/SingleSongCard";

// const SinglePlaylistView = () => {
//   const [playlistDetails, setPlaylistDetails] = useState({});
//   const { playlistId } = useParams();
//   useEffect(() => {
//     const getData = async () => {
//       const response = await makeAuthenticatedGETRequest(
//         "/playlist/get/playlist/" + playlistId
//       );
//       console.log(response);
//       setPlaylistDetails(response);
//     };
//     getData();
//   }, []);
//   return (
//     <LoggedInContainers currentActiveScreen={"library"}>
//       {playlistDetails._id && (
//         <div>
//           <div className="text-white text-xl pt-8 font-semibold">
//             {playlistDetails.name}
//           </div>
//           <div className="pt-10 space-y-3">
//             {playlistDetails.songs.map((item) => {
//               return (
//                 <SingleSongCard
//                   info={item}
//                   key={JSON.stringify(item)}
//                   playSound={() => {}}
//                 />
//               );
//             })}
//           </div>
//         </div>
//       )}
//     </LoggedInContainers>
//   );
// };

// export default SinglePlaylistView;


import { resolvePath, useParams } from "react-router-dom";
import LoggedInContainers from "../Containers/LoggedInContainers";
import { useEffect, useState } from "react";
import { makeAuthenticatedGETRequest } from "../utils/serverHelpers";
import SingleSongCard from "../components/shared/SingleSongCard";

const SinglePlaylistView = () => {
    const [playlistDetails, setPlaylistDetails] = useState({});
    const {playlistId} = useParams();

    useEffect(() => {
        const getData = async () => {
            const response = await makeAuthenticatedGETRequest(
                "/playlist/get/playlist/" + playlistId
            );
            setPlaylistDetails(response.data);
            console.log(response.data);
        };
        getData();
    }, []);

    return (
        <LoggedInContainers curActiveScreen={"library"}>
            {playlistDetails._id && (
                <div>
                    <div className="text-white text-xl pt-8 font-semibold">
                        {playlistDetails.name}
                    </div>
                    <div className="pt-10 space-y-3">
                        {playlistDetails.songs.map((item) => {
                            return (
                                <SingleSongCard
                                    info={item}
                                    key={JSON.stringify(item)}
                                    playSound={() => {}}
                                />
                            );
                        })}
                    </div>
                </div>
            )}
        </LoggedInContainers>
    );
};

export default SinglePlaylistView;