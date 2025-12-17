import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Cloud, MoreVertical, Play, Square, Trash2, GitCommit, Terminal } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const deployments = [
  {
    id: "dep-001",
    name: "auth-service-v2",
    provider: "OpenStack",
    project: "Core-Identity",
    region: "Region-A",
    status: "running",
    commit: "a7b8c9d",
    lastDeployed: "5 mins ago",
    health: "100%",
  },
  {
    id: "dep-002",
    name: "payment-gateway",
    provider: "AWS",
    project: "FinTech-Prod",
    region: "us-east-1",
    status: "running",
    commit: "f1e2d3c",
    lastDeployed: "1 hour ago",
    health: "99.9%",
  },
  {
    id: "dep-003",
    name: "data-indexer",
    provider: "OpenStack",
    project: "BigData-Analytics",
    region: "Region-B",
    status: "deploying",
    commit: "d4e5f6g",
    lastDeployed: "Just now",
    health: "-",
  },
  {
    id: "dep-004",
    name: "customer-portal",
    provider: "GCP",
    project: "Web-Frontend",
    region: "us-central1",
    status: "running",
    commit: "b2n3m4l",
    lastDeployed: "3 hours ago",
    health: "100%",
  },
  {
    id: "dep-005",
    name: "legacy-worker",
    provider: "OpenStack",
    project: "Archive-Ops",
    region: "Region-A",
    status: "stopped",
    commit: "x1y2z3w",
    lastDeployed: "2 days ago",
    health: "0%",
  },
]

const statusConfig = {
  running: { variant: "default" as const, color: "text-accent" },
  stopped: { variant: "secondary" as const, color: "text-muted-foreground" },
  deploying: { variant: "outline" as const, color: "text-chart-1" },
  failed: { variant: "destructive" as const, color: "text-destructive" },
}

const providerColors = {
  OpenStack: "bg-primary/10 text-primary",
  AWS: "bg-chart-1/10 text-chart-1",
  GCP: "bg-chart-2/10 text-chart-2",
  Azure: "bg-chart-3/10 text-chart-3",
}

export function DeploymentList() {
  return (
    <Card className="border-border">
      <CardHeader>
        <CardTitle>Infrastructure Deployments</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {deployments.map((deployment) => (
            <div
              key={deployment.id}
              className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors"
            >
              <div className="flex items-center gap-4 flex-1 min-w-0">
                <div className="h-10 w-10 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Terminal className="h-5 w-5 text-primary" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-medium text-balance">{deployment.name}</span>
                    <Badge variant={statusConfig[deployment.status as keyof typeof statusConfig].variant}>
                      {deployment.status}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span
                      className={`px-2 py-0.5 rounded-md font-medium ${providerColors[deployment.provider as keyof typeof providerColors]}`}
                    >
                      {deployment.provider}
                    </span>
                    <span>{deployment.project}</span>
                    <span className="hidden sm:inline">•</span>
                    <span className="flex items-center gap-1">
                      <GitCommit className="h-3 w-3" />
                      {deployment.commit}
                    </span>
                    <span>•</span>
                    <span>Uptime: {deployment.health}</span>
                  </div>
                </div>

                <div className="hidden md:flex items-center gap-2 text-xs text-muted-foreground">
                  <span>{deployment.lastDeployed}</span>
                </div>
              </div>

              <div className="flex items-center gap-2 ml-4">
                {deployment.status === "running" && (
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Square className="h-4 w-4" />
                  </Button>
                )}
                {deployment.status === "stopped" && (
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Play className="h-4 w-4" />
                  </Button>
                )}

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>View Details</DropdownMenuItem>
                    <DropdownMenuItem>Edit Configuration</DropdownMenuItem>
                    <DropdownMenuItem>View Logs</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-destructive">
                      <Trash2 className="h-4 w-4 mr-2" />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
