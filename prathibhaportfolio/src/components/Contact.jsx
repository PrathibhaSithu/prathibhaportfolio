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
        <div className="relative rounded-lg bg-slate-900 p-2 w-full">

          {/* --- HEADER WITH DOTS --- */}
          <div className="relative flex text-center">
            <div className="flex pl-3.5 pt-3">
              <svg viewBox="0 0 24 24" fill="currentColor"
                className="-ml-0.5 mr-1.5 h-3 w-3 text-red-500/20">
                <circle r="12" cy="12" cx="12"></circle>
              </svg>
              <svg viewBox="0 0 24 24" fill="currentColor"
                className="-ml-0.75 mr-1.5 h-3 w-3 text-yellow-500/20">
                <circle r="12" cy="12" cx="12"></circle>
              </svg>
              <svg viewBox="0 0 24 24" fill="currentColor"
                className="-ml-0.75 mr-1.5 h-3 w-3 text-green-500/20">
                <circle r="12" cy="12" cx="12"></circle>
              </svg>
            </div>

            <span className="absolute inset-x-0 top-2 text-xs text-slate-500">
              contact.jsx
            </span>
          </div>

          {/* --- CONTENT (converted to code-style lines) --- */}
          <div className="mt-5 space-y-1.5 px-5 pb-10 font-mono text-xs tracking-wide">

            {/* <Contact> */}
            <p className="text-violet-400">
              <span className="text-slate-500">&lt;</span>
              <span className="text-pink-400">Contact</span>
              <span className="text-slate-500">&gt;</span>
            </p>

            {/* Title */}
            <p className="ml-3 text-violet-400">
              <span className="text-slate-500">&lt;</span>
              <span className="text-pink-400">Title</span>
              <span className="text-slate-500">&gt;</span>

              <span className="relative inline-block px-1 before:absolute before:-inset-0.5 
                before:block before:rounded before:bg-blue-500/10">
                <span className="relative text-blue-400">
                  {contactInfo?.title}
                </span>
              </span>

              <span className="text-slate-500">&lt;/</span>
              <span className="text-pink-400">Title</span>
              <span className="text-slate-500">&gt;</span>
            </p>

            {/* Subtitle */}
            <p className="ml-3 leading-4 text-violet-400">
              <span className="text-slate-500">&lt;</span>
              <span className="text-pink-400">Subtitle</span>
              <span className="text-slate-500">&gt;</span>

              <span className="relative inline-block px-1 before:absolute before:-inset-0.5 
                before:block before:rounded before:bg-blue-500/10">
                <span className="relative text-blue-400">
                  {contactInfo?.subtitle}
                </span>
              </span>

              <span className="text-slate-500">&lt;/</span>
              <span className="text-pink-400">Subtitle</span>
              <span className="text-slate-500">&gt;</span>
            </p>

            {/* Phone */}
            <p className="ml-3 text-violet-400">
              <span className="text-slate-500">&lt;</span>
              <span className="text-pink-400">Phone</span>
              <span className="text-slate-500">&gt;</span>

              <span className="relative inline-block px-1 before:absolute before:-inset-0.5 
                before:block before:rounded before:bg-blue-500/10">
                <span className="relative text-blue-400">
                  {contactInfo?.number}
                </span>
              </span>

              <span className="text-slate-500">&lt;/</span>
              <span className="text-pink-400">Phone</span>
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

          {/* RESUME BUTTON */}
          {greeting?.resumeLink && (
            <div className="mt-6 px-5">
              <a
                href={greeting.resumeLink}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 border border-blue-500 text-blue-400
                          rounded-lg font-mono text-xs hover:bg-blue-500/10"
              >
                Download Resume
              </a>
            </div>
          )}
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
