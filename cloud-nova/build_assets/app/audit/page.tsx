import { DashboardHeader } from "@/components/dashboard-header"
import { AuditLogFilters } from "@/components/audit-log-filters"
import { AuditLogList } from "@/components/audit-log-list"
import { AnomalyDetection } from "@/components/anomaly-detection"
import { AuditStats } from "@/components/audit-stats"

export default function AuditPage() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />

      <main className="container mx-auto px-4 py-6 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight text-balance">Audit Logs</h1>
            <p className="text-muted-foreground mt-1">Track security events and detect anomalous behavior</p>
          </div>
        </div>

        <AuditStats />

        <AnomalyDetection />

        <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
          <AuditLogFilters />
          <AuditLogList />
        </div>
      </main>
    </div>
  )
}
