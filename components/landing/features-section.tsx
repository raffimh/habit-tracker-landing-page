"use client";

import { motion } from 'framer-motion';
import { 
  Bell, 
  Target, 
  Trophy, 
  BookHeart,
  BarChart3,
  Users
} from 'lucide-react';

const features = [
  {
    icon: Bell,
    title: "Smart Reminders",
    description: "Set custom reminders for your habits and never miss a day. Our smart notification system adapts to your schedule."
  },
  {
    icon: Target,
    title: "Goal Setting",
    description: "Set and track long-term goals with our intuitive goal-setting framework. Break down big goals into achievable steps."
  },
  {
    icon: Trophy,
    title: "Monthly Challenges",
    description: "Join monthly challenges to stay motivated and compete with others. Earn rewards and track your progress."
  },
  {
    icon: BookHeart,
    title: "Daily Reflections",
    description: "Record your daily thoughts, gratitude, and progress with our guided reflection system."
  },
  {
    icon: BarChart3,
    title: "Progress Analytics",
    description: "Visualize your progress with detailed analytics and insights. Understand your habits better."
  },
  {
    icon: Users,
    title: "Community Support",
    description: "Connect with like-minded individuals and share your journey. Get support and motivation from the community."
  }
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Powerful Features to Transform Your Habits
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Everything you need to build and maintain lasting habits
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-lg border bg-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <feature.icon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}