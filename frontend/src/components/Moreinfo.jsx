import { Mail, Phone, Linkedin } from "lucide-react";

function Moreinfo() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-6 py-10">
      
      {/* Header */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 tracking-wide">
        More Information
      </h1>

      {/* Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto w-full">
        
        {/* Email */}
        <div className="group bg-gray-800/70 backdrop-blur rounded-2xl p-6 shadow-lg hover:shadow-blue-500/30 transition duration-300 hover:-translate-y-1">
          <div className="flex items-center gap-4 mb-3">
            <Mail className="text-blue-400 group-hover:scale-110 transition" />
            <h2 className="text-xl font-semibold">Email</h2>
          </div>
          <a
            href="mailto:bayusewmehon@gmail.com"
            className="text-gray-300 group-hover:text-blue-400 transition underline-offset-4 hover:underline"
          >
            bayusewmehon@gmail.com
          </a>
        </div>

        {/* Phone */}
        <div className="group bg-gray-800/70 backdrop-blur rounded-2xl p-6 shadow-lg hover:shadow-green-500/30 transition duration-300 hover:-translate-y-1">
          <div className="flex items-center gap-4 mb-3">
            <Phone className="text-green-400 group-hover:scale-110 transition" />
            <h2 className="text-xl font-semibold">Phone</h2>
          </div>
          <a
            href="tel:0920763944"
            className="text-gray-300 group-hover:text-green-400 transition underline-offset-4 hover:underline"
          >
            0920 763 944
          </a>
        </div>

        {/* LinkedIn */}
        <div className="group bg-gray-800/70 backdrop-blur rounded-2xl p-6 shadow-lg hover:shadow-sky-500/30 transition duration-300 hover:-translate-y-1">
          <div className="flex items-center gap-4 mb-3">
            <Linkedin className="text-sky-400 group-hover:scale-110 transition" />
            <h2 className="text-xl font-semibold">LinkedIn</h2>
          </div>
          <a
            href="https://www.linkedin.com/in/sewmehon-bayu-96131b162/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 group-hover:text-sky-400 transition underline-offset-4 hover:underline"
          >
            View Profile →
          </a>
        </div>

      </div>

      {/* Footer */}
      <p className="text-center text-sm text-gray-400 mt-12">
        © {new Date().getFullYear()} Sewmehon Bayu. All rights reserved.
      </p>
    </div>
  );
}

export default Moreinfo;
