import Link from "next/link"
import Image from "next/image"
import { UserLayout } from "@/components/user-layout"
import { AccessoryCard } from "@/components/accessory-card"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import { accessories } from "@/lib/data"

export default function Home() {
  // Display featured accessories on the home page
  const featuredAccessories = accessories.slice(0, 6)

  return (
    <UserLayout>
      {/* Hero Section - Improved */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/90 via-primary to-primary/80 text-white">
        {/* Abstract background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full">
            <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
              <circle cx="500" cy="500" r="300" fill="white" fillOpacity="0.1" />
              <circle cx="500" cy="500" r="200" fill="white" fillOpacity="0.1" />
              <circle cx="700" cy="300" r="150" fill="white" fillOpacity="0.1" />
            </svg>
          </div>
        </div>

        {/* Floating device mockups */}
        <div className="absolute -right-20 top-1/2 transform -translate-y-1/2 w-64 h-64 rounded-full bg-white/10 blur-3xl"></div>
        <div className="absolute right-10 bottom-10 w-32 h-32 rounded-full bg-white/10 blur-xl"></div>
        <div className="absolute left-10 top-10 w-48 h-48 rounded-full bg-white/10 blur-2xl"></div>

        <div className="container px-4 py-20 md:py-32 mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 max-w-xl">
              <div className="inline-block px-4 py-1 rounded-full bg-white/20 backdrop-blur-sm text-sm font-medium">
                Premium Quality Accessories
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Elevate Your Mobile Experience
              </h1>
              <p className="text-lg md:text-xl opacity-90 leading-relaxed">
                Discover our collection of premium mobile accessories designed to enhance your device's functionality
                and style. From protective cases to high-performance chargers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild className="bg-white text-primary hover:bg-white/90 font-medium px-8">
                  <Link href="/accessories">Shop Now</Link>
                </Button>
                <Button size="lg"  asChild className="bg-white text-primary hover:bg-white/90 font-medium px-8">
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="relative hidden md:block">
              <div className="relative h-[500px] w-full">
                {/* Main phone image */}
                <div className="absolute top-0 right-0 w-64 h-auto transform rotate-6 shadow-2xl rounded-3xl overflow-hidden border-8 border-white/10 backdrop-blur-sm z-20">
                  <Image
                    src="https://tse2.mm.bing.net/th?id=OIP.dVfJuk_WPbGJ45UBzCrCnQHaHt&pid=Api&P=0&h=180"
                    alt="Smartphone"
                    width={300}
                    height={600}
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Accessory images */}
                <div className="absolute bottom-20 left-0 w-48 h-auto transform -rotate-6 shadow-xl rounded-2xl overflow-hidden z-10">
                  <Image
                    src="https://phonesep.com/wp-content/uploads/2020/01/1192385617-1.jpg"
                    alt="Wireless Earbuds"
                    width={200}
                    height={200}
                    className="object-cover"
                  />
                </div>

                <div className="absolute top-20 left-20 w-40 h-auto transform rotate-12 shadow-xl rounded-2xl overflow-hidden">
                  <Image
                    src="https://www.androidcentral.com/sites/androidcentral.com/files/styles/large/public/article_images/2019/12/phone-accessories-pixel-4-note-10-aukey-anker-braven-uag-skinit-moshi-christmas.jpg?itok=r4KOr_wX"
                    alt="Phone Case"
                    width={200}
                    height={200}
                    className="object-cover"
                  />
                </div>

                {/* Decorative elements */}
                <div className="absolute bottom-10 right-20 w-20 h-20 bg-white/20 backdrop-blur-md rounded-full"></div>
                <div className="absolute top-40 left-0 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Stats bar */}
          <div className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 py-6 px-6 md:px-10 bg-white/10 backdrop-blur-md rounded-2xl">
            <div className="text-center">
              <p className="text-3xl font-bold">500+</p>
              <p className="text-sm opacity-80">Products</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold">10k+</p>
              <p className="text-sm opacity-80">Happy Customers</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold">50+</p>
              <p className="text-sm opacity-80">Brands</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold">24/7</p>
              <p className="text-sm opacity-80">Support</p>
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full">
            <path
              fill="hsl(var(--background))"
              fillOpacity="1"
              d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Featured Products Section */}
      <div className="container px-4 py-12 mx-auto">
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold tracking-tight mb-2">Featured Accessories</h2>
            <p className="text-lg text-muted-foreground">Discover our most popular mobile accessories</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredAccessories.map((accessory) => (
              <AccessoryCard key={accessory.id} accessory={accessory} />
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button asChild size="lg">
              <Link href="/accessories">View All Accessories</Link>
            </Button>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-2">What Our Customers Say</h2>
            <p className="text-lg text-muted-foreground">Read testimonials from our satisfied customers</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-0 shadow-md">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="mb-6 italic">
                  "The phone case I purchased is amazing! It's durable, stylish, and has protected my phone from several
                  drops. Highly recommend!"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-muted overflow-hidden mr-4">
                    <Image src="https://tse1.mm.bing.net/th?id=OIP.7JCuq8ceXvR1H7bcfnk5fAAAAA&pid=Api&P=0&h=220" alt="Customer" width={48} height={48} className="object-cover" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Sarah Johnson</h4>
                    <p className="text-sm text-muted-foreground">Loyal Customer</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="mb-6 italic">
                  "The wireless earbuds exceeded my expectations. The sound quality is excellent, and the battery life
                  is impressive. Great value for money!"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-muted overflow-hidden mr-4">
                    <Image src="https://tse4.mm.bing.net/th?id=OIP.VzxZfOC-tpd5AiPD_PzTQwAAAA&pid=Api&P=0&h=220" alt="Customer" width={48} height={48} className="object-cover" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Michael Rodriguez</h4>
                    <p className="text-sm text-muted-foreground">Tech Enthusiast</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="mb-6 italic">
                  "Fast shipping and excellent customer service! I had a question about my order, and they responded
                  quickly and resolved my issue. Will definitely shop here again."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-muted overflow-hidden mr-4">
                    <Image src="https://tse4.mm.bing.net/th?id=OIP.8i1FErtQw5FbRsg3wbb0EAHaLH&pid=Api&P=0&h=220" alt="Customer" width={48} height={48} className="object-cover" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Emily Chen</h4>
                    <p className="text-sm text-muted-foreground">Repeat Customer</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold mb-3">Quality Products</h3>
              <p className="text-muted-foreground">
                We offer only the highest quality mobile accessories from trusted brands.
              </p>
            </div>
            <div className="bg-card rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold mb-3">Fast Shipping</h3>
              <p className="text-muted-foreground">Get your accessories delivered quickly to your doorstep.</p>
            </div>
            <div className="bg-card rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold mb-3">Customer Support</h3>
              <p className="text-muted-foreground">
                Our team is always ready to assist you with any questions or concerns.
              </p>
            </div>
          </div>
        </section>
      </div>
    </UserLayout>
  )
}

