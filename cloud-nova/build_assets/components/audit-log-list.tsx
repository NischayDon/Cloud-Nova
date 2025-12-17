import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Key, Settings, Rocket, AlertTriangle, User, Clock, MapPin } from "lucide-react"

const logs = [
  {
    id: "log-001",
    type: "auth",
    event: "IAM Role Assumed",
    user: "john.doe@company.com",
    resource: "arn:aws:iam::123456789:role/prod-admin",
    provider: "AWS",
    region: "us-east-1",
    severity: "medium",
    time: "2 minutes ago",
    ip: "203.0.113.42",
    icon: Key,
  },
  {
    id: "log-002",
    type: "policy",
    event: "Policy Violation Blocked",
    user: "jane.smith@company.com",
    resource: "s3://prod-data-lake",
    provider: "AWS",
    region: "us-west-2",
    severity: "high",
    time: "5 minutes ago",
    ip: "198.51.100.23",
    icon: AlertTriangle,
  },
  {
    id: "log-003",
    type: "deployment",
    event: "Workload Deployed",
    user: "deploy-bot",
    resource: "gcp-analytics-pipeline",
    provider: "GCP",
    region: "us-central1",
    severity: "low",
    time: "12 minutes ago",
    ip: "192.0.2.15",
    icon: Rocket,
  },
  {
    id: "log-004",
    type: "config",
    event: "Security Group Modified",
    user: "bob.wilson@company.com",
    resource: "sg-0a1b2c3d4e5f6g7h8",
    provider: "AWS",
    region: "eu-west-1",
    severity: "medium",
    time: "28 minutes ago",
    ip: "203.0.113.89",
    icon: Settings,
  },
  {
    id: "log-005",
    type: "access",
    event: "Database Query Executed",
    user: "alice.chen@company.com",
    resource: "azure-sql-prod",
    provider: "Azure",
    region: "eastus",
    severity: "low",
    time: "45 minutes ago",
    ip: "198.51.100.67",
    icon: Shield,
  },
  {
    id: "log-006",
    type: "auth",
    event: "MFA Challenge Completed",
    user: "david.kim@company.com",
    resource: "console-login",
    provider: "AWS",
    region: "us-east-1",
    severity: "low",
    time: "1 hour ago",
    ip: "192.0.2.34",
    icon: Key,
  },
  {
    id: "log-007",
    type: "policy",
    event: "Encryption Policy Enforced",
    user: "system",
    resource: "s3://backup-storage",
    provider: "AWS",
    region: "us-east-1",
    severity: "medium",
    time: "2 hours ago",
    ip: "automated",
    icon: Shield,
  },
  {
    id: "log-008",
    type: "access",
    event: "API Key Rotated",
    user: "security-automation",
    resource: "gcp-service-account",
    provider: "GCP",
    region: "global",
    severity: "low",
    time: "3 hours ago",
    ip: "automated",
    icon: Key,
  },
]

const severityConfig = {
  critical: { variant: "destructive" as const, color: "text-destructive" },
  high: { variant: "default" as const, color: "text-chart-4" },
  medium: { variant: "secondary" as const, color: "text-chart-5" },
  low: { variant: "outline" as const, color: "text-muted-foreground" },
}

const providerColors = {
  AWS: "bg-chart-1/10 text-chart-1",
  GCP: "bg-chart-2/10 text-chart-2",
  Azure: "bg-chart-3/10 text-chart-3",
}

export function AuditLogList() {
  return (
    <Card className="border-border">
      <CardHeader>
        <CardTitle>Event Log</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {logs.map((log) => {
            const Icon = log.icon
            return (
              <div
                key={log.id}
                className="flex items-start gap-3 p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors"
              >
                <div className="h-9 w-9 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="h-4 w-4 text-primary" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-medium text-sm text-balance">{log.event}</span>
                    <Badge
                      variant={severityConfig[log.severity as keyof typeof severityConfig].variant}
                      className="text-xs"
                    >
                      {log.severity}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground mb-2">
                    <code className="bg-muted px-1.5 py-0.5 rounded">{log.resource}</code>
                  </p>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground flex-wrap">
                    <span className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      {log.user}
                    </span>
                    <span>•</span>
                    <span
                      className={`px-1.5 py-0.5 rounded-md font-medium ${providerColors[log.provider as keyof typeof providerColors]}`}
                    >
                      {log.provider}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {log.region}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {log.time}
                    </span>
                    <span>•</span>
                    <span>{log.ip}</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
