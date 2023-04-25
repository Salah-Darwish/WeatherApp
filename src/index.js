import { Navigator } from "./config";
import { SettingsContext, SettingsProvider } from "./contexts";
export default function App() {
  return (
    <SettingsProvider>
      <Navigator />
    </SettingsProvider>
  );
}
