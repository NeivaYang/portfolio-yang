import Image from 'next/image'
import MainSection from './components/mainsection'
import { motion, AnimatePresence } from 'framer-motion';

export default function Home() {
  return (
    <>
      <div className="min-h-screen w-screen">
        <div className="flex flex-col items-center justify-center min-h-screen">
          <MainSection />
        </div>
      </div>
    </>
  )
}
