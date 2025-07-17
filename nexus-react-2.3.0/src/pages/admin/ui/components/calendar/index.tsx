import { PageTitle } from "@/components/PageTitle";

import { CalendarExample } from "./CalendarExample";

const CalendarPage = () => {
    return (
        <>
            <PageTitle title="Calendar" items={[{ label: "Components" }, { label: "Calendar", active: true }]} />
            <div className="mt-6">
                <CalendarExample />
            </div>
        </>
    );
};

export default CalendarPage;
