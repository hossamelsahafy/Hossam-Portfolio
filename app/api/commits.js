const BASE_URL = "https://api.github.com";
const TOKEN = process.env.GITHUB_TOKEN;
const USERNAME = process.env.USERNAME;

export default async function handler(req, res) {
  const headers = { Authorization: `token ${TOKEN}` };

  try {
    const reposResponse = await fetch(`${BASE_URL}/user/repos?per_page=36`, {
      headers,
    });

    if (!reposResponse.ok) {
      return res.status(500).json({ error: "Failed to fetch repositories" });
    }

    const repos = await reposResponse.json();
    let totalCommits = 0;

    for (const repo of repos) {
      const commitsResponse = await fetch(
        `${BASE_URL}/repos/${repo.owner.login}/${repo.name}/commits?author=${USERNAME}`,
        { headers }
      );

      if (commitsResponse.ok) {
        const commits = await commitsResponse.json();
        totalCommits += commits.length;
      }
    }

    return res.status(200).json({ totalCommits });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
