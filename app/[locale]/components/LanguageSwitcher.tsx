"use client";

import * as React from "react";
import { Languages } from "lucide-react";

import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Link, usePathname, useRouter } from "./navigation";

const LanguageSwitcher = () => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="pr-4 lg:pr-0 h-full">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button size="sm">
            {/* icon */}
            <Languages className="h-[1.2rem] w-[1.2rem]" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-white" align="center">
          <DropdownMenuItem
            onClick={() => router.push(pathname, { locale: "en" })}
          >
            English
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => router.push(pathname, { locale: "pt" })}
          >
            Português
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default LanguageSwitcher;
