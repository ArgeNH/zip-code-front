import { Badge } from "flowbite-react";
import { BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center w-full p-24">
      <p className="text-lg text-center mb-4">Created By</p>
      <div className="flex flex-wrap gap-2">
        <Badge size="sm" href="https://github.com/ArgeNH" icon={BsGithub}>
          Arge Niño
        </Badge>
        <Badge size="sm" href="https://github.com/SebastianL2" icon={BsGithub}>
          Sebastian Cely
        </Badge>
      </div>
    </footer>
  );
};

export default Footer;
