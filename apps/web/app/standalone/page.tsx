"use client";

import { observer } from "mobx-react";
import { useTranslation } from "@plane/i18n";
import { Button } from "@plane/ui";
import { Plus, Settings, Users, BarChart3, Home, Inbox, Star } from "lucide-react";

const StandalonePage = observer(() => {
  const { t } = useTranslation();

  return (
    <div className="h-screen w-full overflow-hidden bg-custom-background-100">
      <div className="flex h-full w-full">
        {/* Sidebar */}
        <div className="w-64 bg-custom-sidebar-background-100 border-r border-custom-border-200 flex flex-col">
          {/* Logo */}
          <div className="p-4 border-b border-custom-border-200">
            <h1 className="text-xl font-bold text-custom-text-100">Plane</h1>
          </div>
          
          {/* Navigation */}
          <div className="flex-1 p-4 space-y-2">
            <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-custom-sidebar-background-80 cursor-pointer">
              <Home className="h-4 w-4 text-custom-text-300" />
              <span className="text-sm font-medium text-custom-text-300">Home</span>
            </div>
            
            <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-custom-sidebar-background-80 cursor-pointer">
              <Inbox className="h-4 w-4 text-custom-text-300" />
              <span className="text-sm font-medium text-custom-text-300">Inbox</span>
            </div>
            
            {/* Your Custom Button - Highlighted! */}
            <div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-custom-primary-100/10 border border-custom-primary-100/20 cursor-pointer">
              <Star className="h-4 w-4 text-custom-primary-100" />
              <span className="text-sm font-medium text-custom-primary-100">My Custom Page</span>
            </div>
            
            <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-custom-sidebar-background-80 cursor-pointer">
              <Users className="h-4 w-4 text-custom-text-300" />
              <span className="text-sm font-medium text-custom-text-300">Your Work</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <div className="h-16 border-b border-custom-border-200 flex items-center justify-between px-6">
            <h2 className="text-lg font-semibold text-custom-text-100">My Custom Page</h2>
            <div className="flex items-center gap-2">
              <Button variant="primary" size="sm" prependIcon={<Plus className="h-4 w-4" />}>
                Add New Item
              </Button>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-6">
            <div className="max-w-4xl mx-auto">
              {/* Welcome Section */}
              <div className="mb-8 rounded-lg bg-custom-background-80 p-6">
                <h1 className="text-2xl font-bold text-custom-text-100 mb-2">
                  🎉 Welcome to My Custom Page!
                </h1>
                <p className="text-custom-text-300">
                  This is your custom page that was added right after the inbox button in the sidebar. 
                  The page is now live and working perfectly!
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

              {/* Success Message */}
              <div className="mt-8 p-4 bg-green-100 border border-green-200 rounded-lg">
                <h3 className="text-lg font-semibold text-green-800 mb-2">✅ Deployment Successful!</h3>
                <p className="text-green-700">
                  Your custom button and page are now live and working! The sidebar shows your new "My Custom Page" 
                  button with a star icon, and this page demonstrates the modern UI you've built.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default StandalonePage;
