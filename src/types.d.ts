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

export type ColorScheme = "light" | "dark";

export type FontSize = "small" | "medium" | "large";

export type SiteDirection = "ltr" | "rtl";

type FormErrors = {
    [key: string]: string;
};

export type FormContext = {
    values: Record<string, any>;
    errors: Record<string, string>;
    showErrors: boolean;
};

export type Coordinates = {
    latitude: number;
    longitude: number;
};

export type MapMarkers = {
    [key: string]: Coordinates;
};
