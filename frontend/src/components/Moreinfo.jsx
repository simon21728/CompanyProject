import { useState } from "react";
import {
  Mail,
  Phone,
  Linkedin,
  Copy,
  CheckCircle,
} from "lucide-react";

function Moreinfo() {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error("Copy failed", err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white flex flex-col items-center justify-center p-6">
      <div className="max-w-3xl w-full bg-gray-900/60 backdrop-blur-md border border-gray-700 rounded-2xl shadow-xl p-8">
        <h1 className="text-4xl font-bold text-center mb-6">
          📌 Contact & More Info
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* EMAIL */}
          <div className="group bg-gray-800 rounded-xl p-5 border border-gray-700 hover:border-blue-500 transition-all">
            <div className="flex items-center gap-3 mb-2">
              <Mail className="text-blue-400" />
              <h3 className="font-semibold">Email</h3>
            </div>

            <div className="flex items-center justify-between">
              <a
                href="mailto:bayusewmehon@gmail.com"
                className="text-gray-200 hover:text-white"
              >
                bayusewmehon@gmail.com
              </a>

              <button
                onClick={() => copyToClipboard("bayusewmehon@gmail.com")}
                className="p-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition"
                title="Copy Email"
              >
                {copied ? (
                  <CheckCircle className="text-green-400" />
                ) : (
                  <Copy className="text-gray-200" />
                )}
              </button>
            </div>
          </div>

          {/* PHONE */}
          <div className="group bg-gray-800 rounded-xl p-5 border border-gray-700 hover:border-blue-500 transition-all">
            <div className="flex items-center gap-3 mb-2">
              <Phone className="text-blue-400" />
              <h3 className="font-semibold">Phone</h3>
            </div>

            <div className="flex items-center justify-between">
              <a
                href="tel:0920763944"
                className="text-gray-200 hover:text-white"
              >
                0920763944
              </a>

              <button
                onClick={() => copyToClipboard("0920763944")}
                className="p-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition"
                title="Copy Phone"
              >
                <Copy className="text-gray-200" />
              </button>
            </div>
          </div>

          {/* LINKEDIN */}
          <div className="group bg-gray-800 rounded-xl p-5 border border-gray-700 hover:border-blue-500 transition-all">
            <div className="flex items-center gap-3 mb-2">
              <Linkedin className="text-blue-400" />
              <h3 className="font-semibold">LinkedIn</h3>
            </div>

            <div className="flex items-center justify-between">
              <a
                href="https://www.linkedin.com/in/sewmehon-bayu-96131b162/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-white"
              >
                View Profile
              </a>

              <button
                onClick={() =>
                  copyToClipboard(
                    "https://www.linkedin.com/in/sewmehon-bayu-96131b162/"
                  )
                }
                className="p-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition"
                title="Copy Link"
              >
                <Copy className="text-gray-200" />
              </button>
            </div>
          </div>
        </div>

        <p className="text-center text-gray-400 mt-8">
          © {new Date().getFullYear()} Sewmehon Bayu. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Moreinfo;
