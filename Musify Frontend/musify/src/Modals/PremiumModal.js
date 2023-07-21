import LoggedInContainers from "../Containers/LoggedInContainers";
import { Link } from "react-router-dom";
const PremiumModal = ({ closeModal }) => {

  return (
    <div
      className="w-1/4 absolute bg-gray-200 w-screen h-screen bg-opacity-100 text-white flex justify-center items-center overflow-auto"
      onClick={closeModal}
    >
      <div className="bg-white w-1/4 h-full p-4 rounded-lg ml-10 text-black mt-8 font-bold text-4xl">
        <div className="text-blue-500 flex justify-center mb-2 text-white bg-white px-5  py-2 rounded-full items-center justify-center text-sm border border-blue-500">
          One-time plans available
        </div>
        Mini
        <div className="text-gray-600 mt-2 text-lg pb-8">
          <div className="text-gray-600 mt-2 text-lg">From ₹7/day</div>
          <div className="text-gray-600 text-lg mb-8">
            1 account on mobile only
          </div>
        </div>
        <hr className="my-14" style={{ borderColor: "black" }} />
        <div className="text-gray-600 mt-2 text-lg">
          {"\u2713"} {"\u0009"} Ad-free music listening on mobile
        </div>
        <div className="text-gray-600 mt-2 text-lg">
          {"\u2713"} {"\u0009"} Group Session
        </div>
        <div className="text-gray-600 mt-2 text-lg">
          {"\u2713"} {"\u0009"} Download 30 songs on 1 mobile device
        </div>
        <div className="text-gray-600 mt-14 text-lg text-center underline">
          Terms and conditions apply.
        </div>
      </div>

      <div className="bg-white w-1/4 h-full p-4 ml-5 rounded-lg text-black mt-8 font-bold text-4xl overflow-auto">
        <div className="text-white flex mb-2 text-white bg-blue-600 px-2 py-2 rounded-full items-center justify-center text-sm border border-blue-500">
          One-month free
        </div>
        <div className="text-blue-500 flex justify-center mb-2 text-white bg-white px-5  py-2 rounded-full items-center justify-center text-sm border border-blue-500">
          One-time plans available
        </div>
        Individual
        <div className="text-gray-600 mt-2 text-lg pb-8">
          <div className="text-gray-600 mt-2 text-lg">
            ₹119/month after offer period
          </div>
          <div className="text-gray-600 text-lg">1 account</div>
        </div>
        <hr className="my-11" style={{ borderColor: "black" }} />
        <div className="text-gray-600 mt-2 text-lg">
          {"\u2713"} {"\u0009"} Ad-free music listening
        </div>
        <div className="text-gray-600 mt-2 text-lg">
          {"\u2713"} {"\u0009"} Group Session
        </div>
        <div className="text-gray-600 mt-2 text-lg">
          {"\u2713"} {"\u0009"} Download 10k songs/device on 5 devices
        </div>
        <div className="text-gray-600 mt-24 text-lg text-center underline">
          Terms and conditions apply.
        </div>
      </div>

      <div className="bg-white w-1/4 h-full p-4 ml-5 rounded-lg text-black mt-8 font-bold text-4xl overflow-auto">
        <div className="text-white flex mb-2 text-white bg-blue-600 px-2 py-2 rounded-full items-center justify-center text-sm border border-blue-500">
          One-month free
        </div>
        <div className="text-blue-500 flex justify-center mb-2 text-white bg-white px-5  py-2 rounded-full items-center justify-center text-sm border border-blue-500">
          One-time plans available
        </div>
        Duo
        <div className="text-gray-600 mt-2 text-lg pb-8">
          <div className="text-gray-600 mt-2 text-lg">
            ₹149/month after offer period
          </div>
          <div className="text-gray-600 text-lg">2 accounts</div>
        </div>
        <hr className="my-4" style={{ borderColor: "black" }} />
        <div className="text-gray-600 mt-2 text-lg">
          {"\u2713"} {"\u0009"} For couples who live together
        </div>
        <div className="text-gray-600 mt-2 text-lg">
          {"\u2713"} {"\u0009"} Ad-free music listening
        </div>
        <div className="text-gray-600 mt-2 text-lg">
          {"\u2713"} {"\u0009"} Group Session
        </div>
        <div className="text-gray-600 mt-2 text-lg">
          {"\u2713"} {"\u0009"} Download 10k songs/device, on 5 devices per
          account
        </div>
        <div className="text-gray-600 mt-9 text-lg text-center underline">
          Terms and conditions apply.
        </div>
      </div>

      <div className="bg-white w-1/4 h-full p-4 ml-5 mr-10 rounded-lg text-black mt-8 font-bold text-4xl overflow-auto">
        <div className="text-white flex mb-2 text-white bg-blue-600 px-2 py-2 rounded-full items-center justify-center text-sm border border-blue-500">
          One-month free
        </div>
        <div className="text-blue-500 flex justify-center mb-2 text-white bg-white px-5  py-2 rounded-full items-center justify-center text-sm border border-blue-500">
          One-time plans available
        </div>
        Family
        <div className="text-gray-600 mt-2 text-lg pb-8">
          <div className="text-gray-600 mt-2 text-lg">
            ₹179/month after offer period
          </div>
          <div className="text-gray-600 text-lg">Up to 6 accounts</div>
        </div>
        <hr className="my-4" style={{ borderColor: "black" }} />
        <div className="text-gray-600 mt-2 text-lg">
          {"\u2713"} {"\u0009"} For family who live together
        </div>
        <div className="text-gray-600 mt-2 text-lg">
          {"\u2713"} {"\u0009"} Ad-free music listening
        </div>
        <div className="text-gray-600 mt-2 text-lg">
          {"\u2713"} {"\u0009"} Group Session
        </div>
        <div className="text-gray-600 mt-2 text-lg">
          {"\u2713"} {"\u0009"} Download 10k songs/device on 5 devices
        </div>

        <div className="text-gray-600 mt-16 text-lg text-center underline">
          Terms and conditions apply.
        </div>
      </div>
    </div>
  );
};

export default PremiumModal;
