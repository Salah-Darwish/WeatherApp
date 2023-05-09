import { createContext, useState, useContext, useEffect } from "react";
import {
  useForegroundPermissions,
  Accuracy,
  getCurrentPositionAsync,
} from "expo-location";
import { AppState } from "react-native";
import { geocoding } from "../utils";
const LocationContext = createContext();

export function useLocation() {
  const context = useContext(LocationContext);
  if (!context) {
    throw new Error("useLocation must be used withing a LocationProvider");
  }
  return context;
}
export function LocationProvider(props) {
  const [status, requestPermission] = useForegroundPermissions();
  const granted = status && status.granted;
  const [location, setLocation] = useState(null);
  const getLocation = async () => {
    const location = await getCurrentPositionAsync({
      accuracy: Accuracy.Highest,
      maximumAge: 10000,
    });
    try {
      const locationName = await geocoding.get("reverse", {
        params: {
          lat: location.coords.latitude,
          lon: location.coords.longitude,
        },
      });
      if (locationName.data.length > 0) {
        setLocation({
          ...location,
          locationNames: {
            ...locationName.data[0].local_names,
          },
        });
      } else {
        setLocation(location);
      }
    } catch {
      setLocation(location);
    }
  };
  useEffect(() => {
    requestPermission();
  }, []);
  useEffect(() => {
    const handleAppStateChange = (nextAppState) => {
      if (nextAppState == "active") {
        getLocation();
      }
    };
    let subsription;
    if (granted) {
      getLocation();

      subsription = AppState.addEventListener("change", handleAppStateChange);
    }
    return () => {
      if (subsription) {
        subsription.remove();
      }
    };
  }, [granted]);
  return (
    <LocationContext.Provider
      {...props}
      value={{
        location,
        granted,
        getLocation,
      }}
    />
  );
}
