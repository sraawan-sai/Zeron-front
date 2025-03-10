import Image from "next/image";

interface BlogCardProps {
  image: string;
  title: string;
  category: string;
  date: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  image,
  title,
  category,
  date,
}) => {
  return (
    <div className="flex flex-col ">
      <div className="w-full h-[120px] xs:h-[250px] bg-white/20 rounded-[8px] relative">
        <Image
          src={image}
          alt={title}
          fill={true}
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
