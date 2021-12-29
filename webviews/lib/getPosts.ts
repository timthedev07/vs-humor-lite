import type { RedditPost } from "./types";

export const getPosts = async (
  size: number = 20,
  timeFrameInSeconds: number = 50000,
  page: number = 0
) => {
  const before = Math.ceil(Date.now() / 1000) - page * timeFrameInSeconds;
  const after = before - (page + 1) * timeFrameInSeconds;

  const response = await fetch(
    `https://api.pushshift.io/reddit/search/submission/?subreddit=ProgrammerHumor&sort=desc&sort_type=created_utc&after=${after}&before=${before}&size=${size}`,
    {}
  );

  const data = await response.json();

  return ((data as any).data || []) as RedditPost[];
};

getPosts().then((res) => console.log(res));
