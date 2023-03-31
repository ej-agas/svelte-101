import type { LoggedInUser } from "src/types";
import { writable } from "svelte/store";

const loggedInUser = writable<LoggedInUser>({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    token: "",
});
