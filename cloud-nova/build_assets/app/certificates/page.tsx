import { DashboardHeader } from "@/components/dashboard-header"
import { CertificateList } from "@/components/certificate-list"
import { CertificateStats } from "@/components/certificate-stats"
import { CertificateTimeline } from "@/components/certificate-timeline"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

export default function CertificatesPage() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />

      <main className="container mx-auto px-4 py-6 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight text-balance">Certificate Management</h1>
            <p className="text-muted-foreground mt-1">Monitor TLS certificates and automate renewals</p>
          </div>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Add Certificate
          </Button>
        </div>

        <CertificateStats />

        <CertificateTimeline />

        <CertificateList />
      </main>
    </div>
  )
}
