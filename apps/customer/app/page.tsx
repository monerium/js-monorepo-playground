import { Button } from "@repo/ui/button";
import Image from "next/image";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { MoneriumConnect } from "../components/MoneriumConnect";
import variables from "./variables.module.scss";

export default function Home() {
  return (
    <div>
      <ConnectButton />
      <MoneriumConnect />
      <main>
        <h1 className={variables.title}>Using Sass </h1>
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <Button
          appName="web"
          className="mx-auto rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
        >
          Open alert
        </Button>
      </main>
      <footer>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file-text.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
      </footer>
    </div>
  );
}
