import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Cloud, CheckCircle2 } from "lucide-react"

const providers = [
  {
    name: "Amazon Web Services",
    shortName: "AWS",
    status: "operational",
    deployments: 142,
    lastSync: "2 minutes ago",
    regions: 8,
  },
  {
    name: "Google Cloud Platform",
    shortName: "GCP",
    status: "operational",
    deployments: 98,
    lastSync: "5 minutes ago",
    regions: 6,
  },
  {
    name: "Microsoft Azure",
    shortName: "Azure",
    status: "operational",
    deployments: 87,
    lastSync: "3 minutes ago",
    regions: 7,
  },
]

export function CloudProviderStatus() {
  return (
    <Card className="border-border">
      <CardHeader>
        <CardTitle>Cloud Provider Status</CardTitle>
        <CardDescription>Real-time status and deployment counts</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {providers.map((provider) => (
          <div
            key={provider.shortName}
            className="flex items-center justify-between p-4 rounded-lg border border-border bg-card hover:bg-muted/50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-md bg-primary/10 flex items-center justify-center">
                <Cloud className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-medium">{provider.name}</span>
                  <Badge variant="outline" className="text-xs">
                    {provider.shortName}
                  </Badge>
                </div>
                <div className="flex items-center gap-3 mt-1 text-xs text-muted-foreground">
                  <span>{provider.deployments} deployments</span>
                  <span>•</span>
                  <span>{provider.regions} regions</span>
                  <span>•</span>
                  <span>{provider.lastSync}</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-accent" />
              <span className="text-sm text-accent font-medium">Operational</span>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
