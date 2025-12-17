"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, RefreshCw, AlertTriangle } from "lucide-react"

const events = [
  {
    id: "evt-001",
    type: "renewed",
    certificate: "api.production.example.com",
    time: "12 minutes ago",
    status: "success",
    icon: RefreshCw,
  },
  {
    id: "evt-002",
    type: "validated",
    certificate: "app.example.com",
    time: "2 hours ago",
    status: "success",
    icon: CheckCircle2,
  },
  {
    id: "evt-003",
    type: "renewed",
    certificate: "cdn.example.com",
    time: "1 day ago",
    status: "success",
    icon: RefreshCw,
  },
  {
    id: "evt-004",
    type: "warning",
    certificate: "staging.example.com",
    time: "2 days ago",
    status: "warning",
    icon: AlertTriangle,
  },
  {
    id: "evt-005",
    type: "renewed",
    certificate: "admin.example.com",
    time: "3 days ago",
    status: "success",
    icon: RefreshCw,
  },
]

const statusConfig = {
  success: { variant: "default" as const, color: "text-accent" },
  warning: { variant: "secondary" as const, color: "text-chart-4" },
}

export function CertificateTimeline() {
  return (
    <Card className="border-border">
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>Certificate renewals and validation events</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-4">
            {events.map((event, index) => {
              const Icon = event.icon
              return (
                <div key={event.id} className="relative flex items-start gap-4 pl-10">
                  <div
                    className={`absolute left-0 h-8 w-8 rounded-full border-2 border-background flex items-center justify-center ${statusConfig[event.status as keyof typeof statusConfig].color} bg-card`}
                  >
                    <Icon className="h-4 w-4" />
                  </div>

                  <div className="flex-1 min-w-0 pt-0.5">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium text-sm text-balance">{event.certificate}</span>
                      <Badge
                        variant={statusConfig[event.status as keyof typeof statusConfig].variant}
                        className="text-xs"
                      >
                        {event.type}
                      </Badge>
                    </div>
                    <span className="text-xs text-muted-foreground">{event.time}</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
