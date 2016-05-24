const es2015node4 = require("babel-preset-es2015-node4");
const es2015node4loose = require("../index");

function getModifiedPluginFromName (name) {
	var originalPlugin = require("babel-plugin-" + name);
	var modifiedPlugin = es2015node4loose.plugins.find(
		plugin => plugin === originalPlugin || plugin[0] === originalPlugin);

	if (!modifiedPlugin) {
		throw new Error("Plugin not found");
	}

	return modifiedPlugin;
}

function assertPluginIsLoose (plugin) {
	plugin.should.be.instanceof(Array).and.have.lengthOf(2);
	plugin[1].should.eql({ loose: true });
}

describe("babel-preset-es2015-node4-loose", function () {

  it("'transform-es2015-spread' plugin should be loose", function () {
		var plugin = getModifiedPluginFromName("transform-es2015-spread");
		assertPluginIsLoose(plugin);
  });

	it("'transform-es2015-destructuring' plugin should be loose", function () {
		var plugin = getModifiedPluginFromName("transform-es2015-destructuring");
		assertPluginIsLoose(plugin);
	});

	it("'transform-es2015-modules-commonjs' plugin should be loose", function () {
		var plugin = getModifiedPluginFromName("transform-es2015-modules-commonjs");
		assertPluginIsLoose(plugin);
	});

});
