import { Card, CardContent } from "@/components/ui/card"
import { Cloud, Server, Shield, Zap } from "lucide-react"

const stats = [
  {
    label: "Total Deployments",
    value: "327",
    icon: Server,
    color: "text-chart-1",
  },
  {
    label: "Active Workloads",
    value: "284",
    icon: Zap,
    color: "text-chart-2",
  },
  {
    label: "Cloud Providers",
    value: "3",
    icon: Cloud,
    color: "text-chart-3",
  },
  {
    label: "Security Score",
    value: "98%",
    icon: Shield,
    color: "text-accent",
  },
]

export function DeploymentStats() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon
        return (
          <Card key={stat.label} className="border-border">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                  <p className="text-2xl font-bold mt-1">{stat.value}</p>
                </div>
                <div className={`h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center ${stat.color}`}>
                  <Icon className="h-6 w-6" />
                </div>
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
