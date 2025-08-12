import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import { AlertTriangle, Eye, Clock, MapPin, Camera, Heart } from "lucide-react";

const ViewingGuide = () => {
  const safetyGuidelines = [
    {
      icon: <AlertTriangle className="h-5 w-5" />,
      title: "Maintain Distance",
      description: "Stay at least 10 meters (30 feet) away from seals. Use binoculars or telephoto lens for closer observation."
    },
    {
      icon: <Eye className="h-5 w-5" />,
      title: "Watch for Signs of Disturbance",
      description: "If seals look at you, raise their heads, or move toward water, you're too close. Back away slowly."
    },
    {
      icon: <Heart className="h-5 w-5" />,
      title: "Never Touch or Feed",
      description: "Seals can bite and carry diseases. Feeding disrupts natural behavior and makes them dependent on humans."
    },
    {
      icon: <Camera className="h-5 w-5" />,
      title: "No Flash Photography",
      description: "Flash can startle seals and cause them to flee, potentially injuring pups or pregnant females."
    }
  ];

  const bestPractices = [
    {
      title: "Timing Your Visit",
      items: [
        "Low tide is best - seals haul out on exposed rocks and beaches",
        "Early morning (sunrise to 10am) for least human disturbance",
        "Late afternoon (4pm to sunset) for evening haul-outs",
        "Avoid midday when seals are often in water feeding"
      ]
    },
    {
      title: "Weather Conditions",
      items: [
        "Calm, clear days offer best visibility",
        "Avoid windy conditions - makes observation difficult",
        "After storms, seals often haul out in large numbers",
        "Check tide times - different species prefer different tide states"
      ]
    },
    {
      title: "Equipment to Bring",
      items: [
        "Binoculars (8x42 or 10x42 recommended)",
        "Telephoto camera lens (300mm minimum)",
        "Field notebook for observations",
        "Waterproof clothing and non-slip footwear"
      ]
    }
  ];

  const seasonalTips = [
    {
      season: "Spring (March-May)",
      activity: "Harbor seals give birth",
      tips: "Best time to see mothers with pups. Maintain extra distance during pupping season.",
      badge: "Pupping Season"
    },
    {
      season: "Summer (June-August)",
      activity: "Peak viewing season",
      tips: "All species present. Long daylight hours provide extended viewing opportunities.",
      badge: "Peak Season"
    },
    {
      season: "Autumn (September-November)",
      activity: "Grey seal breeding",
      tips: "Dramatic breeding behaviors. Bulls can be aggressive - observe from safe distance.",
      badge: "Breeding Season"
    },
    {
      season: "Winter (December-February)",
      activity: "Molting period",
      tips: "Seals spend more time on land. Weather can be challenging for observers.",
      badge: "Molting Season"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-coastal">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-ocean bg-clip-text text-transparent">
            Safe Seal Watching Guide
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            How to observe seals safely and responsibly while minimizing disturbance to wildlife
          </p>
        </div>

        <Alert className="mb-8 border-destructive/50 bg-destructive/10">
          <AlertTriangle className="h-4 w-4 text-destructive" />
          <AlertDescription className="text-destructive font-medium">
            Remember: Seals are wild animals. Disturbing seals is illegal under the Wildlife and Countryside Act 1981. 
            Always prioritize seal welfare over getting the perfect photo or observation.
          </AlertDescription>
        </Alert>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <Card className="shadow-marine">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <AlertTriangle className="h-5 w-5" />
                Safety Guidelines
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {safetyGuidelines.map((guideline, index) => (
                <div key={index} className="flex gap-3 p-3 rounded-lg bg-muted/50">
                  <div className="text-primary flex-shrink-0 mt-0.5">
                    {guideline.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">{guideline.title}</h4>
                    <p className="text-sm text-muted-foreground">{guideline.description}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="shadow-marine">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <MapPin className="h-5 w-5" />
                Best Viewing Locations
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <h4 className="font-semibold">Scotland</h4>
                <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                  <li>Orkney Islands - Large grey seal colonies</li>
                  <li>Shetland Islands - All three species possible</li>
                  <li>Isle of May - Major grey seal breeding site</li>
                  <li>St. Andrews - Harbor seals year-round</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold">England</h4>
                <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                  <li>Norfolk Coast - Blakeney Point, Horsey Beach</li>
                  <li>Northumberland - Farne Islands</li>
                  <li>Cornwall - Godrevy, St. Ives</li>
                  <li>The Wash - Large harbor seal population</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold">Wales</h4>
                <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                  <li>Pembrokeshire - Ramsey Island</li>
                  <li>Cardigan Bay - Bardsey Island</li>
                  <li>Anglesey - Multiple coastal sites</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 mb-8">
          {bestPractices.map((practice, index) => (
            <Card key={index} className="shadow-soft">
              <CardHeader>
                <CardTitle className="text-primary">{practice.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {practice.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2 text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="shadow-marine">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-primary">
              <Clock className="h-5 w-5" />
              Seasonal Viewing Calendar
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {seasonalTips.map((season, index) => (
                <div key={index} className="p-4 rounded-lg bg-gradient-coastal border border-border">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold">{season.season}</h4>
                    <Badge variant="secondary">{season.badge}</Badge>
                  </div>
                  <p className="text-sm font-medium text-primary mb-2">{season.activity}</p>
                  <p className="text-sm text-muted-foreground">{season.tips}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ViewingGuide;