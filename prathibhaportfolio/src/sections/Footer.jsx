// import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGoogle } from "react-icons/fa";
import FooterImg from "/images/contacts/footer.png"
export default function Footer() {
  return (
    <footer className=" revgrad text-[#2C2C2C]">
      <div className="max-w-6xl mx-auto py-6 px-4 grid grid-cols-1 md:grid-cols-2 gap-20 border-t">
        
        <div className="col-span-1 ">
          <img className="w-50" src={FooterImg} alt="Catwithme" />
        </div>
      
        <div className="space-y-2">
          <h4 className="font-semibold">Contact</h4>
          <p className="text-sm">📞 +94 077 923 3384</p>
          <p className="text-sm">✉️ sithuminiprathiba@gmail.com</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t text-sm text-gray-500 py-4 px-4 max-w-6xl mx-auto flex flex-col sm:flex-row justify-between">
        <p>© Copyright by Prathibha Sithumini. All rights reserved.</p>
        <div className="flex gap-4 mt-2 sm:mt-0">
          
        </div>
      </div>
    </footer>
  );
}
