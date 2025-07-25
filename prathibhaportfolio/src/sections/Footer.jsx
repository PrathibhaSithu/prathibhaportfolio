// import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGoogle } from "react-icons/fa";
import Starfield from "../components/Starfield";
import FooterImg from "/images/contacts/footer.png"
import FooterBgImg from "/images/contacts/footerimg.jpg";

export default function Footer() {
  return (
    <footer className=" revgrad text-[#2C2C2C]" style={{ backgroundImage: `url(${FooterBgImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <Starfield/>
      <Starfield/> 
      <div className="relative max-w-6xl mx-auto py-6 px-4 grid grid-cols-1 md:grid-cols-2 gap-20 border-t">
        
        <div className="col-span-1 ">
          <Starfield/>
          <img className="relative w-50" src={FooterImg} alt="Catwithme" />
        </div>
      
        <div className="relative space-y-2">
          <h4 className="text-3xl font-bold">Contact</h4>
          <p className="text-lg font-bold">📞 +94 077 923 3384</p>
          <p className="text-lg font-bold">✉️ sithuminiprathiba@gmail.com</p>
        </div>
      </div>

      <div className="border-t text-sm font-bold text-[#fff] py-4 px-4 max-w-6xl mx-auto flex flex-col sm:flex-row justify-between">
        <p>© Copyright by Prathibha Sithumini. All rights reserved.</p>
        <div className="flex gap-4 mt-2 sm:mt-0">
        </div>
      </div>
    </footer>
  );
}
