/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function (points) {
  let time = 0;

  for (let i = 1; i < points.length; i++) {
    let p1 = points[i - 1];
    let p2 = points[i];

    time += Math.max(Math.abs(p1[0] - p2[0]), Math.abs(p1[1] - p2[1]));
  }

  return time;
};

const points = [
  [3, 2],
  [-2, 2],
];
console.log(minTimeToVisitAllPoints(points));
