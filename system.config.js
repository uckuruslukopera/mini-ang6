System.config({
    paths: {
        'npm': '/node_modules'
    },
    map: {
        app: 'dist/app',
        'core-js': 'npm:core-js',
        'zone.js': 'npm:zone.js',
        'rxjs': 'npm:rxjs',
        'tslib': 'npm:tslib/tslib.js',
        '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
        '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
        '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
        '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
        '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
    },
    packages: {
        'dist/app': {},
        'rxjs': {},
        'core-js': {},
        'zone.js': {}
    }
});