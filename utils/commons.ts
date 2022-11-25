export const classNames = (...cn: string[]) => cn.join(' ');

export const alphaAngleInRectTriangleInDegs = (a: number, b: number): number =>
  (Math.atan(a / b) * 180) / Math.PI;
