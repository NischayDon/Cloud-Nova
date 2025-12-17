# Cloud Nova - Documentation

## Table of Contents
- [Overview](#overview)
- [Technology Stack](#technology-stack)
- [Architecture](#architecture)
- [Key Features](#key-features)
- [Directory Structure](#directory-structure)
- [Getting Started](#getting-started)
- [Development Guide](#development-guide)
- [Pages and Routes](#pages-and-routes)
- [Components](#components)
- [Deployment](#deployment)

## Overview

Cloud Nova is an enterprise-grade DevOps platform designed to automate application deployments across OpenStack and multi-cloud environments. The application provides real-time security monitoring, automated policy enforcement, certificate management, and anomaly detection capabilities.

### Purpose

The platform addresses critical security challenges in multi-cloud environments by:
- Automating secure workload provisioning across cloud providers
- Enforcing security policies and blocking insecure configurations
- Monitoring TLS certificates and automating renewals
- Detecting anomalous behavior through ML-powered analysis
- Providing centralized audit logging and compliance tracking

## Technology Stack

### Frontend Framework
- **Next.js 16.0.0** - React framework with App Router
- **React 19.2.0** - UI library
- **TypeScript 5.x** - Type-safe development

### UI Components
- **Radix UI** - Headless accessible component primitives
  - Accordion, Alert Dialog, Dropdown Menu, Dialog, Popover, Select, Tabs, Toast, etc.
- **Lucide React** - Icon library
- **shadcn/ui** - Re-usable component system built on Radix UI

### Styling
- **Tailwind CSS 4.1.9** - Utility-first CSS framework
- **PostCSS** - CSS processing
- **tailwindcss-animate** - Animation utilities
- **class-variance-authority** - Component variant management

### Form & Data Handling
- **React Hook Form 7.60.0** - Form state management
- **Zod 3.25.76** - Schema validation
- **@hookform/resolvers** - Form validation resolvers

### Charts & Visualization
- **Recharts** - Chart library for data visualization
- **date-fns 4.1.0** - Date manipulation library

### Additional Libraries
- **next-themes** - Dark mode support
- **embla-carousel-react** - Carousel component
- **cmdk** - Command menu interface
- **sonner** - Toast notifications
- **vaul** - Drawer component

### Analytics
- **Vercel Analytics** - Web analytics

## Architecture

### Application Structure

The application follows Next.js App Router architecture with a component-based design:

```
Multi-Cloud-Secure-Deployment-Automation/
├── app/                      # Next.js App Router pages
│   ├── audit/               # Audit logs page
│   ├── certificates/        # Certificate management page
│   ├── deployments/         # Deployments management page
│   ├── policies/            # Security policies page
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Dashboard home page
├── components/              # React components
│   ├── ui/                  # Base UI components (shadcn/ui)
│   ├── dashboard-header.tsx # Main navigation header
│   ├── kpi-cards.tsx       # KPI metrics cards
│   ├── deployment-*.tsx    # Deployment-related components
│   ├── policy-*.tsx        # Policy-related components
│   ├── certificate-*.tsx   # Certificate-related components
│   ├── audit-*.tsx         # Audit-related components
│   └── anomaly-detection.tsx # ML-powered anomaly detection
├── lib/                     # Utility libraries
│   └── utils.ts            # Utility functions
├── hooks/                   # Custom React hooks
├── styles/                  # Additional style files
├── public/                  # Static assets
├── components.json          # shadcn/ui configuration
├── next.config.mjs         # Next.js configuration
├── tsconfig.json           # TypeScript configuration
├── tailwind.config.ts      # Tailwind CSS configuration
└── package.json            # Dependencies and scripts
```

## Key Features

### 1. Dashboard (Main Page)
- **KPI Cards**: Real-time metrics tracking
  - Misconfigurations reduced (42%)
  - Certificate incidents (0)
  - Mean time to detect (8.2m)
  - Policy compliance (100%)
- **Deployment Chart**: Visual representation of deployments over time
- **Cloud Provider Status**: Real-time status for AWS, GCP, and Azure
- **Recent Activity**: Latest security events and automated actions

### 2. Deployments Management
- View and manage workloads across AWS, GCP, and Azure
- Filter deployments by provider, region, and status
- Real-time deployment statistics
- Start, stop, and delete deployments
- Security score tracking per deployment
- Multi-region deployment support

### 3. Security Policies
- Configure and enforce security rules
- Policy categories:
  - Storage (S3 bucket encryption)
  - Identity (MFA for IAM users)
  - Network (public access restrictions)
  - Encryption (TLS 1.2+ enforcement)
  - Resilience (multi-region backups)
- Severity levels: Critical, High, Medium
- Toggle policies on/off
- Track blocked configuration attempts
- View policy violations

### 4. Audit Logs
- Comprehensive security event tracking
- Filter by:
  - Event type (access, deployment, config change, etc.)
  - Severity level
  - Time range
  - User/service
- ML-powered anomaly detection
- Visual activity pattern analysis
- Detected anomaly investigation

### 5. Certificate Management
- Monitor TLS certificates across all deployments
- Certificate statistics:
  - Total certificates
  - Certificates expiring soon
  - Auto-renewal status
- Certificate timeline visualization
- Auto-renewal capabilities
- Certificate download and revocation
- Expiration alerts (color-coded by days remaining)

### 6. Anomaly Detection
- Machine learning-powered behavioral analysis
- 24-hour activity pattern visualization
- Confidence scoring for detected anomalies
- Location and time-based anomaly tracking
- Investigation workflows

## Directory Structure

### `/app` Directory

Contains Next.js page components and routing:

- **`layout.tsx`**: Root layout with metadata, font configuration, and analytics
- **`page.tsx`**: Dashboard home page
- **`globals.css`**: Global styles including Tailwind directives
- **`/audit/page.tsx`**: Audit logs and anomaly detection page
- **`/certificates/page.tsx`**: Certificate management page
- **`/deployments/page.tsx`**: Deployment management page
- **`/policies/page.tsx`**: Security policy configuration page

### `/components` Directory

Reusable React components organized by feature:

#### Feature Components
- **`dashboard-header.tsx`**: Main navigation bar with branding and menu
- **`kpi-cards.tsx`**: Key performance indicator cards
- **`deployment-chart.tsx`**: Deployment visualization chart
- **`deployment-filters.tsx`**: Deployment filtering controls
- **`deployment-list.tsx`**: List of all deployments
- **`deployment-stats.tsx`**: Deployment statistics overview
- **`cloud-provider-status.tsx`**: Cloud provider health status
- **`recent-activity.tsx`**: Recent security events feed
- **`policy-list.tsx`**: Security policy rules list
- **`policy-stats.tsx`**: Policy statistics and metrics
- **`policy-violations.tsx`**: Policy violation reports
- **`certificate-list.tsx`**: Certificate inventory list
- **`certificate-stats.tsx`**: Certificate statistics
- **`certificate-timeline.tsx`**: Certificate expiration timeline
- **`audit-log-list.tsx`**: Audit event log list
- **`audit-log-filters.tsx`**: Audit log filtering controls
- **`audit-stats.tsx`**: Audit statistics dashboard
- **`anomaly-detection.tsx`**: ML-powered anomaly detection

#### UI Components (`/components/ui`)
Base components from shadcn/ui including:
- `button.tsx`, `card.tsx`, `badge.tsx`
- `dropdown-menu.tsx`, `dialog.tsx`, `sheet.tsx`
- `input.tsx`, `select.tsx`, `checkbox.tsx`, `switch.tsx`
- `tabs.tsx`, `accordion.tsx`, `collapsible.tsx`
- `toast.tsx`, `popover.tsx`, `tooltip.tsx`
- `carousel.tsx`, `progress.tsx`, `slider.tsx`
- And many more...

### `/lib` Directory
- **`utils.ts`**: Utility functions (e.g., `cn()` for class name merging)

### `/hooks` Directory
Custom React hooks for shared logic

### `/styles` Directory
Additional stylesheets

### `/public` Directory
Static assets (images, fonts, etc.)

## Getting Started

### Prerequisites
- Node.js 18.x or higher
- pnpm (preferred) or npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/johaankjis/Multi-Cloud-Secure-Deployment-Automation.git
cd Multi-Cloud-Secure-Deployment-Automation
```

2. Install dependencies:
```bash
pnpm install
# or
npm install
```

3. Run the development server:
```bash
pnpm dev
# or
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Environment Setup

The application uses Next.js's built-in environment variable support. Create a `.env.local` file for local development if needed.

## Development Guide

### Available Scripts

- **`pnpm dev`**: Start development server (default: http://localhost:3000)
- **`pnpm build`**: Build production application
- **`pnpm start`**: Start production server
- **`pnpm lint`**: Run ESLint code quality checks

### Code Structure

#### TypeScript Configuration
- Strict mode enabled
- Path aliases: `@/*` maps to project root
- Target: ES6
- JSX: preserve (handled by Next.js)

#### Styling Approach
- Utility-first with Tailwind CSS
- Dark mode enabled by default (`dark` class on `<html>`)
- Custom color scheme using CSS variables
- Component variants using `class-variance-authority`

#### Component Patterns
1. **Server Components (Default)**: Most components are React Server Components
2. **Client Components**: Marked with `"use client"` directive (e.g., interactive forms, charts)
3. **Composition**: Components use composition pattern with Card, CardHeader, CardContent, etc.

### Adding New Features

1. **New Page**: Create `page.tsx` in appropriate `/app` subdirectory
2. **New Component**: Add to `/components` directory
3. **New UI Component**: Add to `/components/ui` directory
4. **Styling**: Use Tailwind utility classes and CSS variables

### UI Component Library

The project uses shadcn/ui components. To add new components:

```bash
npx shadcn@latest add [component-name]
```

This will automatically add the component to `/components/ui`.

## Pages and Routes

### Routes

| Route | Page | Description |
|-------|------|-------------|
| `/` | Dashboard | Main overview with KPIs, charts, and recent activity |
| `/deployments` | Deployments | Manage cloud workloads across providers |
| `/policies` | Policies | Configure security policy rules |
| `/audit` | Audit Logs | View security events and anomalies |
| `/certificates` | Certificates | Manage TLS certificates |

### Page Components

Each page follows a consistent structure:
1. `DashboardHeader` - Navigation bar
2. Page title and description
3. Action buttons (e.g., "New Deployment")
4. Statistics/metrics section
5. Main content (lists, charts, filters)

## Components

### Layout Components

#### DashboardHeader
Main navigation component with:
- Logo and branding ("Cloud Nova")
- Navigation links (Dashboard, Deployments, Policies, Audit Logs, Certificates)
- Notification bell with badge
- User account dropdown menu

### Data Display Components

#### KpiCards
Displays 4 key metrics:
- Misconfigurations Reduced
- Certificate Incidents
- Mean Time to Detect
- Policy Compliance

Each card shows:
- Title and icon
- Value
- Change percentage with trend indicator
- Description

#### CloudProviderStatus
Shows real-time status for:
- Amazon Web Services (AWS)
- Google Cloud Platform (GCP)
- Microsoft Azure

Displays:
- Provider name and icon
- Operational status
- Number of deployments
- Active regions
- Last sync time

#### RecentActivity
Activity feed showing:
- Policy blocks
- Certificate renewals
- Anomaly detections
- Deployment completions
- Security events

### List Components

#### DeploymentList
Displays all deployments with:
- Deployment name
- Cloud provider (AWS/GCP/Azure)
- Region
- Status (running/stopped/deploying/failed)
- Instance count
- Security score
- Last deployed time
- Action buttons (start/stop/delete)

#### PolicyList
Shows security policies with:
- Policy name and icon
- Description
- Category
- Severity level (critical/high/medium)
- Blocked count
- Enable/disable toggle

#### CertificateList
Certificate inventory with:
- Domain name
- Issuer (Let's Encrypt, DigiCert, etc.)
- TLS version
- Status (valid/expiring/expired)
- Issue and expiration dates
- Days until expiration
- Auto-renewal status
- Actions (renew, download, revoke)

### Chart Components

#### DeploymentChart
Time-series chart showing deployment trends

#### AnomalyDetection
ML-powered anomaly detection with:
- 24-hour activity pattern area chart
- List of detected anomalies
- Confidence scores
- Location and timing information
- Investigation actions

### Filter Components

#### DeploymentFilters
Filters for deployments:
- Cloud provider
- Region
- Status
- Environment

#### AuditLogFilters
Filters for audit logs:
- Event type
- Severity
- Time range
- User/service

## Deployment

### Production Build

```bash
pnpm build
```

This creates an optimized production build in `.next/` directory.

### Deployment Platforms

#### Vercel (Recommended)
1. Push code to GitHub
2. Import project in Vercel
3. Configure environment variables
4. Deploy automatically

#### Other Platforms
The application can be deployed to any platform that supports Next.js:
- AWS Amplify
- Google Cloud Run
- Azure Static Web Apps
- Netlify
- Docker

### Environment Variables

Set the following variables in production:
- Analytics and monitoring keys (if using external services)
- API endpoints for backend services
- Cloud provider credentials (if implementing backend integration)

### Production Considerations

1. **Security**: Implement proper authentication and authorization
2. **API Integration**: Connect to actual cloud provider APIs (AWS, GCP, Azure)
3. **Database**: Add persistent storage for audit logs, policies, etc.
4. **Real-time Updates**: Implement WebSocket or polling for live updates
5. **Monitoring**: Add application performance monitoring
6. **Error Tracking**: Integrate error tracking service (e.g., Sentry)

## Future Enhancements

### Planned Features
- Backend API integration with cloud providers
- User authentication and role-based access control (RBAC)
- Real-time notifications via WebSocket
- Advanced filtering and search capabilities
- Exportable reports (PDF, CSV)
- Custom dashboard widgets
- Multi-tenant support
- API for programmatic access
- Mobile-responsive improvements
- Terraform/CloudFormation template validation
- Cost optimization recommendations

### Architecture Improvements
- Add state management (Zustand, Redux)
- Implement API layer with tRPC or REST
- Add database layer (PostgreSQL, MongoDB)
- Implement caching strategy (Redis)
- Add CI/CD pipeline
- Implement comprehensive test suite (Jest, Playwright)

## Contributing

### Code Style
- Use TypeScript for type safety
- Follow existing component patterns
- Use Tailwind utility classes
- Keep components small and focused
- Add proper TypeScript types

### Component Guidelines
1. Server Components by default
2. Client Components only when necessary
3. Use composition over inheritance
4. Consistent prop naming
5. Accessible components (ARIA attributes)

## Support

For questions, issues, or contributions:
- GitHub Repository: [Multi-Cloud-Secure-Deployment-Automation](https://github.com/johaankjis/Multi-Cloud-Secure-Deployment-Automation)
- Create an issue for bug reports or feature requests
- Submit pull requests for contributions

## License

[Specify license here]

---

*Documentation last updated: October 2025*
*Version: 0.1.0*
