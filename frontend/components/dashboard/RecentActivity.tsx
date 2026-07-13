"use client";

import { activities } from "@/data/activity";
import ActivityItem from "./ActivityItem";

import DashboardSection from "./DashboardSection";

export default function RecentActivity() {
  return (
    <DashboardSection
      title="Recent Activity"
      subtitle="Latest updates from your workspace"
    >
      <div className="space-y-4">
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