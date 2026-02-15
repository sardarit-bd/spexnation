function getAbsoluteLensValue(value) {
    if (!value) return "";

    return Number(value.replace(/[+-]/, ""));
}

export default getAbsoluteLensValue;