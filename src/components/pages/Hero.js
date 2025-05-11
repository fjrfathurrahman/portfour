import Stack from "@/components/reactbits/Stack";
import { MdArrowForwardIos } from "react-icons/md";
import { content, ImagesHero } from "@/data/resources";

const Hero = () => {
  return (
    <main id="hero" className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-12 py-28 md:py-44 h-max">
      <div className="space-y-6">
        <h2>{content.find((item) => item.page === "hero").title}👋</h2>
        <p>{content.find((item) => item.page === "hero").description}</p>
        <button className="border border-zinc-400 px-8 py-3 rounded-xl cursor-pointer flex items-center gap-4">Read More <MdArrowForwardIos/></button>
      </div>
      <div className="flex justify-center xl:hidden">
        <Stack randomRotation={true} sensitivity={180} sendToBackOnClick={false} cardDimensions={{ width: 230, height: 230 }} cardsData={ImagesHero}/>
      </div>
      <div className="xl:flex hidden justify-center">
        <Stack randomRotation={true} sensitivity={180} sendToBackOnClick={false} cardDimensions={{ width: 300, height: 300 }} cardsData={ImagesHero}/>
      </div>
    </main>
  );
};

export default Hero;
