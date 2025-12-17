import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { AlertTriangle, ExternalLink, GitPullRequest } from "lucide-react"

const violations = [
  {
    id: "vio-001",
    policy: "Enforce S3 Bucket Encryption",
    resource: "s3://prod-data-lake",
    pr: "#1247",
    author: "john.doe",
    time: "5 minutes ago",
    severity: "critical",
  },
  {
    id: "vio-002",
    policy: "Restrict Public Network Access",
    resource: "aws_security_group.web-sg",
    pr: "#1245",
    author: "jane.smith",
    time: "2 hours ago",
    severity: "high",
  },
  {
    id: "vio-003",
    policy: "Require MFA for IAM Users",
    resource: "aws_iam_user.developer",
    pr: "#1242",
    author: "bob.wilson",
    time: "5 hours ago",
    severity: "critical",
  },
  {
    id: "vio-004",
    policy: "Least Privilege IAM Roles",
    resource: "aws_iam_role.lambda-exec",
    pr: "#1238",
    author: "alice.chen",
    time: "1 day ago",
    severity: "medium",
  },
]

const severityConfig = {
  critical: { variant: "destructive" as const, color: "bg-destructive/10 text-destructive" },
  high: { variant: "default" as const, color: "bg-chart-4/10 text-chart-4" },
  medium: { variant: "secondary" as const, color: "bg-chart-5/10 text-chart-5" },
}

export function PolicyViolations() {
  return (
    <Card className="border-border">
      <CardHeader>
        <CardTitle>Recent Violations</CardTitle>
        <CardDescription>Blocked configurations and merge requests</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {violations.map((violation) => (
            <div
              key={violation.id}
              className="flex items-start gap-4 p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors"
            >
              <div
                className={`h-10 w-10 rounded-md flex items-center justify-center flex-shrink-0 ${severityConfig[violation.severity as keyof typeof severityConfig].color}`}
              >
                <AlertTriangle className="h-5 w-5" />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-medium text-balance">{violation.policy}</span>
                  <Badge variant={severityConfig[violation.severity as keyof typeof severityConfig].variant}>
                    {violation.severity}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  <code className="text-xs bg-muted px-1.5 py-0.5 rounded">{violation.resource}</code>
                </p>
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <GitPullRequest className="h-3 w-3" />
                    {violation.pr}
                  </span>
                  <span>•</span>
                  <span>{violation.author}</span>
                  <span>•</span>
                  <span>{violation.time}</span>
                </div>
              </div>

              <Button variant="ghost" size="icon" className="h-8 w-8 mt-1">
                <ExternalLink className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
