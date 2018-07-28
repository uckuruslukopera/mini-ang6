System.config({
    paths: {
        'npm': '/node_modules'
    },
    map: {
        app: 'dist/app',
        'core-js': 'npm:core-js',
        'zone.js': 'npm:zone.js',
        'rxjs': 'npm:rxjs',
        'tslib': 'npm:tslib/tslib.js'
    },
    packages: {
        'dist/app': {},
        'rxjs': {},
        'core-js': {},
        'zone.js': {}
    }
});