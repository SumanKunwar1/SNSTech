import { motion } from 'framer-motion';
import { SEOHead } from '@/components/SEO/SEOHead';
import { Mail, Phone, MapPin, Clock, MessageCircle } from 'lucide-react';
import { ContactForm } from '@/components/forms/ContactForm';
import { Card, CardContent } from '@/components/ui/card';

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    content: 'hello@sammisounds.tech',
    description: 'Send us an email anytime',
  },
  {
    icon: Phone,
    title: 'Phone',
    content: '+1 (555) 123-4567',
    description: 'Call us during business hours',
  },
  {
    icon: MapPin,
    title: 'Location',
    content: 'San Francisco, CA',
    description: 'Remote-first, globally connected',
  },
  {
    icon: Clock,
    title: 'Response Time',
    content: 'Within 24 hours',
    description: 'We respond to all inquiries',
  },
];

export function Contact() {
  return (
    <div className="pt-8">
      <SEOHead 
        title="Contact Us"
        description="Get in touch with Sammi and Sounds Tech Co. Ready to transform your business? Contact us for website development, mobile apps, digital marketing, and more."
        keywords="contact us, get in touch, project inquiry, business consultation, startup services, digital solutions"
      />
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl sm:text-6xl font-bold mb-6"
            >
              Let's <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Connect</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-muted-foreground leading-relaxed"
            >
              Ready to transform your business? We'd love to hear about your project and explore how we can help you achieve your goals.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Whether you have a specific project in mind or just want to explore possibilities, 
                  we're here to help. Reach out through any of the channels below.
                </p>
              </motion.div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-card/50 backdrop-blur-sm">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                            <info.icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground">{info.title}</h3>
                            <p className="text-primary font-medium">{info.content}</p>
                            <p className="text-sm text-muted-foreground">{info.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Secondary CTA */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="mt-12 p-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl text-white"
              >
                <MessageCircle className="w-12 h-12 text-blue-100 mb-4" />
                <h3 className="text-xl font-bold mb-2">Prefer to Chat?</h3>
                <p className="text-blue-100 mb-4">
                  Schedule a free 30-minute consultation to discuss your project and see how we can help.
                </p>
                <a 
                  href="#" 
                  className="inline-flex items-center text-white hover:text-blue-100 transition-colors font-medium"
                >
                  Schedule a Call →
                </a>
              </motion.div>
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="border-0 shadow-xl bg-card/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold mb-2">Send us a Message</h3>
                    <p className="text-muted-foreground">
                      Fill out the form below and we'll get back to you within 24 hours.
                    </p>
                  </div>
                  <ContactForm />
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}