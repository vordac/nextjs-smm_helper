interface ToolSidebarHeaderProps {
    title: string;
    description?: string;
  };
  
  export const ToolSidebarHeader = ({
    title,
    description
  }: ToolSidebarHeaderProps) => {
    return (
      <div className="p-4 border-b space-y-1 h-[68px] bg-primary">
        <p className="text-sm font-medium text-muted">
          {title}
        </p>
        {description && (
          <p className="text-xs text-muted">
            {description}
          </p>
        )}
      </div>
    );
  };
  