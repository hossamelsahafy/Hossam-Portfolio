"use client";
import { useEffect, useState } from "react";
import CountUp from "react-countup";

const stats = [
  { num: "1", text: "Fresh Graduate" },
  { num: "11", text: "Projects Completed" },
  { num: "8", text: "Technologies Mastered" },
];

const Stats = () => {
  const [totalCommits, setTotalCommits] = useState(0);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
    const fetchCommits = async () => {
      const res = await fetch(
        `https://github-invite-bot.vercel.app/git-commits`,
      );
      const data = await res.json();
      setTotalCommits(data.totalCommits);
    };

    fetchCommits();
  }, []);

  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((state, index) => (
            <div
              className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
              key={index}
            >
              <CountUp
                end={state.num}
                duration={5}
                delay={2}
                className="text-4xl xl:text-6xl font-extrabold"
              />
              <p
                className={`${
                  state.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                }`}
              >
                {state.text}
              </p>
            </div>
          ))}
          {hydrated && (
            <div className="flex-1 flex gap-4 items-center justify-center xl:justify-start">
              <CountUp
                end={totalCommits}
                duration={5}
                delay={2}
                className="text-4xl xl:text-6xl font-extrabold"
              />
              <p className="max-w-[150px]">Code Commits</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Stats;
