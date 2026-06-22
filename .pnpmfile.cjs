function readPackage(pkg) {
  // Allow all build scripts
  if (pkg.scripts && pkg.scripts.build) {
    pkg.scripts.build = pkg.scripts.build;
  }
  return pkg;
}

module.exports = {
  hooks: {
    readPackage,
  },
};
