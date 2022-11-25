//Xử lý các hàm thành viên
export const rightTrapezoid = (x, a, b) => {
  return (b - x) / (b - a);
};
export const leftTrapezoid = (x, c, d) => {
  return (x - c) / (d - c);
};
//------------------------------------

//xử lý các tập mờ
export const handleLogicBloodPressure = (bloodPressure) => {
  let resultBloodPressure = [];
  if (bloodPressure <= 80) {
    resultBloodPressure.push({ result: 1, label: "T" });
  }
  if (80 < bloodPressure && bloodPressure < 90) {
    resultBloodPressure.push({
      result: rightTrapezoid(bloodPressure, 80, 90),
      label: "T",
    });
    resultBloodPressure.push({
      result: leftTrapezoid(bloodPressure, 80, 90),
      label: "BT",
    });
  }

  if (90 <= bloodPressure && bloodPressure <= 120) {
    resultBloodPressure.push({
      result: 1,
      label: "BT",
    });
  }
  if (120 < bloodPressure && bloodPressure < 130) {
    resultBloodPressure.push({
      result: rightTrapezoid(bloodPressure, 120, 130),
      label: "BT",
    });
    resultBloodPressure.push({
      result: leftTrapezoid(bloodPressure, 120, 130),
      label: "C",
    });
  }
  if (bloodPressure >= 130) {
    resultBloodPressure.push({
      result: 1,
      label: "C",
    });
  }
  return resultBloodPressure;
};
export const handleLogicBMI = (BMI) => {
  let resultBMI = [];
  if (1 <= BMI && BMI < 12) {
    resultBMI.push({
      result: leftTrapezoid(BMI, 1, 12),
      label: "TC",
    });
  }
  if (12 <= BMI && BMI <= 17) {
    resultBMI.push({ result: 1, label: "TC" });
  }
  if (17 < BMI && BMI < 18) {
    resultBMI.push({
      result: rightTrapezoid(BMI, 17, 18.5),
      label: "TC",
    });
  }

  if (18 <= BMI && BMI <= 18.5) {
    resultBMI.push({
      result: rightTrapezoid(BMI, 17, 18.5),
      label: "TC",
    });
    resultBMI.push({
      result: leftTrapezoid(BMI, 18, 19),
      label: "CD",
    });
  }

  if (18.5 < BMI && BMI < 19) {
    resultBMI.push({
      result: leftTrapezoid(BMI, 18, 19),
      label: "CD",
    });
  }
  if (19 <= BMI && BMI <= 22) {
    resultBMI.push({
      result: 1,
      label: "CD",
    });
  }
  if (22 < BMI && BMI < 24) {
    resultBMI.push({
      result: rightTrapezoid(BMI, 22, 24.9),
      label: "CD",
    });
  }

  if (24 <= BMI && BMI <= 24.9) {
    resultBMI.push({
      result: rightTrapezoid(BMI, 22, 24.9),
      label: "CD",
    });
    resultBMI.push({
      result: leftTrapezoid(BMI, 24, 26),
      label: "TBP",
    });
  }

  if (24.9 < BMI && BMI < 26) {
    resultBMI.push({
      result: leftTrapezoid(BMI, 24, 26),
      label: "TBP",
    });
  }
  if (26 <= BMI && BMI <= 28) {
    resultBMI.push({
      result: 1,
      label: "TBP",
    });
  }
  if (28 < BMI && BMI < 29.9) {
    resultBMI.push({
      result: rightTrapezoid(BMI, 28, 29.9),
      label: "TBP",
    });
    resultBMI.push({
      result: leftTrapezoid(BMI, 28, 30),
      label: "BP",
    });
  }

  if (29.9 < BMI && BMI < 30) {
    resultBMI.push({
      result: leftTrapezoid(BMI, 28, 30),
      label: "BP",
    });
  }
  if (BMI >= 30 && BMI <= 32) {
    resultBMI.push({ result: 1, label: "BP" });
  }
  if (BMI > 32 && BMI <= 34) {
    resultBMI.push({
      result: rightTrapezoid(BMI, 32, 34),
      label: "TBP",
    });
  }
  return resultBMI;
};
export const handleLogicHeartBeat = (heartBeat) => {
  let resultHeartBeat = [];
  if (heartBeat <= 50) {
    resultHeartBeat.push({ result: 1, label: "T" });
  }
  if (50 < heartBeat && heartBeat < 55) {
    resultHeartBeat.push({
      result: rightTrapezoid(heartBeat, 50, 55),
      label: "T",
    });
  }
  if (50 < heartBeat && heartBeat < 60) {
    resultHeartBeat.push({
      result: leftTrapezoid(heartBeat, 50, 60),
      label: "BT",
    });
  }
  if (60 <= heartBeat && heartBeat <= 100) {
    resultHeartBeat.push({
      result: 1,
      label: "BT",
    });
  }
  if (100 < heartBeat && heartBeat < 110) {
    resultHeartBeat.push({
      result: rightTrapezoid(heartBeat, 100, 110),
      label: "BT",
    });
  }
  if (105 < heartBeat && heartBeat < 110) {
    resultHeartBeat.push({
      result: leftTrapezoid(heartBeat, 105, 110),
      label: "C",
    });
  }
  if (heartBeat >= 110) {
    resultHeartBeat.push({
      result: 1,
      label: "C",
    });
  }
  return resultHeartBeat;
};
export const handleLogicHeight = (height) => {
  let resultHeight = [];
  if (height <= 150) {
    resultHeight.push({ result: 1, label: "RT" });
  }
  if (150 < height && height < 155) {
    resultHeight.push({
      result: rightTrapezoid(height, 150, 155),
      label: "RT",
    });
    resultHeight.push({
      result: leftTrapezoid(height, 150, 155),
      label: "T",
    });
  }
  if (155 <= height && height <= 160) {
    resultHeight.push({
      result: 1,
      label: "T",
    });
  }
  if (160 < height && height < 165) {
    resultHeight.push({
      result: rightTrapezoid(height, 160, 165),
      label: "T",
    });
    resultHeight.push({
      result: leftTrapezoid(height, 160, 165),
      label: "TB",
    });
  }
  if (165 <= height && height <= 173) {
    resultHeight.push({
      result: 1,
      label: "TB",
    });
  }
  if (173 < height && height < 175) {
    resultHeight.push({
      result: rightTrapezoid(height, 173, 175),
      label: "TB",
    });
    resultHeight.push({
      result: leftTrapezoid(height, 105, 110),
      label: "C",
    });
  }
  if (175 <= height && height <= 180) {
    resultHeight.push({
      result: 1,
      label: "C",
    });
  }
  if (180 < height && height < 185) {
    resultHeight.push({
      result: rightTrapezoid(height, 180, 185),
      label: "C",
    });
    resultHeight.push({
      result: leftTrapezoid(height, 180, 185),
      label: "RC",
    });
  }
  if (height >= 185) {
    resultHeight.push({
      result: 1,
      label: "RC",
    });
  }
  return resultHeight;
};
export const handleLogicWeight = (weight) => {
  let resultWeight = [];
  if (weight <= 44) {
    resultWeight.push({ result: 1, label: "RN" });
  }
  if (44 < weight && weight < 49) {
    resultWeight.push({
      result: rightTrapezoid(weight, 44, 49),
      label: "RN",
    });
  }
  if (44 < weight && weight < 52) {
    resultWeight.push({
      result: leftTrapezoid(weight, 44, 52),
      label: "N",
    });
  }
  if (52 <= weight && weight <= 54) {
    resultWeight.push({
      result: 1,
      label: "N",
    });
  }
  if (54 < weight && weight < 59) {
    resultWeight.push({
      result: rightTrapezoid(weight, 54, 59),
      label: "N",
    });
    resultWeight.push({
      result: leftTrapezoid(weight, 54, 59),
      label: "TB",
    });
  }
  if (59 <= weight && weight <= 66) {
    resultWeight.push({
      result: 1,
      label: "TB",
    });
  }
  if (66 < weight && weight < 71) {
    resultWeight.push({
      result: rightTrapezoid(weight, 66, 71),
      label: "TB",
    });
    resultWeight.push({
      result: leftTrapezoid(weight, 66, 71),
      label: "NA",
    });
  }
  if (71 <= weight && weight <= 74) {
    resultWeight.push({
      result: 1,
      label: "NA",
    });
  }
  if (74 < weight && weight < 79) {
    resultWeight.push({
      result: rightTrapezoid(weight, 74, 79),
      label: "NA",
    });
    resultWeight.push({
      result: leftTrapezoid(weight, 74, 79),
      label: "RNA",
    });
  }
  if (79 <= weight) {
    resultWeight.push({
      result: 1,
      label: "RNA",
    });
  }

  return resultWeight;
};
export const handleLogicHI = (HI) => {
  let resultHI = [];
  if (1 <= HI && HI < 25) {
    resultHI.push({
      result: leftTrapezoid(HI, 1, 25),
      label: "UH",
    });
  }
  if (HI === 25) {
    resultHI.push({ result: 1, label: "UH" });
  }
  if (25 < HI && HI < 35) {
    resultHI.push({
      result: rightTrapezoid(HI, 25, 45),
      label: "UH",
    });
  }
  if (35 <= HI && HI <= 45) {
    resultHI.push({
      result: rightTrapezoid(HI, 25, 45),
      label: "UH",
    });
    resultHI.push({
      result: leftTrapezoid(HI, 35, 50),
      label: "LH",
    });
  }
  if (45 < HI && HI < 50) {
    resultHI.push({
      result: leftTrapezoid(HI, 35, 50),
      label: "LH",
    });
  }
  if (HI === 50) {
    resultHI.push({ result: 1, label: "LH" });
  }
  if (50 < HI && HI < 55) {
    resultHI.push({
      result: rightTrapezoid(HI, 50, 70),
      label: "LH",
    });
  }
  if (55 <= HI && HI <= 70) {
    resultHI.push({
      result: rightTrapezoid(HI, 50, 70),
      label: "LH",
    });
    resultHI.push({
      result: leftTrapezoid(HI, 55, 75),
      label: "SH",
    });
  }
  if (70 < HI && HI < 75) {
    resultHI.push({
      result: leftTrapezoid(HI, 55, 75),
      label: "SH",
    });
  }
  if (HI === 75) {
    resultHI.push({ result: 1, label: "SH" });
  }
  if (75 < HI && HI < 80) {
    resultHI.push({
      result: rightTrapezoid(HI, 75, 85),
      label: "SH",
    });
  }
  if (80 <= HI && HI <= 85) {
    resultHI.push({
      result: rightTrapezoid(HI, 75, 85),
      label: "SH",
    });
    resultHI.push({
      result: leftTrapezoid(HI, 80, 90),
      label: "H",
    });
  }
  if (85 < HI && HI < 90) {
    resultHI.push({
      result: leftTrapezoid(HI, 80, 90),
      label: "H",
    });
  }
  if (HI === 90) {
    resultHI.push({ result: 1, label: "H" });
  }
  if (90 < HI && HI <= 100) {
    resultHI.push({
      result: rightTrapezoid(HI, 90, 100),
      label: "H",
    });
  }
  return resultHI;
};
//-----------------------------------------

