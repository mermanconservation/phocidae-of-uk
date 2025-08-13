import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import { MapPin, ExternalLink, Info } from "lucide-react";

const Map = () => {
 

  const externalResources = [
    {
      title: "iNaturalist UK Seals",
      description: "Browse community-submitted seal observations across the UK",
      url: "https://www.inaturalist.org/observations?place_id=6857&subview=map&taxon_id=372843",
      icon: <ExternalLink className="h-4 w-4" />
    },
    {
      title: "NBN Atlas",
      description: "Official UK biodiversity database with seal distribution records",
      url: "https://species.nbnatlas.org/",
      icon: <ExternalLink className="h-4 w-4" />
    },
    {
      title: "Sea Watch Foundation",
      description: "Marine wildlife conservation with sighting reports and maps",
      url: "https://www.seawatchfoundation.org.uk/",
      icon: <ExternalLink className="h-4 w-4" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-coastal">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-ocean bg-clip-text text-transparent">
            Seal Distribution Map
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Interactive mapping of seal observations and distribution across UK waters
          </p>
        </div>

        <div className="mb-8">
          <Card className="shadow-marine">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-primary mb-4">Live iNaturalist Observations</h2>
              <p className="text-muted-foreground mb-4">
                Explore real-time seal observations from the iNaturalist community across UK waters.
              </p>
              <div className="relative w-full h-96 rounded-lg overflow-hidden">
                <iframe
  src="https://www.inaturalist.org/observations/widget?place_id=6857&taxon_id=372843&view=map&layout=large"
  className="w-full h-full border-0"
  title="iNaturalist Seal Observations Map"
  allowFullScreen
  sandbox="allow-scripts allow-same-origin"
></iframe>

              </div>
              <div className="mt-4 text-sm text-muted-foreground">
                <p>Data provided by <a href="https://www.inaturalist.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">iNaturalist</a> - A global community of naturalists</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mb-8">
          <Card className="shadow-marine">
            <CardHeader>
              <CardTitle className="text-primary">External Resources</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground mb-4">
                While we build our interactive map, explore these excellent resources for current seal data:
              </p>
              {externalResources.map((resource, index) => (
                <div key={index} className="p-4 rounded-lg bg-muted/30 border border-border">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <h4 className="font-semibold text-sm mb-1">{resource.title}</h4>
                      <p className="text-xs text-muted-foreground mb-3">{resource.description}</p>
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="h-8"
                      >
                        <a href={resource.url} target="_blank" rel="noopener noreferrer">
                          Visit Site {resource.icon}
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="text-primary">UK Seal Distribution Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <h4 className="font-semibold text-lg mb-2 text-primary">Harbor Seals</h4>
                <p className="text-sm text-muted-foreground">
                  Widely distributed around UK coasts, with highest concentrations in Scotland, 
                  eastern England, and the Wash. Prefer sheltered coastal waters and estuaries.
                </p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-lg mb-2 text-primary">Grey Seals</h4>
                <p className="text-sm text-muted-foreground">
                  Abundant around Scotland, western England, and Wales. Major breeding colonies 
                  on remote islands. UK hosts 40% of the world's grey seal population.
                </p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-lg mb-2 text-primary">Bearded Seals</h4>
                <p className="text-sm text-muted-foreground">
                  Rare visitors to northern UK waters, occasionally seen around Shetland and Orkney. 
                  Most sightings occur during winter months.
                </p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-lg mb-2 text-primary">Pacific Walrus</h4>
                <p className="text-sm text-muted-foreground">
                  Extremely rare visitor to UK waters. Occasionally reported in northern Scotland 
                  during exceptional Arctic weather events.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Map;
