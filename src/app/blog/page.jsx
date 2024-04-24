import styles from "./page.module.css";

export default function Blog() {
  return (
    <div className="flex flex-col gap-6 ">
      <div className="flex flex-col justify-center items-center gap-4 mt-14">
        <h1 className="text-5xl font-bold ">BLOG ENTRIES</h1>
        <p className="">
          Sed sagittis nunc vel tellus ultricies auctor. Class aptent taciti
          sociosqu ad litora torquent per.
        </p>
        <button className="bg-teal-700 rounded-lg p-4 text-[#bbb]">
          CONTINUE JOURNAL
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="flex flex-col items-center justify-center border rounded-lg gap-4 p-4">
          <h1 className="text-4xl">WEB DESIGN</h1>
          <p>
            Etiam aliquam sem vel velit tempus, quis porttitor nunc rutrum. Ut a
            tempus arcu. Sed velit felis, pretium a lacus in, cursus scelerisque
            ex.
          </p>
          <button className="bg-teal-700 rounded-lg p-2 text-[#bbb]">
            READ MORE
          </button>
        </div>
        <div className="flex flex-col items-center justify-center border rounded-lg gap-4 p-4">
          <h1 className="text-4xl">WEB DESIGN</h1>
          <p>
            Etiam aliquam sem vel velit tempus, quis porttitor nunc rutrum. Ut a
            tempus arcu. Sed velit felis, pretium a lacus in, cursus scelerisque
            ex.
          </p>
          <button className="bg-teal-700 rounded-lg p-2 text-[#bbb]">
            READ MORE
          </button>
        </div>

        <div className="flex flex-col items-center justify-center border rounded-lg gap-4 p-4">
          <h1 className="text-4xl">WEB DESIGN</h1>
          <p>
            Etiam aliquam sem vel velit tempus, quis porttitor nunc rutrum. Ut a
            tempus arcu. Sed velit felis, pretium a lacus in, cursus scelerisque
            ex.
          </p>
          <button className="bg-teal-700 rounded-lg p-2 text-[#bbb]">
            READ MORE
          </button>
        </div>
      </div>
    </div>
  );
}
