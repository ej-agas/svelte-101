// import { ColorScheme, FontSize } from "src/stores/Constants";
import type { SiteSettings } from "src/types";
import { writable } from "svelte/store";

enum ColorScheme {
    Light = "light",
    Dark = "dark",
}

enum FontSize {
    Small = "small",
    Medium = "medium",
    Large = "large",
}

const defaults = {
    colorScheme: ColorScheme.Light,
    language: "en",
    fontSize: FontSize.Medium,
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
                    settings.colorScheme === ColorScheme.Light
                        ? ColorScheme.Dark
                        : ColorScheme.Light,
            }));
        },
        reset: () => set({ ...defaults }),
    };
}

export default createSettingsStore();
