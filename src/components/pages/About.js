import Image from "next/image";
import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { BadgeSkill } from "../fragments/Badge";
import { Skills } from "@/data/resources";
import { content } from "@/data/content";

const About = () => {
  return (
    <main id="about" className="py-12 xl:h-screen">
      <div className="my-12">
        <h3>{content.find((item) => item.page === 'about').title} 🦍</h3>
        <p>
          {content.find((item) => item.page === 'about').intro}
        </p>
      </div>

      <div className="items-center grid md:grid-cols-2 gap-12">
        <Image
          src="https://i.pinimg.com/736x/44/c6/0d/44c60d734754e298a207972f27c76aed.jpg"
          alt="image"
          width={500}
          height={500}
          className="rounded-2xl w-full h-72 bg-cover"
        />

        <div>
          <h3>Who We Are</h3>
          <p>
            {content.find((item) => item.page === 'about').description}
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-12 mt-12">
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
