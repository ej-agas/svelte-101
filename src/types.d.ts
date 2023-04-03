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
    colorScheme: string = "light" | "dark";
    language: string = "en" | "fil" | "ja";
    fontSize: string = "small" | "medium" | "large";
};
