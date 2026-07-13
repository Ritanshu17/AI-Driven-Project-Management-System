"use client";

import { activities } from "@/data/activity";
import ActivityItem from "./ActivityItem";
import { ChevronRight } from "lucide-react";
import DashboardSection from "./DashboardSection";

export default function RecentActivity() {
  return (
    <DashboardSection
      title="Recent Activity"
      subtitle="Latest updates from your workspace"
       action={
      <button className="flex items-center gap-1 text-sm text-[var(--accent)] transition hover:gap-2">
        View All
        <ChevronRight size={16} />
      </button>
    }
>
      <div className="divide-y divide-[var(--border)]">
        {activities.map((activity) => (
          <ActivityItem
            key={activity.id}
            title={activity.title}
            description={activity.description}
            time={activity.time}
            type={activity.type}
          />
        ))}
      </div>
    </DashboardSection>
  );
}