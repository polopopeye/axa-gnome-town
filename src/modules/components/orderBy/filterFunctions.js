export const orderByID = (mode = 'asc', arrayToSort, callback) => {
  if (mode === 'desc') {
    arrayToSort.sort(function (a, b) {
      return parseFloat(b.id) - parseFloat(a.id);
    });
  }
  if (mode === 'asc') {
    arrayToSort.sort(function (a, b) {
      return parseFloat(a.id) - parseFloat(b.id);
    });
  }
};

export const orderByName = (mode = 'asc', arrayToSort, callback) => {
  if (mode === 'asc') {
    arrayToSort.sort(function (a, b) {
      return a.name.localeCompare(b.name);
    });
  }
  if (mode === 'desc') {
    arrayToSort.sort(function (a, b) {
      return b.name.localeCompare(a.name);
    });
  }
  if (typeof callback == 'function') {
    callback();
  }
};

export const orderByWeight = (mode = 'asc', arrayToSort, callback) => {
  if (mode === 'desc') {
    arrayToSort.sort(function (a, b) {
      return parseFloat(b.weight) - parseFloat(a.weight);
    });
  }
  if (mode === 'asc') {
    arrayToSort.sort(function (a, b) {
      return parseFloat(a.weight) - parseFloat(b.weight);
    });
  }
};

export const orderByHeight = (mode = 'asc', arrayToSort, callback) => {
  if (mode === 'desc') {
    arrayToSort.sort(function (a, b) {
      return parseFloat(b.height) - parseFloat(a.height);
    });
  }
  if (mode === 'asc') {
    arrayToSort.sort(function (a, b) {
      return parseFloat(a.height) - parseFloat(b.height);
    });
  }
};

export const orderByHairColor = (mode = 'asc', arrayToSort, callback) => {
  if (mode === 'asc') {
    arrayToSort.sort(function (a, b) {
      return a.hair_color.localeCompare(b.hair_color);
    });
  }
  if (mode === 'desc') {
    arrayToSort.sort(function (a, b) {
      return b.hair_color.localeCompare(a.hair_color);
    });
  }
  if (typeof callback == 'function') {
    callback();
  }
};
