import { NextResponse } from "next/server";

export async function GET() {
  const TOKEN = process.env.GITHUB_TOKEN; // بدون NEXT_PUBLIC_
  const USERNAME = process.env.USERNAME; // بدون NEXT_PUBLIC_

  if (!TOKEN || !USERNAME) {
    return NextResponse.json(
      { error: "GITHUB_TOKEN or USERNAME not set in env" },
      { status: 500 },
    );
  }

  const query = `
    query {
      user(login: "${USERNAME}") {
        contributionsCollection(from: "2010-01-01T00:00:00Z") {
          totalCommitContributions
          contributionCalendar {
            totalContributions
          }
          totalPullRequestContributions
          totalIssueContributions
        }
      }
    }
  `;

  try {
    const res = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `bearer ${TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    });

    const data = await res.json();

    return NextResponse.json({
      totalContributions:
        data?.data?.user?.contributionsCollection?.contributionCalendar
          ?.totalContributions || 0,
      totalCommits:
        data?.data?.user?.contributionsCollection?.totalCommitContributions ||
        0,
      totalPRs:
        data?.data?.user?.contributionsCollection
          ?.totalPullRequestContributions || 0,
      totalIssues:
        data?.data?.user?.contributionsCollection?.totalIssueContributions || 0,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
