"use client";
import { useEffect, useState } from "react";
import CountUp from "react-countup";

const stats = [
  { num: "1", text: "Fresh Graduate" },
  { num: "4", text: "Projects Completed" },
  { num: "8", text: "Technologies Mastered" },
];

const Stats = () => {
  const [totalCommits, setTotalCommits] = useState(0);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);

    const fetchCommits = async () => {
      const BASE_URL = "https://api.github.com";
      const TOKEN = process.env.NEXT_PUBLIC_GITHUB_COMMITS;
      const USERNAME = process.env.NEXT_PUBLIC_USERNAME;

      const headers = { Authorization: `token ${TOKEN}` };
      let totalCommits = 0;

      try {
        let repos = [];
        let url = `${BASE_URL}/user/repos?per_page=100`;

        while (url) {
          const reposResponse = await fetch(url, { headers });

          if (!reposResponse.ok) {
            console.error(
              "Failed to fetch repositories:",
              reposResponse.statusText
            );
            return;
          }

          const data = await reposResponse.json();
          repos = repos.concat(data);

          const linkHeader = reposResponse.headers.get("link");
          url =
            linkHeader && linkHeader.includes('rel="next"')
              ? linkHeader
                  .split(",")
                  .find((s) => s.includes('rel="next"'))
                  .split(";")[0]
                  .trim()
                  .slice(1, -1)
              : null;
        }

        const commitRequests = repos.map(async (repo) => {
          try {
            const commitsResponse = await fetch(
              `${BASE_URL}/repos/${repo.owner.login}/${repo.name}/commits?author=${USERNAME}`,
              { headers }
            );

            if (commitsResponse.ok) {
              const commits = await commitsResponse.json();
              return commits.length;
            } else {
              console.warn(
                `Skipping repo ${repo.name}: Failed to fetch commits.`
              );
              return 0;
            }
          } catch (error) {
            return 0;
          }
        });

        const commitCounts = await Promise.all(commitRequests);
        totalCommits = commitCounts.reduce((sum, count) => sum + count, 0);
        setTotalCommits(totalCommits);
      } catch (error) {
        console.error("Error fetching commits:", error);
      }
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
