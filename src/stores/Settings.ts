import type { SiteSettings } from "src/types";
import { writable, type Writable } from "svelte/store";

const defaults = {
    colorScheme: "light",
    language: "en",
    fontSize: "medium",
};

function createSettingsStore() {
    const { subscribe, set, update } = writable<SiteSettings>({ ...defaults });

    return {
        subscribe,
        set,
        update,
        updateSetting: (setting: string, value: string): void => {
            update((settings) => ({ ...settings, [setting]: value }));
        },
        toggleColorScheme: (): void => {
            update((settings) => ({
                ...settings,
                colorScheme:
                    settings.colorScheme === "light" ? "dark" : "light",
            }));
        },
        reset: () => set({ ...defaults }),
    };
}

export default createSettingsStore();
