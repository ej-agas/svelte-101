import type { LoggedInUser } from "src/types";
import { writable } from "svelte/store";

export const loggedInUser = writable<LoggedInUser>({
    firstName: "John",
    middleName: "McDoe",
    lastName: "Doe",
    email: "jDoe@email.com",
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
});
