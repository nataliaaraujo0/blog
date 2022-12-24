import { Layout } from "./components/Layout";
import { ProjectListCard } from "./components/ProjectListCard";
import { XpList } from "./components/XpList";

function App() {
  return (
    <Layout
      children={<h1>REPOS</h1>}
      children2={<ProjectListCard />}
      children3={<XpList />}
    />
  );
}

export default App;
