"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

import { Twitter, Facebook, Instagram, Linkedin } from "lucide-react";
import { Button } from "./button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"



export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
    social: string;
    image: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  const socialIcons = {
    twitter: <Twitter fill="white" className="w-[22px] h-[22px]" />,
    facebook: <Facebook fill="white" className="w-[22px] h-[22px]" />,
    instagram: <Instagram fill="white" className="w-[22px] h-[22px]" />,
    linkedin: <Linkedin fill="white" className="w-[22px] h-[22px]" />,
  };
  const getSocialIcon = (social: string) => {
    return socialIcons[social as keyof typeof socialIcons];
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20  max-w-8xl overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          " flex min-w-full shrink-0 gap-6 py-4 w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            className="w-[300px] h-fit max-w-full relative rounded-[15px] md:w-[450px]"
            // style={{
            //   background:
            //     "linear-gradient(180deg, var(--slate-800), var(--slate-900)",
            // }}
            key={item.name}
          >
            <blockquote>
              {/* <div
                aria-hidden="true"
                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              ></div> */}
              <div className="flex flex-col md:h-[220px] rounded-[15px] gap-2 bg-gradient-to-b from-[#1A1A1A]/30 via-[#1A1A1A] to-black/40 border border-[#262626] px-8 py-6">

                <Button
                  variant="outline"
                  size="icon"
                  className="size-[44px] bg-[#262626] border"
                >
                  {getSocialIcon(item.social)}
                </Button>
                <span className=" relative z-20 text-sm leading-[1.6] text-gray-100 font-normal mt-4">
                  {item.quote}
                </span>
              </div>

              <div className="relative z-20 mt-6 flex flex-row items-center gap-2">
                <Avatar className="h-12 w-12">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>

                <span className="flex flex-col">
                  <span className=" text-base leading-[1.6] text-white font-normal">
                    {item.name}
                  </span>
                  <span className=" text-sm leading-[1.6] text-muted-foreground font-normal">
                    {item.title}
                  </span>
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
