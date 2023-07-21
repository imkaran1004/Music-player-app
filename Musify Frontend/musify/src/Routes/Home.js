import { Icon } from "@iconify/react";
import IconText from "../components/shared/iconText";
import TextWithHover from "../components/shared/textWithHower";

const focusCardsData = [
  {
    title: "Blocking Distractions",
    description:
      "Listening to music can help drown out background noise and distractions, creating a more focused environment. It can be particularly useful in noisy or busy environments where it's challenging to concentrate.",
    imgUrl:
      "https://images.pexels.com/photos/164879/pexels-photo-164879.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Mood Enhancement",
    description:
      "Music has the ability to influence our emotions. By listening to music that puts us in a positive or focused state of mind, we can improve our concentration and productivity. Upbeat, instrumental, or ambient music, without lyrics, tends to work well for maintaining focus.",
    imgUrl:
      "https://media.istockphoto.com/id/1163520400/photo/businesswoman-with-headphones-sitting-at-desk-during-the-break.webp?b=1&s=170667a&w=0&k=20&c=YhQLwy2rLSqISKIbLyiM0JF23mbkHDBplNzRTbeQxmY=",
  },
  {
    title: "Reducing Stress",
    description:
      "Music has the ability to evoke relaxation and reduce stress levels. By reducing anxiety, it becomes easier to concentrate and engage in tasks without being overwhelmed by external pressures.",
    imgUrl:
      "https://images.pexels.com/photos/4498177/pexels-photo-4498177.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Engaging the Brain",
    description:
      "Listening to music engages the brain's auditory processing centers and can provide a stimulating environment for cognitive activities. This engagement can help prevent the mind from wandering and maintain focus on the task at hand.",
    imgUrl:
      "https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

const SpotifyPlaylistCardsData = [
  {
    title: "Ancient music",
    description:
      "The origins of music can be traced back to prehistoric times, with evidence of musical instruments dating back tens of thousands of years.",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBQdgYf-QtBOpUF6YPp-k3DQm49sTQWyAKfQ&usqp=CAU",
  },
  {
    title: "Medieval Music",
    description:
      "During the medieval period, music was predominantly monophonic. Gregorian chant, also known as plainchant, was the dominant form of sacred music.",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiscVON2knpGDsXtqfw6qjob0bWhtXH8cNuA&usqp=CAU",
  },
  {
    title: "Renaissance Music",
    description:
      "Polyphonic music, with multiple melodic lines, emerged, and composers such as Josquin des Prez and Giovanni Pierluigi da Palestrina created intricate choral compositions. ",
    imgUrl:
      "data:image/jpeg;base64,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",
  },
  {
    title: "Classical Music ",
    description:
      "The classical period brought a shift towards simpler, more balanced and structured compositions.",
    imgUrl:
      "data:image/jpeg;base64,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",
  },
];

const SoundofIndiaCardsData = [
  {
    title: "Regional Music",
    description:
      "India has a vast cultural landscape with diverse regional music styles. The playlist may feature music from different regions like Hindustani classical (North Indian), Carnatic classical (South Indian), Bhangra (Punjab), Rajasthani folk, Tamil film music, and more.",
    imgUrl:
      "https://images.pexels.com/photos/2477357/pexels-photo-2477357.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Traditional and Classical Music",
    description:
      "India has a rich tradition of classical music, with distinct styles like Hindustani and Carnatic. The playlist might include instrumental and vocal performances by classical maestros, showcasing the intricacies and beauty of this ancient art form",
    imgUrl:
      "https://images.pexels.com/photos/6054104/pexels-photo-6054104.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Bollywood Music",
    description:
      "Bollywood film industry is a significant part of Indian music. The playlist may include popular Bollywood songs from different eras, featuring renowned playback singers, film soundtracks, and chart-topping hits.",
    imgUrl:
      "https://images.pexels.com/photos/3783471/pexels-photo-3783471.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Folk Music",
    description:
      "India is known for its vibrant folk music traditions. The Sound of Indi  playlist may include folk songs from different regions, showcasing the diverse rhythms, melodies, and storytelling elements of traditional Indian folk music.",
    imgUrl:
      "https://images.pexels.com/photos/5725204/pexels-photo-5725204.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

const Home = () => {
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
            <div className="w-3/5 flex justify-around items-center">
              <TextWithHover displayText={"Premium"} />
              <TextWithHover displayText={"Support"} />
              <TextWithHover displayText={"Download"} />
              <div className="h-1/2 border-r border-white"></div>
            </div>
            <div className="w-2/5 flex justify-around h-full items-center">
              <TextWithHover displayText={"Sign up"} />
              <div className="bg-white h-2/3 px-8 flex items-center justify-center rounded-full font-semibold cursor-pointer">
                Log in
              </div>
            </div>
          </div>
        </div>
        <div className="content p-8 pt-0 overflow-auto">
          <PlaylistView titleText={"History Of Music"} cardsData={SpotifyPlaylistCardsData} />
          <PlaylistView
            titleText={"Benefits of Music"}
            cardsData={focusCardsData}
          />
          <PlaylistView
            titleText={"Sound of India"}
            cardsData={SoundofIndiaCardsData}
          />
        </div>
      </div>
    </div>
  );
};

const PlaylistView = ({ titleText, cardsData }) => {
  return (
    <div className="text-white mt-8">
      <div className="text-2xl font-semibold mb-5">{titleText}</div>
      <div className="w-full flex justify-between space-x-4">
        {cardsData.map((item) => {
          return (
            <Card
              title={item.title}
              description={item.description}
              imgUrl={item.imgUrl}
            />
          );
        })}
      </div>
    </div>
  );
};

const Card = ({ title, description, imgUrl }) => {
  return (
    <div className="bg-black bg-opacity-60 w-1/4 p-4 rounded-lg">
      <div className="pb-4 pt-2">
        <img className="w-full rounded-md" src={imgUrl} alt="label" />
      </div>
      <div className="text-white font-semibold  py-3">{title}</div>
      <div className="text-gray-500 text-sm">{description}</div>
    </div>
  );
};
export default Home;
