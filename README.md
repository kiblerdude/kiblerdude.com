KiblerDude.com
==============

This is the code for my personal website.

### PHP Development

Composer is used for PHP dependency management.  See the `composer.json` file.

	$ curl -s http://getcomposer.org/installer | php
	$ php composer.phar install

### Javascript Development

Bower is used for Javascript dependency management.  See the `bower.json` file.

	$ bower install

### Grunt

Grunt is used for building the project.  See the `package.json` and `Gruntfile.js` files.

	$ grunt
	Running ...
	...
	Done, without errors.

This produces a build in the `dist` directory that may be deployed to a server.