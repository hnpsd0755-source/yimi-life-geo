type SiteImageRatio = "square" | "wide" | "card" | "certificate";

type SiteImageProps = {
  src: string;
  alt: string;
  caption?: string;
  ratio?: SiteImageRatio;
  className?: string;
};

const ratioClassMap: Record<SiteImageRatio, string> = {
  square: "aspect-square",
  wide: "aspect-video",
  card: "aspect-[4/3]",
  certificate: "aspect-[1/1.414]",
};

export function SiteImage({
  src,
  alt,
  caption,
  ratio = "wide",
  className = "",
}: SiteImageProps) {
  return (
    <figure className={className}>
      <div
        className={`overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 ${ratioClassMap[ratio]}`}
      >
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </div>

      {caption ? (
        <figcaption className="mt-3 text-xs leading-5 text-slate-500">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
