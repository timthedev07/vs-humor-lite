<script lang="ts">
  import { decodeRedditImgUrl } from "../lib/decodeRedditImgUrl";
  import type { Preview, RedditPost } from "../lib/types";

  export let title: string;
  export let author: string;
  export let url: string;
  export let preview: Preview | undefined;
  export let mediaMetadata: RedditPost["media_metadata"] | undefined;
</script>

<article>
  <h4>{title}</h4>
  <h5>By: {author}</h5>
  <div class="post-img-container">
    {#if preview}
      <!-- svelte-ignore a11y-img-redundant-alt -->
      <img
        src={decodeRedditImgUrl(
          preview.images[0].resolutions[
            preview.images[0].resolutions.length - 1
          ].url
        )}
        alt="Image From Reddit"
      />
    {:else if mediaMetadata}
      <!-- svelte-ignore a11y-img-redundant-alt -->
      <img
        src={decodeRedditImgUrl(
          (() => {
            const imgs = Object.keys(mediaMetadata)[0];
            return mediaMetadata[imgs].p[Math.min(imgs.length, 2)].u;
          })()
        )}
        alt="Image From Reddit"
      />
    {/if}
  </div>
  <a href={url}>
    <button>View On Reddit</button>
  </a>
</article>

<style>
  button {
    border-radius: 8px;
  }

  article {
    border: solid #6f6f6f 1px;
    margin: 8px;
    border-radius: 7px;
    padding: 10px;
  }

  img {
    max-width: 90%;
    border-radius: 7px;
  }

  div.post-img-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    margin-bottom: 10px;
  }
</style>
