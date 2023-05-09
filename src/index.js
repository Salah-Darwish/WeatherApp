import { Navigator } from "./config";
import { LocationProvider, SettingsProvider } from "./contexts";
export default function App() {
  return (
    <SettingsProvider>
      <LocationProvider>
        <Navigator />
      </LocationProvider>
    </SettingsProvider>
  );
}
