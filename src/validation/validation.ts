export function Required(
    value: string,
    label: string = "Field"
): string | undefined {
    let error = undefined;

    if (!value) {
        error = `The ${label} is required.`;
    }

    return error;
}

export function Email(
    value: string,
    label: string = "Field"
): string | undefined {
    let error = undefined;

    if (value && !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
        error = `The ${label} is invalid.`;
    }

    return error;
}
