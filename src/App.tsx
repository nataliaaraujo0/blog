import { Layout } from "./components/Layout";

function App() {
  return (
    <Layout
      children={<h1>REPOS</h1>}
      children2={<h1>PROJETOS</h1>}
      children3={<h1>EXPERIENCIAS</h1>}
    />
  );
}

export default App;
