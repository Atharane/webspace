import {
  SignInButton,
  SignOutButton,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import { BeerIcon, LogOut } from "lucide-react";

import {
  Firebase,
  FramerMotion,
  Github,
  NextJs,
  ShadcnUI,
  Clerk,
  TanstackQuery,
} from "@/components/icons";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import "./home.css";

export default function Home() {
  const batteries = [
    { id: "next.js", icon: NextJs },
    { id: "clerk", icon: Clerk },
    { id: "firebase", icon: Firebase },
    { id: "tanstack-query", icon: TanstackQuery },
    { id: "shadcn-ui", icon: ShadcnUI },
    { id: "framer-motion", icon: FramerMotion },
  ];

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="-rotate-2 space-y-3 rounded-[2rem] border-2 border-dashed border-slate-600/60 p-2 dark:border-white/20">
        <div className="flex w-full justify-between gap-1">
          <div className="relative flex-grow">
            <div className="rounded-3xl bg-white p-2 shadow-2xl shadow-slate-400 dark:shadow-slate-800">
              <div className="text-nowrap rounded-2xl bg-[#176A3A] px-8 py-4 pr-4 text-5xl font-bold text-white shadow-inner shadow-green-900">
                <BeerIcon className="relative bottom-1 mr-1 inline-block h-10 w-10 text-green-200" />
                Build kickass products
              </div>
            </div>
            <div className="absolute -right-6 bottom-16 flex rotate-12">
              <Tooltip>
                <TooltipTrigger>
                  <div className="group w-fit rounded-3xl bg-white p-2 shadow-2xl shadow-slate-800">
                    <a
                      href="https://github.com/Atharane/hackpack"
                      target="_blank"
                      rel="noreferrer"
                      className="block w-fit rounded-2xl bg-slate-800 p-4 text-5xl font-bold text-white hover:bg-slate-900"
                    >
                      <Github className="size-10 fill-white" />
                    </a>
                  </div>
                </TooltipTrigger>
                <TooltipContent className="font-mono">
                  https://github.com/Atharane/hackpack
                </TooltipContent>
              </Tooltip>
            </div>
          </div>
          <div className="group ml-1 w-fit rounded-3xl bg-white p-2 shadow-2xl shadow-slate-400 dark:shadow-slate-800">
            <div className="flex w-fit rounded-2xl bg-[#f31551] p-4 text-5xl font-bold text-white shadow-inner shadow-red-800">
              <span>fasta</span>
              <div className="group-hover:rotate-12">!</div>
            </div>
          </div>
        </div>
        <div className="rounded-xl bg-foreground/10 px-4 py-6 font-serif text-2xl font-semibold shadow-xl backdrop-blur-sm">
          The&nbsp;
          <span className="text-[#2bc36a] underline">
            complete batteries-included framework
          </span>
          .
          <br />
          Get building instantly with everything you need.
          <br />
          Authentication, Styling, Theming, Data Fetching—pre-configured
        </div>
        <div className="flex w-full gap-1">
          {batteries.map(({ id, icon: Icon }) => {
            return (
              <div
                key={id}
                className="w-fit rounded-3xl bg-white p-2 shadow-2xl shadow-slate-400 dark:shadow-slate-800"
              >
                <div className="w-fit text-nowrap rounded-2xl bg-[#7977fb] p-6 text-5xl font-bold text-white shadow-inner shadow-[#716ffc] hover:bg-[#716ffc]">
                  <Icon className="size-10" />
                </div>
              </div>
            );
          })}
          <div className="w-fit rounded-3xl bg-white p-2 shadow-2xl shadow-slate-400 dark:shadow-slate-800">
            <SignedIn>
              <Tooltip>
                <TooltipTrigger>
                  <SignOutButton>
                    <button className="group flex w-fit items-center text-nowrap rounded-2xl bg-[#f31551] px-12 py-8 text-2xl font-bold text-white shadow-inner shadow-rose-700 hover:bg-rose-600">
                      <LogOut className="size-6 group-hover:rotate-6" />
                    </button>
                  </SignOutButton>
                </TooltipTrigger>
                <TooltipContent className="font-mono">gtfo</TooltipContent>
              </Tooltip>
            </SignedIn>
            <SignedOut>
              <Tooltip>
                <TooltipTrigger>
                  <SignInButton>
                    <button className="group flex w-fit items-center text-nowrap rounded-2xl bg-amber-400 px-12 py-8 text-2xl font-bold text-black shadow-inner shadow-amber-600 hover:bg-amber-500">
                      <ArrowTopRightIcon className="size-6 group-hover:rotate-6" />
                    </button>
                  </SignInButton>
                </TooltipTrigger>
                <TooltipContent className="font-mono">signup</TooltipContent>
              </Tooltip>
            </SignedOut>
          </div>
          <div
            style={{
              backgroundImage: `url("/topography.svg")`,
            }}
            className="rounded-br-3x grow"
          ></div>
        </div>
      </div>
    </div>
  );
}
