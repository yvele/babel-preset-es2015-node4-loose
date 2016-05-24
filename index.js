var modify = require("modify-babel-preset");

var LOOSE = { loose: true };

module.exports = modify("es2015-node4", {
    "transform-es2015-spread": LOOSE,
    "transform-es2015-destructuring": LOOSE,
    "transform-es2015-modules-commonjs": LOOSE
});
