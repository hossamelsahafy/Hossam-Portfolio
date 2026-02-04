const BASE_URL = "https://api.github.com/graphql";
const TOKEN = process.env.GITHUB_TOKEN;
const USERNAME = process.env.USERNAME;

export default async function handler(req, res) {
  const query = `
    query {
      user(login: "${USERNAME}") {
        contributionsCollection {
          totalCommitContributions
        }
      }
    }
  `;

  try {
    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        Authorization: `bearer ${TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    });

    const result = await response.json();

    return res.status(200).json({
      totalCommits:
        result.data.user.contributionsCollection.totalCommitContributions,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
