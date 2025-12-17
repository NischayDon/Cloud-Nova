import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Dashboard from './dashboard-overview';

// Mock the child components to avoid issues with deep rendering
jest.mock('@/components/ui/card', () => ({
  Card: ({ children, className }: any) => <div className={`mock-card ${className}`}>{children}</div>,
  CardContent: ({ children, className }: any) => <div className={`mock-card-content ${className}`}>{children}</div>,
  CardHeader: ({ children }: any) => <div>{children}</div>,
  CardTitle: ({ children }: any) => <div>{children}</div>,
}));

jest.mock('@/components/ui/skeleton', () => ({
  Skeleton: () => <div data-testid="skeleton" />,
}));

describe('Dashboard Component', () => {
  it('renders dashboard overview', async () => {
    render(<Dashboard />);
    
    // Initially should show skeleton or loading
    expect(screen.getAllByTestId('skeleton').length).toBeGreaterThan(0);

    // Wait for the mock API to "resolve" and update state
    await waitFor(() => {
      expect(screen.getByText('StackFlow Overview')).toBeInTheDocument();
    });

    // Check if stats are rendered (values from the internal mock in dashboard-overview.tsx)
    expect(screen.getByText('Active Deployments')).toBeInTheDocument();
    expect(screen.getByText('142')).toBeInTheDocument(); // 142 is the new mocked value
  });
});
