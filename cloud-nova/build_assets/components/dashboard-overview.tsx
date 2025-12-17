'use client';

import React, { useEffect, useState } from 'react';
import {
  Cloud,
  CheckCircle,
  AlertCircle,
  Clock,
  TrendingUp,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
// Assuming these exist based on file list or we mock them if they don't
import { DeploymentStats } from '@/components/deployment-stats'; 
// Mocking missing components for now to ensure compilation
const PipelineStatus = () => <div className="p-4 border rounded">Pipeline Status Module</div>;
const RecentDeployments = () => <div className="p-4 border rounded">Recent Deployments Module</div>;
const PullRequestList = ({ title }: { title: string; maxItems?: number; showTitle?: boolean; paperVariant?: boolean }) => (
  <div className="p-4 border rounded">{title}</div>
);

// Mock types
interface DashboardStats {
  totalDeployments: number;
  successfulDeployments: number;
  failedDeployments: number;
  activeDeployments: number;
  avgDeploymentTime: number;
}

// Mock API
const dashboardAPI = {
  getStats: async () => {
    return {
      data: {
        totalDeployments: 142,
        successfulDeployments: 138,
        failedDeployments: 2,
        activeDeployments: 12,
        avgDeploymentTime: 270,
      } as DashboardStats,
    };
  },
};

// Mock Hook
const useSocket = () => {
  return {
    socket: {
      on: (event: string, callback: (data: any) => void) => {},
      off: (event: string) => {},
    },
  };
};

const Dashboard: React.FC = () => {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [loading, setLoading] = useState(true);
  const { socket } = useSocket();

  useEffect(() => {
    fetchDashboardStats();

    socket?.on('dashboard:update', (data) => {
      setStats((prev) => (prev ? { ...prev, ...data } : data));
    });

    return () => {
      socket?.off('dashboard:update');
    };
  }, [socket]);

  const fetchDashboardStats = async () => {
    try {
      const response = await dashboardAPI.getStats();
      setStats(response.data);
    } catch (error) {
      console.error('Failed to fetch stats:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading || !stats) {
    return (
      <div className="p-6 space-y-6">
         <Skeleton className="h-8 w-[200px]" />
         <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Skeleton className="h-32" />
            <Skeleton className="h-32" />
            <Skeleton className="h-32" />
            <Skeleton className="h-32" />
         </div>
      </div>
    );
  }

  const StatCard = ({ icon: Icon, title, value, colorClass, trend }: any) => (
    <Card>
      <CardContent className="p-6 flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-muted-foreground">
            {title}
          </p>
          <h3 className="text-2xl font-bold mt-1">
            {value}
          </h3>
          {trend && (
            <div className="flex items-center mt-1">
              <TrendingUp className={`w-4 h-4 mr-1 ${trend > 0 ? 'text-green-500' : 'text-red-500'}`} />
              <span className={`text-xs ${trend > 0 ? 'text-green-500' : 'text-red-500'}`}>
                {trend > 0 ? '+' : ''}{trend}%
              </span>
            </div>
          )}
        </div>
        <div className={`p-3 rounded-full ${colorClass}`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="p-6 space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">StackFlow Overview</h2>
        <p className="text-muted-foreground">
          Monitor your OpenStack deployments and CI/CD pipelines
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          icon={Cloud}
          title="Active Deployments"
          value={stats.totalDeployments}
          colorClass="bg-blue-600"
          trend={8}
        />
        <StatCard
          icon={CheckCircle}
          title="Pipeline Success"
          value={stats.successfulDeployments}
          colorClass="bg-green-600"
          trend={1.2}
        />
        <StatCard
          icon={AlertCircle}
          title="Pipeline Failures"
          value={stats.failedDeployments}
          colorClass="bg-red-600"
          trend={-50}
        />
        <StatCard
          icon={Clock}
          title="Running Jobs"
          value={stats.activeDeployments}
          colorClass="bg-orange-600"
        />
      </div>

      {/* Pipeline Status & Deployment Metrics */}
      <div className="grid gap-4 md:grid-cols-7">
        <div className="col-span-4">
          <PipelineStatus />
        </div>
        {/* <div className="col-span-3">
          <DeploymentMetrics avgTime={stats.avgDeploymentTime} />
        </div> */}
      </div>

      {/* Recent Deployments & Pull Requests */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <div className="col-span-4">
           <RecentDeployments />
        </div>
        <div className="col-span-3 space-y-4">
            <PullRequestList 
                title="Recent Merged PRs" 
            />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
