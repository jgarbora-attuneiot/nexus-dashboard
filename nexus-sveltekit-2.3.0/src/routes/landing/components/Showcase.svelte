<div id="features">
    <div class="relative container py-8 md:py-12 xl:py-16 2xl:py-24">
        <div class="relative z-10 grid gap-12 lg:grid-cols-7 lg:gap-24">
            <div class="lg:col-span-3">
                <div class="inline-flex items-center rounded border border-teal-500/5 bg-teal-500/5 p-2.5">
                    <span class="iconify lucide--box size-5 text-teal-600"></span>
                </div>
                <p class="mt-3 text-3xl font-semibold">Components</p>
                <p class="text-base-content/70 mt-4">
                    Explore our curated collection of popular design elements, including menus, sliders, buttons, and
                    inputs. Dive in and find everything you need!
                </p>
                <div class="mt-6">
                    <a href="/ui/components/accordion" class="btn btn-outline btn-sm btn-neutral">
                        View Components
                        <span class="iconify lucide--chevron-right"></span>
                    </a>
                </div>
            </div>
            <div class="relative lg:col-span-4">
                <div
                    class="absolute -start-50 -top-50 z-[-1] size-[450px] bg-cover bg-center bg-no-repeat opacity-20 bg-[url(/images/landing/showcase-bg-gradient.png)] sm:size-[600px] dark:hidden">
                </div>
                <div
                    class="absolute -end-12 -bottom-12 z-[-1] size-[350px] bg-[url(/images/landing/showcase-bg-element.png)] bg-cover bg-center bg-no-repeat opacity-60 max-lg:hidden sm:size-[120px] dark:opacity-60">
                </div>
                <div
                    class="from-base-100/60 to-base-100 rounded-box bg-linear-to-tl to-[20%] p-10 text-center backdrop-blur-[4px]">
                    <div class="flex flex-wrap justify-center gap-6">
                        <button class="btn btn-secondary btn-sm">
                            <span class="iconify lucide--search size-3.5"></span>
                            Search
                        </button>
                        <button class="btn btn-ghost btn-sm">
                            <span class="iconify lucide--upload size-3.5"></span>
                            Upload
                        </button>
                        <button class="btn btn-primary btn-circle btn-sm" aria-label="Buy Now">
                            <span class="iconify lucide--shopping-cart size-4"></span>
                        </button>
                        <div class="dropdown">
                            <div tabIndex={0} role="button" class="btn btn-sm">Dropdown</div>
                            <ul
                                tabIndex={0}
                                class="dropdown-content menu bg-base-100 rounded-box z-1 w-40 p-2 shadow-sm">
                                <li>
                                    <a>Item 1</a>
                                </li>
                                <li>
                                    <a>Item 2</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="mt-10 flex flex-wrap justify-center gap-6">
                        <div role="tablist" class="tabs tabs-border tabs-sm">
                            <input
                                role="tab"
                                class="tab"
                                aria-label="Tailwind CSS"
                                type="radio"
                                name="demo-tabs-radio" />
                            <input
                                role="tab"
                                class="tab"
                                aria-label="DaisyUI"
                                type="radio"
                                defaultChecked
                                name="demo-tabs-radio" />
                            <input role="tab" class="tab" aria-label="Nexus" type="radio" name="demo-tabs-radio" />
                        </div>
                        <span class="loading loading-ring text-primary"></span>
                        <span class="loading loading-bars text-primary"></span>
                        <span class="loading loading-infinity text-primary"></span>
                    </div>
                    <div class="mt-10 flex flex-wrap items-center justify-center gap-6">
                        <div class="avatar">
                            <div class="bg-base-200 w-10 rounded-full">
                                <img alt="Avatar" src="/images/avatars/1.png" />
                            </div>
                        </div>
                        <div class="avatar-group -space-x-5">
                            <div class="avatar">
                                <div class="bg-base-200 w-10 rounded-full">
                                    <img alt="Avatar" src="/images/avatars/4.png" />
                                </div>
                            </div>
                            <div class="avatar">
                                <div class="bg-base-200 w-10 rounded-full">
                                    <img alt="Avatar" src="/images/avatars/5.png" />
                                </div>
                            </div>
                            <div class="avatar">
                                <div class="bg-base-200 w-10 rounded-full">
                                    <img alt="Avatar" src="/images/avatars/7.png" />
                                </div>
                            </div>
                            <div class="avatar avatar-placeholder">
                                <div class="bg-base-300 w-10 rounded-full">+99</div>
                            </div>
                        </div>

                        <div class="join">
                            <button class="btn join-item btn-square btn-sm">1</button>
                            <button class="btn join-item btn-square btn-sm btn-active">2</button>
                            <button class="btn join-item btn-square btn-sm">3</button>
                            <button class="btn join-item btn-square btn-sm">4</button>
                        </div>
                        <div class="alert alert-info w-fit gap-2 px-2 py-1.5" role="alert">
                            <span class="iconify lucide--info size-5"></span>
                            <span>New update available.</span>
                        </div>
                    </div>
                    <div class="mt-10 flex flex-wrap items-center justify-center gap-4">
                        <div class="inline-flex gap-2">
                            <input
                                type="radio"
                                class="radio"
                                name="showcase_radio"
                                aria-label="showcase radio 1"
                                defaultChecked />
                            <input type="radio" class="radio" name="showcase_radio" aria-label="showcase radio 2" />
                        </div>
                        <div class="inline-flex items-center gap-2">
                            <input
                                type="checkbox"
                                class="toggle toggle-sm toggle-primary"
                                id="showcase_toggle"
                                defaultChecked />
                            <label class="label" for="showcase_toggle"> Toggle </label>
                        </div>
                        <div class="inline-flex items-center gap-2">
                            <input
                                type="checkbox"
                                class="checkbox checkbox-error checkbox-sm"
                                id="showcase_checkbox"
                                defaultChecked />
                            <label class="label" for="showcase_checkbox"> Checkbox </label>
                        </div>
                        <div class="inline-flex items-center gap-2">
                            <input
                                type="checkbox"
                                class="checkbox checkbox-sm"
                                id="showcase_checkbox_disabled"
                                disabled />
                            <label class="label text-base-content/40" for="showcase_checkbox_disabled">
                                Disabled
                            </label>
                        </div>
                    </div>

                    <div class="mt-10 grid gap-6 md:grid-cols-2">
                        <div class="col-span-1">
                            <div class="rating gap-1">
                                <input
                                    class="mask mask-heart bg-red-400"
                                    aria-label="1 star"
                                    type="radio"
                                    name="rating-3" />
                                <input
                                    class="mask mask-heart bg-orange-400"
                                    aria-label="2 star"
                                    type="radio"
                                    name="rating-3" />
                                <input
                                    class="mask mask-heart bg-yellow-400"
                                    aria-label="3 star"
                                    type="radio"
                                    name="rating-3" />
                                <input
                                    class="mask mask-heart bg-lime-400"
                                    aria-label="4 star"
                                    type="radio"
                                    defaultChecked
                                    name="rating-3" />
                                <input
                                    class="mask mask-heart bg-green-400"
                                    aria-label="5 star"
                                    type="radio"
                                    name="rating-3" />
                            </div>
                            <div>
                                <fieldset class="fieldset mt-4">
                                    <legend class="fieldset-legend text-start">Title</legend>
                                    <input class="input" placeholder="My awesome page" type="text" />
                                    <p class="fieldset-label">* Required</p>
                                </fieldset>
                            </div>
                            <div class="form-control mt-4">
                                <textarea class="textarea" placeholder="Bio"></textarea>
                            </div>
                            <div class="mt-5">
                                <input type="range" class="range range-xs range-primary" id="showcase_range" />
                            </div>

                            <div class="mt-2">
                                <progress
                                    aria-label="showcase progress"
                                    max={100}
                                    id="showcase_progress"
                                    class="progress progress-success h-1 w-full"></progress>
                                <label class="hidden" for="showcase_progress"> Progress </label>
                            </div>
                        </div>
                        <div class="col-span-1">
                            <div class="card bg-base-100 card-border">
                                <div class="card-body text-start">
                                    <div class="flex items-center gap-3">
                                        <div class="avatar">
                                            <div class="bg-base-200 mask mask-squircle bg-base-300 w-8">
                                                <img src="/images/avatars/1.png" alt="Avatar" />
                                            </div>
                                        </div>
                                        <div class="text-start">
                                            <p class="leading-none">James Ford</p>
                                            <p class="text-base-content/60 text-xs">Designer & Developer</p>
                                        </div>
                                    </div>
                                    <img
                                        src="/images/landing/showcase-card-image.png"
                                        class="rounded-box mt-3"
                                        alt="card" />
                                    <p class="text-base-content/80 mt-0.5 text-center text-xs italic">Image caption</p>
                                    <p class="mt-2">More Text goes here....</p>
                                    <div class="card-actions mt-3 justify-end">
                                        <button class="btn btn-sm btn-ghost">Cancel</button>
                                        <button class="btn btn-primary btn-sm">Action</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
