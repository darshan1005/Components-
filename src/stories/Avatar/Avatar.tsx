export interface AvatarProps{
  src: string;
  alt: string;
  size: number;
}

export const Avatar: React.FC<AvatarProps> = ({src, alt, size = 70})=>{
  return <img src={src} alt={alt} style={{
    width: size, height: size, borderRadius: "100%", border: '1px solid black', objectFit: 'cover'
  }} />
}