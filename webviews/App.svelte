<script>
  import PostList from "./components/PostList.svelte";
</script>

<div id="App">
  <header>
    <h2>r/ProgrammerHumor</h2>
    <h5>Brought to you by vs-humor-lite</h5>
  </header>
  <main>
    <PostList />
  </main>
</div>

<style>
  header {
    background-color: rgb(185, 74, 33);
    padding: 10px;
    width: 100%;
  }

  main {
    padding: 8px;
  }

  h2,
  h5 {
    text-align: center;
  }

  #App {
    min-width: 230px;
  }
</style>
