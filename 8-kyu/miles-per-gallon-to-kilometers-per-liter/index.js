const kilometresPerMiles = 1.609344;
const litresPerGallons = 4.54609188;
const converter = (mpg) => Number((kilometresPerMiles / litresPerGallons * mpg).toFixed(2));