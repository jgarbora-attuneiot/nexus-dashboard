<script lang="ts">
    import { generatedImages1, generatedImages2, type IAiImageType, imageTypes } from "./helpers";

    let selectedType = $state<IAiImageType>(imageTypes[0]);
</script>

<div class="card card-border bg-base-100">
    <div class="flex items-center justify-between p-5 pb-0">
        <div>
            <div class="flex items-center gap-2">
                <div class="bg-primary text-primary-content rounded-box inline-flex items-center p-1.5">
                    <span class="iconify lucide--book-image size-4" />
                </div>
                <p class="font-medium">Images</p>
            </div>
            <p class="text-base-content/80 text-sm">
                <span class="text-error">Note:</span> cloud sync is disabled.
                <span class="link link-primary link-hover ms-1">Start sync?</span>
            </p>
        </div>
        <div class="text-center">
            <p class="text-base-content/80 text-sm">Available Tokens</p>
            <p class="text-lg font-medium">
                961<span class="text-base-content/60 ms-1 text-sm">/1000</span>
            </p>
        </div>
        <div class="bg-base-200 rounded-box hidden items-center gap-3 py-2 ps-3 pe-2 2xl:inline-flex">
            <p class="text-sm">Trial period has ended</p>
            <button class="btn btn-sm btn-warning">Upgrade</button>
        </div>
    </div>
    <hr class="border-base-300 mt-5 w-full border-dashed" />
    <div class="card-body">
        <div class="flex flex-wrap gap-2.5">
            {#each imageTypes as imageType, index (index)}
                <div
                    class={`rounded-box cursor-pointer border px-2.5 py-0.5 transition-all ${imageType.image === selectedType.image ? "border-primary/20 bg-primary/10 text-primary" : "bg-base-200 hover:bg-base-300 border-transparent"}`}
                    onclick={() => (selectedType = imageType)}>
                    {imageType.type}
                </div>
            {/each}
        </div>
        <div class="mt-5 flex items-center justify-between gap-2">
            <p class="font-medium">Watercolor Painting</p>
            <div class="hidden items-center gap-5 md:flex">
                <div
                    class="text-base-content/60 hover:text-base-content inline-flex cursor-pointer items-center gap-2 transition-all">
                    <span class="iconify lucide--image-down size-3.5" />
                    <p class="text-sm">Download All</p>
                </div>
                <div
                    class="text-base-content/60 hover:text-base-content inline-flex cursor-pointer items-center gap-2 transition-all">
                    <span class="iconify lucide--book-image size-3.5" />
                    <p class="text-sm">8</p>
                </div>

                <div
                    class="text-base-content/60 hover:text-base-content inline-flex cursor-pointer items-center gap-2 transition-all">
                    <span class="iconify lucide--cpu size-3.5" />
                    <p class="text-sm">Stable diffusion</p>
                </div>
            </div>
        </div>
        <div class="mt-2 grid grid-cols-3 gap-5 md:grid-cols-5 lg:grid-cols-3 xl:grid-cols-5">
            {#each generatedImages1 as generated, index (index)}
                <div class="group relative">
                    <img src={generated} alt={generated} class="rounded-box" />
                    <div
                        class="rounded-box absolute start-1/2 bottom-0 flex -translate-x-1/2 scale-75 items-center justify-around gap-2 bg-black/60 px-2 py-1.5 text-white opacity-0 backdrop-blur-sm transition-all group-hover:bottom-4 group-hover:scale-100 group-hover:opacity-100">
                        <div class="rounded-box cursor-pointer p-1 hover:bg-white/20">
                            <span class="iconify lucide--arrow-down-to-line block size-3.5" />
                        </div>
                        <div class="rounded-box cursor-pointer p-1 hover:bg-white/20">
                            <span class="iconify lucide--palette block size-3.5" />
                        </div>
                        <div class="rounded-box cursor-pointer p-1 hover:bg-white/20">
                            <span class="iconify lucide--image-plus block size-3.5" />
                        </div>
                        <div class="rounded-box cursor-pointer p-1 hover:bg-white/20">
                            <span class="iconify lucide--maximize block size-3.5" />
                        </div>
                    </div>
                </div>
            {/each}
        </div>
        <div class="mt-5 flex items-center justify-between gap-2">
            <p class="font-medium">3D Elements</p>
            <div class="hidden items-center gap-5 md:flex">
                <div
                    class="text-base-content/60 hover:text-base-content inline-flex cursor-pointer items-center gap-2 transition-all">
                    <span class="iconify lucide--image-down size-3.5" />
                    <p class="text-sm">Download All</p>
                </div>
                <div
                    class="text-base-content/60 hover:text-base-content inline-flex cursor-pointer items-center gap-2 transition-all">
                    <span class="iconify lucide--book-image size-3.5" />
                    <p class="text-sm">10+</p>
                </div>

                <div
                    class="text-base-content/60 hover:text-base-content inline-flex cursor-pointer items-center gap-2 transition-all">
                    <span class="iconify lucide--cpu size-3.5" />
                    <p class="text-sm">Deep AI</p>
                </div>
            </div>
        </div>
        <div class="mt-2 grid grid-cols-3 gap-5 md:grid-cols-5">
            {#each generatedImages2 as generated, index (index)}
                <div class="group relative">
                    <img src={generated} alt={generated} class="rounded-box" />
                    <div
                        class="rounded-box absolute start-1/2 bottom-0 flex -translate-x-1/2 scale-75 items-center justify-around gap-2 bg-black/60 px-2 py-1.5 text-white opacity-0 backdrop-blur-sm transition-all group-hover:bottom-4 group-hover:scale-100 group-hover:opacity-100">
                        <div class="rounded-box cursor-pointer p-1 hover:bg-white/20">
                            <span class="iconify lucide--arrow-down-to-line block size-3.5" />
                        </div>
                        <div class="rounded-box cursor-pointer p-1 hover:bg-white/20">
                            <span class="iconify lucide--palette block size-3.5" />
                        </div>
                        <div class="rounded-box cursor-pointer p-1 hover:bg-white/20">
                            <span class="iconify lucide--image-plus block size-3.5" />
                        </div>
                        <div class="rounded-box cursor-pointer p-1 hover:bg-white/20">
                            <span class="iconify lucide--maximize block size-3.5" />
                        </div>
                    </div>
                </div>
            {/each}
        </div>
        <div class="mt-5 text-center">
            <button class="btn btn-sm">
                <span class="iconify lucide--arrow-down size-3.5" />
                Load more
            </button>
        </div>
    </div>
</div>
