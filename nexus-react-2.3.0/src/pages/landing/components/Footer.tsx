import { Link } from "react-router";

import { Logo } from "@/components/Logo";

export const Footer = () => {
    return (
        <div className="relative">
            <div className="grainy absolute inset-0 z-0 opacity-20"></div>

            <div className="relative z-[2] container pt-8 md:pt-12 xl:pt-16 2xl:pt-24">
                <div className="grid grid-cols-2 gap-6 md:grid-cols-5">
                    <div className="col-span-2">
                        <Logo />
                        <p className="text-base-content/80 mt-3">
                            Kickstart your next project with a platform built for effortless customization, streamlining
                            your development process
                        </p>
                        <div className="mt-8 flex items-center gap-2.5 xl:mt-16">
                            <Link className="btn btn-sm btn-circle" to="https://github.com/withden" target="_blank">
                                <span className="iconify lucide--github size-4" />
                            </Link>
                            <Link className="btn btn-sm btn-circle" to="https://x.com/withden_" target="_blank">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    className="size-4">
                                    <path
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.7"
                                        d="m3 21l7.548-7.548M21 3l-7.548 7.548m0 0L8 3H3l7.548 10.452m2.904-2.904L21 21h-5l-5.452-7.548"
                                        color="currentColor"
                                    />
                                </svg>
                            </Link>
                            <button className="btn btn-sm btn-circle">
                                <span className="iconify lucide--link size-3.5" />
                            </button>
                        </div>
                    </div>
                    <div className="max-md:hidden xl:col-span-1"></div>
                    <div className="col-span-1">
                        <p className="font-medium">Quick Links</p>
                        <div className="text-base-content/80 *:hover:text-base-content mt-5 flex flex-col space-y-1.5 *:cursor-pointer">
                            <Link to="/dashboards/ecommerce">Dashboard</Link>
                            <Link to="/ui/components/accordion">UI Kit</Link>
                            <Link to="/auth/login">Login</Link>
                            <Link
                                className="flex items-center gap-1.5"
                                to="https://forms.gle/UeX3jgsjFNFcZsq9A"
                                target="_blank">
                                Feedback <span className="badge badge-sm h-4.5 rounded-full px-1.5">New</span>
                            </Link>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <p className="font-medium">Company</p>
                        <div className="text-base-content/80 *:hover:text-base-content mt-5 flex flex-col space-y-1.5 *:cursor-pointer">
                            <span>About</span>
                            <p className="flex items-center gap-1.5">
                                Career
                                <span className="badge badge-sm badge-success h-4.5 rounded-full px-1.5">Hiring</span>
                            </p>
                            <span>Blog</span>
                            <span>Contact</span>
                            <span>Support</span>
                        </div>
                    </div>
                </div>
                <div className="border-base-300 mt-12 flex justify-between border-t py-6">
                    <span>
                        Developed by
                        <Link
                            rel="noopener noreferrer"
                            target="_blank"
                            to="https://x.com/withden_"
                            className="link link-hover link text-primary link-hover ms-1">
                            Denish Navadiya
                        </Link>
                    </span>
                    <span>
                        🌼 Made with
                        <Link className="link-hover link-primary ms-1" to="https://daisyui.com" target="_blank">
                            daisyUI
                        </Link>
                    </span>
                </div>
            </div>
        </div>
    );
};
