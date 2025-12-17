"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Shield, Lock, Key, Database, Network, Cloud } from "lucide-react"

const policies = [
  {
    id: "pol-001",
    name: "Enforce S3 Bucket Encryption",
    description: "All S3 buckets must have encryption enabled",
    category: "Storage",
    severity: "critical",
    enabled: true,
    blockedCount: 42,
    icon: Database,
  },
  {
    id: "pol-002",
    name: "Require MFA for IAM Users",
    description: "Multi-factor authentication required for all IAM users",
    category: "Identity",
    severity: "critical",
    enabled: true,
    blockedCount: 18,
    icon: Key,
  },
  {
    id: "pol-003",
    name: "Restrict Public Network Access",
    description: "Block resources with public internet access",
    category: "Network",
    severity: "high",
    enabled: true,
    blockedCount: 67,
    icon: Network,
  },
  {
    id: "pol-004",
    name: "Enforce TLS 1.2+ Only",
    description: "Require TLS 1.2 or higher for all connections",
    category: "Encryption",
    severity: "high",
    enabled: true,
    blockedCount: 23,
    icon: Lock,
  },
  {
    id: "pol-005",
    name: "Least Privilege IAM Roles",
    description: "IAM roles must follow least privilege principle",
    category: "Identity",
    severity: "medium",
    enabled: true,
    blockedCount: 31,
    icon: Shield,
  },
  {
    id: "pol-006",
    name: "Multi-Region Backup Required",
    description: "Critical data must have multi-region backups",
    category: "Resilience",
    severity: "medium",
    enabled: false,
    blockedCount: 0,
    icon: Cloud,
  },
]

const severityConfig = {
  critical: { variant: "destructive" as const, color: "text-destructive" },
  high: { variant: "default" as const, color: "text-chart-4" },
  medium: { variant: "secondary" as const, color: "text-chart-5" },
}

export function PolicyList() {
  return (
    <Card className="border-border">
      <CardHeader>
        <CardTitle>Policy Rules</CardTitle>
        <CardDescription>Configure and manage security enforcement policies</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {policies.map((policy) => {
            const Icon = policy.icon
            return (
              <div
                key={policy.id}
                className="flex items-start gap-4 p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors"
              >
                <div className="h-10 w-10 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="h-5 w-5 text-primary" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-medium text-balance">{policy.name}</span>
                    <Badge variant={severityConfig[policy.severity as keyof typeof severityConfig].variant}>
                      {policy.severity}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground text-pretty mb-2">{policy.description}</p>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span>{policy.category}</span>
                    <span>•</span>
                    <span>Blocked {policy.blockedCount} times</span>
                  </div>
                </div>

                <Switch checked={policy.enabled} className="mt-1" />
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
