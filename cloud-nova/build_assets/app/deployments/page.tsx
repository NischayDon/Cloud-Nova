import { DashboardHeader } from "@/components/dashboard-header"
import { DeploymentFilters } from "@/components/deployment-filters"
import { DeploymentList } from "@/components/deployment-list"
import { DeploymentStats } from "@/components/deployment-stats"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

export default function DeploymentsPage() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />

      <main className="container mx-auto px-4 py-6 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight text-balance">Deployments</h1>
            <p className="text-muted-foreground mt-1">Manage secure workloads across AWS, GCP, and Azure</p>
          </div>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            New Deployment
          </Button>
        </div>

        <DeploymentStats />

        <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
          <DeploymentFilters />
          <DeploymentList />
        </div>
      </main>
    </div>
  )
}
