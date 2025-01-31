import {Route, Routes} from "react-router-dom";
import {Layout} from "./components/layout/Layout";
import {BlockWithSearch} from "./components/block-width-search/BlockWithSearch";
import {BlockWithRandom} from "./components/block-with-random/BlockWithRandom";
import {BlockWithTrends} from "./components/block-with-trends/BlockWithTrends";
import {ResultTypes} from "./utils/constants";
import {BlockWelcome} from "./components/block-welcome/BlockWelcome";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<BlockWelcome />} />
        <Route path={ResultTypes.Search} element={<BlockWithSearch />} />
        <Route path={ResultTypes.Random} element={<BlockWithRandom />} />
        <Route path={ResultTypes.Trends} element={<BlockWithTrends />} />
      </Route>
    </Routes>
  )
}

export default App;
