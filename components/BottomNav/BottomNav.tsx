import Link from "next/link";
import React from "react";
import { HomeIcon } from "@heroicons/react/24/outline";
import bottomNavStyles from "./BottomNav.module.sass";

const BottomNav = () => {
  return (
    <div className={bottomNavStyles.bottomNavContainer}>
      <div className={bottomNavStyles.bottomNavContent}>
        <Link href={"/"} className={bottomNavStyles.link}>
          <HomeIcon className="h-6 w-6" />
        </Link>
      </div>
    </div>
  );
};

export default BottomNav;
