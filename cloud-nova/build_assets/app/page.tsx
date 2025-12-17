import { DashboardHeader } from "@/components/dashboard-header"
import { KpiCards } from "@/components/kpi-cards"
import { DeploymentChart } from "@/components/deployment-chart"
import { RecentActivity } from "@/components/recent-activity"
import { CloudProviderStatus } from "@/components/cloud-provider-status"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />

      <main className="container mx-auto px-4 py-6 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight text-balance">StackFlow Orchestrator</h1>
            <p className="text-muted-foreground mt-1">
              Enterprise-grade CI/CD and automated deployment platform for OpenStack & Multi-Cloud
            </p>
          </div>
        </div>

        <KpiCards />

        <div className="grid gap-6 lg:grid-cols-2">
          <DeploymentChart />
          <CloudProviderStatus />
        </div>

        <RecentActivity />
      </main>
    </div>
  )
}
