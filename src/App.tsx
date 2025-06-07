import { Provider } from "react-redux";
import ToggleLightProvider from "./Context/ToggleLightContext";
import SelectYards from "./Pages/SelectYards";
import ToggleLight from "./Utils/ToggleLight";
import { store } from "./Store/store";

const SelectYardsss = ToggleLight(SelectYards);

function App() {
  return (
    <>
      <ToggleLightProvider>
        <Provider store={store}>
          <SelectYardsss />
        </Provider>
      </ToggleLightProvider>
    </>
  );
}

export default App;
