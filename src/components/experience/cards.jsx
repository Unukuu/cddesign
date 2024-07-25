const expCards = [
  {
    logoCom: "",
    title: "Sr. Frontend Developer",
    lists: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
    date: " Nov 2021 - Present",
  },
  {
    logoCom: "",
    title: "Sr. Frontend Developer",
    lists: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
    date: " Nov 2021 - Present",
  },
  {
    logoCom: "",
    title: "Sr. Frontend Developer",
    lists: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
    date: " Nov 2021 - Present",
  },
  {
    logoCom: "",
    title: "Sr. Frontend Developer",
    lists: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
    date: " Nov 2021 - Present",
  },
];

const Cards = () => {
  return (
    <section className="flex m-auto w-[896px] bg-white p-8 rounded-xl mt-12">
      <div className="flex-1 text-4xl font-extrabold">
        <img src="/image/unitel.webp" alt="" />
      </div>
      <div className="flex-1">
        <h1 className="font-sans text-xl">Sr. Frontend Developer</h1>
        <div className="p-4">
          <ul className="list-disc text-gray-600">
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Lorem ipsum dolor sit amet consectetur.</li>
            <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
          </ul>
        </div>
      </div>
      <div className="flex-1 flex justify-end text-gray-700 ">
        Nov 2021 - Present
      </div>
    </section>
  );
};
export default Cards;
