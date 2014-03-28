"use strict";

module.exports = function(grunt) {
    grunt.initConfig({
        coffee: {
            development: {
                options: {
                    bare: true
                },
                files: [
                    {
                        expand: true,
                        cwd: "public/scripts/coffee",
                        src: ["**/*.coffee"],
                        dest: "public/scripts/",
                        ext: ".js"
                    }
                ]
            }
        },
        compass: {
            options: {
                debugInfo: false,
                force: true,
                require: ["breakpoint", "susy"],
                cssDir: "public/styles",
                sassDir: "public/styles/sass",
                cacheDir: "public/styles/sass/.cache"
            },
            development: {
                options: {
                    outputStyle: "nested"
                }
            },
            production: {
                options: {
                    outputStyle: "compressed"
                }
            }
        },
        copy: {
            development: {
                files: [
                    {
                        expand: true,
                        filter: "isFile",
                        flatten: true,
                        cwd: "bower_components",
                        src: [
                            "angular/**/angular.min.js",
                            "angular-animate/**/angular-animate.min.js",
                            "angular-cookies/**/angular-cookies.min.js",
                            "angular-route/**/angular-route.min.js",
                            "angular-touch/**/angular-touch.min.js",
                            "jquery/**/jquery.min.js",
                            "modernizr/**/modernizr.js",
                            "gsap/**/TweenMax.min.js"
                        ],
                        dest: "public/scripts/components/"
                    },
                    {
                        "public/styles/components/normalize.css": ["bower_components/normalize.css/normalize.css"]
                    }
                ]
            }
        },
        imagemin: {
            production: {
                options: {
                    pngquant: true
                },
                files: [
                    {
                        expand: true,
                        cwd: "public/images",
                        src: ["**/*.{jpg,png,gif}"],
                        dest: "public/images/"
                    }
                ]
            }
        },
        jade: {
            production: {
                files: [
                    {
                        expand: true,
                        cwd: "views",
                        src: ["*.jade"],
                        dest: "public/",
                        ext: ".html"
                    },
                    {
                        expand: true,
                        cwd: "views/partials",
                        src: ["*.jade"],
                        dest: "public/partials/",
                        ext: ".html"
                    }
                ]
            }
        },
        jshint: {
            development: {
                options: {
                    browser: true,
                    camelcase: true,
                    curly: true,
                    eqeqeq: true,
                    eqnull: true,
                    indent: 4,
                    globals: {
                        $: true,
                        angular: true,
                        jquery: true,
                        tweenmax: true
                    }
                },
                files: [
                    {
                        src: ["public/scripts/*.js"]
                    }
                ]
            }
        },
        uglify: {
            options: {
                mangle: true
            },
            files: {
                "public/scripts/app.min.js": ["public/scripts/*.js"]
            }
        },
        watch: {
            options: {
                livereload: true
            },
            views: {
                files: ["views/**/*.jade"]
            },
            styles: {
                files: ["public/styles/**/*.scss"],
                tasks: ["compass:development"]
            },
            scripts: {
                files: [
                    "public/scripts/coffee/**/*.coffee",
                    "public/scripts/**/*.js"
                ],
                tasks: [
                    "coffee:development",
                    "jshint:development"
                ]
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-coffee");
    grunt.loadNpmTasks("grunt-contrib-compass");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-contrib-imagemin");
    grunt.loadNpmTasks("grunt-contrib-jade");
    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-watch");

    grunt.registerTask("default", [
        "copy",
        "compass:development",
        "coffee:development",
        "jshint:development",
        "watch"
    ]);

    grunt.registerTask("production", [
        "compass:production",
        "jade:production",
        "uglify",
        "imagemin"
    ]);
};
