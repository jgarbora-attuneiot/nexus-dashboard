<script setup lang="ts">
import type { ApexOptions } from "apexcharts";

const chartOptions: ApexOptions = {
    chart: {
        type: "line",
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
    xaxis: {
        categories: ["May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        title: {
            text: "Monthly Revenue by Platform",
            style: { fontWeight: "500" },
        },
    },
    yaxis: {
        labels: {
            formatter: (value) => (value / 100).toFixed(0) + "K",
            offsetX: -5,
        },
        min: 3000,
    },
    stroke: {
        curve: "smooth",
        width: 2,
    },
    dataLabels: {
        enabled: true,
        formatter: (value) => (Number(value) / 100).toFixed(0),
        background: {
            borderColor: "var(--color-base-100)",
        },
    },
    tooltip: {
        y: {
            formatter: (value) => `${(Number(value) / 100).toFixed(2)}K`,
        },
    },
    colors: ["#167bff", "#A25772", "#FB6D48", "#FDA403"],
    series: [
        {
            name: "eBay",
            data: [12105, 11562, 10697, 12126, 12817, 12070, 12403, 12758],
        },
        {
            name: "Walmart",
            data: [8866, 9566, 8821, 8799, 9272, 9109, 9272, 8601],
        },
        {
            name: "Amazon",
            data: [7680, 7685, 7293, 6952, 6568, 7572, 6538, 6498],
        },
        {
            name: "Best Buy",
            data: [4537, 5892, 4271, 4923, 5186, 4419, 5548, 4720],
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
