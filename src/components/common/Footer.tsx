import { FaLinkedin } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

export default function Footer() {
    return (
        <div className="flex justify-between items-center w-full p-10 bg-black">
          <h1 className="text-neutral-200 text-xs">THIBAUD LURO</h1>

          <div className="flex gap-4 text-neutral-200">
            <FaLinkedin
              onClick={() => window.open("https://www.linkedin.com/in/thibaudluro", 'blank_', 'noopener,noreferrer')}
              size={18}
              className="hover:text-neutral-400 cursor-pointer" />

            <GrMail 
              onClick={() => window.open("mailto:thibaud.luro@gmail.com?subject=Contact via portfolio")}
              size={18} 
              className="hover:text-neutral-400 cursor-pointer" />
          </div>
        </div>
    )
}