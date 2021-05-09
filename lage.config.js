module.exports = {
  pipeline: {
    typecheck: ["^typecheck"],
    build: [],
    test: ["build"],
    lint: [],
    generate: []
  },
  npmClient: "yarn",
};
