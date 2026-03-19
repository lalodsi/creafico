interface TitleBlockProps {
  title: string;
  subtitle?: string;
}

export function TitleBlock({ title, subtitle }: TitleBlockProps) {
  return (
    <div className="mb-10 space-y-4">
      <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg opacity-80 max-w-2xl">
          {subtitle}
        </p>
      )}
      <div className="w-20 h-1 bg-primary"></div>
    </div>
  );
}