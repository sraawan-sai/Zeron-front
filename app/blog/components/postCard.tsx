import Image from "next/image";
import { useRouter } from "next/navigation";

interface BlogCardProps {
  image: string;
  title: string;
  category: string;
  date: string;
  documentId : number;
}

const BlogCard: React.FC<BlogCardProps> = ({
  image,
  title,
  category,
  date,
  documentId

}) => {
  const router = useRouter();
  const API_URL = "http://localhost:1337";
  const handleRedirect = () => {
    router.push(`/blog/${documentId}`);
  };
  return (
    <div onClick={handleRedirect} className="flex flex-col ">
      <div className="w-full h-[120px] xs:h-[250px] bg-white/20 rounded-[8px] relative">
        <Image
          src={image.startsWith('http') 
            ? image 
            : `${API_URL}${image}`}
          alt={title}
          fill={true}
          unoptimized
          className="object-cover object-center rounded-[8px]"
        />
      </div>
      <div className="mt-7 flex flex-col gap-2">
        <div className="flex items-start md:items-center flex-col md:flex-row gap-2 font-medium">
          <p className="text-[#0F6CBD]">{category}</p>
          <div className="hidden md:block w-1 h-1 rounded-full bg-white"></div>
          <p className="text-white/60">{date}</p>
        </div>
        <p className="text-[1.375rem]">{title}</p>
      </div>
    </div>
  );
};

export default BlogCard;
