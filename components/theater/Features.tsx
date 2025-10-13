import { AIFeatures } from "@/data/theater";
import Image from "next/image";
import AI from "../../public/assets/images/theater/AI.png";
import Detail from "../../public/assets/images/theater/Detail.png";
import MyFilters from "../../public/assets/images/theater/MyFilters.png";
import TheaterAI from "../../public/assets/images/theater/TheaterAI.png";
import Watchlists from "../../public/assets/images/theater/Watchlists.png";

const Features = () => {
  return (
    <div>
      <div className="mt-40 lg:mt-0 mx-auto max-w-7xl min-h-screen lg:grid lg:grid-cols-2 lg:place-content-center px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <h1 className="absolute lg:-mt-2 mt-8 -z-10 w-full font-black text-center lg:text-left lg:text-7xl text-6xl bg-gradient-to-b from-[#ffffff4b] to-[#0b00194b] text-transparent bg-clip-text">
            My Filters
          </h1>
          <Image src={MyFilters} alt="" className="-mt-10 z-1" />
        </div>
        <div className="mx-auto max-w-3xl text-center flex flex-col items-center justify-center lg:-mt-30 -mt-15">
          <h2 className="font-black lg:text-4xl text-2xl lg:min-h-12 min-h-10 bg-gradient-to-r from-[#9500ffe5] to-[#ff00aeed] text-transparent bg-clip-text">
            Curate your favorites
          </h2>
          <p className="mt-4 lg:text-lg text-md text-gray-600">
            Create custom filters to find movies and shows that match your mood.
            Whether you're in the mood for a comedy, thriller, or documentary,
            My Filters helps you discover content that fits your preferences.
          </p>
        </div>
      </div>

      <div className="mt-40 lg:mt-0 mx-auto max-w-7xl min-h-screen lg:grid lg:grid-cols-2 lg:place-content-center px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <h1 className="absolute lg:-mt-2 mt-8 -z-10 w-full font-black text-center lg:text-left lg:text-7xl text-6xl bg-gradient-to-b from-[#ffffff4b] to-[#0b00194b] text-transparent bg-clip-text">
            Theater AI
          </h1>
          <Image src={AI} alt="" className="-mt-10 z-1" />
        </div>
        <div className="mx-auto max-w-3xl text-center flex flex-col items-center justify-center lg:-mt-30 -mt-15">
          <h2 className="font-black lg:text-4xl text-2xl lg:min-h-12 min-h-10 bg-gradient-to-r from-[#9500ffe5] to-[#ff00aeed] text-transparent bg-clip-text">
            AI-powered Smarter Streaming
          </h2>
          <div className="mt-4 lg:text-lg text-md text-gray-600">
            Your personalized cinema companion powered by Gemini AI.
            <div className="flex flex-wrap items-center justify-center lg:gap-4 gap-2 mt-5">
              {AIFeatures?.map((feat, index) => (
                <div
                  key={index}
                  className="flex flex-col bg-[#4646462f] lg:p-8 p-4 rounded-4xl gap-4 w-[calc(50%-20px)]"
                >
                  <div className="flex flex-row items-center gap-2">
                    <Image
                      src={TheaterAI}
                      alt=""
                      className="bg-[#ffffff1c] p-2 py-3 w-10 rounded-lg"
                    />
                    <h2 className="font-bold text-white lg:text-[16px] text-[12px]">
                      {feat?.title}
                    </h2>
                  </div>
                  <p className="text-left text-sm">{feat?.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
