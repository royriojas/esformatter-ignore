//jshint node:true, eqnull:true
/*global describe, it, before*/
'use strict';
var fs = require( 'fs' );
var path = require( 'path' );
var esformatter = require( 'esformatter' );
var plugin = require( '../' );

var readFile = function ( folder, name ) {
  var filePath = path.join( './specs', folder, name );
  return fs.readFileSync( filePath ).toString();
};

describe( 'esformatter-ignore', function () {
  before( function () {
    esformatter.register( plugin );
  } );

  describe( 'when files contain ignore comments', function () {
    var files = fs.readdirSync( './specs/fixtures/' );

    files.forEach( function ( file ) {
      it( 'should transform fixture ' + file + ' and be equal expected file', function () {
        var input = readFile( 'fixtures', file );

        var actual = esformatter.format( input );
        var expected = readFile( 'expected', file );

        //fs.writeFileSync('./specs/expected/' + path.basename(file), actual);

        expect( expected ).to.equal( actual, 'file comparison failed: ' + file );

      } );
    } );
  } );

} );
