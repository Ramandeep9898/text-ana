export const getNumberOfPunctuations = (inputValue) => {
    const punctuations = inputValue.match(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g);
    return punctuations ? punctuations.length : 0;
};