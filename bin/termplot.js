#!/usr/bin/env node
'use strict'
const meow = require('meow')
const termplot = require('../src')

const cli = meow(
    `
	Usage
        $ termplot --url http://localhost:3000 --rows 10 mem.Heap

	Options
        --url, -u  url to get
        --rows, -r  max rows to use (aka height)
        --interval, -i refresh interval (default: 1000 ms)

	Examples
        $ termplot --url http://localhost:3000 --rows 10 mem.Heap
`,
    {
        flags: {
            url: {
                type: 'string',
                alias: 'u'
            },
            rows: {
                type: 'string',
                alias: 'r'
            },
            interval: {
                type: 'string',
                alias: 'i'
            }
        }
    }
)

// TODO: only plot the first input; limitation of asciichart lib
termplot(cli.input[0], cli.flags)
