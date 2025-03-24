import Image from "next/image"
import { UserLayout } from "@/components/user-layout"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Award, CheckCircle, Clock, Globe, Heart, Lightbulb, Shield, Target, Users } from "lucide-react"

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "Founder & CEO",
      bio: "Alex founded Mobile Accessories Shop in 2020 with a vision to provide high-quality mobile accessories at affordable prices. With over 15 years of experience in the tech industry, Alex brings expertise and passion to the business.",
      image: "https://tse1.mm.bing.net/th?id=OIP.dJQYb_qAziSYiEwxsXNXOwHaE8&pid=Api&P=0&h=220",
    },
    {
      name: "Sarah Williams",
      role: "Head of Product",
      bio: "Sarah oversees our product selection and quality control. Her background in product design ensures that we offer only the best accessories that meet our strict quality standards.",
      image: "https://m.media-amazon.com/images/M/MV5BZDg0MDdhZjgtNTIyZS00NDdkLWI0ODQtMTU5ZmYzOTJhYzgwXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_FMjpg_UY720_.jpg",
    },
    {
      name: "Michael Chen",
      role: "Customer Experience Manager",
      bio: "Michael leads our customer service team and is dedicated to ensuring every customer has an exceptional experience. He's constantly implementing new ways to improve our service.",
      image: "https://tse4.mm.bing.net/th?id=OIP.WpDBAsnbXB_P8R2yjljyyAHaFj&pid=Api&P=0&h=220",
    },
    {
      name: "Jessica Rodriguez",
      role: "Marketing Director",
      bio: "Jessica brings creative marketing strategies that help us connect with our customers. Her innovative approaches have significantly expanded our customer base.",
      image: "https://tse4.mm.bing.net/th?id=OIP.j3Gt5Bas_5Baj00ebTfFZwHaEe&pid=Api&P=0&h=220",
    },
  ]

  const milestones = [
    {
      year: "2020",
      title: "Company Founded",
      description:
        "Mobile Accessories Shop was established with a small online store offering a curated selection of phone cases and chargers.",
    },
    {
      year: "2021",
      title: "Product Expansion",
      description:
        "Expanded our product range to include audio accessories, power banks, and screen protectors, tripling our inventory.",
    },
    {
      year: "2022",
      title: "Partnership Program",
      description:
        "Launched our partnership program with leading mobile accessory manufacturers to offer exclusive products.",
    },
    {
      year: "2023",
      title: "International Shipping",
      description: "Expanded our operations to offer international shipping, reaching customers in over 50 countries.",
    },
    {
      year: "2024",
      title: "Sustainability Initiative",
      description:
        "Introduced our eco-friendly product line and implemented sustainable packaging across all products.",
    },
  ]

  const values = [
    {
      icon: <Quality />,
      title: "Quality",
      description:
        "We never compromise on quality. Every product we offer undergoes rigorous testing to ensure it meets our high standards.",
    },
    {
      icon: <Heart className="h-10 w-10 text-primary" />,
      title: "Customer-Centric",
      description:
        "Our customers are at the heart of everything we do. We continuously strive to exceed their expectations.",
    },
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: "Reliability",
      description: "We stand behind our products with generous warranties and a hassle-free return policy.",
    },
    {
      icon: <Lightbulb className="h-10 w-10 text-primary" />,
      title: "Innovation",
      description:
        "We're always on the lookout for innovative products that can enhance our customers' mobile experience.",
    },
    {
      icon: <Globe className="h-10 w-10 text-primary" />,
      title: "Sustainability",
      description: "We're committed to reducing our environmental impact through eco-friendly products and packaging.",
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Community",
      description:
        "We believe in building a community of mobile enthusiasts who share our passion for quality accessories.",
    },
  ]

  const stats = [
    { value: "50+", label: "Countries Served" },
    { value: "500+", label: "Products" },
    { value: "100,000+", label: "Happy Customers" },
    { value: "4.8/5", label: "Average Rating" },
  ]

  const partners = ["Anker", "Belkin", "Spigen", "Otterbox", "JBL", "Logitech", "Samsung", "Apple"]

  return (
    <UserLayout>
      <div className="container px-4 py-8 mx-auto">
        {/* Hero Section */}
        <section className="relative rounded-xl overflow-hidden mb-16">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70">
            <Image src="https://i.pinimg.com/originals/c5/48/46/c5484616789e70414abf1b41271f6fba.jpg" alt="About Us" fill className="object-cover mix-blend-overlay opacity-30" />
          </div>
          <div className="relative z-10 px-6 py-16 md:py-24 text-white text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Our Company</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Discover the story behind Mobile Accessories Shop and our commitment to enhancing your mobile experience
              with premium accessories.
            </p>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <div className="space-y-4 text-lg">
                <p>
                  Mobile Accessories Shop was founded in 2020 by Alex Johnson, a tech enthusiast with a passion for
                  mobile devices and accessories. What started as a small online store has grown into a trusted
                  destination for quality mobile accessories.
                </p>
                <p>
                  Our journey began with a simple mission: to provide high-quality mobile accessories that enhance the
                  functionality and protection of your devices without breaking the bank. We noticed that many consumers
                  were struggling to find reliable accessories that would last, often having to replace cheaply made
                  products frequently.
                </p>
                <p>
                  We set out to change that by carefully curating a selection of products that meet our strict quality
                  standards. We personally test every product we sell to ensure it delivers on its promises and provides
                  real value to our customers.
                </p>
                <p>
                  Today, we offer hundreds of products across multiple categories, serving customers in over 50
                  countries. Despite our growth, we remain committed to our founding principles of quality, value, and
                  exceptional customer service.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <Image src="https://mg.co.za/wp-content/uploads/2023/03/DSC06857.jpg" alt="Our Story" fill className="object-cover" />
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values Tabs */}
        <section className="mb-16">
          <Tabs defaultValue="mission" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="mission">Our Mission</TabsTrigger>
              <TabsTrigger value="vision">Our Vision</TabsTrigger>
              <TabsTrigger value="values">Our Values</TabsTrigger>
            </TabsList>
            <TabsContent value="mission" className="p-6 bg-muted/30 rounded-b-lg border-x border-b">
              <div className="flex items-start gap-4">
                <Target className="h-12 w-12 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold mb-2">Our Mission</h3>
                  <p className="text-lg">
                    Our mission is to enhance the mobile experience of our customers by providing high-quality,
                    reliable, and innovative accessories that protect and extend the functionality of their devices. We
                    strive to offer exceptional value through carefully selected products, competitive pricing, and
                    outstanding customer service.
                  </p>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="vision" className="p-6 bg-muted/30 rounded-b-lg border-x border-b">
              <div className="flex items-start gap-4">
                <Lightbulb className="h-12 w-12 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold mb-2">Our Vision</h3>
                  <p className="text-lg">
                    We envision becoming the global leader in mobile accessories, recognized for our commitment to
                    quality, innovation, and customer satisfaction. We aim to be the first choice for consumers seeking
                    reliable mobile accessories, known for our curated selection of products that enhance and protect
                    their devices. We strive to lead the industry in sustainable practices, offering eco-friendly
                    alternatives without compromising on quality or performance.
                  </p>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="values" className="p-6 bg-muted/30 rounded-b-lg border-x border-b">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {values.map((value, index) => (
                  <div key={index} className="flex flex-col items-center text-center p-4">
                    {value.icon}
                    <h3 className="text-xl font-bold mt-3 mb-2">{value.title}</h3>
                    <p>{value.description}</p>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* Company Milestones */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Journey</h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 transform md:translate-x-0 translate-x-4"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                >
                  <div className="md:w-1/2"></div>
                  <div className="absolute left-0 md:left-1/2 w-8 h-8 rounded-full bg-primary transform md:translate-x-[-16px] translate-x-0 flex items-center justify-center text-white font-bold">
                    <Clock className="h-4 w-4" />
                  </div>
                  <div className="md:w-1/2 ml-12 md:ml-0 bg-card p-6 rounded-lg shadow-sm">
                    <div className="text-primary font-bold text-xl mb-2">{milestone.year}</div>
                    <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                    <p>{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="mb-16 bg-muted/30 rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-lg text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="aspect-square relative">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <CardContent className="p-4">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-primary font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Partners Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Partners</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {partners.map((partner, index) => (
              <div key={index} className="bg-card rounded-lg p-6 flex items-center justify-center h-24">
                <span className="text-xl font-bold">{partner}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card p-6 rounded-lg flex flex-col items-center text-center">
              <Award className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Quality Assurance</h3>
              <p>All our products meet international quality standards and undergo rigorous testing.</p>
            </div>
            <div className="bg-card p-6 rounded-lg flex flex-col items-center text-center">
              <Shield className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Secure Transactions</h3>
              <p>Our website is SSL certified, ensuring your personal and payment information is always secure.</p>
            </div>
            <div className="bg-card p-6 rounded-lg flex flex-col items-center text-center">
              <CheckCircle className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Authorized Retailer</h3>
              <p>We are an authorized retailer for all the brands we carry, ensuring authentic products.</p>
            </div>
          </div>
        </section>
      </div>
    </UserLayout>
  )
}

// Custom Quality icon component
function Quality() {
  return (
    <div className="h-10 w-10 text-primary">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    </div>
  )
}

