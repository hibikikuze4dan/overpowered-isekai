export const isUpgradeDisabled = (parentPicked, upgradePicked) => {
  if (!parentPicked && upgradePicked) {
    return false;
  } else if (!parentPicked && !upgradePicked) {
    return true;
  }
  return false;
};

export const hasIncluded = (puchasesTitles, incs) => {
  return incs.length === 0
    ? true
    : incs.some((include) => puchasesTitles.includes(include));
};

export const noExcludes = (purchaseTitles, exs) => {
  return exs.length === 0
    ? true
    : exs.every((exclude) => !purchaseTitles.includes(exclude));
};

export const requirementsMet = (puchasesTitles, incs, exs) => {
  return hasIncluded(puchasesTitles, incs) && noExcludes(puchasesTitles, exs);
};
