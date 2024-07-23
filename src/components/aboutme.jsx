const Aboutme = () => {
  return (
    <section className="bg-gray-50 py-24">
      <div className="container m-auto">
        <div className="flex items-center justify-center">
          <span className="bg-gray-200 rounded-xl py-1 px-5 text-gray-600">
            About me
          </span>
        </div>
        <div className="flex justify-between mt-12">
          <div className="h-[520px] w-[440px] bg-red-300"></div>
          <div className="w-[584px] flex flex-col gap-3">
            <h1 className="text-[30px] text-gray-900 font-semibold">
              Curious about me? Here you have it:
            </h1>
            <p className="textstyle">
              I'm a designer turned full stack developer, passionate about
              React.js and Node.js. I excel in blending technical and visual
              aspects to craft exceptional digital products, prioritizing user
              experience, precise design, and optimized code.
            </p>
            <p>
              Since starting my web development journey in 2015, I've embraced
              challenges and kept up with the latest tech trends. Now in my
              early thirties, seven years in, I'm building cutting-edge web apps
              using Next.js, TypeScript, Nestjs, Tailwindcss, Supabase, and
              more.
            </p>
            <p>
              With a progressive mindset, I enjoy the entire product development
              process, from ideation to execution. Off duty, you'll find me on
              Twitter, tracking startup journeys, or unwinding. Follow me for
              tech insights and public project updates on Twitter or GitHub.
            </p>
            <p>Finally, some quick bits about me.</p>
            <ul>
              <li>B.E. in Computer Engineering</li>
              <li>Avid learner</li>
              <li>Full time freelancer</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Aboutme;
