import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Key, MoreVertical, RefreshCw, Download, Trash2 } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const certificates = [
  {
    id: "cert-001",
    domain: "api.production.example.com",
    issuer: "Let's Encrypt",
    type: "TLS 1.3",
    status: "valid",
    issued: "Jan 15, 2025",
    expires: "Apr 15, 2025",
    daysLeft: 84,
    autoRenew: true,
  },
  {
    id: "cert-002",
    domain: "app.example.com",
    issuer: "Let's Encrypt",
    type: "TLS 1.3",
    status: "valid",
    issued: "Dec 20, 2024",
    expires: "Mar 20, 2025",
    daysLeft: 58,
    autoRenew: true,
  },
  {
    id: "cert-003",
    domain: "cdn.example.com",
    issuer: "DigiCert",
    type: "TLS 1.3",
    status: "valid",
    issued: "Oct 1, 2024",
    expires: "Oct 1, 2025",
    daysLeft: 252,
    autoRenew: true,
  },
  {
    id: "cert-004",
    domain: "admin.example.com",
    issuer: "Let's Encrypt",
    type: "TLS 1.2",
    status: "valid",
    issued: "Jan 10, 2025",
    expires: "Apr 10, 2025",
    daysLeft: 79,
    autoRenew: true,
  },
  {
    id: "cert-005",
    domain: "staging.example.com",
    issuer: "Let's Encrypt",
    type: "TLS 1.3",
    status: "expiring",
    issued: "Nov 25, 2024",
    expires: "Feb 23, 2025",
    daysLeft: 2,
    autoRenew: false,
  },
  {
    id: "cert-006",
    domain: "docs.example.com",
    issuer: "Let's Encrypt",
    type: "TLS 1.3",
    status: "valid",
    issued: "Dec 15, 2024",
    expires: "Mar 15, 2025",
    daysLeft: 53,
    autoRenew: true,
  },
]

const statusConfig = {
  valid: { variant: "default" as const, color: "text-accent" },
  expiring: { variant: "destructive" as const, color: "text-destructive" },
  expired: { variant: "destructive" as const, color: "text-destructive" },
}

export function CertificateList() {
  return (
    <Card className="border-border">
      <CardHeader>
        <CardTitle>All Certificates</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors"
            >
              <div className="flex items-center gap-4 flex-1 min-w-0">
                <div className="h-10 w-10 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Key className="h-5 w-5 text-primary" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-medium text-balance">{cert.domain}</span>
                    <Badge variant={statusConfig[cert.status as keyof typeof statusConfig].variant}>
                      {cert.status}
                    </Badge>
                    {cert.autoRenew && (
                      <Badge variant="outline" className="gap-1">
                        <RefreshCw className="h-3 w-3" />
                        Auto-renew
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span>{cert.issuer}</span>
                    <span>•</span>
                    <span>{cert.type}</span>
                    <span>•</span>
                    <span>Expires {cert.expires}</span>
                    <span>•</span>
                    <span
                      className={
                        cert.daysLeft < 30
                          ? "text-destructive font-medium"
                          : cert.daysLeft < 60
                            ? "text-chart-4 font-medium"
                            : ""
                      }
                    >
                      {cert.daysLeft} days left
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 ml-4">
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <RefreshCw className="h-4 w-4" />
                </Button>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>View Details</DropdownMenuItem>
                    <DropdownMenuItem>
                      <Download className="h-4 w-4 mr-2" />
                      Download Certificate
                    </DropdownMenuItem>
                    <DropdownMenuItem>Toggle Auto-Renew</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-destructive">
                      <Trash2 className="h-4 w-4 mr-2" />
                      Revoke
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
