import type { ColorScheme, FontSize, SiteSettings } from "src/types";
import { writable } from "svelte/store";

const defaults = {
    colorScheme: "light" as ColorScheme,
    language: "en",
    fontSize: "medium" as FontSize,
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
