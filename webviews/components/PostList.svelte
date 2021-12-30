<script lang="ts">
  import { onMount } from "svelte";
  import type { RedditPost } from "../lib/types";
  import { getPosts } from "../lib/getPosts";
  import Post from "./Post.svelte";

  let apiResponse: RedditPost[];

  onMount(() => {
    getPosts().then((res) => {
      apiResponse = res;
    });
  });
</script>

<section>
  {#if apiResponse}
    {#each apiResponse as { author, full_link, is_video, preview, title, media_metadata }, i (full_link)}
      <Post
        url={full_link}
        {author}
        {title}
        {preview}
        mediaMetadata={media_metadata}
      />
    {/each}
  {:else}
    Fetching...
  {/if}
</section>
