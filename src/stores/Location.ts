import type { Coordinates } from "src/types";
import { readable, type Subscriber } from "svelte/store";

function getLocation(set: Subscriber<Coordinates>) {
    let watchId: number;
    if (navigator.geolocation && navigator.geolocation.watchPosition) {
        watchId = navigator.geolocation.watchPosition(
            (position: GeolocationPosition) => {
                const { latitude, longitude } = position.coords;
                set({ latitude, longitude });
            },
            (error: GeolocationPositionError) => {
                console.error(error);
            }
        );
    }

    return () => {
        if (navigator.geolocation && navigator.geolocation.clearWatch) {
            navigator.geolocation.clearWatch(watchId);
        }
        set(null);
    };
}

export const location = readable<Coordinates>(null, getLocation);
