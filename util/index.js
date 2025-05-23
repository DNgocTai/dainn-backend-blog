getCurretDateTime = () => {
  let d = new Date();
  let ye = new Intl.DateTimeFormat("en", { year: "numeric" }).format(d);
  let mo = new Intl.DateTimeFormat("en", { month: "short" }).format(d);
  let da = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(d);

  const ho = new Intl.DateTimeFormat("en", {
    hour: "2-digit",
    hour12: false,
  }).format(d);
  const mi = new Intl.DateTimeFormat("en", { minute: "2-digit" }).format(d);
  const se = new Intl.DateTimeFormat("en", { second: "2-digit" }).format(d);

  // const todayDate = `${da} ${mo} ${ye}`;
  // return todayDate;
  const fullDateTime = `${da} ${mo} ${ye} ${ho}:${mi}:${se}`;
  return fullDateTime;
};

makeObjectSelected = (obj, props) => {
  let newObj = {};

  props.forEach((p) => {
    newObj[p] = obj[p];
  });
  return newObj;
};

makeObjectExcept = (obj, props) => {
  let newObj = {};
  let hasPorp = false;

  for (const property in obj) {
    hasPorp = false;

    props.forEach((p) => {
      if (property == p) {
        hasPorp = true;
      }
    });

    if (!hasPorp) {
      newObj[property] = obj[property];
    }
  }

  return newObj;
};

combineArrayObjectAndArray = (obj, objFields, array, arrayFieldName) => {
  let result = [];
  let sampleObj = {};
  const length = obj.length;

  for (let i = 0; i < length; i++) {
    objFields.forEach((a) => {
      sampleObj[a] = obj[i][a];
    });

    sampleObj[arrayFieldName] = array[i];
    result.push(sampleObj);
    sampleObj = {};
  }

  return result;
};

// exports
module.exports = {
  getCurretDateTime,
  makeObjectSelected,
  makeObjectExcept,
  combineArrayObjectAndArray,
};
