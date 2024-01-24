export const getNumberOfSpaces = (inputValue) => {
    return inputValue.split(" ").filter((word) => word === "").length;
};