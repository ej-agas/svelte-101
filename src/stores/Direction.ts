import type { SiteSettings } from "src/types";
import { derived } from "svelte/store";
import settings from "./Settings";

enum SiteDirection {
    LeftToRight = "ltr",
    RightToLeft = "rtl",
}

function callback(
    settings: SiteSettings,
    set: (value: SiteDirection) => void
): () => void {
    const timer = setTimeout(() => {
        if (settings.language === "ar") {
            set(SiteDirection.RightToLeft);
            return;
        }

        set(SiteDirection.LeftToRight);
    }, 1000);

    return () => {
        clearTimeout(timer);
    };
}

export const direction = derived(settings, callback, SiteDirection.LeftToRight);
