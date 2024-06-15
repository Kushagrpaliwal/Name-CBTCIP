import About from "@/components/About"
import Contact from "@/components/Contact"
import Experience from "@/components/Experience"
import Hero from "@/components/Hero"
import Projects from "@/components/Projects"
import Skills from "@/components/Skills"
import { FloatingNav } from "@/components/ui/Navbar"
import { navlist } from "@/lib"



const page = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navlist}/>
        <Hero />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
        <About />
      </div>
    </main>
  )
}

export default page