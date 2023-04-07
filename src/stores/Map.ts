import type { Coordinates, MapMarkers } from "src/types";
import { writable } from "svelte/store";

const defaults = {
    initialLocation: { latitude: 25, longitude: 24 } as Coordinates,
};

function createMapStore() {
    const { subscribe, set, update } = writable<MapMarkers>({ ...defaults });

    return {
        subscribe,
        set,
        update,
        addMarker(label: string, coordinates: Coordinates) {
            update((markers) => {
                markers[label] = coordinates;
                return markers;
            });
        },
        reset: () => set({ ...defaults }),
    };
}

export default createMapStore();
