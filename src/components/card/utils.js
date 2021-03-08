export const isUpgradeDisabled = (parentPicked, upgradePicked) => {
  if (!parentPicked && upgradePicked) {
    return false;
  } else if (!parentPicked && !upgradePicked) {
    return true;
  }
  return false;
};
