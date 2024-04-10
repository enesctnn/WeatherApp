import { FaStar } from "react-icons/fa";
import { useFavoriteSearchsContext } from "../../hooks/context/useFavoriteSearchsContext";
import { cn } from "../../lib/utils";
import { PinnedButton } from "../ui/pinned-button";
import { useTranslation } from "react-i18next";

export function FavoritesTrigger({ onClick }: { onClick: () => void }) {
  const { favorites, isExceededLimit } = useFavoriteSearchsContext();
  const { t } = useTranslation(undefined, { keyPrefix: "nav.favorites" });

  return (
    <PinnedButton
      className="!right-0 top-10"
      toolTip={isExceededLimit ? t("toolTip.full") : `10/${favorites.length}`}
    >
      <div
        className="relative mr-6 flex h-full w-full cursor-pointer select-none items-center justify-evenly border-r border-gray-50 py-3 text-gray-100 active:cursor-grabbing"
        onClick={onClick}
      >
        {t("label")} <FaStar fill="#ffdf00" />
        <div
          key={favorites.length}
          className={cn(
            isExceededLimit && "text-purple-800",
            "absolute -right-5 animate-bump cursor-grab transition-all active:cursor-grabbing",
          )}
        >
          {favorites.length}
        </div>
      </div>
    </PinnedButton>
  );
}
