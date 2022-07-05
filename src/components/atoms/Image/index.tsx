type Props = {
  imgUrl?: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
};

export const MicroCmsImage: React.VFC<Props> = ({
  alt,
  imgUrl,
  className,
  width = 400,
  height = 250,
}) => {
  return imgUrl ? (
    <picture>
      <source
        srcSet={`${imgUrl}?fm=webp&w=${width}&h=${height}`}
        type="image/webp"
        width={width}
        height={height}
        className={className}
      />
      <img
        alt={alt}
        src={`${imgUrl}?w=${width}&h=${height}`}
        width={400}
        height={250}
        className={className}
      />
    </picture>
  ) : (
    <div className="w-[400] h-[250] bg-slate-400" />
  );
};
