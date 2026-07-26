"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function FloatingActions() {
  const { t } = useLanguage();

  const chatUrl =
    "https://cdn.botpress.cloud/webchat/v3.6/shareable.html?configUrl=https://files.bpcontent.cloud/2026/05/10/15/20260510151337-U6SIX4E4.json";

  const openChatbot = () => {
    const chatWindow = window.open(
      chatUrl,
      "_blank",
      "toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=420,height=720"
    );

    if (
      !chatWindow ||
      chatWindow.closed ||
      typeof chatWindow.closed === "undefined"
    ) {
      window.location.href = chatUrl;
    } else {
      chatWindow.focus();
    }
  };

  return (
    <>
      <style jsx global>{`
        @keyframes chatBounce {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        .animate-chat-bounce {
          animation: chatBounce 1.5s ease-in-out infinite;
        }

        @keyframes ringWobble {
          0%,
          20%,
          100% {
            transform: rotate(0deg);
          }
          4%,
          12% {
            transform: rotate(-15deg);
          }
          8%,
          16% {
            transform: rotate(20deg);
          }
        }

        .animate-ring-infinite {
          animation: ringWobble 2s ease-in-out infinite;
        }
      `}</style>

      <div className="fixed right-6 bottom-6 z-50 flex flex-col items-end gap-3">
        {/* Call Button */}
        <a
          href="tel:+919513311293"
          className="flex items-center justify-center w-14 h-14 rounded-full bg-orange-500 text-white border-2 border-green-200 shadow-2xl shadow-green-500/40 hover:bg-green-600 transition-colors duration-300"
          aria-label="Call"
        >
          <svg
            className="w-6 h-6 animate-ring-infinite"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
              clipRule="evenodd"
            />
          </svg>
        </a>

        {/* Chat Button */}
        <button
          onClick={openChatbot}
          className="inline-flex items-center gap-2 rounded-full bg-orange-600 px-5 py-3 text-sm font-bold text-white shadow-2xl shadow-orange-500/40 hover:bg-orange-700 animate-chat-bounce transition-colors duration-300"
        >
          {t.common.chatWithAi}
        </button>
      </div>
    </>
  );
}