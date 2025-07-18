"use client";

import Link from "next/link";
import React, { useState } from "react";

export const LoginAuth = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <>
            <fieldset className="fieldset">
                <legend className="fieldset-legend">Email Address</legend>
                <label className="input w-full focus:outline-0">
                    <span className="iconify lucide--mail text-base-content/80 size-5"></span>
                    <input className="grow focus:outline-0" placeholder="Email Address" type="email" />
                </label>
            </fieldset>

            <fieldset className="fieldset">
                <legend className="fieldset-legend">Password</legend>
                <label className="input w-full focus:outline-0">
                    <span className="iconify lucide--key-round text-base-content/80 size-5"></span>
                    <input
                        className="grow focus:outline-0"
                        placeholder="Password"
                        type={showPassword ? "text" : "password"}
                    />
                    <button
                        className="btn btn-xs btn-ghost btn-circle"
                        onClick={() => setShowPassword(!showPassword)}
                        aria-label="Password">
                        {showPassword ? (
                            <span className="iconify lucide--eye-off size-4" />
                        ) : (
                            <span className="iconify lucide--eye size-4" />
                        )}
                    </button>
                </label>
            </fieldset>

            <div className="text-end">
                <Link className="label-text text-base-content/80 text-xs" href="/auth/forgot-password">
                    Forgot Password?
                </Link>
            </div>

            <div className="mt-4 flex items-center gap-3 md:mt-6">
                <input
                    className="checkbox checkbox-sm checkbox-primary"
                    aria-label="Checkbox example"
                    type="checkbox"
                    id="agreement"
                />
                <label htmlFor="agreement" className="text-sm">
                    I agree with
                    <span className="text-primary ms-1 cursor-pointer hover:underline">terms and conditions</span>
                </label>
            </div>

            <Link href="/dashboards/ecommerce" className="btn btn-primary btn-wide mt-4 max-w-full gap-3 md:mt-6">
                <span className="iconify lucide--log-in size-4" />
                Login
            </Link>

            <button className="btn btn-ghost btn-wide border-base-300 mt-4 max-w-full gap-3">
                <img src="/images/brand-logo/google-mini.svg" className="size-6" alt="" />
                Login with Google
            </button>

            <p className="text-base-content/80 mt-4 text-center text-sm md:mt-6">
                Haven&apos;t account
                <Link className="text-primary ms-1 hover:underline" href="/auth/register">
                    Create One
                </Link>
            </p>
        </>
    );
};
