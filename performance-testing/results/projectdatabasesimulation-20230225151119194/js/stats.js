var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "11",
        "ok": "9",
        "ko": "2"
    },
    "minResponseTime": {
        "total": "11",
        "ok": "16",
        "ko": "11"
    },
    "maxResponseTime": {
        "total": "1125",
        "ok": "1125",
        "ko": "11"
    },
    "meanResponseTime": {
        "total": "133",
        "ok": "161",
        "ko": "11"
    },
    "standardDeviation": {
        "total": "316",
        "ok": "343",
        "ko": "0"
    },
    "percentiles1": {
        "total": "25",
        "ok": "27",
        "ko": "11"
    },
    "percentiles2": {
        "total": "33",
        "ok": "34",
        "ko": "11"
    },
    "percentiles3": {
        "total": "634",
        "ok": "732",
        "ko": "11"
    },
    "percentiles4": {
        "total": "1027",
        "ok": "1046",
        "ko": "11"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 8,
    "percentage": 73
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 1,
    "percentage": 9
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "htmlName": "t ≥ 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 2,
    "percentage": 18
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.1",
        "ok": "0.9",
        "ko": "0.2"
    }
},
contents: {
"req_get-c5558": {
        type: "REQUEST",
        name: "Get",
path: "Get",
pathFormatted: "req_get-c5558",
stats: {
    "name": "Get",
    "numberOfRequests": {
        "total": "11",
        "ok": "9",
        "ko": "2"
    },
    "minResponseTime": {
        "total": "11",
        "ok": "16",
        "ko": "11"
    },
    "maxResponseTime": {
        "total": "1125",
        "ok": "1125",
        "ko": "11"
    },
    "meanResponseTime": {
        "total": "133",
        "ok": "161",
        "ko": "11"
    },
    "standardDeviation": {
        "total": "316",
        "ok": "343",
        "ko": "0"
    },
    "percentiles1": {
        "total": "25",
        "ok": "27",
        "ko": "11"
    },
    "percentiles2": {
        "total": "33",
        "ok": "34",
        "ko": "11"
    },
    "percentiles3": {
        "total": "634",
        "ok": "732",
        "ko": "11"
    },
    "percentiles4": {
        "total": "1027",
        "ok": "1046",
        "ko": "11"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 8,
    "percentage": 73
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 1,
    "percentage": 9
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "htmlName": "t ≥ 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 2,
    "percentage": 18
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.1",
        "ok": "0.9",
        "ko": "0.2"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