//Các hàm xử lý sau khi giải mờ
export const handleGraphBMI = (y, label) => {
  let x1;
  let x2;
  if (label === "TC") {
    if (y > 0 && y < 1) {
      x1 = 1 + 11 * y;
      x2 = 18.5 - 1.5 * y;

      return [
        { x: 1, y: 0 },
        { x: x1, y },
        { x: x2, y },
        { x: 18.5, y: 0 },
      ];
    }
    if (y === 1) {
      x1 = 12;
      x2 = 17;
      return [
        { x: 1, y: 0 },
        { x: x1, y },
        { x: x2, y },
        { x: 18.5, y: 0 },
      ];
    }
  }
  if (label === "CD") {
    if (y > 0 && y < 1) {
      x1 = 18 + y;
      x2 = 24.9 - 2.9 * y;
      return [
        { x: 18, y: 0 },
        { x: x1, y },
        { x: x2, y },
        { x: 24.9, y: 0 },
      ];
    }
    if (y === 1) {
      x1 = 19;
      x2 = 22;
      return [
        { x: 18, y: 0 },
        { x: x1, y },
        { x: x2, y },
        { x: 24.9, y: 0 },
      ];
    }
  }
  if (label === "TBP") {
    if (y > 0 && y < 1) {
      x1 = 24 + 2 * y;
      x2 = 29.9 - 1.9 * y;
      return [
        { x: 24, y: 0 },
        { x: x1, y },
        { x: x2, y },
        { x: 29.9, y: 0 },
      ];
    }
    if (y === 1) {
      x1 = 26;
      x2 = 28;
      return [
        { x: 24, y: 0 },
        { x: x1, y },
        { x: x2, y },
        { x: 29.9, y: 0 },
      ];
    }
  }
  if (label === "BP") {
    if (y > 0 && y < 1) {
      x1 = 28 + 2 * y;
      x2 = 34 - 2 * y;
      return [
        { x: 28, y: 0 },
        { x: x1, y },
        { x: x2, y },
        { x: 34, y: 0 },
      ];
    }
    if (y === 1) {
      x1 = 30;
      x2 = 32;
      return [
        { x: 28, y: 0 },
        { x: x1, y },
        { x: x2, y },
        { x: 34, y: 0 },
      ];
    }
  }
};
export const handleGraphHI = (y, label) => {
  let x1;
  let x2;
  if (label === "UH") {
    if (y > 0 && y < 1) {
      x1 = 1 + 24 * y;
      x2 = 45 - 20 * y;
      return [
        { x: 1, y: 0 },
        { x: x1, y },
        { x: x2, y },
        { x: 45, y: 0 },
      ];
    }
    if (y === 1) {
      x1 = 25;
      return [
        { x: 1, y: 0 },
        { x: x1, y },
        { x: 45, y: 0 },
      ];
    }
  }
  if (label === "LH") {
    if (y > 0 && y < 1) {
      x1 = 35 + 15 * y;
      x2 = 70 - 20 * y;
      return [
        { x: 35, y: 0 },
        { x: x1, y },
        { x: x2, y },
        { x: 70, y: 0 },
      ];
    }
    if (y === 1) {
      x1 = 50;
      return [
        { x: 35, y: 0 },
        { x: x1, y },

        { x: 70, y: 0 },
      ];
    }
  }
  if (label === "SH") {
    if (y > 0 && y < 1) {
      x1 = 55 + 20 * y;
      x2 = 85 - 10 * y;
      return [
        { x: 55, y: 0 },
        { x: x1, y },
        { x: x2, y },
        { x: 85, y: 0 },
      ];
    }
    if (y === 1) {
      x1 = 75;
      return [
        { x: 55, y: 0 },
        { x: x1, y },
        { x: 85, y: 0 },
      ];
    }
  }
  if (label === "H") {
    if (y > 0 && y < 1) {
      x1 = 80 + 10 * y;
      x2 = 100 - 10 * y;
      return [
        { x: 80, y: 0 },
        { x: x1, y },
        { x: x2, y },
        { x: 100, y: 0 },
      ];
    }
    if (y === 1) {
      x1 = 90;
      return [
        { x: 80, y: 0 },
        { x: x1, y },
        { x: 100, y: 0 },
      ];
    }
  }
};
//-----------------------------------------

