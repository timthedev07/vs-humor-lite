<script lang="ts">
  export let name: "loading" = "loading";
  const fill = "#cfcfcf";
</script>

{#if name === "loading"}
  <svg
    class="icon"
    id="Layer_2"
    style="enable-background:new 0 0 32 32;"
    version="1.1"
    viewBox="0 0 32 32"
    xml:space="preserve"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    ><g
      ><path
        d="M16,0.5c-0.82813,0-1.5,0.67188-1.5,1.5v4c0,0.82813,0.67188,1.5,1.5,1.5s1.5-0.67188,1.5-1.5V2   C17.5,1.17188,16.82813,0.5,16,0.5z"
        {fill}
      /><path
        d="M7.5,16c0-0.82813-0.67188-1.5-1.5-1.5H2c-0.82813,0-1.5,0.67188-1.5,1.5s0.67188,1.5,1.5,1.5h4   C6.82813,17.5,7.5,16.82813,7.5,16z"
        {fill}
      /><path
        d="M7.86816,22.01074l-2.82813,2.82813c-0.58594,0.58594-0.58594,1.53516,0,2.12109   c0.29297,0.29297,0.67676,0.43945,1.06055,0.43945s0.76758-0.14648,1.06055-0.43945l2.82813-2.82813   c0.58594-0.58594,0.58594-1.53516,0-2.12109S8.4541,21.4248,7.86816,22.01074z"
        {fill}
      /><path
        d="M16,24.5c-0.82813,0-1.5,0.67188-1.5,1.5v4c0,0.82813,0.67188,1.5,1.5,1.5s1.5-0.67188,1.5-1.5v-4   C17.5,25.17188,16.82813,24.5,16,24.5z"
        {fill}
      /><path
        d="M24.13184,22.01074c-0.58594-0.58594-1.53516-0.58594-2.12109,0s-0.58594,1.53516,0,2.12109l2.82813,2.82813   c0.29297,0.29297,0.67676,0.43945,1.06055,0.43945s0.76758-0.14648,1.06055-0.43945c0.58594-0.58594,0.58594-1.53516,0-2.12109   L24.13184,22.01074z"
        {fill}
      /><path
        d="M30,14.5h-4c-0.82813,0-1.5,0.67188-1.5,1.5s0.67188,1.5,1.5,1.5h4c0.82813,0,1.5-0.67188,1.5-1.5S30.82813,14.5,30,14.5z"
        {fill}
      /><path
        d="M23.07129,10.42871c0.38379,0,0.76758-0.14648,1.06055-0.43945l2.82813-2.82813c0.58594-0.58594,0.58594-1.53516,0-2.12109   s-1.53516-0.58594-2.12109,0l-2.82813,2.82813c-0.58594,0.58594-0.58594,1.53516,0,2.12109   C22.30371,10.28223,22.6875,10.42871,23.07129,10.42871z"
        {fill}
      /></g
    ></svg
  >
{/if}

<style>
  .icon {
    width: 30px;
    height: 30px;
    animation: spin 1s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite;
  }
  @-ms-keyframes spin {
    from {
      -ms-transform: rotate(0deg);
    }
    to {
      -ms-transform: rotate(360deg);
    }
  }
  @-moz-keyframes spin {
    from {
      -moz-transform: rotate(0deg);
    }
    to {
      -moz-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    from {
      -webkit-transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>
