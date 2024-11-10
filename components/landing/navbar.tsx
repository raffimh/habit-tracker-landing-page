"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/mode-toggle';
import { motion } from 'framer-motion';
import { Activity } from 'lucide-react';

export function Navbar() {
  return (
    <motion.nav 
      className="fixed w-full bg-background/80 backdrop-blur-md z-50 border-b"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Activity className="h-6 w-6 text-primary" />
          <span className="font-bold text-xl">HabitFlow</span>
        </Link>
        
        <div className="flex items-center space-x-4">
          <ModeToggle />
          <Link href="/login">
            <Button variant="ghost">Log in</Button>
          </Link>
          <Link href="/signup">
            <Button>Get Started</Button>
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}