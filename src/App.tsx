import { Layout } from "./components/Layout";
import { ProjectListCard } from "./components/ProjectListCard";
import { RepoListCard } from "./components/RepoListCard";
import { XpList } from "./components/XpList";

function App() {
  return (
    <Layout
      children={<RepoListCard />}
      children2={<ProjectListCard />}
      children3={<XpList />}
    />
  );
}

export default App;
