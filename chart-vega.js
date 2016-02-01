var config = {
    width: 600,
    height: 300,
    padding: {
        top: 10,
        right: 50,
        bottom: 50,
        left: 60
    },

    signals: [{
        name: 'tooltip',
        init: {},
        streams: [{
            type: 'rect:mouseover',
            expr: 'datum'
        }, {
            type: 'rect:mouseout',
            expr: '{}'
        }]
    }],

    data: [{
        name: 'data',
        values: [
            { date: '2015-02-03', imps: 7643, clicks: 57 },
            { date: '2015-02-04', imps: 2779, clicks: 13 },
            { date: '2015-02-18', imps: 6562, clicks: 69 },
            { date: '2015-03-02', imps: 7208, clicks: 37 },
            { date: '2015-03-06', imps: 3117, clicks: 60 },
            { date: '2015-03-09', imps: 6070, clicks: 83 },
            { date: '2015-03-10', imps: 1502, clicks: 81 },
            { date: '2015-03-14', imps: 1790, clicks: 56 },
            { date: '2015-04-03', imps: 5100, clicks: 50 },
            { date: '2015-04-04', imps: 4979, clicks: 2 },
            { date: '2015-04-18', imps: 4471, clicks: 98 },
            { date: '2015-04-19', imps: 2918, clicks: 18 },
            { date: '2015-04-21', imps: 6761, clicks: 13 },
            { date: '2015-05-22', imps: 7527, clicks: 24 },
            { date: '2015-05-27', imps: 1392, clicks: 39 },
            { date: '2015-06-07', imps: 1187, clicks: 11 },
            { date: '2015-06-23', imps: 5496, clicks: 3 },
            { date: '2015-06-24', imps: 4587, clicks: 3 },
            { date: '2015-07-03', imps: 5767, clicks: 32 },
            { date: '2015-07-04', imps: 4310, clicks: 54 },
            { date: '2015-08-03', imps: 1166, clicks: 67 },
            { date: '2015-09-04', imps: 1307, clicks: 41 },
            { date: '2015-09-24', imps: 3444, clicks: 12 },
            { date: '2015-10-18', imps: 4356, clicks: 71 },
            { date: '2015-11-04', imps: 7597, clicks: 5 },
            { date: '2015-11-06', imps: 6871, clicks: 38 },
            { date: '2015-12-06', imps: 4495, clicks: 90 },
            { date: '2015-12-18', imps: 5918, clicks: 20 },
            { date: '2015-12-31', imps: 6077, clicks: 78 },
            { date: '2016-01-13', imps: 2839, clicks: 52 }
        ],
        transform: [{
            field: 'date',
            type: 'formula',
            expr: 'datetime(datum.date)'
        }]
    }],

    predicates: [{
        name: 'tooltip',
        type: '==',
        operands: [{
            signal: 'tooltip._id'
        }, {
            arg: 'id'
        }]
    }],

    scales: [{
        name: 'x',
        type: 'time',
        range: 'width',
        domain: {
            data: 'data',
            field: 'date'
        }
    }, {
        name: 'imps',
        type: 'linear',
        range: 'height',
        domain: {
            data: 'data',
            field: 'imps'
        },
        nice: true
    }, {
        name: 'clicks',
        type: 'linear',
        range: 'height',
        domain: {
            data: 'data',
            field: 'clicks'
        },
        nice: true
    }],

    axes: [{
        type: 'x',
        scale: 'x',
        title: 'Date',
        tickSizeEnd: 0
    }, {
        type: 'y',
        scale: 'imps',
        title: 'Impressions'
    }, {
        type: 'y',
        scale: 'clicks',
        title: 'Clicks',
        orient: 'right'
    }],

    marks: [{
        type: 'rect',
        from: {
            data: 'data'
        },
        properties: {
            enter: {
                x: {
                    scale: 'x',
                    field: 'date'
                },
                width: {
                    value: 10
                },
                y: {
                    scale: 'imps',
                    field: 'imps'
                },
                y2: {
                    scale: 'imps',
                    value: 0
                }
            },
            update: {
                fill: {
                    rule: [{
                        predicate: {
                            name: 'tooltip',
                            id: {
                                field: '_id'
                            }
                        },
                        value: '#f56b2a'
                    }, {
                        value: '#e7e7e7'
                    }]
                }
            }
        }
    }, {
        type: 'line',
        from: {
            data: 'data'
        },
        properties: {
            enter: {
                x: { scale: 'x', field: 'date' },
                y: { scale: 'clicks', field: 'clicks' },
                stroke: { value: 'red' },
                strokeWidth: { value: 2 }
            }
        }
    }, {
        type: 'text',
        properties: {
            enter: {
                align: {
                    value: 'center'
                },
                fill: {
                    value: '#f56b2a'
                }
            },
            update: {
                x: {
                    scale: 'x',
                    signal: 'tooltip.date'
                },
                y: {
                    scale: 'imps',
                    signal: 'tooltip.imps',
                    offset: -5
                },
                text: {
                    signal: 'tooltip.imps'
                },
                fillOpacity: {
                    rule: [{
                        predicate: {
                            name: 'tooltip',
                            id: {
                                value: null
                            }
                        },
                        value: 0
                    }, {
                        value: 1
                    }]
                }
            }
        }
    }]
};

vg.parse.spec(config, function (error, chart) {
    chart({ el: document.querySelector('#vega') }).update();
});
