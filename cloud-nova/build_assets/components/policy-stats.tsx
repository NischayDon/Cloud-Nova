import { Card, CardContent } from "@/components/ui/card"
import { Shield, Ban, CheckCircle2, AlertTriangle } from "lucide-react"

const stats = [
  {
    label: "Active Policies",
    value: "24",
    icon: Shield,
    color: "text-chart-1",
  },
  {
    label: "Blocked Merges",
    value: "156",
    icon: Ban,
    color: "text-destructive",
  },
  {
    label: "Compliance Rate",
    value: "100%",
    icon: CheckCircle2,
    color: "text-accent",
  },
  {
    label: "Violations (30d)",
    value: "12",
    icon: AlertTriangle,
    color: "text-chart-4",
  },
]

export function PolicyStats() {
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
