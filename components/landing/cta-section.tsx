"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function CTASection() {
  return (
    <section id="cta" className="py-24 bg-primary/10">
      <div className="container mx-auto px-4">
        <motion.div
          className="relative p-12 rounded-lg border bg-card shadow-lg cta-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Ready to Transform Your Habits?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8 text-center">
            Join thousands of others who are using our platform to build lasting
            habits and achieve their goals.
          </p>
          <div className="flex justify-center">
            <Link href="/signup">
              <Button size="lg" className="group">
                Get Started Free
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
