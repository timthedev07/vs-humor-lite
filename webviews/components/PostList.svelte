<script lang="ts">
  import { onMount } from "svelte";
  import type { RedditPost } from "../lib/types";
  import { getPosts } from "../lib/getPosts";
  import Post from "./Post.svelte";
  import Icon from "./Icon.svelte";

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
      <img src="static/loading.svg" alt="" />
    {/if}
    {#if loadingActive}
      <Icon name="loading" />
    {/if}
    <button
      id="load-more-btn"
      disabled={!apiResponse}
      on:click={() => {
        loadingActive = true;
        getPosts(page, lastFetch).then((res) => {
          apiResponse = [...apiResponse, ...res];
          lastFetch = Date.now();
          page++;
          loadingActive = false;
        });
      }}>Load More</button
    >
  </div>
</section>

<style>
  button {
    border-radius: 8px;
  }

  #load-more-btn {
    background-color: rgb(64, 117, 119);
    width: 100% !important;
    max-width: none;
    margin-top: 40px;
  }
  #load-more-btn:hover {
    background-color: rgb(74, 127, 129);
  }

  .posts-container {
    padding: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>
