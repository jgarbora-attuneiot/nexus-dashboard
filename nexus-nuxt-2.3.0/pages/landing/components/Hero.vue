<script lang="ts" setup>
import Swiper from "swiper";
import "swiper/css";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const swiperOptions = {
    slidesPerView: 1,
    cardsEffect: {
        rotate: false,
        perSlideOffset: 10,
        slideShadows: false,
    },
    loop: true,
    speed: 1500,
    autoplay: {
        delay: 5000,
    },
    spaceBetween: 20,
    navigation: {
        prevEl: ".hero-swiper-button-prev",
        nextEl: ".hero-swiper-button-next",
    },
    modules: [Navigation, Pagination, Autoplay],
};

onMounted(() => {
    new Swiper("#hero-swiper", swiperOptions);
});
</script>
<template>
    <div class="relative">
        <div
            class="absolute inset-0 -top-2 h-[1600px] bg-[url(/images/landing/hero-bg-gradient.png)] [background-size:200%_60%] bg-no-repeat opacity-20 [background-position-x:center] sm:[background-size:100%_100%] dark:opacity-15"></div>

        <div class="relative z-10 container py-28 xl:py-40">
            <div class="flex flex-col items-center">
                <NuxtLink
                    class="badge badge-secondary rounded-full"
                    href="https://nexus.daisyui.com/docs/"
                    target="_blank">
                    <span class="iconify lucide--sparkles size-3"></span>
                    Revamped for You
                </NuxtLink>
                <div
                    class="mt-4 max-w-[700px] transition-all duration-1000 starting:scale-125 starting:opacity-0 starting:blur-sm">
                    <p class="text-center text-xl leading-tight font-bold md:text-5xl">
                        Boost Your Workflow, <br />
                        <span class="landing-gradient-underline">Redefine</span> Success with {{ " " }}
                        <span class="animated-text from-primary bg-linear-to-r via-blue-500 to-purple-500">
                            Nexus
                        </span>
                    </p>
                </div>
                <div
                    class="mt-6 max-w-[500px] transition-all duration-1000 xl:mt-8 starting:opacity-0 starting:blur-sm">
                    <p class="text-center sm:text-lg">
                        Start your next project with Nexus, designed for effortless customization to streamline your
                        development process.
                    </p>
                </div>

                <div
                    class="mt-6 inline-flex items-center gap-3 transition-all delay-300 duration-1000 sm:gap-5 xl:mt-10 starting:opacity-0 starting:blur-sm">
                    <NuxtLink
                        href="https://daisyui.com/store/244268/"
                        target="_blank"
                        class="btn from-primary to-secondary group text-primary-content relative gap-3 border-0 bg-linear-to-r text-base">
                        <span class="iconify lucide--shopping-cart size-4 sm:size-5" />
                        Buy Now
                        <div
                            class="from-primary to-secondary absolute inset-x-1 top-2 -z-1 h-10 bg-linear-to-r opacity-40 blur-md transition-all duration-500 group-hover:inset-x-0 group-hover:opacity-80 group-hover:blur-lg dark:opacity-20 group-hover:dark:!opacity-40"></div>
                    </NuxtLink>
                    <NuxtLink
                        href="/dashboards/ecommerce"
                        class="btn btn-ghost btn-neutral gap-3 !border-transparent text-base dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black">
                        <span class="iconify lucide--monitor-dot size-4 sm:size-5" />
                        Dashboards
                    </NuxtLink>
                </div>
                <div class="relative mt-8 max-w-[95%] md:mt-16 md:max-w-xl lg:max-w-3xl xl:max-w-5xl">
                    <div id="hero-swiper" class="swiper">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide">
                                <div
                                    class="group border-base-100/20 bg-base-100/30 dark:border-px relative w-fit rounded-lg border-2 p-2 dark:border-white/2 dark:bg-white/4">
                                    <img
                                        src="/images/landing/dashboard-ecommerce-light.jpg"
                                        class="h-full w-full rounded-lg dark:hidden"
                                        alt="hero-landing" />
                                    <img
                                        src="/images/landing/dashboard-ecommerce-dark.jpg"
                                        class="hidden h-full w-full rounded-lg dark:block"
                                        alt="hero-landing" />
                                    <NuxtLink
                                        href="/dashboards/ecommerce"
                                        class="dark:via-dark/40 absolute inset-1.5 flex items-end justify-center rounded-lg bg-linear-to-b from-transparent from-[60%] via-black/20 via-[80%] to-black/80 opacity-0 transition-all duration-300 group-hover:opacity-100 dark:to-black">
                                        <div
                                            class="rounded-box mb-8 gap-2.5 bg-white px-4 py-2 text-sm font-medium text-black/80">
                                            Ecommerce Dashboard
                                        </div>
                                    </NuxtLink>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div
                                    class="group border-base-100/20 bg-base-100/30 dark:border-px relative w-fit rounded-lg border-2 p-2 dark:border-white/2 dark:bg-white/4">
                                    <img
                                        src="/images/landing/dashboard-crm-light.jpg"
                                        class="h-full w-full rounded-lg dark:hidden"
                                        alt="hero-landing" />
                                    <img
                                        src="/images/landing/dashboard-crm-dark.jpg"
                                        class="hidden h-full w-full rounded-lg dark:block"
                                        alt="hero-landing" />
                                    <NuxtLink
                                        href="/dashboards/crm"
                                        class="dark:via-dark/40 absolute inset-1.5 flex items-end justify-center rounded-lg bg-linear-to-b from-transparent from-[60%] via-black/20 via-[80%] to-black/80 opacity-0 transition-all duration-300 group-hover:opacity-100 dark:to-black">
                                        <div
                                            class="rounded-box mb-8 gap-2.5 bg-white px-4 py-2 text-sm font-medium text-black/80">
                                            CRM Dashboard
                                        </div>
                                    </NuxtLink>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div
                                    class="group border-base-100/20 bg-base-100/30 dark:border-px relative w-fit rounded-lg border-2 p-2 dark:border-white/2 dark:bg-white/4">
                                    <img
                                        src="/images/landing/dashboard-gen-ai-light.jpg"
                                        class="h-full w-full rounded-lg dark:hidden"
                                        alt="hero-landing" />
                                    <img
                                        src="/images/landing/dashboard-gen-ai-dark.jpg"
                                        class="hidden h-full w-full rounded-lg dark:block"
                                        alt="hero-landing" />
                                    <NuxtLink
                                        href="/dashboards/gen-ai"
                                        class="dark:via-dark/40 absolute inset-1.5 flex items-end justify-center rounded-lg bg-linear-to-b from-transparent from-[60%] via-black/20 via-[80%] to-black/80 opacity-0 transition-all duration-300 group-hover:opacity-100 dark:to-black">
                                        <div
                                            class="rounded-box mb-8 gap-2.5 bg-white px-4 py-2 text-sm font-medium text-black/80">
                                            Gen AI Dashboard
                                        </div>
                                    </NuxtLink>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        class="absolute z-1 flex justify-between max-md:start-1/2 max-md:-bottom-12 max-md:-translate-x-1/2 max-md:gap-3 md:-inset-x-24 md:top-1/2 md:-translate-y-1/2">
                        <button
                            class="hero-swiper-button-prev border-base-200 flex size-8 cursor-pointer items-center justify-center rounded-full bg-white shadow-xs transition-all hover:shadow-md max-md:shadow md:size-10 dark:border-white/10 dark:bg-white/10 dark:hover:bg-white/20">
                            <span class="iconify lucide--chevron-left size-5"></span>
                        </button>
                        <button
                            class="hero-swiper-button-next border-base-200 flex size-8 cursor-pointer items-center justify-center rounded-full bg-white shadow-xs transition-all hover:shadow-md max-md:shadow md:size-10 dark:border-white/10 dark:bg-white/10 dark:hover:bg-white/20">
                            <span class="iconify lucide--chevron-right size-5"></span>
                        </button>
                    </div>
                </div>

                <div class="mt-16 text-center">
                    <p class="text-base-content/60 font-medium">Available In</p>
                    <div class="mt-4 flex flex-wrap items-center justify-center gap-6">
                        <div class="tooltip" data-tip="Tailwind CSS 4">
                            <img src="/images/landing/logo-tailwind.svg" class="size-7 sm:size-9" alt="Tailwind CSS" />
                        </div>
                        <div class="tooltip" data-tip="daisyUI 5 - Component Library">
                            <img src="/images/landing/logo-daisyui.svg" class="size-7 sm:size-9" alt="DaisyUI" />
                        </div>
                        <div class="tooltip" data-tip="Javascript">
                            <img src="/images/landing/logo-js.svg" class="size-7 sm:size-9" alt="Javascript" />
                        </div>

                        <div class="tooltip" data-tip="Typescript 5">
                            <img src="/images/landing/logo-ts.svg" class="size-7 sm:size-9" alt="Typescript" />
                        </div>
                        <div class="tooltip" data-tip="Vite">
                            <img src="/images/landing/logo-vite.svg" class="size-7 sm:size-9" alt="Vite" />
                        </div>

                        <div class="tooltip" data-tip="React 19">
                            <img src="/images/landing/logo-react.svg" class="size-7 sm:size-9" alt="React" />
                        </div>

                        <div class="tooltip" data-tip="Next.JS 15">
                            <img
                                src="/images/landing/logo-next.svg"
                                class="size-7 sm:size-9 dark:invert"
                                alt="Next.JS" />
                        </div>
                        <div class="tooltip" data-tip="SvelteKit 2">
                            <img src="/images/landing/logo-svelte.svg" class="size-7 sm:size-9" alt="SvelteKit 2" />
                        </div>
                        <div class="tooltip" data-tip="Nuxt 3">
                            <img src="/images/landing/logo-nuxt.svg" class="size-8 sm:size-10" alt="Nuxt 3" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="animate-bounce-slow absolute start-16 top-60 opacity-80 max-xl:hidden dark:opacity-60">
                <img src="/images/landing/hero-widget-1.png" class="h-30" alt="Hero 1" />
            </div>
            <div class="animate-bounce-slow absolute end-0 top-160 opacity-80 max-xl:hidden dark:opacity-60">
                <img src="/images/landing/hero-widget-2.png" class="h-30" alt="Hero 2" />
            </div>
        </div>
    </div>
</template>
