<script setup lang="ts">
const features = [
    {
        icon: "lucide--layers",
        title: "Framework Flexibility",
        description: "Integrate effortlessly with multiple frameworks to speed up development",
        iconClass: "text-blue-500 bg-blue-500/5",
        cardClass: "hover:border-blue-500/40 hover:bg-blue-500/5",
    },
    {
        icon: "lucide--monitor-dot",
        title: "User-Friendly Dashboard",
        description: "Enjoy a sleek, responsive design for easy navigation and real-time insights",
        iconClass: "text-violet-500 bg-violet-500/5",
        cardClass: "hover:border-violet-500/40 hover:bg-violet-500/5",
    },
    {
        icon: "lucide--package",
        title: "Ready-to-Use UI",
        description: "Quickly prototype with ready-made buttons, forms, and tables",
        iconClass: "text-cyan-600 bg-cyan-600/5",
        cardClass: "hover:border-cyan-600/40 hover:bg-cyan-600/5",
    },
    {
        icon: "lucide--line-chart",
        title: "Dynamic Charts",
        description: "Create interactive line, bar, pie charts, and visuals with ease",
        iconClass: "text-fuchsia-500 bg-fuchsia-500/5",
        cardClass: "hover:border-fuchsia-500/40 hover:bg-fuchsia-500/5",
    },
    {
        icon: "lucide--palette",
        title: "Versatile Themes",
        description: "Explore themes like light, dark, material, high contrast, and system modes",
        iconClass: "text-orange-400 bg-orange-500/5",
        cardClass: "hover:border-orange-400/40 hover:bg-orange-400/5",
    },
    {
        icon: "lucide--pencil-ruler",
        title: "Consistent Design System",
        description: "Ensure a cohesive look with standardized typography, colors, and spacing",
        iconClass: "text-teal-500 bg-teal-500/5",
        cardClass: "hover:border-teal-500/40 hover:bg-teal-500/5",
    },
    {
        icon: "lucide--monitor-smartphone",
        title: "Responsive Everywhere",
        description: "Enjoy a seamless and consistent experience across all devices",
        iconClass: "text-blue-500 bg-blue-500/5",
        cardClass: "hover:border-blue-500/40 hover:bg-blue-500/5",
    },
    {
        icon: "lucide--pencil-line",
        title: "Fully Customizable",
        description: "Boost creativity with tools that bring your ideas to life.",
        iconClass: "text-violet-500 bg-violet-500/5",
        cardClass: "hover:border-violet-500/40 hover:bg-violet-500/5",
    },
] as const;
</script>

<template>
    <div class="container py-8 md:py-12 xl:py-16 2xl:py-24">
        <div class="text-center">
            <div class="inline-flex items-center rounded border border-indigo-500/10 bg-indigo-500/5 p-2">
                <span class="iconify lucide--wand-2 size-5 text-indigo-600"></span>
            </div>
            <p id="fade-in" class="custom-fade-in mt-4 text-3xl font-semibold">Transform Your Journey</p>
            <p class="text-base-content/70 mt-3 inline-block max-w-lg">
                Discover the perfect blend of intuitive design and engaging visuals that will elevate your experience at
                every turn.
            </p>
        </div>

        <div class="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:mt-16 xl:grid-cols-4 2xl:mt-24 2xl:gap-6">
            <div
                v-for="(feature, index) in features"
                :key="index"
                class="card border-base-300 cursor-pointer border"
                :class="feature.cardClass">
                <div class="card-body">
                    <div>
                        <div class="inline-flex items-center rounded p-2" :class="feature.iconClass">
                            <span class="iconify" :class="`${feature.icon} size-6`"></span>
                        </div>
                        <p class="mt-3 text-lg font-medium">{{ feature.title }}</p>
                        <p class="text-base-content/80 mt-0.5 line-clamp-2 text-sm overflow-ellipsis">
                            {{ feature.description }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
