<script lang="ts" setup>
definePageMeta({
    layout: "admin",
});
</script>
<template>
    <div class="flex flex-col items-center justify-center md:mt-16 lg:mt-24 xl:mt-32">
        <div class="max-w-4xl">
            <div
                class="from-base-content to-primary inline-block bg-gradient-to-tr from-40% bg-clip-text text-2xl font-semibold tracking-tight text-transparent sm:text-4xl">
                <p>Hi there, Denish</p>
                <p class="mt-1">How can I assist you today?</p>
            </div>
            <div class="mt-6 grid gap-6 md:grid-cols-3">
                <div class="card group bg-base-100 card-border cursor-pointer transition-all">
                    <div class="card-body">
                        <div class="bg-primary text-primary-content rounded-box w-fit p-2">
                            <span class="iconify lucide--sparkles block size-4"></span>
                        </div>
                        <p class="mt-3 font-medium">Blog Post Ideas</p>
                        <p class="text-base-content/80 mt-1 line-clamp-2 text-sm text-ellipsis">
                            Generate compelling blog topics that captivate your audience and enhance SEO.
                        </p>
                        <div
                            class="text-base-content/60 group-hover:text-base-content mt-3 flex items-center gap-1.5 transition-all">
                            <span class="text-sm">Explore Ideas</span>
                            <span class="iconify lucide--chevron-right size-3.5"></span>
                        </div>
                    </div>
                </div>

                <div class="card group bg-base-100 card-border cursor-pointer transition-all">
                    <div class="card-body">
                        <div class="bg-secondary text-secondary-content rounded-box w-fit p-2">
                            <span class="iconify lucide--mail block size-4"></span>
                        </div>
                        <p class="mt-3 font-medium">Email Campaigns</p>
                        <p class="text-base-content/80 mt-1 line-clamp-2 text-sm text-ellipsis">
                            Create high-converting email copy that boosts engagement and builds lasting connections.
                        </p>
                        <div
                            class="text-base-content/60 group-hover:text-base-content mt-3 flex items-center gap-1.5 transition-all">
                            <span class="text-sm">Start Campaign</span>
                            <span class="iconify lucide--chevron-right size-3.5"></span>
                        </div>
                    </div>
                </div>

                <div class="card group bg-base-100 card-border cursor-pointer transition-all">
                    <div class="card-body">
                        <div class="bg-success text-success-content rounded-box w-fit p-2">
                            <span class="iconify lucide--text block size-4"></span>
                        </div>
                        <p class="mt-3 font-medium">Social Media Captions</p>
                        <p class="text-base-content/80 mt-1 line-clamp-2 text-sm text-ellipsis">
                            Generate catchy captions designed to maximize engagement across social platforms.
                        </p>
                        <div
                            class="text-base-content/60 group-hover:text-base-content mt-3 flex items-center gap-1.5 transition-all">
                            <span class="text-sm">Generate Captions</span>
                            <span class="iconify lucide--chevron-right size-3.5"></span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card bg-base-100 card-border mt-6">
                <div class="card-body p-3">
                    <textarea
                        class="textarea m-0 h-24 w-full resize-none border-0 p-1 text-base focus:outline-none"
                        placeholder="Let us know what you need..."></textarea>
                    <div class="mt-2 flex items-end justify-between">
                        <div class="inline-flex items-center gap-0.5">
                            <button class="btn btn-sm btn-circle btn-ghost">
                                <span class="iconify lucide--mic text-base-content/80 size-4.5"></span>
                            </button>
                            <button class="btn btn-sm btn-circle btn-ghost">
                                <span class="iconify lucide--image-plus text-base-content/80 size-4.5"></span>
                            </button>
                            <button class="btn btn-sm btn-circle btn-ghost">
                                <span class="iconify lucide--paperclip text-base-content/80 size-4.5"></span>
                            </button>
                        </div>
                        <div class="text-base-content/60 flex items-center text-xs font-medium max-sm:hidden">
                            Usage Limit: <span class="text-error ms-1">Active</span>
                            <div class="tooltip">
                                <div
                                    class="tooltip-content bg-base-100 text-base-content p-3 text-start font-normal shadow">
                                    <p class="font-semibold">Usage Summary:</p>
                                    <p class="mt-2">Today: 47 tokens</p>
                                    <p class="mt-0.5">Total: 158 tokens</p>
                                </div>
                                <span class="iconify lucide--help-circle ms-1 block size-3"></span>
                            </div>
                        </div>
                        <div class="flex items-center gap-2">
                            <button class="btn btn-sm btn-outline border-base-300 max-sm:btn-circle rounded-full">
                                <span class="iconify lucide--globe text-base-content/80 size-4"></span>
                                <p class="max-sm:hidden">Search</p>
                            </button>
                            <button class="btn btn-sm btn-outline border-base-300 max-sm:btn-circle rounded-full">
                                <span class="iconify lucide--brain-cog text-base-content/80 size-4"></span>
                                <p class="max-sm:hidden">Brainstorm</p>
                            </button>
                            <button class="btn btn-primary btn-circle btn-sm">
                                <span class="iconify lucide--arrow-right size-4"></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
