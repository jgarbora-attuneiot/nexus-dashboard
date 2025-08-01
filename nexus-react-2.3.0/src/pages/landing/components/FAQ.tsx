import { Link } from "react-router";

export const FAQ = () => {
    return (
        <div className="container py-8 md:py-12 xl:py-16 2xl:py-24" id="faqs">
            <div className="grid gap-12 lg:grid-cols-7 lg:gap-24">
                <div className="col-span-3">
                    <div className="inline-flex items-center rounded border border-purple-500/10 bg-purple-500/5 p-2">
                        <span className="iconify lucide--messages-square size-5 text-purple-600" />
                    </div>
                    <p className="mt-4 text-3xl font-semibold">Need Help?</p>
                    <p className="text-base-content/70 mt-3 inline-block max-w-lg">
                        If you still have questions, don&apos;t hesitate to reach out. Contact us with any queries
                    </p>
                    <Link className="btn btn-sm mt-4" target="_blank" to="https://discord.com/invite/S6TZxycVHs">
                        Contact Us
                    </Link>
                </div>
                <div className="col-span-4">
                    <div className="space-y-0">
                        <div className="collapse-plus border-base-300 collapse">
                            <input type="radio" aria-label="Accordion radio" name="accordion" />
                            <div className="collapse-title cursor-pointer font-medium sm:text-xl">
                                <div className="ite flex items-center gap-4">
                                    <div className="border-base-300 rounded-box inline-flex items-center justify-center border p-1.5">
                                        <span className="iconify lucide--messages-square size-4.5" />
                                    </div>
                                    How can i give a feedback?
                                </div>
                            </div>
                            <div className="collapse-content ms-12">
                                <p>
                                    You can provide feedback by filling out our
                                    <Link
                                        className="text-primary mx-1"
                                        target="_blank"
                                        to="https://forms.gle/UeX3jgsjFNFcZsq9A">
                                        Google Form
                                    </Link>
                                    or share your thoughts over our
                                    <Link
                                        className="text-primary mx-1"
                                        target="_blank"
                                        to="https://discord.com/invite/S6TZxycVHs">
                                        Discord server
                                    </Link>
                                </p>
                            </div>
                        </div>
                        <div className="collapse-plus border-base-300 collapse">
                            <input type="radio" aria-label="Accordion radio" name="accordion" />
                            <div className="collapse-title cursor-pointer font-medium sm:text-xl">
                                <div className="ite flex items-center gap-4">
                                    <div className="border-base-300 rounded-box inline-flex items-center justify-center border p-1.5">
                                        <span className="iconify lucide--code size-4.5" />
                                    </div>
                                    Can i get full source code?
                                </div>
                            </div>
                            <div className="collapse-content ms-12">
                                <p>
                                    Certainly, we offer the complete source code depending on the package you've
                                    purchased. You might look into depth:
                                    <Link className="text-primary ms-1" target="_blank" to="/docs/knowledge/packages">
                                        Packages
                                    </Link>
                                </p>
                            </div>
                        </div>
                        <div className="collapse-plus border-base-300 collapse">
                            <input type="radio" aria-label="Accordion radio" name="accordion" />
                            <div className="collapse-title cursor-pointer font-medium sm:text-xl">
                                <div className="ite flex items-center gap-4">
                                    <div className="border-base-300 rounded-box inline-flex items-center justify-center border p-1.5">
                                        <span className="iconify lucide--credit-card size-4.5" />
                                    </div>
                                    Will there be any future payments required?
                                </div>
                            </div>
                            <div className="collapse-content ms-12">
                                <p>
                                    Absolutely not. It's a one-time purchase, with no hidden charges or future payments
                                    to worry about.
                                </p>
                            </div>
                        </div>
                        <div className="collapse-plus border-base-300 collapse">
                            <input type="radio" aria-label="Accordion radio" name="accordion" />
                            <div className="collapse-title cursor-pointer font-medium sm:text-xl">
                                <div className="ite flex items-center gap-4">
                                    <div className="border-base-300 rounded-box inline-flex items-center justify-center border p-1.5">
                                        <span className="iconify lucide--repeat size-4.5" />
                                    </div>
                                    Are there plans for future updates, and will they incur any costs?
                                </div>
                            </div>
                            <div className="collapse-content ms-12">
                                <p>
                                    All future updates are completely free. No payment is required for any upcoming
                                    updates. Yes, there are many plans for future updates. You can checkout
                                    <Link className="text-primary ms-1" target="_blank" to="/docs/support/roadmap">
                                        future roadmap
                                    </Link>
                                </p>
                            </div>
                        </div>
                        <div className="collapse-plus border-base-300 collapse">
                            <input type="radio" aria-label="Accordion radio" name="accordion" />
                            <div className="collapse-title cursor-pointer font-medium sm:text-xl">
                                <div className="ite flex items-center gap-4">
                                    <div className="border-base-300 rounded-box inline-flex items-center justify-center border p-1.5">
                                        <span className="iconify lucide--server size-4.5" />
                                    </div>
                                    Do I need a backend for this?
                                </div>
                            </div>
                            <div className="collapse-content ms-12">
                                <p>
                                    No backend is required to run this UI template. However, you can integrate any type
                                    of backend as needed.
                                </p>
                            </div>
                        </div>
                        <div className="collapse-plus border-base-300 collapse">
                            <input type="radio" aria-label="Accordion radio" name="accordion" />
                            <div className="collapse-title cursor-pointer font-medium sm:text-xl">
                                <div className="ite flex items-center gap-4">
                                    <div className="border-base-300 rounded-box inline-flex items-center justify-center border p-1.5">
                                        <span className="iconify lucide--telescope size-4.5" />
                                    </div>
                                    Is there any updates in the future?
                                </div>
                            </div>
                            <div className="collapse-content ms-12">
                                <p>
                                    Yes, Our team constantly improves the admin template based on user feedback and
                                    industry trends.
                                    <Link className="text-primary ms-1" target="_blank" to="/docs/support/roadmap">
                                        You can see product roadmap
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
