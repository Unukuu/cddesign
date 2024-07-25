const skilllogo = [
  {
    name: "CSS",
    zurag: "/image/css.png",
  },
  {
    name: "HTML",
    zurag: "/image/html-5.png",
  },
  {
    name: "Javascript",
    zurag: "/image/js.png",
  },
  {
    name: "Next.js",
    zurag: "/image/css.png",
  },
  {
    name: "React",
    zurag: "/image/atom.png",
  },
  {
    name: "Node.js",
    zurag: "/image/css.png",
  },
  {
    name: "Tailwind",
    zurag: "/image/css.png",
  },
  {
    name: "Bootstrap",
    zurag: "/image/css.png",
  },
];

const Logo = () => {
  return (
    <div className="flex container m-auto mt-12">
      {skilllogo.map((logos) => {
        return (
          <div className="w-[88px] h-[100px] flex flex-col items-center m-auto">
            <img src={logos.zurag} alt="photo" />
            <p className="text-[18px] font-[400] text-gray-600 dark:text-white">
              {logos.name}
            </p>
          </div>
        );
      })}
    </div>
  );
};
export default Logo;
