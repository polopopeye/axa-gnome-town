let generatedPredictArr = false;
export let predictArrayDict = [];
export const generatePredict = (arrayCity) => {
  /* Creates an array to predicts words based on name, professions or color to use like dictionary with InputPredict Module */
  if (generatedPredictArr === false) {
    for (let i = 0; i < arrayCity.length; i++) {
      // Creates and separates names
      let names = arrayCity[i].name.split(' ');
      if (predictArrayDict.indexOf(names[0]) === -1) {
        predictArrayDict.push(names[0]);
      }
      if (predictArrayDict.indexOf(names[1]) === -1) {
        predictArrayDict.push(names[1]);
      }
      // Creates hair_color
      let hairColor = arrayCity[i].hair_color;
      if (predictArrayDict.indexOf(hairColor) === -1) {
        predictArrayDict.push(hairColor);
      }
      // Creates professions
      arrayCity[i].professions.forEach((professions) => {
        if (predictArrayDict.indexOf(professions) === -1) {
          predictArrayDict.push(professions);
        }
      });
    }
    generatedPredictArr = true;
  }
};
