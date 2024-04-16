import { FaStar } from "react-icons/fa";
import { useFavoriteSearchsContext } from "../../hooks/context/useFavoriteSearchsContext";
import { cn } from "../../lib/utils";
import { PinnedButton } from "../ui/pinned-button";
import { useTranslation } from "react-i18next";

export function FavoritesTrigger({ onClick }: { onClick: () => void }) {
  const { favoritesLength } = useFavoriteSearchsContext();
  const { t } = useTranslation(undefined, { keyPrefix: "nav.favorites" });

  return (
    <PinnedButton
      className="!right-0 top-10"
      toolTip={
        favoritesLength === 10 ? t("toolTip.full") : `10/${favoritesLength}`
      }
    >
      <div
        className="relative mr-6 flex h-full w-full cursor-pointer select-none items-center justify-evenly border-r border-gray-50 py-3 text-gray-600 active:cursor-grabbing dark:text-gray-100"
        onClick={onClick}
      >
        {t("label")} <FaStar fill="#ffdf00" />
        <div
          key={favoritesLength}
          className={cn(
            favoritesLength === 10 &&
              "!animate-big-bump text-purple-800 dark:text-blue-light",
            "absolute -right-5 animate-bump cursor-grab transition-all active:cursor-grabbing",
          )}
        >
          {favoritesLength}
        </div>
      </div>
    </PinnedButton>
  );
}
