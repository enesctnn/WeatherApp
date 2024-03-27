import { motion } from 'framer-motion';

const listAnimationVariants = {
  initial: { y: 100, opacity: 0 },
  animate: (index: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: 0.05 * index },
  }),
};

export const ForecastArticle = ({
  icon,
  index,
  temp,
  dayString,
}: {
  icon: { src: string; alt: string };
  dayString: string;
  temp: { max: number; min: number };
  index: number;
}) => (
  <motion.li
    variants={listAnimationVariants}
    initial="initial"
    whileInView="animate"
    viewport={{ once: true }}
    transition={{ type: 'spring', mass: 3, stiffness: 400 }}
    custom={index}
    className="flex-1 flex flex-col w-max items-center justify-center"
  >
    <h3 className="text-heading-xs text-gray-200">{dayString}</h3>
    <img className="w-[56px] h-[56px]" src={icon.src} alt={icon.alt} />
    <div className="space-y-2">
      <h4 className="text-gray-100 text-heading-xs">{temp.max}&deg;</h4>
      <h4 className="text-gray-400 text-heading-xs">{temp.min}&deg;</h4>
    </div>
  </motion.li>
);
