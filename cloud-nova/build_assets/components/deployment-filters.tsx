"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"

const providers = [
  { id: "aws", label: "AWS", count: 142 },
  { id: "gcp", label: "GCP", count: 98 },
  { id: "azure", label: "Azure", count: 87 },
]

const statuses = [
  { id: "running", label: "Running", count: 284 },
  { id: "stopped", label: "Stopped", count: 32 },
  { id: "deploying", label: "Deploying", count: 8 },
  { id: "failed", label: "Failed", count: 3 },
]

const regions = [
  { id: "us-east-1", label: "US East (N. Virginia)" },
  { id: "us-west-2", label: "US West (Oregon)" },
  { id: "eu-west-1", label: "EU (Ireland)" },
  { id: "ap-southeast-1", label: "Asia Pacific (Singapore)" },
]

export function DeploymentFilters() {
  return (
    <Card className="border-border h-fit">
      <CardHeader>
        <CardTitle className="text-base">Filters</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-3">
          <Label className="text-sm font-medium">Cloud Provider</Label>
          {providers.map((provider) => (
            <div key={provider.id} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Checkbox id={provider.id} />
                <label
                  htmlFor={provider.id}
                  className="text-sm cursor-pointer leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {provider.label}
                </label>
              </div>
              <span className="text-xs text-muted-foreground">{provider.count}</span>
            </div>
          ))}
        </div>

        <Separator />

        <div className="space-y-3">
          <Label className="text-sm font-medium">Status</Label>
          {statuses.map((status) => (
            <div key={status.id} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Checkbox id={status.id} />
                <label
                  htmlFor={status.id}
                  className="text-sm cursor-pointer leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {status.label}
                </label>
              </div>
              <span className="text-xs text-muted-foreground">{status.count}</span>
            </div>
          ))}
        </div>

        <Separator />

        <div className="space-y-3">
          <Label className="text-sm font-medium">Region</Label>
          {regions.map((region) => (
            <div key={region.id} className="flex items-center gap-2">
              <Checkbox id={region.id} />
              <label
                htmlFor={region.id}
                className="text-sm cursor-pointer leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {region.label}
              </label>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
