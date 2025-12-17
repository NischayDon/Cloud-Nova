import { Card, CardContent } from "@/components/ui/card"
import { FileText, AlertTriangle, Activity, TrendingUp } from "lucide-react"

const stats = [
  {
    label: "Total Events (24h)",
    value: "12,847",
    icon: FileText,
    color: "text-chart-1",
  },
  {
    label: "Anomalies Detected",
    value: "3",
    icon: AlertTriangle,
    color: "text-destructive",
  },
  {
    label: "Active Sessions",
    value: "142",
    icon: Activity,
    color: "text-accent",
  },
  {
    label: "Event Rate",
    value: "+8.2%",
    icon: TrendingUp,
    color: "text-chart-2",
  },
]

export function AuditStats() {
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
