import type { SiteDirection, SiteSettings } from "src/types";
import { derived } from "svelte/store";
import settings from "./Settings";

function callback(
    settings: SiteSettings,
    set: (value: SiteDirection) => void
): () => void {
    const timer = setTimeout(() => {
        if (settings.language === "ar") {
            set("rtl");
            return;
        }

        set("ltr");
    }, 1000);

    return () => {
        clearTimeout(timer);
    };
}

export const direction = derived(settings, callback, "ltr");
