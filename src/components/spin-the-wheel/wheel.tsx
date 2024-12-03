import { prizes } from '@/utils/prizes';
import { motion } from 'framer-motion';
import { Gem } from 'lucide-react';

interface WheelProps {
    spinning: boolean;
    onSpinComplete: () => void;
    targetPrizeIndex: number;
  }

export function Wheel({ spinning, onSpinComplete, targetPrizeIndex }: WheelProps) {
    const wheelVariants = {
      spinning: {
        rotate: 360 * 5 + (360 - (targetPrizeIndex * 360) / prizes.length) + Math.random() * 30 - 15,
        transition: {
          duration: 5,
          ease: "easeOut",
        },
      },
      stopped: {
        rotate: 0,
      },
    };
  
    return (
      <div className="relative">
        <motion.div
          className="w-72 h-72 sm:w-96 sm:h-96 rounded-full border-8 border-primary relative overflow-hidden shadow-lg"
          variants={wheelVariants}
          animate={spinning ? "spinning" : "stopped"}
          onAnimationComplete={onSpinComplete}
        >
          {prizes.map((prize, index) => (
            <div
              key={index}
              className={`absolute w-full h-full ${prize.color} z-0`}
              style={{
                transform: `rotate(${(index * 360) / prizes.length}deg) skew(${90 - 360 / prizes.length}deg)`,
              }}
            >
              <div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-30 w-full h-1/3"
                style={{
                  transform: `rotate(${180 - (360 / prizes.length) / 2}deg) translateY(-50%)`,
                }}
              />
              <span className='text-white'>asdasdsdsaaaaaaaaaaaaaaassssssi</span> <span className='font-bold z-40'>{prize.name}</span>
              <div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-bold text-sm sm:text-base text-center w-full px-2 rotate-180"
                style={{
                  transform: `rotate(${180 - (360 / prizes.length) / 2}deg) translateY(-40%) rotate(180deg)`,
                }}
              >
                {prize.name}
              </div>
            </div>
          ))}
          {prizes.map((_, index) => (
            <div
              key={`line-${index}`}
              className="absolute w-1/2 h-1 bg-[#e7dbcf] top-1/2 left-1/2 origin-left"
              style={{
                transform: `rotate(${(index * 360) / prizes.length}deg)`,
              }}
            />
          ))}
        </motion.div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[30%] w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[40px] border-t-amber-800 z-10"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-yellow-400 rounded-full border-4 border-primary z-20 flex items-center justify-center">
          <div className="w-2 h-2 bg-primary rounded-full"><Gem className='size-8 -translate-x-[11.5px] -translate-y-[10px] text-yellow-700'/></div>
        </div>
      </div>
    );
  }

