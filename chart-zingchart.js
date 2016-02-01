var data = [
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
];

var series = {
    date: [],
    imps: [],
    clicks: []
};

data.forEach(function (datum) {
    series.date.push(datum.date);
    series.imps.push(datum.imps);
    series.clicks.push(datum.clicks);
});

var chartConfig={
    type: 'mixed',
    scaleX: {
        values: series.date
    },
    scaleY: {
        label: {
            text: 'Clicks'
        }
    },
    scaleY2: {
        label: {
            text: 'Impressions'
        }
    },
    series: [{
        type: 'bar',
        values: series.imps,
        scales: 'scale-x,scale-y-2'
    }, {
        type: 'line',
        values: series.clicks,
        scales: 'scale-x,scale-y'
    }]
};

zingchart.render({
    data: chartConfig,
    id: 'zingchart',
    height: 400,
    width: 600
});
