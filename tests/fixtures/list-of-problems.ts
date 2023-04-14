/**
 * @fileoverview Problem objects for unit test fixtures.
 */

import { Category, Problem, Severity } from '@hint/utils-types';

// Array of multiple problems
const multipleProblems: Problem[] = [{
    category: Category.other,
    hintId: 'random-hint',
    location: {
        column: 10,
        line: 1
    },
    message: 'This is a problem in line 1 column 10',
    resource: 'http://myresource.com/',
    severity: Severity.warning,
    sourceCode: ''
},
{
    category: Category.other,
    hintId: 'random-hint',
    location: {
        column: 1,
        line: 10
    },
    message: 'This is a problem in line 10',
    resource: 'http://myresource.com/',
    severity: Severity.warning,
    sourceCode: ''
},
{
    category: Category.other,
    hintId: 'random-hint',
    location: {
        column: 1,
        line: 5
    },
    message: 'This is a problem in line 5',
    resource: 'http://myresource.com/',
    severity: Severity.warning,
    sourceCode: ''
},
{
    category: Category.other,
    hintId: 'random-hint',
    location: {
        column: 1,
        line: 1
    },
    message: 'This is a problem in line 1 column 1',
    resource: 'http://myresource.com/',
    severity: Severity.warning,
    sourceCode: ''
}];

// Array of multiple problems from multiple resources
const multipleProblemsAndResources: Problem[] = [{
    category: Category.other,
    hintId: 'random-hint',
    location: {
        column: 1,
        line: 5
    },
    message: 'This is a problem in line 5',
    resource: 'http://myresource.com/',
    severity: Severity.warning,
    sourceCode: ''
}, {
    category: Category.other,
    hintId: 'random-hint',
    location: {
        column: 10,
        line: 1
    },
    message: 'This is a problem in line 1 column 10',
    resource: 'http://myresource2.com/',
    severity: Severity.warning,
    sourceCode: ''
},
{
    category: Category.other,
    hintId: 'random-hint',
    location: {
        column: 1,
        line: 10
    },
    message: 'This is a problem in line 10',
    resource: 'http://myresource2.com/',
    severity: Severity.warning,
    sourceCode: ''
},
{
    category: Category.other,
    hintId: 'random-hint',
    location: {
        column: 1,
        line: 1
    },
    message: 'This is a problem in line 1 column 1',
    resource: 'http://myresource.com/',
    severity: Severity.warning,
    sourceCode: ''
}];

// Empty array of problems
const noProblems: Problem[] = [];

export {
    multipleProblems,
    multipleProblemsAndResources,
    noProblems
};
