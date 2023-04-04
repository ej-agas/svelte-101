import { readable, type Subscriber } from "svelte/store";

function getLocation(set: Subscriber<object>) {
    let watchId: number;
    if (navigator.geolocation && navigator.geolocation.watchPosition) {
        watchId = navigator.geolocation.watchPosition(
            (position: GeolocationPosition) => {
                const { latitude, longitude } = position.coords;
                set({ latitude, longitude });
            },
            (error: GeolocationPositionError) => {
                set({ error });
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

export const location = readable(null, getLocation);
