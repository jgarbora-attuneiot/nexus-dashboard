import { type Metadata } from "next";

import { PageTitle } from "@/components/PageTitle";

import { CustomerAcquisitionCard } from "./components/CustomerAcquisitionCard";
import { GlobalSaleCard } from "./components/GlobalSaleCard";
import { QuickChatCard } from "./components/QuickChatCard";
import { RecentOrderCard } from "./components/RecentOrderCard";
import { RevenueStatisticCard } from "./components/RevenueStatisticCard";
import { StatList } from "./components/StatList";

export const metadata: Metadata = {
    title: "Dashboard - Ecommerce",
};

const EcommerceDashboardPage = () => {
    return (
        <>
            <PageTitle
                title="Business Overview"
                items={[{ label: "Dashboards" }, { label: "Ecommerce", active: true }]}
            />
            <div className="mt-6">
                <StatList />
                <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-12">
                    <div className="xl:col-span-7">
                        <RevenueStatisticCard />
                    </div>
                    <div className="xl:col-span-5">
                        <CustomerAcquisitionCard />
                    </div>
                </div>
                <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-5 2xl:grid-cols-12">
                    <div className="xl:col-span-3 2xl:col-span-5">
                        <RecentOrderCard />
                    </div>
                    <div className="xl:col-span-2 2xl:col-span-3">
                        <QuickChatCard />
                    </div>
                    <div className="xl:col-span-3 2xl:col-span-4">
                        <GlobalSaleCard />
                    </div>
                </div>
            </div>
        </>
    );
};

export default EcommerceDashboardPage;
