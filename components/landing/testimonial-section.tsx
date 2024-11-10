"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "John Doe",
    title: "CEO of Company",
    testimonial:
      "This product has transformed our business. Highly recommended!",
  },
  {
    name: "Jane Smith",
    title: "CTO of Startup",
    testimonial:
      "An essential tool for our daily operations. Fantastic support!",
  },
  {
    name: "Sam Wilson",
    title: "Product Manager",
    testimonial: "Incredible features and easy to use. Our team loves it!",
  },
  {
    name: "Lisa Brown",
    title: "Designer",
    testimonial: "Beautiful design and great functionality. A pleasure to use!",
  },
  {
    name: "Michael Johnson",
    title: "Developer",
    testimonial: "The best tool for tracking our progress. Highly efficient!",
  },
  {
    name: "Emily Davis",
    title: "Marketing Specialist",
    testimonial:
      "A game-changer for our marketing campaigns. Highly effective!",
  },
  {
    name: "David Lee",
    title: "Sales Manager",
    testimonial:
      "Our sales have increased significantly since using this product.",
  },
  {
    name: "Sophia Martinez",
    title: "HR Manager",
    testimonial: "Great for managing our team's productivity and goals.",
  },
];

export function TestimonialSection() {
  return (
    <section id="testimonials" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            What Our Customers Say
          </motion.h2>
          <motion.p
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Hear from our satisfied customers
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className={`p-6 rounded-lg border bg-card`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-2">{testimonial.name}</h3>
              <p className="text-muted-foreground mb-2">{testimonial.title}</p>
              <p className="text-muted-foreground">{testimonial.testimonial}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
