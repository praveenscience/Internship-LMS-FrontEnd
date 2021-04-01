module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "es2021": true,
        "jest": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "ignorePatterns": [
        "src/tests",
        "src/setupTests.js",
        "src/reportWebVitals.js"
    ],
    "rules": {
        "indent": [
            "error",
            2
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ],
        "react/prop-types": 0,
        "react/react-in-jsx-scope": 0,
        "no-extra-boolean-cast": 0
    },
    "settings": {
        "react": {
            "createClass": "createReactClass", // Regex for Component Factory to use,
                                                // default to "createReactClass"
            "pragma": "React",  // Pragma to use, default to "React"
            "fragment": "Fragment",  // Fragment to use (may be a property of <pragma>), default to "Fragment"
            "version": "detect", // React version. "detect" automatically picks the version you have installed.
                                // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
                                // default to latest and warns if missing
                                // It will default to "detect" in the future
            "flowVersion": "0.53" // Flow version
        },
        "propWrapperFunctions": [
            // The names of any function used to wrap propTypes, e.g. `forbidExtraProps`. If this isn't set, any propTypes wrapped in a function will be skipped.
            "forbidExtraProps",
            {"property": "freeze", "object": "Object"},
            {"property": "myFavoriteWrapper"}
        ],
        "linkComponents": [
            // Components used as alternatives to <a> for linking, eg. <Link to={ url } />
            "Hyperlink",
            {"name": "Link", "linkAttribute": "to"}
        ]
    }
};
