import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Navigation from "@/components/Navigation";
import harborSealImg from "@/assets/harbor-seal-real.jpg";
import greySealImg from "@/assets/grey-seal-real.jpg";
import beardedSealImg from "@/assets/bearded-seal-real.jpg";
import walrusImg from "@/assets/walrus-real.jpg";

interface SealSpecies {
  id: string;
  name: string;
  scientificName: string;
  image: string;
  size: string;
  weight: string;
  lifespan: string;
  habitat: string;
  diet: string;
  behavior: string;
  reproduction: string;
  conservation: string;
  identification: string[];
  distribution: string;
  attribution?: string;
}

const sealSpecies: SealSpecies[] = [
  {
    id: "harbor",
    name: "Harbor Seal",
    scientificName: "Phoca vitulina",
    image: harborSealImg,
    size: "1.2-1.9m (4-6.2ft)",
    weight: "55-168kg (121-370lbs)",
    lifespan: "20-25 years",
    habitat: "Coastal waters, estuaries, harbors, and rocky shores",
    diet: "Fish (herring, cod, flounder), squid, and crustaceans",
    behavior: "Haul out on land to rest, molt, and give birth. Generally solitary but can form groups",
    reproduction: "Pups born June-July after 11-month gestation. Weaned at 3-4 weeks",
    conservation: "Least Concern - Stable population in UK waters",
    identification: [
      "Spotted coat pattern varies from light to dark",
      "Short snout with V-shaped nostrils",
      "Smaller than grey seals",
      "Can 'bottle' (float vertically) in water"
    ],
    distribution: "Found around all UK coasts, particularly Scotland and eastern England",
    attribution: "Photo: Wikimedia Commons"
  },
  {
    id: "grey",
    name: "Grey Seal",
    scientificName: "Halichoerus grypus",
    image: greySealImg,
    size: "1.5-2.5m (5-8.2ft)",
    weight: "85-310kg (187-683lbs)",
    lifespan: "25-35 years",
    habitat: "Rocky coasts, islands, and offshore waters",
    diet: "Fish (cod, salmon, sandeels), squid, and occasionally crustaceans",
    behavior: "Highly social during breeding season. Bulls are territorial and maintain harems",
    reproduction: "Pups born September-December. Mothers fast while nursing for 2-3 weeks",
    conservation: "Least Concern - UK hosts 40% of world population",
    identification: [
      "Larger and more robust than harbor seals",
      "Long snout, especially pronounced in males",
      "Grey to brown coloration with darker patches",
      "Males have inflated neck during breeding season"
    ],
    distribution: "Abundant around Scotland, western England, and Wales. Major colonies on remote islands",
    attribution: "Photo: Wikimedia Commons"
  },
  {
    id: "bearded",
    name: "Bearded Seal",
    scientificName: "Erignathus barbatus",
    image: beardedSealImg,
    size: "2.1-2.7m (6.9-8.9ft)",
    weight: "200-430kg (441-948lbs)",
    lifespan: "20-25 years",
    habitat: "Ice floes and shallow Arctic waters",
    diet: "Bottom-dwelling fish, clams, squid, and crustaceans",
    behavior: "Uses long whiskers to detect prey on sea floor. Mostly solitary except during breeding",
    reproduction: "Pups born April-May on ice floes. Nursed for 18-24 days",
    conservation: "Least Concern globally, but climate change threatens Arctic habitat",
    identification: [
      "Distinctive long white whiskers (vibrissae)",
      "Large, robust build",
      "Greyish-brown coloration",
      "Square-shaped flippers"
    ],
    distribution: "Rare visitor to northern UK waters. Occasionally seen around Shetland and Orkney",
    attribution: "Photo: © Sidonio Paes (CC BY), iNaturalist"
  },
  {
    id: "walrus",
    name: "Pacific Walrus",
    scientificName: "Odobenus rosmarus",
    image: walrusImg,
    size: "2.2-3.6m (7.2-11.8ft)",
    weight: "400-2000kg (880-4400lbs)",
    lifespan: "20-30 years",
    habitat: "Ice floes, rocky shores, and shallow Arctic waters",
    diet: "Clams, mussels, sea snails, crustaceans, and occasionally fish",
    behavior: "Highly social, forms large herds. Uses tusks for hauling out of water and establishing dominance",
    reproduction: "Calves born May-August after 15-16 month gestation. Nursed for over a year",
    conservation: "Vulnerable - Climate change threatens Arctic ice habitat",
    identification: [
      "Massive ivory tusks (both sexes)",
      "Thick, wrinkled skin",
      "Reddish-brown to gray coloration",
      "Prominent whiskers (vibrissae)",
      "Bulky, powerful build"
    ],
    distribution: "Extremely rare visitor to UK waters. Occasionally reported in northern Scotland during exceptional Arctic weather events",
    attribution: "Photo: National Geographic"
  }
];

const FieldGuide = () => {
  return (
    <div className="min-h-screen bg-gradient-coastal">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-ocean bg-clip-text text-transparent">
            UK Seals Field Guide
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive information on the seal species and walrus found in UK waters, 
            their biology, behavior, and identification features.
          </p>
        </div>

        <div className="grid gap-8">
          {sealSpecies.map((species) => (
            <Card key={species.id} className="overflow-hidden shadow-marine hover:shadow-xl transition-all duration-300">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-auto overflow-hidden">
                  <img
                    src={species.image}
                    alt={species.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="text-sm font-medium">
                      {species.conservation}
                    </Badge>
                  </div>
                </div>
                
                <div className="p-6">
                  <CardHeader className="p-0 mb-4">
                    <CardTitle className="text-2xl text-primary">
                      {species.name}
                    </CardTitle>
                    <p className="text-muted-foreground italic text-lg">
                      {species.scientificName}
                    </p>
                  </CardHeader>
                  
                  <CardContent className="p-0 space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <strong className="text-primary">Size:</strong> {species.size}
                      </div>
                      <div>
                        <strong className="text-primary">Weight:</strong> {species.weight}
                      </div>
                      <div>
                        <strong className="text-primary">Lifespan:</strong> {species.lifespan}
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div className="space-y-3 text-sm">
                      <div>
                        <strong className="text-primary">Habitat:</strong>
                        <p className="mt-1">{species.habitat}</p>
                      </div>
                      
                      <div>
                        <strong className="text-primary">Diet:</strong>
                        <p className="mt-1">{species.diet}</p>
                      </div>
                      
                      <div>
                        <strong className="text-primary">Identification:</strong>
                        <ul className="mt-1 list-disc list-inside space-y-1">
                          {species.identification.map((feature, index) => (
                            <li key={index}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <strong className="text-primary">Distribution:</strong>
                        <p className="mt-1">{species.distribution}</p>
                      </div>
                      
                      {species.attribution && (
                        <div className="text-xs text-muted-foreground mt-2 italic">
                          {species.attribution}
                        </div>
                      )}
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FieldGuide;