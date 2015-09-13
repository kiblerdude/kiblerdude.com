KiblerDude.com
==============

This is the code for my personal website.  The development uses nodejs (4.0.0), bower, and grunt.


### Development Setup

Node package manager can be used to install grunt and bower:

  $ npm install
  $ npm install -g bower
  $ bower install

This should install all the dependencies required.

### Building

Grunt is used for building the project.  See the `package.json` and `Gruntfile.js` files.

	$ grunt
	Running ...
	...
	Done, without errors.

This produces a build in the `dist` directory that may be deployed to a server.