"use client";

import { useState } from "react";

import SettingsHeader from "@/components/settings/SettingsHeader";
import SettingsSidebar from "@/components/settings/SettingsSidebar";

import GeneralSettings from "@/components/settings/GeneralSettings";
import MembersSettings from "@/components/settings/MembersSettings";
import NotificationsSettings from "@/components/settings/NotificationSettings";
import AppearanceSettings from "@/components/settings/AppearanceSettings";
import BillingSettings from "@/components/settings/BillingSettings";
import IntegrationsSettings from "@/components/settings/IntergrationsSettings";

export default function SettingsPage() {
  const [active, setActive] = useState("General");

  return (
    <div className="space-y-8">

      <SettingsHeader />

      <div className="grid gap-8 lg:grid-cols-4">

        <SettingsSidebar
          active={active}
          onChange={setActive}
        />
        
        <div className="lg:col-span-3">

          {active === "General" && <GeneralSettings />}

          {active === "Members" && <MembersSettings />}
          
          {active === "Notifications" && <NotificationsSettings />}

          {active === "Appearance" && <AppearanceSettings />}

          {active === "Billing" && <BillingSettings/>}

          {active === "Integrations" && <IntegrationsSettings />}
        </div>

      </div>

    </div>
  );
}