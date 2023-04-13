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

export default class JSONObjectFormatter implements IFormatter {

    public async format(messages: Problem[], options: FormatterOptions = {}) {

        debug('Formatting results');

        if (messages.length === 0) {
            return;
        }

        const resources: _.Dictionary<Problem[]> = _.groupBy(messages, 'resource');

        const result = _.reduce(resources, (result: Problem[] = [], msgs: Problem[]) => {
            const sortedMessages: any = _.sortBy<Problem[]>(msgs, ['location.line', 'location.column']);

            result.push(...sortedMessages);

            return result;

        }, []);

        if (!options.output) {
            logger.log(result);

            return;
        }

        await writeFileAsync(options.output, JSON.stringify(result));
    }
}
