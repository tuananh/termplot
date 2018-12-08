const asciichart = require('asciichart')
const clear = require('clear')
const got = require('got')
const { get } = require('lodash')

async function plot(input, flags, values) {
    clear()
    const { body: data} = await got(flags.url, { json: true })

    if (values.length > 1000) {
        values = []
    }
    values.push(get(data, input))

    console.log(asciichart.plot(values, { height: flags.rows || 10}))
}

function termplot(input, flags) {
    if (!flags.url) {
        throw new Error('url is required')
    }
    let values = []
    setInterval(function () {
        plot(input, flags, values)
    }, flags.interval || 1000)
}

module.exports = termplot
