import Image from "next/image";
import Hero from "public/react_re.svg";
import Button from "@/components/button/Button";
import Author from "@/components/author/Author";

export default function Home() {
  return (
    <>
      <section id="hero">
        <div className="flex flex-col-reverse md:flex-row px-6">
          <div className="md:w-1/2 flex flex-col justify-center space-y-5 py-8 text-center md:text-left ">
            <h1 className="font-bold text-3xl md:text-5xl">LATEST PROJECTS</h1>
            <p className="text-lg">
              Sed eu turpis vehicula, iaculis sapien eu, molestie libero. Cras
              ac urna in neque commodo sodales vel et dolor. Pellentesque
              aliquam semper lectus, nec consequat ex lacinia nec. Nunc eget
              velit nec felis ultrices vulputate venenatis interdum arcu. In ac
              auctor quam.
            </p>
            <Button text={"See Our Works"} url={"/portfolio"} />
          </div>
          <div className="md:w-1/2">
            <Image src={Hero} alt="hero" />
          </div>
        </div>
      </section>
      <Author />
    </>
  );
}
