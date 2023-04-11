module.exports = {
    failFast: false,
    files: [
        'dist/tests/**/*.js',
        '!dist/tests/**/fixtures/**/*.js'
    ],
    timeout: '2m',
    workerThreads: false
};
