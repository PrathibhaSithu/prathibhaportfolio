// import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGoogle } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className=" text-[#2C2C2C]">
      {/* Newsletter Section */}
      <div className="max-w-6xl mx-auto -mt-20 relative z-10 px-4">
        <div className="bg-blue-600 text-white rounded-xl shadow-lg p-8 flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
          {/* Image Placeholder */}
          <div className="flex-shrink-0">
            <img
              src="/vacuum.png" // Replace with your image path
              alt="Vacuum cleaner"
              className="w-40 h-auto"
            />
          </div>

          {/* Newsletter Content */}
          <div className="flex-1 md:ml-6">
            <h2 className="text-xl font-semibold mb-2">
              Subscribe to our newsletter to get updates to our latest collections
            </h2>
            <p className="text-sm mb-4">
              Get 20% off on your first order just by subscribing to our newsletter
            </p>

            <form className="flex flex-col sm:flex-row items-center gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-md text-black w-full sm:w-auto"
              />
              <button className="bg-white text-blue-600 font-medium px-6 py-2 rounded-md hover:bg-gray-100 transition">
                Subscribe
              </button>
            </form>

            <p className="text-xs mt-2">
              You will be able to unsubscribe at any time.{" "}
              <a href="#" className="underline">
                Read our privacy policy here
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-6xl mx-auto py-16 px-4 grid grid-cols-1 md:grid-cols-5 gap-8 border-t mt-20">
        {/* Logo and description */}
        <div className="col-span-1 space-y-4">
          <h3 className="text-xl font-bold text-blue-600">Stay Clean</h3>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit aliquam, purus sit amet luctus venenatis.
          </p>
          <div className="flex gap-3 text-gray-600 text-lg">
            {/* <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedinIn />
            <FaGoogle /> */}
          </div>
        </div>

        {/* Column Links */}
        <div className="space-y-2">
          <h4 className="font-semibold">Company</h4>
          <ul className="space-y-1 text-sm">
            <li>About Us</li>
            <li>Services</li>
            <li>Community</li>
            <li>Testimonial</li>
          </ul>
        </div>

        <div className="space-y-2">
          <h4 className="font-semibold">Support</h4>
          <ul className="space-y-1 text-sm">
            <li>Help Center</li>
            <li>Tweet @ Us</li>
            <li>Webinars</li>
            <li>Feedback</li>
          </ul>
        </div>

        <div className="space-y-2">
          <h4 className="font-semibold">Links</h4>
          <ul className="space-y-1 text-sm">
            <li>Courses</li>
            <li>Become Teacher</li>
            <li>Service</li>
            <li>All in One</li>
          </ul>
        </div>

        <div className="space-y-2">
          <h4 className="font-semibold">Contact Us</h4>
          <p className="text-sm">📞 +91 98765 4321 54</p>
          <p className="text-sm">✉️ support@mail.com</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t text-sm text-gray-500 py-4 px-4 max-w-6xl mx-auto flex flex-col sm:flex-row justify-between">
        <p>© Copyright by Codeuill. All rights reserved.</p>
        <div className="flex gap-4 mt-2 sm:mt-0">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Use</a>
          <a href="#">Legal</a>
          <a href="#">Site Map</a>
        </div>
      </div>
    </footer>
  );
}
