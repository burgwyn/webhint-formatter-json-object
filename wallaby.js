module.exports = function (wallaby) {
    return {
        env: {
            params: { runner: '--experimental-vm-modules' },
            type: 'node'
        },
        files: [
            'package.json',
            'tsconfig.json',
            'src/**/*.ts',
            '!tests/**/*.ts'
        ],
        testFramework: 'ava',
        tests: [
            'tests/**/*.ts'
        ]
    };
};
