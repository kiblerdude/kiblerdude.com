module.exports = function(grunt) {

  grunt.initConfig({
    // cleanup the last build
    clean: {
      build: ["dist/"]
    },
    // create a dist directory and copy all the necessary files
    copy: {
      main: {
        expand: true,
        src: [ ".htaccess", "web.config", "config.yml", "index.php", "src/**", "images/**", "data/**", "scripts/**", "vendor/**" ],
        dest: "dist/",
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('default', ['clean','copy']);

};