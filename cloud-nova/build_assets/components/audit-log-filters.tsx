"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"

const eventTypes = [
  { id: "auth", label: "Authentication", count: 3247 },
  { id: "access", label: "Resource Access", count: 5821 },
  { id: "config", label: "Configuration", count: 1456 },
  { id: "deployment", label: "Deployment", count: 892 },
  { id: "policy", label: "Policy Violation", count: 156 },
]

const severities = [
  { id: "critical", label: "Critical", count: 12 },
  { id: "high", label: "High", count: 45 },
  { id: "medium", label: "Medium", count: 234 },
  { id: "low", label: "Low", count: 1876 },
]

const providers = [
  { id: "aws", label: "AWS" },
  { id: "gcp", label: "GCP" },
  { id: "azure", label: "Azure" },
]

export function AuditLogFilters() {
  return (
    <Card className="border-border h-fit">
      <CardHeader>
        <CardTitle className="text-base">Filters</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-3">
          <Label className="text-sm font-medium">Event Type</Label>
          {eventTypes.map((type) => (
            <div key={type.id} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Checkbox id={type.id} />
                <label
                  htmlFor={type.id}
                  className="text-sm cursor-pointer leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {type.label}
                </label>
              </div>
              <span className="text-xs text-muted-foreground">{type.count}</span>
            </div>
          ))}
        </div>

        <Separator />

        <div className="space-y-3">
          <Label className="text-sm font-medium">Severity</Label>
          {severities.map((severity) => (
            <div key={severity.id} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Checkbox id={severity.id} />
                <label
                  htmlFor={severity.id}
                  className="text-sm cursor-pointer leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {severity.label}
                </label>
              </div>
              <span className="text-xs text-muted-foreground">{severity.count}</span>
            </div>
          ))}
        </div>

        <Separator />

        <div className="space-y-3">
          <Label className="text-sm font-medium">Cloud Provider</Label>
          {providers.map((provider) => (
            <div key={provider.id} className="flex items-center gap-2">
              <Checkbox id={provider.id} />
              <label
                htmlFor={provider.id}
                className="text-sm cursor-pointer leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {provider.label}
              </label>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
