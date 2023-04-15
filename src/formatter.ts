/**
 * @fileoverview JSON Object formatter, it stringifies whatever
 * object is passed to it.
 */

/*
 * ------------------------------------------------------------------------------
 * Requirements
 * ------------------------------------------------------------------------------
 */

import groupBy = require('lodash/groupBy');
import reduce = require('lodash/reduce');
import sortBy = require('lodash/sortBy');

import { FormatterOptions, IFormatter } from 'hint';
import { logger } from '@hint/utils';
import { debug as d } from '@hint/utils-debug';
import { writeFileAsync } from '@hint/utils-fs';
import { Problem } from '@hint/utils-types';

const _ = {
    groupBy,
    reduce,
    sortBy
};

const debug = d(__filename);

/*
 * ------------------------------------------------------------------------------
 * Formatter
 * ------------------------------------------------------------------------------
 */

export default class JSONObjectFormatter implements IFormatter {

    public async format(messages: Problem[], options: FormatterOptions = {}) {

        debug('Formatting results');

        // exit if there are no problems
        if (messages.length === 0) {
            return;
        }

        // group problems by resource
        const resources: _.Dictionary<Problem[]> = _.groupBy(messages, 'resource');

        // create a single array of problems, sorted by resoource
        const result = _.reduce(resources, (result: Problem[] = [], msgs: Problem[]) => {

            // sort messages by line, column
            const sortedMessages: any = _.sortBy<Problem[]>(msgs, ['location.line', 'location.column']);

            result.push(...sortedMessages);

            return result;
        }, []);

        // log to console if not writing to file
        if (!options.output) {
            logger.log(result);

            return;
        }

        await writeFileAsync(options.output, JSON.stringify(result));
    }
}
