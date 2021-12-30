<script lang="ts">
  import { onMount } from "svelte";
  import type { RedditPost } from "../lib/types";
  import { getPosts } from "../lib/getPosts";
  import Post from "./Post.svelte";

  let apiResponse: RedditPost[];
  let lastFetch: number;
  let page: number = 0;
  let loadingActive: boolean = false;

  onMount(() => {
    loadingActive = true;
    getPosts().then((res) => {
      apiResponse = res;
      lastFetch = Date.now();
      page++;
      loadingActive = false;
    });
  });
</script>

<section>
  <div class="posts-container">
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
      <!-- <img src="../images/loading.svg" alt="" /> -->
    {/if}
    <button
      class="rounded-none"
      id="load-more-btn"
      disabled={!apiResponse}
      on:click={() => {
        getPosts(page, lastFetch).then((res) => {
          apiResponse = [...apiResponse, ...res];
          lastFetch = Date.now();
          page++;
        });
      }}>Load More</button
    >
  </div>
</section>

<style>
  button {
    border-radius: 8px;
  }
  .rounded-none {
    border-radius: 0;
  }

  #load-more-btn {
    background-color: cadetblue;
    width: 100% !important;
    max-width: none;
  }

  .posts-container {
    padding: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>
