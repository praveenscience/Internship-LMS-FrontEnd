export const linters = {
  "**/*.+(js|md|ts|css|sass|less|yml|yaml|scss|json|jsx)": [
    "eslint --fix",
    "prettier --write",
    "git add"
  ]
};
