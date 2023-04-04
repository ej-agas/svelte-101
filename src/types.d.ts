// import type { ColorScheme, FontSize } from "./stores/Constants";

export enum ColorScheme {
    Light = "light",
    Dark = "dark",
}

export enum FontSize {
    Small = "small",
    Medium = "medium",
    Large = "large",
}

export enum SiteDirection {
    LeftToRight = "ltr",
    RightToLeft = "rtl",
}

export type Todo = {
    id: string;
    text: string;
    done: boolean;
};

export type LoggedInUser = {
    firstName: string;
    middleName: string;
    lastName: string;
    email: string;
    token: string;
};

export type SiteSettings = {
    colorScheme: ColorScheme;
    language: string;
    fontSize: FontSize;
};
