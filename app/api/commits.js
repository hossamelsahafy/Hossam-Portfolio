const BASE_URL = "https://api.github.com";
const TOKEN = process.env.GITHUB_TOKEN;
const USERNAME = process.env.USERNAME;

export default async function handler(req, res) {
  try {
    const response = await fetch(
      `${BASE_URL}/search/commits?q=author:${USERNAME}`,
      {
        headers: {
          Authorization: `token ${TOKEN}`,
          Accept: "application/vnd.github.cloak-preview",
        },
      },
    );

    if (!response.ok) {
      return res.status(500).json({ error: "Failed to fetch commits" });
    }

    const data = await response.json();

    return res.status(200).json({
      totalCommits: data.total_count,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
