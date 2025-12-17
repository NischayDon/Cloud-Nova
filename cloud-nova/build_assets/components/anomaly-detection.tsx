"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { AlertTriangle, TrendingUp, Clock, MapPin } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const chartData = [
  { time: "00:00", normal: 120, anomalous: 0 },
  { time: "04:00", normal: 95, anomalous: 0 },
  { time: "08:00", normal: 180, anomalous: 2 },
  { time: "12:00", normal: 220, anomalous: 1 },
  { time: "16:00", normal: 195, anomalous: 0 },
  { time: "20:00", normal: 145, anomalous: 0 },
]

const chartConfig = {
  normal: {
    label: "Normal Activity",
    color: "hsl(var(--chart-2))",
  },
  anomalous: {
    label: "Anomalies",
    color: "hsl(var(--destructive))",
  },
} satisfies ChartConfig

const anomalies = [
  {
    id: "ano-001",
    title: "Unusual IAM Role Access",
    description: "Role 'prod-admin' accessed from new IP address in unusual timezone",
    severity: "high",
    time: "28 minutes ago",
    location: "AWS us-east-1",
    confidence: 94,
  },
  {
    id: "ano-002",
    title: "Spike in API Calls",
    description: "300% increase in API calls to GCP Cloud Storage from service account",
    severity: "medium",
    time: "2 hours ago",
    location: "GCP us-central1",
    confidence: 87,
  },
  {
    id: "ano-003",
    title: "Off-Hours Database Access",
    description: "Database accessed at 3:42 AM from admin account",
    severity: "medium",
    time: "5 hours ago",
    location: "Azure eastus",
    confidence: 78,
  },
]

const severityConfig = {
  high: { variant: "destructive" as const, color: "bg-destructive/10 text-destructive" },
  medium: { variant: "default" as const, color: "bg-chart-4/10 text-chart-4" },
}

export function AnomalyDetection() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <Card className="border-border">
        <CardHeader>
          <CardTitle>Activity Pattern Analysis</CardTitle>
          <CardDescription>ML-powered anomaly detection over 24 hours</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-[250px] w-full">
            <AreaChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="time" tickLine={false} axisLine={false} tickMargin={8} />
              <YAxis tickLine={false} axisLine={false} tickMargin={8} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Area
                type="monotone"
                dataKey="normal"
                stackId="1"
                stroke="var(--color-normal)"
                fill="var(--color-normal)"
                fillOpacity={0.6}
              />
              <Area
                type="monotone"
                dataKey="anomalous"
                stackId="1"
                stroke="var(--color-anomalous)"
                fill="var(--color-anomalous)"
                fillOpacity={0.8}
              />
            </AreaChart>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card className="border-border">
        <CardHeader>
          <CardTitle>Detected Anomalies</CardTitle>
          <CardDescription>Suspicious activities requiring investigation</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {anomalies.map((anomaly) => (
              <div
                key={anomaly.id}
                className="flex items-start gap-3 p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors"
              >
                <div
                  className={`h-9 w-9 rounded-md flex items-center justify-center flex-shrink-0 ${severityConfig[anomaly.severity as keyof typeof severityConfig].color}`}
                >
                  <AlertTriangle className="h-4 w-4" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-medium text-sm text-balance">{anomaly.title}</span>
                    <Badge
                      variant={severityConfig[anomaly.severity as keyof typeof severityConfig].variant}
                      className="text-xs"
                    >
                      {anomaly.severity}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground text-pretty mb-2">{anomaly.description}</p>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {anomaly.time}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {anomaly.location}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <TrendingUp className="h-3 w-3" />
                      {anomaly.confidence}% confidence
                    </span>
                  </div>
                </div>

                <Button variant="outline" size="sm" className="text-xs h-7 bg-transparent">
                  Investigate
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
