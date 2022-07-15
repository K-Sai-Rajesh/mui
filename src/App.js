import { AppState } from "./Component/GlobalState/AppContext";
import { Page } from "./Component/Page/Page";

function App() {
  return (
    <AppState>
      <Page/>
    </AppState>
  );
}

export default App;
