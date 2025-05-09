'use client'

import { content } from "@/data/resources";

const Projects = () => {
  return (
    <main id="projects" className=" py-12 h-screen">
      <div className="md:text-center text-start">
        <h3>{content.find((item) => item.page === 'projects').title} 🤸‍♂️</h3>
        <p>{content.find((item) => item.page === 'projects').content}</p>
      </div>

      <div className="h-[80vh] flex flex-col gap-12 items-center justify-center text-center">
        <span className="text-8xl sm:text-9xl">🪸</span>
        <h4 className="font-mono">COMING SOON !</h4>
      </div>
    </main>
  )
}

export default Projects