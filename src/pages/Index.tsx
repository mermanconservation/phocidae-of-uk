import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";
import { BookOpen, Map, Eye, Calendar, Waves, ArrowRight } from "lucide-react";
import sealsHeroImg from "@/assets/seals-hero.jpg";

const Index = () => {
  const features = [
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Field Guide",
      description: "Comprehensive species information for Harbor, Grey, and Bearded seals",
      link: "/field-guide",
      badge: "3 Species"
    },
    {
      icon: <Map className="h-8 w-8" />,
      title: "Distribution Map",
      description: "Interactive maps showing seal observations across UK waters",
      link: "/map",
      badge: "Coming Soon"
    },
    {
      icon: <Eye className="h-8 w-8" />,
      title: "Viewing Guide",
      description: "Safe and responsible seal watching guidelines and best practices",
      link: "/viewing-guide",
      badge: "Safety First"
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "Seasonal Info",
      description: "When and where to observe seals throughout the year",
      link: "/seasonal",
      badge: "Year Round"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-coastal">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={sealsHeroImg}
            alt="UK Seals in their natural habitat"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/40 to-background/80"></div>
        </div>
        
        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4 text-sm font-medium">
              <Waves className="w-4 h-4 mr-2" />
              UK Marine Wildlife Guide
            </Badge>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-ocean bg-clip-text text-transparent">
              UK Seals
            </h1>
            
            <p className="text-xl lg:text-2xl text-foreground/80 mb-8 max-w-3xl mx-auto leading-relaxed">
              Your comprehensive guide to observing Harbor seals, Grey seals, and Bearded seals 
              in UK waters. Learn biology, behavior, and safe viewing practices.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="shadow-marine">
                <Link to="/field-guide">
                  Explore Field Guide <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="bg-background/50 backdrop-blur">
                <Link to="/viewing-guide">
                  Safe Viewing Tips
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-primary">
              Everything You Need to Know
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From species identification to seasonal behavior patterns, discover the fascinating world of UK seals
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-marine transition-all duration-300 hover:-translate-y-1 border-border/50 bg-card/80 backdrop-blur"
              >
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 rounded-full bg-gradient-ocean text-primary-foreground w-fit group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                    <Badge variant="outline" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                  <Button variant="ghost" size="sm" asChild className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Link to={feature.link}>
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Species Preview */}
      <section className="py-20 bg-gradient-deep">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-primary-foreground">
              Three Species, One Guide
            </h2>
            <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
              Learn to identify and understand the behavior of each seal species found in UK waters
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Harbor Seal",
                scientific: "Phoca vitulina",
                features: ["Spotted coat", "V-shaped nostrils", "Smaller size", "Can 'bottle' in water"]
              },
              {
                name: "Grey Seal",
                scientific: "Halichoerus grypus",
                features: ["Long snout", "Larger size", "Grey coloration", "Social breeding"]
              },
              {
                name: "Bearded Seal", 
                scientific: "Erignathus barbatus",
                features: ["Long whiskers", "Robust build", "Arctic visitor", "Bottom feeder"]
              }
            ].map((species, index) => (
              <Card key={index} className="bg-card/90 backdrop-blur border-border/50">
                <CardHeader className="text-center">
                  <CardTitle className="text-primary">{species.name}</CardTitle>
                  <p className="text-muted-foreground italic text-sm">{species.scientific}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {species.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2 text-sm">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/field-guide">
                View Complete Field Guide <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
