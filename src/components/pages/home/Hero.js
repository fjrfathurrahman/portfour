import Stack from "@/components/reactbits/Stack";
import React from "react";

const images = [
  {
    id: 1,
    img: "https://i.pinimg.com/736x/c6/83/20/c683200850332d21b141f2b5cee7e560.jpg",
  },
  {
    id: 2,
    img: "https://i.pinimg.com/736x/6a/09/02/6a0902a42590d4ab203590ff81a96050.jpg",
  },
  {
    id: 3,
    img: "https://i.pinimg.com/736x/33/96/e4/3396e4489ee62f057b45748c35de5e9d.jpg",
  },
  {
    id: 4,
    img: "https://i.pinimg.com/736x/7d/10/c1/7d10c18cd2a5a7d000b6f6e066423403.jpg",
  },
];

const Hero = () => {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-12 py-28 md:py-44 h-max">
      <div className="space-y-6">
        <h2>Say Hello 👋</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec qu
        </p>
        <button className="border border-zinc-400 px-12 py-3 rounded-xl cursor-pointer">Read More</button>
      </div>
      <div className="flex justify-center xl:hidden">
        <Stack randomRotation={true} sensitivity={180} sendToBackOnClick={false} cardDimensions={{ width: 230, height: 230 }} cardsData={images}/>
      </div>
      <div className="xl:flex hidden justify-center">
        <Stack randomRotation={true} sensitivity={180} sendToBackOnClick={false} cardDimensions={{ width: 300, height: 300 }} cardsData={images}/>
      </div>
    </main>
  );
};

export default Hero;
