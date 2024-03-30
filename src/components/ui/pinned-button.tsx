import { motion } from 'framer-motion';
import { createPortal } from 'react-dom';
import { cn } from '../../lib/utils';

export const PinnedButton = ({
  children,
  className,
  onClick,
  toolTip,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  toolTip?: string;
}) =>
  createPortal(
    <motion.button
      initial={{ x: -100, opacity: 0.8 }}
      animate={{
        x: [80, -25, 0],
        transition: { type: 'tween', ease: 'easeInOut', duration: 0.8 },
      }}
      whileHover={{ x: 80, opacity: 1 }}
      drag="x"
      dragConstraints={{ left: -20, right: 80 }}
      className={cn(
        'fixed -left-20 text-gray-200 shadow-md shadow-black bg-blue-light rounded-r-full text-heading-sm z-[100] flex w-32 h-max cursor-grab active:cursor-grabbing group',
        className
      )}
      onClick={onClick}
    >
      {children}
      {toolTip && (
        <div className="relative text-hg scale-0 group-hover:scale-100 group-focus:scale-0 transition-transform">
          <div className="capitalize absolute ml-2 text-white top-1 bg-gray-600 rounded-md py-[1px] px-1 text-xs md:text-sm lg:text-md max-w-20 whitespace-pre-wrap">
            {toolTip}
          </div>
        </div>
      )}
    </motion.button>,
    document.getElementById('navroot')!
  );
