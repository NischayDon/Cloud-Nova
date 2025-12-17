import { DashboardHeader } from "@/components/dashboard-header"
import { PolicyList } from "@/components/policy-list"
import { PolicyStats } from "@/components/policy-stats"
import { PolicyViolations } from "@/components/policy-violations"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

export default function PoliciesPage() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />

      <main className="container mx-auto px-4 py-6 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight text-balance">Security Policies</h1>
            <p className="text-muted-foreground mt-1">Enforce security standards and block insecure configurations</p>
          </div>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            New Policy
          </Button>
        </div>

        <PolicyStats />

        <div className="grid gap-6 lg:grid-cols-2">
          <PolicyList />
          <PolicyViolations />
        </div>
      </main>
    </div>
  )
}
