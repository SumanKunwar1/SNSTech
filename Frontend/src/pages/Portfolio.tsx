import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ExternalLink, Facebook, Instagram, Youtube, ArrowRight, Globe, Smartphone, TrendingUp, Palette, Share2, Layers, Car, CheckCircle2 } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import PageTransition from '@/components/ui/page-transition'
import AnimatedSection from '@/components/ui/animated-section'

export default function Portfolio() {
    const websiteProjects = [
    {
  title: "Pureland Hospitality",
  description: "A modern hospitality conglomerate platform showcasing hotel operations, service excellence, and guest experiences across Nepal. Designed to reflect luxury, trust, and service-first values.",
  image: "https://i0.wp.com/theluxurytravelexpert.com/wp-content/uploads/2019/11/best-luxury-and-most-exclusive-hotels-brands-in-the-world.jpg?fit=1300%2C731&ssl=1",
  tags: ["Hospitality", "Hotels", "Luxury", "Spritual"],
  category: "Web Development",
  gradient: "from-yellow-500 to-amber-600",
  link: "https://purelandhospitality.com.np/"
},
{
  title: "Pureland Tours & Travels",
  description: "Curated Buddhist pilgrimage tours, Himalayan adventures, and cultural travel experiences across Nepal, India, Bhutan and Tibet. A travel platform built for spiritual seekers and explorers.",
  image: "https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg?auto=compress&cs=tinysrgb&w=800",
  tags: ["Travel", "Tourism", "Pilgrimage", "Himalaya"],
  category: "Web Development",
  gradient: "from-orange-500 to-rose-500",
  link: "https://purelandtravels.com.np/"
},
{
  title: "SNS Tech",
  description: "A premier IT solutions company delivering enterprise software, custom web platforms and digital transformation services for businesses across Nepal and beyond.",
  image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800",
  tags: ["Technology", "IT Services", "Enterprise", "Software"],
  category: "Web Development",
  gradient: "from-sky-500 to-indigo-600",
  link: "https://www.snstech.co/"
},
{
  title: "Dharma Ideal Campaign",
  description: "A purpose-driven Buddhist campaign platform connecting global communities through teachings, donations and dharma initiatives — built to inspire compassion at scale.",
  image: "https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg?auto=compress&cs=tinysrgb&w=800",
  tags: ["Non-Profit", "Buddhism", "Campaign", "Community"],
  category: "Web Development",
  gradient: "from-amber-500 to-orange-600",
  link: "https://www.dharmaideal.org/"
},
{
  title: "Ngyungne",
  description: "An immersive online home for the sacred Ngyungne fasting practice — sharing teachings, retreat schedules and resources with practitioners worldwide.",
  image: "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=800",
  tags: ["Spiritual", "Retreat", "Buddhism", "Practice"],
  category: "Web Development",
  gradient: "from-rose-500 to-pink-600",
  link: "https://ngyungne.org/"
},
{
  title: "BTMC Foundation",
  description: "The official digital presence of the BTMC Foundation, championing Buddhist heritage, social welfare and humanitarian initiatives across Nepal and the wider Himalayan region.",
  image: "https://images.pexels.com/photos/2161467/pexels-photo-2161467.jpeg?auto=compress&cs=tinysrgb&w=800",
  tags: ["Foundation", "Heritage", "Buddhism", "Welfare"],
  category: "Web Development",
  gradient: "from-yellow-500 to-orange-500",
  link: "https://btmcfoundation.org/"
},
{
  title: "Padmasambhava Trip",
  description: "A specialized pilgrimage platform tracing the sacred footsteps of Guru Padmasambhava — offering guided tours, itineraries and storytelling around Vajrayana heritage sites.",
  image: "https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=800",
  tags: ["Pilgrimage", "Travel", "Vajrayana", "Heritage"],
  category: "Web Development",
  gradient: "from-purple-500 to-indigo-600",
  link: "https://padmasambhavatrip.com/"
},
{
  title: "Mastakala Nepal",
  description: "An e-commerce showcase for authentic Nepali handicrafts and artisan-made products — bringing traditional craftsmanship to a modern digital storefront.",
  image: "https://res.cloudinary.com/dcsgax3ld/image/upload/v1777635668/Screenshot_2026-05-01_172242_sdhtnl.png",
  tags: ["E-commerce", "Handicraft", "Culture", "Artisan"],
  category: "Web Development",
  gradient: "from-red-500 to-amber-500",
  link: "https://mastakala.com/"
},
{
  title: "RASS Engineering & Construction",
  description: "Delivering world-class engineering and construction solutions with a strong commitment to safety, quality, and trust across Nepal.",
  image: "https://res.cloudinary.com/dihev9qxc/image/upload/v1765871303/RASS-logo_grqryq.png",
  tags: ["Engineering", "Construction", "Luxury", "Spritual"],
  category: "Web Development",
  gradient: "from-yellow-500 to-amber-600",
  link: "https://rassengineering.com.np/"
},
{
  title: "Constellation saving & credit cooperative ltd",
  description: "Constellation Saving & Credit Cooperative promotes sustainable growth by uniting member resources through transparent, democratic leadership.",
  image: "https://res.cloudinary.com/dihev9qxc/image/upload/v1767095082/unnamed_yvnvnq.png",
  tags: ["cooperative", "business-directory", "shareholder ", "finance"],
  category: "Web Development",
  gradient: "from-yellow-500 to-amber-600",
  link: "https://constellationcooperative.com/"
},

    {
      title: "Nepal Insurance Authority",
      description: "Official government insurance authority website with comprehensive policy information and digital services.",
      image: "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Government", "Insurance", "Digital Services"],
      category: "Web Development",
      gradient: "from-blue-600 to-indigo-600",
      link: "https://nia.gov.np/"
    },
    {
      title: "Khana Expo",
      description: "Dynamic food exhibition platform showcasing culinary experiences and vendor connections.",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Food", "Exhibition", "E-commerce"],
      category: "Web Development",
      gradient: "from-orange-500 to-red-500",
      link: "https://khanaexpo.com/"
    },
    {
      title: "Food, Beverage & Hospitality Expo",
      description: "Comprehensive expo platform for hospitality industry networking and business connections.",
      image: "https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Hospitality", "B2B", "Events"],
      category: "Web Development",
      gradient: "from-purple-500 to-pink-500",
      link: "https://www.fbhnepal.com/"
    },
    {
      title: "Himalayan School of Outdoor Recreation (HSOR)",
      description: "Adventure education platform promoting outdoor skills and mountain recreation programs.",
      image: "https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Education", "Adventure", "Recreation"],
      category: "Web Development",
      gradient: "from-green-500 to-emerald-500",
      link: "https://hsor.education/"
    },
    {
      title: "Trinity Waterproofing",
      description: "Professional waterproofing services website with project galleries and service information.",
      image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Construction", "Services", "B2B"],
      category: "Web Development",
      gradient: "from-cyan-500 to-blue-500",
      link: "http://www.trinitywaterproofing.com.np/"
    },
    {
      title: "OMSounds Nepal",
      description: "Authentic Himalayan singing bowl production company offering handcrafted sound healing instruments and premium audio services.",
      image: "https://res.cloudinary.com/dei0ymk1p/image/upload/v1752241709/a-photograph-of-an-elegant-bronze-singin_1EyNm-dvRbGwJqA6L9KzMw_LYhkjWLnTeCqR80Yrl-J-w_vgb6jh.jpg",
      tags: ["Music", "Audio", "Sound Healing", "Wellness"],
      category: "Web Development",
      gradient: "from-violet-500 to-purple-500",
      link: "https://omsounds.com/"
    },
    {
      title: "House of Rajkarnicar",
      description: "Nepal’s first event management company, with a heritage website that highlights its legacy in cultural events, traditional architecture, and artistic significance.",
      image: "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Event management", "Culture", "Architecture"],
      category: "Web Development",
      gradient: "from-amber-500 to-orange-500",
      link: "https://rajkarnicar.com/"
    },
    {
      title: "Rooted in Sound",
      description: "Immersive sound healing and wellness platform connecting people with therapeutic audio experiences.",
      image: "https://images.pexels.com/photos/3693120/pexels-photo-3693120.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Wellness", "Sound Therapy", "Health"],
      category: "Web Development",
      gradient: "from-teal-500 to-cyan-500",
      link: "https://www.rootedinsound.com/"
    },
    
  ]

  const digitalMarketingClients = [
    "Khana Expo", 
    "Food, Beverage & Hospitality Expo",
    "Himalayan School of Outdoor Recreation (HSOR)",
    "Trinity Waterproofing",
    "OMSounds Nepal",
    "House of Rajkarnicar",
    "Rooted in Sound",
    "Hotel Mandala",
    "Socheko.com",
    "Dharma Television",
    "Pureland Hospitality",
    "Pureland Tours & Travels"
  ]

  const socialMediaClients = [
    
    {
      name: "The Society Restaurant",
      platforms: [
        { type: "facebook", url: "https://www.facebook.com/profile.php?id=61553655304990" },
        { type: "instagram", url: "https://www.instagram.com/thesociety_finedining/" }
      ],
      description: "Fine dining and culinary experience promotion",
      image: "https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Himalayan School of Outdoor Recreation (HSOR)",
      platforms: [
        { type: "facebook", url: "https://www.facebook.com/HimalayanSchoolofOutdoorRecreation" },
        { type: "instagram", url: "https://www.instagram.com/hsornepal/" }
      ],
      description: "Adventure education and outdoor activity content",
      image: "https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Hope International college",
      platforms: [
        { type: "facebook", url: "https://www.facebook.com/search/top?q=hope%20college%20lalitpur" },
        { type: "instagram", url: "https://www.instagram.com/hopecollegenepal/" }
      ],
      description: "Educational content and school community engagement for their medical students",
      image: "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
   
    {
  name: "Dharma Television",
  platforms: [
    { type: "facebook", url: "https://www.facebook.com/televisionsdharma" },
    { type: "youtube", url: "https://www.youtube.com/@dharmatelevision7477" },
    { type: "instagram", url: "https://www.instagram.com/dharmatelevision.tv/" }
  ],
  description: "Buddhist teaching television channel promoting spiritual awareness and mindful living.",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdYysfqrvalS-TerkBDcijeup1P4ez5WSPkg&s"
}

  ]

  const saasProducts = [
    {
      title: "Real Estate MLS Platform",
      description: "A full-featured Multiple Listing Service (MLS) SaaS built for the real estate industry — empowering agents, brokers and agencies with property listings, lead management, advanced search and analytics in one unified platform.",
      image: "https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Real Estate", "MLS", "SaaS", "Multi-tenant"],
      category: "SaaS Product",
      gradient: "from-emerald-500 to-teal-600",
      features: [
        "Property listing & inventory management",
        "Agent & broker workspaces",
        "Lead capture and CRM workflows",
        "Advanced search, filters & map view",
        "Analytics & performance dashboards"
      ]
    },
    {
      title: "School Management Platform",
      description: "An end-to-end school management SaaS trusted by every Euro School branch across Nepal — streamlining academics, attendance, fees, communication and reporting for students, parents, teachers and administrators.",
      image: "https://images.pexels.com/photos/289737/pexels-photo-289737.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["EdTech", "School ERP", "SaaS", "Multi-school"],
      category: "SaaS Product",
      gradient: "from-blue-500 to-violet-600",
      features: [
        "Student information & academic records",
        "Attendance, exams & gradebook",
        "Fee management & online payments",
        "Parent–teacher communication portal",
        "Deployed across all Euro School branches in Nepal"
      ]
    }
  ]

  const brandingProjects = [
    
    {
      name: "Himalayan School of Outdoor Recreation (HSOR)",
      description: "Adventure education brand identity and visual system",
      image: "https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "The Society Restaurant",
      description: "Premium dining brand identity and marketing materials",
      image: "https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "OMSounds Nepal",
      description: "Authentic Himalayan singing bowl production company offering handcrafted sound healing instruments and premium audio services.",
      image: "https://res.cloudinary.com/dei0ymk1p/image/upload/v1752241709/a-photograph-of-an-elegant-bronze-singin_1EyNm-dvRbGwJqA6L9KzMw_LYhkjWLnTeCqR80Yrl-J-w_vgb6jh.jpg"
    }
  ]


  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case 'facebook':
        return <Facebook className="w-5 h-5" />
      case 'instagram':
        return <Instagram className="w-5 h-5" />
      case 'youtube':
        return <Youtube className="w-5 h-5" />
      default:
        return null
    }
  }

  const getSocialColor = (platform: string) => {
    switch (platform) {
      case 'facebook':
        return 'hover:bg-blue-600'
      case 'instagram':
        return 'hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500'
      case 'youtube':
        return 'hover:bg-red-600'
      default:
        return 'hover:bg-gray-600'
    }
  }

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">
        <div className="container mx-auto px-4 lg:px-6">
          <AnimatedSection className="text-center max-w-4xl mx-auto">
            <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 tracking-wider uppercase">
              Our Portfolio
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6 text-foreground">
              Building Brands. Empowering Growth.
              <span className="block text-transparent bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text">
                Driving Digital Futures.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              At WAS Media Marketing, we don't just create digital solutions—we craft experiences 
              that transform businesses and connect brands with their audiences in meaningful ways.
            </p>
            <div className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-blue-600">25+</h3>
                <p className="text-muted-foreground">Websites Built</p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-purple-600">15+</h3>
                <p className="text-muted-foreground">Brands Created</p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-emerald-600">50+</h3>
                <p className="text-muted-foreground">Social Accounts Managed</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Website Projects */}
      <AnimatedSection className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Globe className="w-8 h-8 text-blue-500 mr-3" />
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                Website Development
              </h2>
            </div>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From government portals to creative platforms, we build websites that perform, engage, and deliver results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {websiteProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group"
              >
                <Card className="overflow-hidden border-2 border-border hover:border-blue-500/50 transition-all duration-300 bg-card hover:shadow-xl h-full">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button 
                        size="sm" 
                        variant="secondary" 
                        className="bg-white/90 text-black hover:bg-white"
                        onClick={() => project.link !== '#' && window.open(project.link, '_blank')}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Site
                      </Button>
                    </div>
                    <Badge 
                      className={`absolute top-4 left-4 bg-gradient-to-r ${project.gradient} text-white border-0`}
                    >
                      {project.category}
                    </Badge>
                  </div>
                  
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge 
                          key={tagIndex} 
                          variant="secondary" 
                          className="text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* SaaS Products */}
      <AnimatedSection className="py-20 lg:py-32 bg-gradient-to-br from-emerald-50/50 via-white to-blue-50/50 dark:from-emerald-950/20 dark:via-gray-900 dark:to-blue-950/20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Layers className="w-8 h-8 text-emerald-500 mr-3" />
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                Our SaaS Products
              </h2>
            </div>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Beyond client work, we build and operate scalable SaaS platforms that solve real industry problems —
              from real estate to education.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {saasProducts.map((product, index) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="overflow-hidden border-2 border-border hover:border-emerald-500/50 transition-all duration-300 bg-card hover:shadow-2xl h-full">
                  <div className="relative overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    <Badge
                      className={`absolute top-4 left-4 bg-gradient-to-r ${product.gradient} text-white border-0`}
                    >
                      {product.category}
                    </Badge>
                  </div>

                  <CardContent className="p-6 lg:p-8">
                    <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-emerald-600 transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-muted-foreground text-sm md:text-base mb-5 leading-relaxed">
                      {product.description}
                    </p>

                    <ul className="space-y-2 mb-5">
                      {product.features.map((feature, i) => (
                        <li key={i} className="flex items-start text-sm text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {product.tags.map((tag, tagIndex) => (
                        <Badge
                          key={tagIndex}
                          variant="secondary"
                          className="text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Digital Marketing */}
      <AnimatedSection className="py-20 lg:py-32 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <TrendingUp className="w-8 h-8 text-emerald-500 mr-3" />
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                Digital Marketing Excellence
              </h2>
            </div>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
              We don't just build websites—we help them grow with data-driven digital marketing strategies 
              that deliver measurable results and sustainable growth.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-border bg-card shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                  Our Digital Marketing Clients
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {digitalMarketingClients.map((client, index) => (
                    <motion.div
                      key={client}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                      className="flex items-center p-3 rounded-lg bg-muted/50 hover:bg-blue-50 dark:hover:bg-blue-950/20 transition-colors"
                    >
                      <div className="w-3 h-3 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full mr-3" />
                      <span className="text-foreground font-medium">{client}</span>
                    </motion.div>
                  ))}
                </div>
                <div className="text-center mt-8">
                  <p className="text-muted-foreground italic">
                    "From SEO optimization to PPC campaigns, we drive traffic, engagement, and conversions 
                    for businesses across diverse industries."
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </AnimatedSection>

      {/* Social Media Management */}
      <AnimatedSection className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Share2 className="w-8 h-8 text-pink-500 mr-3" />
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                Social Media We Manage
              </h2>
            </div>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Building communities, engaging audiences, and creating viral content across multiple platforms 
              for brands that want to make a lasting impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {socialMediaClients.map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="border-2 border-border hover:border-pink-500/50 transition-all duration-300 bg-card hover:shadow-xl h-full">
                  <div className="relative overflow-hidden">
                    <img
                      src={client.image}
                      alt={client.name}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-lg font-bold text-white mb-1 group-hover:text-pink-300 transition-colors">
                        {client.name}
                      </h3>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                      {client.description}
                    </p>
                    
                    <div className="flex justify-center space-x-4">
                      {client.platforms.map((platform) => (
                        <motion.a
                          key={platform.type}
                          href={platform.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          className={`w-12 h-12 rounded-full bg-muted text-muted-foreground flex items-center justify-center transition-all duration-300 hover:text-white ${getSocialColor(platform.type)} shadow-lg hover:shadow-xl`}
                          title={`Visit ${client.name} on ${platform.type}`}
                        >
                          {getSocialIcon(platform.type)}
                        </motion.a>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Branding Projects */}
      <AnimatedSection className="py-20 lg:py-32 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Palette className="w-8 h-8 text-purple-500 mr-3" />
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                Branding & Identity Design
              </h2>
            </div>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Creating memorable brand identities that tell your story, connect with your audience, 
              and stand out in competitive markets.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {brandingProjects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group"
              >
                <Card className="overflow-hidden border-2 border-border hover:border-purple-500/50 transition-all duration-300 bg-card hover:shadow-xl h-full">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>
                  
                  <CardContent className="p-4">
                    <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-purple-600 transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-muted-foreground text-xs leading-relaxed">
                      {project.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Mobile App Development */}
      <AnimatedSection className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Smartphone className="w-8 h-8 text-indigo-500 mr-3" />
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                Mobile App Development
              </h2>
            </div>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Designing and engineering native and cross-platform mobile experiences —
              from concept and UX to launch and scale.
            </p>
          </div>

          {/* GoRider — Coming Soon Spotlight */}
          <div className="max-w-6xl mx-auto">
            <Card className="border-2 border-border bg-card shadow-2xl overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-pink-500/10" />
              <div className="absolute -top-24 -right-24 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl" />

              <CardContent className="p-8 lg:p-14 relative">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                  <div>
                    <div className="flex items-center gap-3 mb-5">
                      <Badge className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white border-0 px-3 py-1">
                        Launching Soon
                      </Badge>
                      <Badge variant="secondary" className="px-3 py-1">
                        Mobile App
                      </Badge>
                    </div>

                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg">
                        <Car className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-3xl md:text-4xl font-bold text-foreground">
                        GoRider
                      </h3>
                    </div>

                    <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                      A next-generation ride-sharing platform built for Nepal — connecting riders and drivers
                      with safe, affordable and reliable journeys at the tap of a button.
                      GoRider is in the final stages of development and about to launch.
                    </p>

                    <div className="grid sm:grid-cols-2 gap-3 mb-7">
                      <div className="flex items-center text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-indigo-500 mr-2 flex-shrink-0" />
                        Real-time ride matching
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-indigo-500 mr-2 flex-shrink-0" />
                        Live GPS tracking
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-indigo-500 mr-2 flex-shrink-0" />
                        In-app secure payments
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-indigo-500 mr-2 flex-shrink-0" />
                        Driver verification & SOS
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-indigo-500 mr-2 flex-shrink-0" />
                        Fare estimates upfront
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-indigo-500 mr-2 flex-shrink-0" />
                        iOS &amp; Android native apps
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button
                        size="lg"
                        className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:from-indigo-600 hover:to-purple-700 shadow-lg"
                      >
                        Get Early Access
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Button>
                      <Button
                        size="lg"
                        variant="outline"
                        className="border-2"
                      >
                        Learn More
                      </Button>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-border">
                      <img
                        src="https://images.pexels.com/photos/3806249/pexels-photo-3806249.jpeg?auto=compress&cs=tinysrgb&w=1000"
                        alt="GoRider — ride sharing app"
                        className="w-full h-80 lg:h-[420px] object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      <div className="absolute bottom-6 left-6 right-6">
                        <p className="text-white/90 text-sm font-medium mb-1">
                          GoRider — Ride Sharing
                        </p>
                        <p className="text-white text-2xl font-bold">
                          Your ride. One tap away.
                        </p>
                      </div>
                    </div>

                    <div className="absolute -bottom-5 -left-5 bg-card border-2 border-border rounded-2xl shadow-xl px-5 py-3 hidden sm:flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                        <Smartphone className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Coming to</p>
                        <p className="text-sm font-bold text-foreground">iOS &amp; Android</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-20 lg:py-32 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-2xl p-8 lg:p-16 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Join Our Success Stories?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's collaborate to create digital solutions that not only meet your needs 
              but exceed your expectations and drive meaningful business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/services">
                <Button 
                  variant="outline"
                  size="lg"
                  className="px-8 py-6 text-lg border-2 hover:bg-muted transition-all duration-300"
                >
                  Explore Our Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </PageTransition>
  )
}