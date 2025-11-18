import { greeting, socialMediaLinks, contactInfo } from '../portfolio';
import SocialMedia from './SocialMedia';
import useReveal from '../utils/useReveal';
import { Player } from '@lottiefiles/react-lottie-player';
import '../styles/styles.css';

export default function Contact() {
  const ref = useReveal();

  return (
    <section
      className="grid md:grid-cols-2 gap-4 items-center py-1"
      ref={ref}
      id="contact"
    >
      {/* LEFT: Code Editor Styled Contact Card */}
      <div className="reveal flex justify-center">
        <div className="relative rounded-4xl bg-slate-900 p-2 w-full">

          {/* --- HEADER WITH DOTS --- */}
          <div className="relative flex text-center">
            <div className="flex pl-3.5 pt-3">
              <svg viewBox="0 0 24 24" fill="currentColor"
                className="-ml-0.5 mr-1.5 h-3 w-3 text-red-500">
                <circle r="12" cy="12" cx="12"></circle>
              </svg>
              <svg viewBox="0 0 24 24" fill="currentColor"
                className="-ml-0.75 mr-1.5 h-3 w-3 text-yellow-500">
                <circle r="12" cy="12" cx="12"></circle>
              </svg>
              <svg viewBox="0 0 24 24" fill="currentColor"
                className="-ml-0.75 mr-1.5 h-3 w-3 text-green-500">
                <circle r="12" cy="12" cx="12"></circle>
              </svg>
            </div>

            <span className="absolute inset-x-0 top-2 text-sm text-slate-400">
              ~/prathibha-portfolio/contact.tsx
            </span>
          </div>

          {/* --- CONTENT (converted to code-style lines) --- */}
          <div className="mt-8 space-y-2 px-8 pb-10 font-mono text-m tracking-wide">

            {/* <Contact> */}
            <p className="text-violet-400 text-sm">
              <span className="text-slate-500 ">&lt;</span>
              <span className="text-pink-400">Contact</span>
              <span className="text-slate-500">&gt;</span>
            </p>

            {/* Title */}
            <p className="ml-3 text-violet-400">
              <span className="text-slate-500">&lt;</span>
              <span className="text-pink-400">📞</span>
              <span className="text-slate-500">&gt;</span>

              <span className="relative inline-block px-1 before:absolute before:-inset-0.5 
                before:block before:rounded before:bg-blue-500/10">
                <span className="relative text-blue-400 text-lg">
                  {contactInfo?.title}
                </span>
              </span>

              <span className="text-slate-500">&lt;/</span>
              <span className="text-pink-400"> 💌</span>
              <span className="text-slate-500">&gt;</span>
            </p>

            {/* Subtitle */}
            <p className="ml-3 leading-4 text-violet-400 text-md">
              <span className="text-slate-500">&lt;</span>
              <span className="text-pink-400"> Why Contact Me </span>
              <span className="text-slate-500">&gt;</span>

              <span className="relative mt-1 mb-1 inline-block px-1 before:absolute before:-inset-0.5 
                before:block before:rounded before:bg-blue-500/10">
                <span className="relative text-blue-400  text-lg">
                  {contactInfo?.subtitle}
                </span>
              </span>

              <span className="text-slate-500">&lt;/</span>
              <span className="text-pink-400"> 👩🏼‍💻❤️ </span>
              <span className="text-slate-500">&gt;</span>
            </p>

            {/* Phone */}
            <p className="ml-3 text-violet-400">
              <span className="text-slate-500">&lt;</span>
              <span className="text-pink-400"> Phone </span>
              <span className="text-slate-500">&gt;</span>

              <span className="relative inline-block px-1 before:absolute before:-inset-0.5 
                before:block before:rounded before:bg-blue-500/10">
                <span className="relative text-blue-400 text-lg">
                  {contactInfo?.number}
                </span>
              </span>

              <span className="text-slate-500">&lt;/</span>
              <span className="text-pink-400"> Phone </span>
              <span className="text-slate-500">&gt;</span>
            </p>

            {/* Whatsapp */}
            <p className="ml-3 text-violet-400">
              <span className="text-slate-500">&lt;</span>
              <span className="text-pink-400">Whatsapp</span>
              <span className="text-slate-500">&gt;</span>

              <span className="relative inline-block px-1 before:absolute before:-inset-0.5 
                before:block before:rounded before:bg-blue-500/10">
                <span className="relative text-blue-400 text-lg">
                  {contactInfo?.number}
                </span>
              </span>

              <span className="text-slate-500">&lt;/</span>
              <span className="text-pink-400">Whatsapp</span>
              <span className="text-slate-500">&gt;</span>
            </p>

            {/* Email */}
            <p className="ml-3 text-violet-400 leading-4">
              <span className="text-slate-500">&lt;</span>
              <span className="text-pink-400">Email</span>
              <span className="text-slate-500">&gt;</span>

              <span className="relative inline-block px-1 before:absolute before:-inset-0.5 
                before:block before:rounded before:bg-blue-500/10">
                <span className="relative text-blue-400">
                  {contactInfo?.email_address}
                </span>
              </span>

              <span className="text-slate-500">&lt;/</span>
              <span className="text-pink-400">Email</span>
              <span className="text-slate-500">&gt;</span>
            </p>

            {/* Description */}
            <p className="ml-3 text-violet-400 leading-4">
              <span className="text-slate-500">&lt;</span>
              <span className="text-pink-400">Description</span>
              <span className="text-slate-500">&gt;</span>

              <span className="relative inline-block px-1 before:absolute before:-inset-0.5 
                before:block before:rounded before:bg-blue-500/10">
                <span className="relative text-blue-400">
                  {contactInfo?.subTitle}
                </span>
              </span>

              <span className="text-slate-500">&lt;/</span>
              <span className="text-pink-400">Description</span>
              <span className="text-slate-500">&gt;</span>
            </p>

            {/* </Contact> */}
            <p className="text-violet-400">
              <span className="text-slate-500">&lt;/</span>
              <span className="text-pink-400">Contact</span>
              <span className="text-slate-500">&gt;</span>
            </p>
          </div>

          {/* SOCIAL MEDIA */}
          <div className="mt-3 px-5">
            <SocialMedia />
          </div>

          {/* Resume & GitHub */}
          <div className="mt-6 flex items-center gap-4">
              {greeting?.resumeLink && (
              <a
                  href={greeting.resumeLink}
                  target="_blank"
                  rel="noreferrer"
                  className="relative group cursor-pointer"
              >
                  <div className="relative px-8 py-4 border-2 border-blue-500 text-blue-500 font-bold text-lg rounded-lg transform transition-all duration-300 group-hover:translate-y-1 group-hover:translate-x-1 shadow-[6px_6px_10px_rgba(0,0,0,0.6),-6px_-6px_10px_rgba(255,255,255,0.1)] group-hover:shadow-[8px_8px_15px_rgba(0,0,0,0.8),-8px_-8px_15px_rgba(255,255,255,0.15)]">
                      Download My Resume
                  </div>

                  <div className="absolute inset-0 border-2 border-dashed border-blue-500 rounded-lg opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-500 rounded-full animate-ping shadow-lg"></div>
                  <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-blue-500 rounded-full animate-ping shadow-lg"></div>
                  <div className="absolute top-1/3 left-3 w-3 h-3 bg-blue-400 rounded-full animate-ping opacity-70"></div>
                  <div className="absolute top-2/3 right-3 w-3 h-3 bg-blue-400 rounded-full animate-ping opacity-70"></div>
              </a>
              )}        
          </div>
        </div>
      </div>

      {/* RIGHT: Lottie Animation */}
      <div className="reveal flex justify-center">
        <div className="w-full overflow-hidden flex items-center justify-center">
          {contactInfo?.animated ? (
            <Player autoplay loop src={contactInfo.animated} style={{ height: '100%', width: '100%' }} />
          ) : (
            <div className="text-center p-4">No Avatar</div>
          )}
        </div>
      </div>
    </section>
  );
}
