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
    width: 100%;
  }

  h2,
  h5 {
    text-align: center;
  }

  #App {
    min-width: 270px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>
