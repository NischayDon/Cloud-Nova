import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingDown, TrendingUp, Rocket, Clock, Cloud, Activity } from "lucide-react"

const kpis = [
  {
    title: "Pipeline Success",
    value: "98.2%",
    change: "+1.2%",
    trend: "up",
    icon: Rocket,
    description: "vs. last 30 days",
  },
  {
    title: "Active Deployments",
    value: "142",
    change: "+8",
    trend: "up",
    icon: Cloud,
    description: "In OpenStack Projects",
  },
  {
    title: "Mean Time to Deploy",
    value: "4.5m",
    change: "-12%",
    trend: "down",
    icon: Clock,
    description: "Avg pipeline duration",
  },
  {
    title: "System Health",
    value: "100%",
    change: "0%",
    trend: "neutral",
    icon: Activity,
    description: "All OpenStack APIs Up",
  },
]

export function KpiCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {kpis.map((kpi) => {
        const Icon = kpi.icon
        return (
          <Card key={kpi.title} className="border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">{kpi.title}</CardTitle>
              <Icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-balance">{kpi.value}</div>
              <div className="flex items-center gap-1 mt-1">
                {kpi.trend === "up" && <TrendingUp className="h-3 w-3 text-accent" />}
                {kpi.trend === "down" && <TrendingDown className="h-3 w-3 text-accent" />}
                <span className={`text-xs ${kpi.trend === "neutral" ? "text-muted-foreground" : "text-accent"}`}>
                  {kpi.change}
                </span>
                <span className="text-xs text-muted-foreground ml-1">{kpi.description}</span>
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
