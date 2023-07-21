import LoggedInContainers from "../Containers/LoggedInContainers";
import { Link } from "react-router-dom";
const PremiumModal = ({ closeModal }) => {
  return (
    <div
      className="w-1/4 absolute bg-gray-200 w-screen h-screen bg-opacity-100 text-white flex justify-center items-center overflow-auto"
      onClick={closeModal}
    >
      <div className="bg-white w-1/4 h-full p-4 rounded-lg ml-10 text-black mt-8 font-bold text-4xl">
        <div className="text-white flex justify-center mb-2 text-white bg-gray-700 px-10  py-5 rounded-full items-center justify-center text-sm border border-white text-lg">
          Account Help
        </div>

        <hr className="my-24" style={{ borderColor: "black" }} />
        <div className="text-gray-600 text-lg underline cursor-pointer">
          {"\u0009"} Forget login details
        </div>
        <div className="text-gray-600 mt-4 text-lg underline cursor-pointer">
          {"\u0009"} Can't reset password
        </div>
        <div className="text-gray-600 mt-4 text-lg underline cursor-pointer">
          {"\u0009"} Google login help
        </div>
        <div className="text-gray-600 mt-4 text-lg underline cursor-pointer">
          {"\u0009"} Phone number login help
        </div>
        <div className="text-gray-600 mt-4 text-lg underline cursor-pointer">
          {"\u0009"} Samsung login help
        </div>
        <div className="text-gray-600 mt-4 text-lg underline cursor-pointer">
          {"\u0009"} How to log out
        </div>
      </div>

      <div className="bg-white w-1/4 h-full p-4 rounded-lg ml-10 text-black mt-8 font-bold text-4xl">
        <div className="text-white flex justify-center mb-2 text-white bg-gray-700 px-10  py-5 rounded-full items-center justify-center text-sm border border-white text-lg">
          Payment Help
        </div>

        <hr className="my-24" style={{ borderColor: "black" }} />
        <div className="text-gray-600 mt-24 text-lg underline cursor-pointer">
          {"\u0009"} Failed payment help
        </div>
        <div className="text-gray-600 mt-4 text-lg underline cursor-pointer">
          {"\u0009"} Payment methods
        </div>
        <div className="text-gray-600 mt-4 text-lg underline cursor-pointer">
          {"\u0009"} Update payment details
        </div>
        <div className="text-gray-600 mt-4 text-lg underline cursor-pointer">
          {"\u0009"} Cancel Premium plans
        </div>
        <div className="text-gray-600 mt-4 text-lg underline cursor-pointer">
          {"\u0009"} Payments for Duo plan
        </div>
        <div className="text-gray-600 mt-4 text-lg underline cursor-pointer">
          {"\u0009"} Payments for Family plan
        </div>
      </div>

      <div className="bg-white w-1/4 h-full p-4 rounded-lg ml-10 text-black mt-8 font-bold text-4xl">
        <div className="text-white flex justify-center mb-2 text-white bg-gray-700 px-10  py-5 rounded-full items-center justify-center text-sm border border-white text-lg">
          Plan Help
        </div>

        <hr className="my-24" style={{ borderColor: "black" }} />
        <div className="text-gray-600 mt-2 text-lg underline cursor-pointer">
          {"\u0009"} Your plan details
        </div>
        <div className="text-gray-600 mt-4 text-lg underline cursor-pointer">
          {"\u0009"} Premium plans
        </div>
        <div className="text-gray-600 mt-4 text-lg underline cursor-pointer">
          {"\u0009"} join Premium Family
        </div>
        <div className="text-gray-600 mt-4 text-lg underline cursor-pointer">
          {"\u0009"} Start or join Duo plan
        </div>
        <div className="text-gray-600 mt-4 text-lg underline cursor-pointer">
          {"\u0009"} Premium Student
        </div>
        <div className="text-gray-600 mt-4 text-lg underline cursor-pointer">
          {"\u0009"} Premium Mini
        </div>
      </div>

      <div className="bg-white w-1/4 h-full p-4 rounded-lg ml-10 mr-10 text-black mt-8 font-bold text-4xl">
        <div className="text-white flex justify-center mb-2 text-white bg-gray-700 px-10  py-5 rounded-full items-center justify-center text-sm border border-white text-lg">
          Device Help
        </div>

        <hr className="my-24" style={{ borderColor: "black" }} />
        <div className="text-gray-600 mt-2 text-lg underline cursor-pointer">
          {"\u0009"} Spotify on speakers
        </div>
        <div className="text-gray-600 mt-4 text-lg underline cursor-pointer">
          {"\u0009"} Spotify on Alexa devices
        </div>
        <div className="text-gray-600 mt-4 text-lg underline cursor-pointer">
          {"\u0009"} Spotify on Google devices
        </div>
        <div className="text-gray-600 mt-4 text-lg underline cursor-pointer">
          {"\u0009"} Spotify on Sonos
        </div>
        <div className="text-gray-600 mt-4 text-lg underline cursor-pointer">
          {"\u0009"} Spotify Connect
        </div>
        <div className="text-gray-600 mt-4 text-lg underline cursor-pointer">
          {"\u0009"} Bluetooth help for Spotify
        </div>
      </div>
    </div>
  );
};

export default PremiumModal;
