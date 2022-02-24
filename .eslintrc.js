module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node":true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
    }
};
module.exports = {
    // ...
    'rules': {
      'quotes': ['error', 'single'],
      // we want to force semicolons
      'semi': ['error', 'always'],
      // we use 2 spaces to indent our code
      'indent': ['error', 2],
      // we want to avoid extraneous spaces
      'no-multi-spaces': ['error']
    }
  };
  {
"env": {"browser": true, "node": true, "es6": true, "mocha": true}, "extends": "eslint:recommended",
"parserOptions": {"sourceType": "script"},
"rules": {
"strict": ["error", "global"],
"semi": ["warn", "always"],
"quotes": ["error", "double"],
"no-alert": "off",
"no-console": "off",
"no-debugger": "off",
"no-unused-vars": "warn",
"id-length": ["error", {"min": 3, "max": 30, "exceptions": ["i","j"]}], "camelcase": ["error", {"properties": "always"}],
"no-var": "error", "valid-jsdoc": ["error"], "require-jsdoc": ["error", {
"require": { "FunctionDeclaration": true, "MethodDefinition": true, "ClassDeclaration": true, "ArrowFunctionExpression": false, "FunctionExpression": false} }]
} }
  
