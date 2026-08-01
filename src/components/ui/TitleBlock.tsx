interface TitleBlockProps {
  title: string;
  subtitle?: string;
}

export function TitleBlock({ title, subtitle }: TitleBlockProps) {
  return (
    <div className="relative mb-10 space-y-0 h-50 flex flex-col justify-center">
      <div className="absolute top-0 left-0 right-10 h-0 w-0 -z-10">
        <div className=" bg-yellow w-50 h-20" />
      </div>
       <div className="absolute bottom-20 right-50 h-0 w-0 -z-10">
        <div className="bg-purple w-50 h-20" />
      </div>
      <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-wider wrap-break-word">
        {title}
      </h2>
      {subtitle && (
        <p className="text-2xl opacity-80 max-w-2xl tracking-wide">
          {subtitle}
        </p>
      )}
    </div>
  );
}