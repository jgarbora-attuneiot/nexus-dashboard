<script setup lang="ts">
import type { ApexOptions } from "apexcharts";

const chartOptions: ApexOptions = {
    xaxis: {
        categories: ["Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    },
    yaxis: {
        labels: {
            formatter: function (value) {
                return `${value}K`;
            },
        },
    },
    chart: {
        type: "area",
        height: 380,
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
    },
    colors: ["#167bff", "#FDA403"],
    fill: {
        type: "solid",
        opacity: 0.6,
    },
    stroke: {
        curve: "smooth",
        width: 2,
    },
    dataLabels: {
        enabled: false,
    },
    legend: {
        show: true,
        position: "top",
    },
    series: [
        {
            name: "Basic Plan",
            data: [31, 40, 28, 51, 42, 72, 60],
        },
        {
            name: "Premium Plan",
            data: [11, 32, 45, 32, 34, 52, 41],
        },
    ],
};

const chartRef = ref<HTMLDivElement | null>(null);
onMounted(async () => {
    const ApexCharts = (await import("apexcharts")).default;
    if (chartRef.value) {
        new ApexCharts(chartRef.value, chartOptions).render();
    }
});
</script>

<template>
    <div ref="chartRef"></div>
</template>
