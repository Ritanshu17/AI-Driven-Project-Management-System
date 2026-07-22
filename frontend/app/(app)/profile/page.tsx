import ProfileHeader from "@/components/profile/ProfileHeader";
import ProfileCard from "@/components/profile/ProfileCard";
import ProfileStats from "@/components/profile/ProfileStats";
import ActivityCard from "@/components/profile/ActivityCard";
import PersonalInformation from "@/components/profile/PersonalInformation";
import SecurityCard from "@/components/profile/SecurityCard";
import PreferencesCard from "@/components/profile/PreferencesCard";


export default function ProfilePage() {
  return (
    <div className="space-y-8">

      <ProfileHeader />

      <div className="grid gap-8 lg:grid-cols-3">

        <ProfileCard />

        <div className="space-y-8 lg:col-span-2">

          <ProfileStats />

          <ActivityCard />

        <div className="space-y-8 lg:col-span-2">

            <ProfileStats />

            <ActivityCard />

            <PersonalInformation />

            <div className="space-y-8 lg:col-span-2">

              <ProfileStats />

              <ActivityCard />

              <PersonalInformation />

              <SecurityCard />

              <div className="space-y-8 lg:col-span-2">

                <ProfileStats />

                <ActivityCard />

                <PersonalInformation />

                <SecurityCard />

                <PreferencesCard />

            </div>

          </div>

        </div>

        </div>

      </div>

    </div>
  );
}