<script setup lang="ts">
import type { ApexOptions } from "apexcharts";

const xAxisOption: ApexOptions["xaxis"] = {
    type: "datetime",
    categories: [
        1735287404201, 1735201004201, 1735114604201, 1735028204201, 1734941804201, 1734855404201, 1734769004201,
        1734682604201, 1734596204201, 1734509804201, 1734423404201, 1734337004201, 1734250604201, 1734164204201,
        1734077804201,
    ],
    max: 1735287404201,
};

const orderChartOptions: ApexOptions = {
    chart: {
        type: "line",
        height: 120,
        toolbar: {
            show: true,
            tools: {
                download: true,
                zoom: false,
                zoomin: false,
                zoomout: false,
                pan: false,
                reset: false,
            },
        },
        background: "transparent",
        id: "order-placed",
        group: "order",
    },
    xaxis: xAxisOption,

    stroke: {
        width: 2,
    },
    series: [
        {
            color: "#167bff",
            name: "Orders",
            data: [112, 108, 137, 172, 184, 190, 198, 192, 145, 130, 121, 145, 134, 128, 80],
        },
    ],
};

const revenueChartOptions: ApexOptions = {
    chart: {
        type: "line",
        height: 120,
        toolbar: {
            show: true,
            tools: {
                download: true,
                zoom: false,
                zoomin: false,
                zoomout: false,
                pan: false,
                reset: false,
            },
        },
        background: "transparent",
        id: "order-revenue",
        group: "order",
    },
    xaxis: xAxisOption,
    yaxis: {
        labels: {
            formatter: (val) => (val / 1000).toFixed(0) + "K",
        },
    },
    tooltip: {
        y: {
            formatter: (val) => `${(val / 1000).toFixed(2)}K`,
        },
    },
    stroke: {
        width: 2,
    },
    series: [
        {
            color: "#FFC700",
            name: "Revenue",
            data: [
                11326.56, 12121.92, 21411.73, 28822.04, 18217.84, 18331.2, 18117, 18958.08, 14685.6, 19505.2, 19390.25,
                24960.3, 19194.16, 18012.16, 7988,
            ],
        },
    ],
};

const averageChartOptions: ApexOptions = {
    chart: {
        type: "line",
        height: 120,
        toolbar: {
            show: true,
            tools: {
                download: true,
                zoom: false,
                zoomin: false,
                zoomout: false,
                pan: false,
                reset: false,
            },
        },
        background: "transparent",
        id: "order-average",
        group: "order",
    },
    xaxis: xAxisOption,
    yaxis: {
        labels: {
            formatter: (val) => val.toFixed(0),
        },
    },
    tooltip: {
        y: {
            formatter: (val) => `${val}`,
        },
    },
    stroke: {
        width: 2,
    },
    series: [
        {
            color: "#FFAD84",
            name: "Average",
            data: [
                101.13, 112.24, 156.29, 167.57, 99.01, 96.48, 91.5, 98.74, 101.28, 150.04, 160.25, 172.14, 143.24,
                140.72, 99.85,
            ],
        },
    ],
};

const chart1Ref = ref<HTMLDivElement | null>(null);
const chart2Ref = ref<HTMLDivElement | null>(null);
const chart3Ref = ref<HTMLDivElement | null>(null);

onMounted(async () => {
    const ApexCharts = (await import("apexcharts")).default;
    if (chart1Ref.value && chart2Ref.value && chart3Ref.value) {
        new ApexCharts(chart1Ref.value, orderChartOptions).render();
        new ApexCharts(chart2Ref.value, revenueChartOptions).render();
        new ApexCharts(chart3Ref.value, averageChartOptions).render();
    }
});
</script>

<template>
    <div>
        <div ref="chart1Ref"></div>
        <div ref="chart2Ref"></div>
        <div ref="chart3Ref"></div>
    </div>
</template>
