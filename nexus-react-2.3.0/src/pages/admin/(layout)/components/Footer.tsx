import { Link } from "react-router";

export const Footer = () => {
    return (
        <div className="-mt-2 flex items-center justify-between px-6 pb-4">
            <p>
                Developed by{" "}
                <Link to="https://x.com/withden_" target="_blank" className="text-primary">
                    Denish Navadiya
                </Link>
            </p>
            <Link
                to="https://daisyui.com/store/244268"
                target="_blank"
                className="bg-primary text-primary-content group flex size-9 items-center gap-2 overflow-hidden rounded-full px-2.5 py-0.5 font-medium transition-all hover:w-26">
                <span className="iconify lucide--shopping-cart block size-4.5"></span>
                <span className="hidden text-sm text-nowrap group-hover:block">Buy Now</span>
            </Link>
        </div>
    );
};
