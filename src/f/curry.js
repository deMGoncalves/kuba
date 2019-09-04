import { isGap } from './gap'

const curryOne = (target) =>
  function (a0) {
    if (arguments.length === 0 || isGap(a0)) {
      return target
    }

    return target(a0)
  }

const curryTwo = (target) =>
  function (a0, a1) {
    switch (arguments.length) {
      case 0:
        return target
      case 1:
        return isGap(a0)
          ? target
          : curryOne((_a1) => target(a0, _a1))
      default:
        return isGap(a0) && isGap(a1)
          ? target
          : isGap(a0)
            ? curryOne((_a0) => target(_a0, a1))
            : isGap(a1)
              ? curryOne((_a1) => target(a0, _a1))
              : target(a0, a1)
    }
  }

export default (target) =>
  function (a0, a1, a2) {
    switch (arguments.length) {
      case 0:
        return target
      case 1:
        return isGap(a0)
          ? target
          : curryTwo((_a1, _a2) => target(a0, _a1, _a2))
      case 2:
        return isGap(a0) && isGap(a1)
          ? target
          : isGap(a0)
            ? curryTwo((_a0, _a2) => target(_a0, a1, _a2))
            : isGap(a1)
              ? curryTwo((_a1, _a2) => target(a0, _a1, _a2))
              : curryOne((_a2) => target(a0, a1, _a2))
      default:
        return isGap(a0) && isGap(a1) && isGap(a2)
          ? target
          : isGap(a0) && isGap(a1)
            ? curryTwo((_a0, _a1) => target(_a0, _a1, a2))
            : isGap(a0) && isGap(a2)
              ? curryTwo((_a0, _a2) => target(_a0, a1, _a2))
              : isGap(a1) && isGap(a2)
                ? curryTwo((_a1, _a2) => target(a0, _a1, _a2))
                : isGap(a0)
                  ? curryOne((_a0) => target(_a0, a1, a2))
                  : isGap(a1)
                    ? curryOne((_a1) => target(a0, _a1, a2))
                    : isGap(a2)
                      ? curryOne((_a2) => target(a0, a1, _a2))
                      : target(a0, a1, a2)
    }
  }
