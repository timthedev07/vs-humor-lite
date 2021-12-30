import type { RedditPost } from "./types";

export const getPosts = async (
  page: number = 0,
  lastFetch?: number,
  size: number = 20,
  timeFrameInSeconds: number = 50000
) => {
  const before =
    Math.ceil((lastFetch || Date.now()) / 1000) - page * timeFrameInSeconds;
  const after = before - (page + 1) * timeFrameInSeconds;

  const response = await fetch(
    `https://api.pushshift.io/reddit/search/submission/?subreddit=ProgrammerHumor&sort=desc&sort_type=created_utc&after=${after}&before=${before}&size=${size}`,
    {}
  );

  const data = await response.json();

  return filterPosts(((data as any).data || []) as RedditPost[]);
};

export const filterPosts = (posts: RedditPost[]) => {
  const excludedPosts = ["self"];
  return posts.filter((each) => excludedPosts.indexOf(each.thumbnail) === -1);
};
