var redomx = require('redomx')
var pluginUtils = require('rollup-pluginutils')
var createFilter = pluginUtils.createFilter

module.exports = function redomx ( options = {} ) {
  var filter = createFilter( options.include, options.exclude );

  return {
    transform ( code, id ) {
      if ( !filter( id ) ) return;

      var result = redomx(code)

      code = result.code

      // proceed with the transformation...
      return {
        code: code,
        map: { mappings: '' }
      };
    }
  };
}
