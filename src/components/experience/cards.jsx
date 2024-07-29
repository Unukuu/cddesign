const expCards = [
  {
    logoCom: "/image/unitel.webp",
    title: "Sr. Frontend Developer",
    lists: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
    date: " Nov 2021 - Present",
  },
  {
    logoCom: "image/unitel.webp",
    title: "Jr. Backend Developer",
    lists: [
      "adblasdasdb",
      "Loremaskdja;ksd ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum12837182738 dolor sit amet, consectetur adipiscing elit.",
    ],
    date: " Nov 2021 - Present",
  },
  {
    logoCom: "image/unitel.webp",
    title: "Fullstack Developer",
    lists: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
    date: " Nov 2021 - Present",
  },
  {
    logoCom: "image/unitel.webp",
    title: "Project manager",
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
    <div>
      {expCards.map((card) => {
        return (
          <section className="md:flex m-auto bg-white dark:bg-[#1f2937] p-8 rounded-xl mt-12">
            <div className="flex-1">
              <img src={card.logoCom} alt="photo1" />
            </div>
            <div className="flex-1">
              <h1 className="font-sans text-xl dark:text-white">
                {card.title}
              </h1>
              <div className="p-4">
                <ul className="list-disc text-gray-600 dark:text-gray-200">
                  {card.lists.map((value) => {
                    return <li>{value}</li>;
                  })}
                </ul>
              </div>
            </div>
            <div className="flex-1 flex justify-end text-gray-700 dark:text-gray-400">
              {card.date}
            </div>
          </section>
        );
      })}
    </div>
  );
};
export default Cards;
