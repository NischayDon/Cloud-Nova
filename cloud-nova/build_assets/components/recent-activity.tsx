import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Rocket, GitPullRequest, XCircle, CheckCircle2, Webhook, Cloud } from "lucide-react"

const activities = [
  {
    id: 1,
    type: "deployment",
    title: "Production API Gateway Deployed",
    description: "Successfully deployed to OpenStack Project: 'Core-Services' (Region-A)",
    time: "5 minutes ago",
    status: "success",
    icon: Rocket,
  },
  {
    id: 2,
    type: "pipeline",
    title: "Pipeline Failure: PR #1250",
    description: "Unit tests failed for 'auth-service' on 'feature/auth-fix' branch",
    time: "12 minutes ago",
    status: "failed",
    icon: XCircle,
  },
  {
    id: 3,
    type: "merge",
    title: "Branch Merged: 'network-refactor'",
    description: "PR #1248 merged to 'main' by DevOps Bot",
    time: "28 minutes ago",
    status: "merged",
    icon: GitPullRequest,
  },
  {
    id: 4,
    type: "infrastructure",
    title: "New Compute Instance Provisioned",
    description: "OpenStack Nova: 'os-web-prod-03' (m1.medium) is now running",
    time: "1 hour ago",
    status: "success",
    icon: Cloud,
  },
  {
    id: 5,
    type: "trigger",
    title: "GitHub Webhook Received",
    description: "Triggered 'nightly-data-sync' pipeline for 'data-eng' project",
    time: "2 hours ago",
    status: "triggered",
    icon: Webhook,
  },
]

const statusColors = {
  success: "text-accent",
  failed: "text-destructive",
  merged: "text-primary",
  triggered: "text-muted-foreground",
}

const statusBadges = {
  success: "default",
  failed: "destructive",
  merged: "outline",
  triggered: "secondary",
} as const

export function RecentActivity() {
  return (
    <Card className="border-border">
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>Latest pipeline runs and infrastructure events</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => {
            const Icon = activity.icon
            return (
              <div
                key={activity.id}
                className="flex items-start gap-4 p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors"
              >
                <div
                  className={`h-10 w-10 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0 ${statusColors[activity.status as keyof typeof statusColors]}`}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-medium text-balance">{activity.title}</span>
                    <Badge variant={statusBadges[activity.status as keyof typeof statusBadges]} className="text-xs">
                      {activity.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground text-pretty">{activity.description}</p>
                  <span className="text-xs text-muted-foreground mt-1 inline-block">{activity.time}</span>
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
