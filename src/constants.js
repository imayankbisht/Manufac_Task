// Function to calculate the mean of an array of values
export function calculateMean(values) {
  const sum = values.reduce((acc, val) => acc + val, 0);
  return sum / values.length;
}

// Function to calculate the median of an array of values
export function calculateMedian(values) {
  values.sort((a, b) => a - b);
  const middle = Math.floor(values.length / 2);
  if (values.length % 2 === 0) {
    return (values[middle - 1] + values[middle]) / 2;
  } else {
    return values[middle];
  }
}

// Function to calculate the mode of an array of values
export function calculateMode(values) {
  const valueCounts = {};
  values.forEach((value) => {
    if (valueCounts[value]) {
      valueCounts[value]++;
    } else {
      valueCounts[value] = 1;
    }
  });
  let modeValues = [];
  let maxCount = 0;
  for (const value in valueCounts) {
    if (valueCounts[value] > maxCount) {
      modeValues = [value];
      maxCount = valueCounts[value];
    } else if (valueCounts[value] === maxCount) {
      modeValues.push([value]);
    }
  }
  if (maxCount === 1) {
    return []; // Return an empty array when there is no mode
  }
  return modeValues;
}

// Function to calculate class-wise statistics
export function calculateClasswiseStatistics(dataset, type) {
  let classData = {};

  dataset.forEach((dataPoint) => {
    const alcoholClass = dataPoint["Alcohol"];
    const flavanoidsValue = dataPoint[type];

    if (!classData[alcoholClass]) {
      classData[alcoholClass] = [];
    }

    classData[alcoholClass].push(flavanoidsValue);
  });

  let classStatistics = [];

  for (const alcoholClass in classData) {
    const flavanoidsValues = classData[alcoholClass];

    const mean = calculateMean(flavanoidsValues);
    const median = calculateMedian(flavanoidsValues);
    const mode = calculateMode(flavanoidsValues);

    classStatistics = [
      ...classStatistics,
      {
        class: alcoholClass,
        Mean: mean,
        Median: median,
        Mode: mode,
      },
    ];
  }

  return classStatistics;
}
