interface TitleBlockProps {
  title: string;
  subtitle?: string;
  type?: "main" | "services"
  entrance?: boolean
}

export function TitleBlock({ title, subtitle, type="main", entrance=false }: TitleBlockProps) {
  const containerClass = 
    type === "main"
      ? "relative mb-10 space-y-0 h-50 flex flex-col justify-center"
      : "relative mb-10 text-center py-10 flex flex-col justify-center items-center"
  const squaresWidth =
    type === "main"
      ? "md:w-[12.5rem]"
      : "md:w-120";
  const enter = entrance ? "animate-fade-in" : "";
  const enterLate = entrance ? "animate-fade-in-muted fade-delay" : "";
  return (
    <div className={containerClass}>
      <div className={`absolute top-0 left-0 h-0 w-0 -z-10 ${enter}`}>
        <div className={`bg-yellow/70 w-20 ${squaresWidth} h-20`} />
      </div>
       <div className={`absolute bottom-20 right-20 ${type === "main" ? "md:right-50" : "md:right-120"} h-0 w-0 -z-10 ${enter}`}>
        <div className={`bg-purple/70 w-20 ${squaresWidth} h-20`} />
      </div>
      <h2 className={
        type === "main"
          ? `text-4xl md:text-5xl font-bold uppercase tracking-wider wrap-break-word ${enter}`
          : `text-4xl md:text-5xl font-bold tracking-wider wrap-break-word ${enter}`
      }>
        {title}
      </h2>
      {subtitle && type==="main" && (
        <p className={`text-2xl max-w-2xl tracking-wide ${entrance ? enterLate : "opacity-80"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}