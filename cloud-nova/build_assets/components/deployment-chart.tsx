"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const chartData = [
  { date: "Week 1", aws: 45, gcp: 32, azure: 28 },
  { date: "Week 2", aws: 52, gcp: 38, azure: 31 },
  { date: "Week 3", aws: 48, gcp: 42, azure: 35 },
  { date: "Week 4", aws: 61, gcp: 45, azure: 38 },
  { date: "Week 5", aws: 58, gcp: 51, azure: 42 },
  { date: "Week 6", aws: 67, gcp: 48, azure: 45 },
  { date: "Week 7", aws: 72, gcp: 55, azure: 49 },
  { date: "Week 8", aws: 69, gcp: 58, azure: 52 },
]

const chartConfig = {
  aws: {
    label: "AWS",
    color: "hsl(var(--chart-1))",
  },
  gcp: {
    label: "GCP",
    color: "hsl(var(--chart-2))",
  },
  azure: {
    label: "Azure",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig

export function DeploymentChart() {
  return (
    <Card className="border-border">
      <CardHeader>
        <CardTitle>Secure Deployments</CardTitle>
        <CardDescription>Weekly deployment activity across cloud providers</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[300px] w-full">
          <AreaChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="date" tickLine={false} axisLine={false} tickMargin={8} />
            <YAxis tickLine={false} axisLine={false} tickMargin={8} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Area
              type="monotone"
              dataKey="aws"
              stackId="1"
              stroke="var(--color-aws)"
              fill="var(--color-aws)"
              fillOpacity={0.6}
            />
            <Area
              type="monotone"
              dataKey="gcp"
              stackId="1"
              stroke="var(--color-gcp)"
              fill="var(--color-gcp)"
              fillOpacity={0.6}
            />
            <Area
              type="monotone"
              dataKey="azure"
              stackId="1"
              stroke="var(--color-azure)"
              fill="var(--color-azure)"
              fillOpacity={0.6}
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
