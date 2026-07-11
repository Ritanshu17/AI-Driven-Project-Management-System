"use client";

import { activities } from "@/data/activity";
import ActivityItem from "./ActivityItem";

export default function RecentActivity() {
  return (
    <section className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">

      <h2 className="mb-6 text-xl font-semibold">
        Recent Activity
      </h2>

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

    </section>
  );
}