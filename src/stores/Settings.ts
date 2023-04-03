import type { SiteSettings } from "src/types";
import { writable } from "svelte/store";

export const settings = writable<SiteSettings>({
    colorScheme: "light",
    language: "en",
    fontSize: "medium",
});
