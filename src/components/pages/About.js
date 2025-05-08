import Image from "next/image";
import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { BadgeSkill } from "../fragments/Badge";
import { Skills } from "@/data/resources";

const About = () => {
  return (
    <main id="about" className="py-12 h-screen">
      <div className="my-12">
        <h3>About Us 🦍</h3>
        <p>
          Lenatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Donec qu
        </p>
      </div>

      <div className="items-center grid grid-cols-2">
        <Image
          src="https://i.pinimg.com/736x/44/c6/0d/44c60d734754e298a207972f27c76aed.jpg"
          alt="image"
          width={500}
          height={500}
          className="rounded-2xl h-72 bg-cover"
        />

        <div>
          <h3>Me.</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec qu
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-12">
        {Skills.map((item) => (
          <div key={item.title}>
            <span className="uppercase font-bold">{item.title}</span>

            <div className="mt-4 flex flex-wrap gap-4 items-center">
              {item.items.map((item) => <BadgeSkill key={item} Icon={item.icon} label={item.name} />)}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default About;
