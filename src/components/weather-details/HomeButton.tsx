import { BiSearchAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import { PinnedButton } from "../ui/pinned-button";
import { useTranslation } from "react-i18next";

export const HomeButton = () => {
  const { t } = useTranslation(undefined, { keyPrefix: "nav" });
  return (
    <PinnedButton className="top-24">
      <Link
        to="/"
        className="user-drag-none mr-6 flex h-full w-full cursor-pointer select-none items-center justify-between border-r border-gray-50 py-3 pl-6 text-gray-100 active:cursor-grabbing"
      >
        {t("search")}{" "}
        <BiSearchAlt className="mr-1 dark:text-[#22222F]" size={20} />
      </Link>
    </PinnedButton>
  );
};
