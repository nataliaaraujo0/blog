import { Layout } from "./components/Layout";
import { XpList } from "./components/XpList";

function App() {
  return (
    <Layout
      children={<h1>REPOS</h1>}
      children2={<h1>PROJETOS</h1>}
      children3={<XpList />}
    />
  );
}

export default App;