const left = (x, a, b) => {
  return (x - a) / (b - a);
};

const right = (x, c, d) => {
  return (d - x) / (d - c);
};

export const showDetail = (kq) => {
  let arr = [];

  if (kq < 25 && kq > 1) {
    arr = [
      ...arr,
      { label: "UH", result: left(kq, 1, 25) },
      { label: "LH", result: 0 },
      { label: "SH", result: 0 },
      { label: "H", result: 0 },
    ];
  }
  if (kq === 25) {
    arr = [
      ...arr,
      { label: "UH", result: 1 },
      { label: "LH", result: 0 },
      { label: "SH", result: 0 },
      { label: "H", result: 0 },
    ];
  }
  if (kq < 35 && kq > 25) {
    arr = [
      ...arr,
      { label: "UH", result: right(kq, 25, 45) },
      { label: "LH", result: 0 },
      { label: "SH", result: 0 },
      { label: "H", result: 0 },
    ];
  }
  if (kq >= 35 && kq <= 45) {
    arr = [
      ...arr,
      { label: "UH", result: right(kq, 25, 45) },
      { label: "LH", result: left(kq, 35, 50) },
      { label: "SH", result: 0 },
      { label: "H", result: 0 },
    ];
  }
  if (kq < 50 && kq > 45) {
    arr = [
      ...arr,
      { label: "UH", result: 0 },
      { label: "LH", result: left(kq, 35, 50) },
      { label: "SH", result: 0 },
      { label: "H", result: 0 },
    ];
  }
  if (kq === 50) {
    arr = [
      ...arr,
      { label: "UH", result: 0 },
      { label: "LH", result: 1 },
      { label: "SH", result: 0 },
      { label: "H", result: 0 },
    ];
  }
  if (kq < 55 && kq > 50) {
    arr = [
      ...arr,
      { label: "UH", result: 0 },
      { label: "LH", result: right(kq, 50, 70) },
      { label: "SH", result: 0 },
      { label: "H", result: 0 },
    ];
  }
  if (kq >= 55 && kq <= 70) {
    arr = [
      ...arr,
      { label: "UH", result: 0 },
      { label: "LH", result: right(kq, 50, 70) },
      { label: "SH", result: left(kq, 55, 75) },
      { label: "H", result: 0 },
    ];
  }
  if (kq < 75 && kq > 70) {
    arr = [
      ...arr,
      { label: "UH", result: 0 },
      { label: "LH", result: 0 },
      { label: "SH", result: left(kq, 55, 75) },
      { label: "H", result: 0 },
    ];
  }
  if (kq === 75) {
    arr = [
      ...arr,
      { label: "UH", result: 0 },
      { label: "LH", result: 0 },
      { label: "SH", result: 1 },
      { label: "H", result: 0 },
    ];
  }
  if (kq < 80 && kq > 75) {
    arr = [
      ...arr,
      { label: "UH", result: 0 },
      { label: "LH", result: 0 },
      { label: "SH", result: right(kq, 75, 85) },
      { label: "H", result: 0 },
    ];
  }
  if (kq >= 80 && kq <= 85) {
    arr = [
      ...arr,
      { label: "UH", result: 0 },
      { label: "LH", result: 0 },
      { label: "SH", result: right(kq, 75, 85) },
      { label: "H", result: left(kq, 80, 90) },
    ];
  }
  if (kq < 90 && kq > 85) {
    arr = [
      ...arr,
      { label: "UH", result: 0 },
      { label: "LH", result: 0 },
      { label: "SH", result: 0 },
      { label: "H", result: left(kq, 80, 90) },
    ];
  }
  if (kq === 90) {
    arr = [
      ...arr,
      { label: "UH", result: 0 },
      { label: "LH", result: 0 },
      { label: "SH", result: 0 },
      { label: "H", result: 1 },
    ];
  }
  if (kq < 100 && kq > 90) {
    arr = [
      ...arr,
      { label: "UH", result: 0 },
      { label: "LH", result: 0 },
      { label: "SH", result: 0 },
      { label: "H", result: right(kq, 90, 100) },
    ];
  }
  return arr;
};
export const showDetailHeight = (resultHeight) => {
  const labelHeight = resultHeight.map((item) => item.label);
  const labelAllHeight = ["RT", "T", "TB", "C", "RC"];
  const resultFinalHeight = [];
  labelAllHeight.map((item) => {
    if (labelHeight.includes(item)) {
      const index = labelHeight.findIndex((i) => i === item);
      resultFinalHeight.push(resultHeight[index]);
    } else {
      resultFinalHeight.push({ result: 0, label: item });
    }
  });
  return resultFinalHeight
};
export const showDetailWeight = (resultWeight) => {
  const labelWeight = resultWeight.map((item) => item.label);
  const labelAllWeight = ["RN", "N", "TB", "NA", "RNA"];
  const resultFinalWeight = [];
  labelAllWeight.map((item) => {
    if (labelWeight.includes(item)) {
      const index = labelWeight.findIndex((i) => i === item);
      resultFinalWeight.push(resultWeight[index]);
    } else {
      resultFinalWeight.push({ result: 0, label: item });
    }
  });
  return resultFinalWeight;
};
export const showDetailBloodPressure = (resultBloodPressure) => {
  const labelBloodPressure = resultBloodPressure.map((item) => item.label);
  const labelAllBloodPressure = ["T", "BT", "C"];
  const resultFinalBloodPressure = [];
  labelAllBloodPressure.map((item) => {
    if (labelBloodPressure.includes(item)) {
      const index = labelBloodPressure.findIndex((i) => i === item);
      resultFinalBloodPressure.push(resultBloodPressure[index]);
    } else {
      resultFinalBloodPressure.push({ result: 0, label: item });
    }
  });
  return resultFinalBloodPressure;
};
export const showDetailHeartBeat = (resultHeartBeat) => {
  const labelHeartBeat = resultHeartBeat.map((item) => item.label);
  const labelAllHeartBeat = ["T", "BT", "C"];
  const resultFinalHeartBeat = [];
  labelAllHeartBeat.map((item) => {
    if (labelHeartBeat.includes(item)) {
      const index = labelHeartBeat.findIndex((i) => i === item);
      resultFinalHeartBeat.push(resultHeartBeat[index]);
    } else {
      resultFinalHeartBeat.push({ result: 0, label: item });
    }
  });
  return resultFinalHeartBeat
};
export const showDetailBMI = (resultBMI) => {
  const labelBMI = resultBMI.map((item) => item.label);
  const labelAllBMI = ["TC", "CD", "TBP", "BP"];
  const resultFinalBMI = [];
  labelAllBMI.map((item) => {
    if (labelBMI.includes(item)) {
      const index = labelBMI.findIndex((i) => i === item);
      resultFinalBMI.push(resultBMI[index]);
    } else {
      resultFinalBMI.push({ result: 0, label: item });
    }
  });
  return resultFinalBMI;
};

