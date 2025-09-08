"use client";

import { observer } from "mobx-react";
import { useTranslation } from "@plane/i18n";
import { Button } from "@plane/ui";
import { Plus, Settings, Users, BarChart3 } from "lucide-react";

const MyCustomPage = observer(() => {
  const { t } = useTranslation();

  return (
    <div className="h-full w-full overflow-hidden">
      <div className="flex h-full w-full flex-col">
        {/* Header */}
        <div className="flex h-12 w-full items-center justify-between border-b border-custom-border-200 px-4">
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-semibold text-custom-text-100">
              {t("my_custom_page.title")}
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="primary" size="sm" prependIcon={<Plus className="h-4 w-4" />}>
              Add New Item
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="mx-auto max-w-4xl">
            {/* Welcome Section */}
            <div className="mb-8 rounded-lg bg-custom-background-80 p-6">
              <h1 className="text-2xl font-bold text-custom-text-100 mb-2">
                Welcome to My Custom Page!
              </h1>
              <p className="text-custom-text-300">
                {t("my_custom_page.description")} This page was added right after the inbox button in the sidebar.
              </p>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <div className="rounded-lg border border-custom-border-200 bg-custom-background-100 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-custom-primary-100/10">
                    <Settings className="h-5 w-5 text-custom-primary-100" />
                  </div>
                  <h3 className="text-lg font-semibold text-custom-text-100">Settings</h3>
                </div>
                <p className="text-custom-text-300 text-sm">
                  Manage your preferences and configuration options.
                </p>
              </div>

              <div className="rounded-lg border border-custom-border-200 bg-custom-background-100 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-custom-primary-100/10">
                    <Users className="h-5 w-5 text-custom-primary-100" />
                  </div>
                  <h3 className="text-lg font-semibold text-custom-text-100">Team</h3>
                </div>
                <p className="text-custom-text-300 text-sm">
                  Collaborate with your team members and manage roles.
                </p>
              </div>

              <div className="rounded-lg border border-custom-border-200 bg-custom-background-100 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-custom-primary-100/10">
                    <BarChart3 className="h-5 w-5 text-custom-primary-100" />
                  </div>
                  <h3 className="text-lg font-semibold text-custom-text-100">Analytics</h3>
                </div>
                <p className="text-custom-text-300 text-sm">
                  View insights and track your progress over time.
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" size="sm">
                Primary Action
              </Button>
              <Button variant="secondary" size="sm">
                Secondary Action
              </Button>
              <Button variant="outline-primary" size="sm">
                Outline Action
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default MyCustomPage;
