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
