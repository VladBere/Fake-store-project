import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Confetti } from './confetti'
import { Wheel } from './wheel'
import { getPrizeByIndex, getRandomPrize } from '@/utils/prizes'

export default function SpinTheWheel() {
    const [spinning, setSpinning] = useState(false)
    const [prize, setPrize] = useState<string | null>(null)
    const [targetPrizeIndex, setTargetPrizeIndex] = useState(0)
  
    const handleSpin = () => {
      const selectedPrize = getRandomPrize();
      setTargetPrizeIndex(selectedPrize.index);
      setSpinning(true);
      setPrize(null);
    }
  
    const handleSpinComplete = () => {
      setSpinning(false);
      const wonPrize = getPrizeByIndex(targetPrizeIndex);
      setPrize(wonPrize.name);
    }
  
    return (
      <div className="container mx-auto py-10 px-4">
        <Card className="w-full max-w-3xl mx-auto">
          <CardHeader className="text-center">
            <CardTitle className="text-4xl font-bold text-primary">Spin & Win!</CardTitle>
            <CardDescription className="text-xl">Try your luck and win amazing discounts or freebies!</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center space-y-8 px-4 sm:px-8">
            <Wheel spinning={spinning} onSpinComplete={handleSpinComplete} targetPrizeIndex={targetPrizeIndex} />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: prize ? 1 : 0, y: prize ? 0 : 20 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold text-primary"
            >
              {prize && `You won: ${prize}`}
            </motion.div>
          </CardContent>
          <CardFooter>
            <Button 
              className="w-full text-lg py-6" 
              onClick={handleSpin} 
              disabled={spinning}
            >
              {spinning ? 'Spinning...' : 'Spin the Wheel'}
            </Button>
          </CardFooter>
        </Card>
        <Confetti active={!!prize && prize !== "Try Again"} />
      </div>
    )
  }