/**
 * @fileoverview Unit tests for JSON Object formatter.
 */

import anyTest, { TestFn, ExecutionContext } from 'ava';
import * as sinon from 'sinon';
import * as proxyquire from 'proxyquire';

import * as problems from './fixtures/list-of-problems';
import * as results from './fixtures/expected-results';

type Logging = {
    log: () => void;
};

type WriteFileAsync = () => void;

type JSONObjectContext = {
    logging: Logging;
    loggingLogSpy: sinon.SinonSpy<any, void>;
    writeFileAsync: WriteFileAsync;
    writeFileAsyncDefaultStub: sinon.SinonStub<any, void>;
};

const test = anyTest as TestFn<JSONObjectContext>;

const initContext = (t: ExecutionContext<JSONObjectContext>) => {
    t.context.logging = { log() { } };
    t.context.loggingLogSpy = sinon.spy(t.context.logging, 'log');
    t.context.writeFileAsync = () => { };
    t.context.writeFileAsyncDefaultStub = sinon.stub(t.context, 'writeFileAsync').returns();
};

const loadScript = (context: JSONObjectContext) => {
    const script = proxyquire('../src/formatter', {
        '@hint/utils': { logger: context.logging },
        '@hint/utils-fs': { writeFileAsync: context.writeFileAsync }
    });

    return script.default;
};

test.beforeEach(initContext);

test.afterEach.always((t) => {
    t.context.loggingLogSpy.restore();
});

test(`JSON object formatter doesn't print anything if there are no values`, (t) => {
    const JsonObjectFormatter = loadScript(t.context);
    const formatter = new JsonObjectFormatter();

    formatter.format(problems.noProblems);

    t.false(t.context.loggingLogSpy.called);
    t.false(t.context.writeFileAsyncDefaultStub.called);
});

test(`JSON object formatter prints the result in the console`, (t) => {
    const JsonObjectFormatter = loadScript(t.context);
    const formatter = new JsonObjectFormatter();

    formatter.format(problems.multipleProblems);

    const loggingLogSpy = t.context.loggingLogSpy;
    const writeFileAsyncDefaultStub = t.context.writeFileAsyncDefaultStub;
    const firstCall = loggingLogSpy.firstCall;
    const expectedResult = results.multipleProblems;

    t.true(loggingLogSpy.calledOnce);
    t.false(writeFileAsyncDefaultStub.called);
    t.deepEqual(firstCall.args[0], expectedResult);
    t.false(t.context.writeFileAsyncDefaultStub.called);
});

test('JSON object formatter only prints the result once even if there are multiple resources', (t) => {
    const JsonObjectFormatter = loadScript(t.context);
    const formatter = new JsonObjectFormatter();

    formatter.format(problems.multipleProblemsAndResources);

    const loggingLogSpy = t.context.loggingLogSpy;
    const writeFileAsyncDefaultStub = t.context.writeFileAsyncDefaultStub;
    const firstCall = loggingLogSpy.firstCall;
    const expectedResult = results.multipleProblemsAndResources;

    t.true(loggingLogSpy.calledOnce);
    t.false(writeFileAsyncDefaultStub.called);
    t.deepEqual(firstCall.args[0], expectedResult);
    t.false(t.context.writeFileAsyncDefaultStub.called);
});

test(`JSON object formatter called with the output option should write the result in the output file`, (t) => {
    const JsonObjectFormatter = loadScript(t.context);
    const formatter = new JsonObjectFormatter();
    const outputFile = 'output.json';

    formatter.format(problems.multipleProblems, { output: outputFile });

    const loggingLogSpy = t.context.loggingLogSpy;
    const writeFileAsyncDefaultStub = t.context.writeFileAsyncDefaultStub;
    const firstCall = writeFileAsyncDefaultStub.firstCall;
    const expectedResult = JSON.stringify(results.multipleProblems);

    t.false(loggingLogSpy.called);
    t.true(writeFileAsyncDefaultStub.calledOnce);
    t.is(firstCall.args[0], outputFile);
    t.is(firstCall.args[1], expectedResult);
});

test('JSON object formatter only saves one file with the result even if there are multiple resources', (t) => {
    const JsonObjectFormatter = loadScript(t.context);
    const formatter = new JsonObjectFormatter();
    const outputFile = 'output.json';

    formatter.format(problems.multipleProblemsAndResources, { output: outputFile });

    const loggingLogSpy = t.context.loggingLogSpy;
    const writeFileAsyncDefaultStub = t.context.writeFileAsyncDefaultStub;
    const firstCall = writeFileAsyncDefaultStub.firstCall;
    const expectedResult = JSON.stringify(results.multipleProblemsAndResources);

    t.false(loggingLogSpy.called);
    t.true(writeFileAsyncDefaultStub.calledOnce);
    t.is(firstCall.args[0], outputFile);
    t.is(firstCall.args[1], expectedResult);
});
