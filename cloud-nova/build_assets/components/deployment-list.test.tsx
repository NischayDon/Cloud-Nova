import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { DeploymentList } from './deployment-list';

// Mock UI components
jest.mock('@/components/ui/card', () => ({
  Card: ({ children, className }: any) => <div className={`mock-card ${className}`}>{children}</div>,
  CardContent: ({ children, className }: any) => <div className={`mock-card-content ${className}`}>{children}</div>,
  CardHeader: ({ children }: any) => <div>{children}</div>,
  CardTitle: ({ children }: any) => <div>{children}</div>,
}));

jest.mock('@/components/ui/badge', () => ({
  Badge: ({ children, variant }: any) => <span data-testid="badge" data-variant={variant}>{children}</span>,
}));

jest.mock('@/components/ui/button', () => ({
  Button: ({ children, onClick, ...props }: any) => <button onClick={onClick} {...props}>{children}</button>,
}));

jest.mock('@/components/ui/dropdown-menu', () => ({
  DropdownMenu: ({ children }: any) => <div>{children}</div>,
  DropdownMenuTrigger: ({ children }: any) => <div>{children}</div>,
  DropdownMenuContent: ({ children }: any) => <div>{children}</div>,
  DropdownMenuItem: ({ children }: any) => <div>{children}</div>,
  DropdownMenuSeparator: () => <hr />,
}));

// Mock Lucide icons
jest.mock('lucide-react', () => ({
  Cloud: () => <svg data-testid="icon-cloud" />,
  MoreVertical: () => <svg data-testid="icon-more" />,
  Play: () => <svg data-testid="icon-play" />,
  Square: () => <svg data-testid="icon-square" />,
  Trash2: () => <svg data-testid="icon-trash" />,
  GitCommit: () => <svg data-testid="icon-commit" />,
  Terminal: () => <svg data-testid="icon-terminal" />,
}));

describe('DeploymentList Component', () => {
  it('renders the list of deployments', () => {
    render(<DeploymentList />);
    expect(screen.getByText('Infrastructure Deployments')).toBeInTheDocument();
    expect(screen.getByText('auth-service-v2')).toBeInTheDocument();
    expect(screen.getByText('payment-gateway')).toBeInTheDocument();
  });

  it('displays correct provider and region info', () => {
    render(<DeploymentList />);
    expect(screen.getAllByText('OpenStack').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Core-Identity').length).toBeGreaterThan(0);
    
    expect(screen.getAllByText('AWS').length).toBeGreaterThan(0);
    expect(screen.getAllByText('FinTech-Prod').length).toBeGreaterThan(0);
  });

  it('renders status badges with correct text', () => {
    render(<DeploymentList />);
    const badges = screen.getAllByTestId('badge');
    
    // Check for specific statuses
    expect(screen.getAllByText('running').length).toBeGreaterThan(0);
    expect(screen.getAllByText('deploying').length).toBeGreaterThan(0);
    expect(screen.getAllByText('stopped').length).toBeGreaterThan(0);
  });

  it('renders action buttons based on status', () => {
    render(<DeploymentList />);
    
    // Running deployments should have a "Square" (Stop) button
    expect(screen.getAllByTestId('icon-square').length).toBeGreaterThan(0);
    
    // Stopped deployments should have a "Play" (Start) button
    expect(screen.getAllByTestId('icon-play').length).toBeGreaterThan(0);
  });
});
