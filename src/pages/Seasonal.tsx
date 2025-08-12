import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Navigation from "@/components/Navigation";
import { Calendar, Thermometer, Waves, Sun, CloudRain, Snowflake } from "lucide-react";

interface SeasonData {
  season: string;
  months: string[];
  icon: React.ReactNode;
  temperature: string;
  conditions: string;
  sealActivity: {
    harbor: string;
    grey: string;
    bearded: string;
  };
  bestForViewing: number;
  tips: string[];
}

const seasonalData: SeasonData[] = [
  {
    season: "Spring",
    months: ["March", "April", "May"],
    icon: <Sun className="h-6 w-6" />,
    temperature: "8-15°C",
    conditions: "Variable weather, longer days, calm seas",
    sealActivity: {
      harbor: "Pupping season begins (May). Mothers give birth on beaches and rocky shores.",
      grey: "Adults return to sea after winter molting. Feeding activity increases.",
      bearded: "Rare sightings possible as ice retreats in Arctic waters."
    },
    bestForViewing: 75,
    tips: [
      "Harbor seal pupping - maintain extra distance from mothers and pups",
      "Calm spring weather ideal for boat-based observations",
      "Early morning best for undisturbed viewing",
      "Check local tide times for optimal haul-out conditions"
    ]
  },
  {
    season: "Summer",
    months: ["June", "July", "August"],
    icon: <Sun className="h-6 w-6" />,
    temperature: "15-22°C",
    conditions: "Warm, long daylight hours, generally calm seas",
    sealActivity: {
      harbor: "Peak pupping season. Pups learning to swim and dive.",
      grey: "Active feeding period. Adults building energy reserves for autumn breeding.",
      bearded: "Unlikely to be seen - remain in Arctic waters during summer."
    },
    bestForViewing: 95,
    tips: [
      "Peak viewing season with excellent conditions",
      "Long daylight hours allow extended observation periods",
      "Harbor seal pups may be seen learning to swim",
      "Popular viewing locations can be crowded - arrive early"
    ]
  },
  {
    season: "Autumn",
    months: ["September", "October", "November"],
    icon: <CloudRain className="h-6 w-6" />,
    temperature: "10-18°C",
    conditions: "Increasingly rough seas, shorter days, variable weather",
    sealActivity: {
      harbor: "Post-pupping recovery. Adults and juveniles feeding heavily.",
      grey: "Breeding season! Dramatic displays, fighting, and pupping on beaches.",
      bearded: "Occasional sightings as they begin to move south from Arctic."
    },
    bestForViewing: 85,
    tips: [
      "Grey seal breeding season - spectacular but observe from distance",
      "Bulls can be aggressive - never approach breeding colonies",
      "Storm activity may bring seals closer to shore",
      "Weather can change quickly - dress appropriately"
    ]
  },
  {
    season: "Winter",
    months: ["December", "January", "February"],
    icon: <Snowflake className="h-6 w-6" />,
    temperature: "2-8°C",
    conditions: "Cold, rough seas, short daylight hours, frequent storms",
    sealActivity: {
      harbor: "Molting period - spend more time hauled out on land.",
      grey: "Continued breeding activity early winter, then molting period.",
      bearded: "Best chance for sightings in northern Scotland during harsh weather."
    },
    bestForViewing: 60,
    tips: [
      "Challenging weather but seals haul out more for molting",
      "Dress warmly and check weather conditions carefully",
      "Shorter observation windows due to limited daylight",
      "Post-storm conditions often good for sightings"
    ]
  }
];

const monthlyBreakdown = [
  { month: "Jan", harbor: 70, grey: 85, bearded: 30 },
  { month: "Feb", harbor: 75, grey: 80, bearded: 25 },
  { month: "Mar", harbor: 80, grey: 70, bearded: 20 },
  { month: "Apr", harbor: 85, grey: 65, bearded: 15 },
  { month: "May", harbor: 95, grey: 60, bearded: 10 },
  { month: "Jun", harbor: 90, grey: 70, bearded: 5 },
  { month: "Jul", harbor: 95, grey: 75, bearded: 5 },
  { month: "Aug", harbor: 90, grey: 80, bearded: 5 },
  { month: "Sep", harbor: 85, grey: 95, bearded: 10 },
  { month: "Oct", harbor: 80, grey: 90, bearded: 15 },
  { month: "Nov", harbor: 75, grey: 85, bearded: 20 },
  { month: "Dec", harbor: 70, grey: 90, bearded: 25 }
];

const Seasonal = () => {
  return (
    <div className="min-h-screen bg-gradient-coastal">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-ocean bg-clip-text text-transparent">
            Seasonal Seal Watching
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            When and where to observe UK seals throughout the year, including breeding patterns and optimal viewing conditions
          </p>
        </div>

        <div className="grid gap-8 mb-12">
          {seasonalData.map((season, index) => (
            <Card key={index} className="shadow-marine overflow-hidden">
              <CardHeader className="bg-gradient-coastal">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="text-primary">{season.icon}</div>
                    <div>
                      <CardTitle className="text-2xl text-primary">{season.season}</CardTitle>
                      <p className="text-muted-foreground">{season.months.join(" • ")}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge variant="secondary" className="mb-2">
                      Viewing Score: {season.bestForViewing}%
                    </Badge>
                    <Progress value={season.bestForViewing} className="w-24" />
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="p-6">
                <div className="grid lg:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Thermometer className="h-4 w-4 text-primary" />
                      <span className="font-medium">Temperature:</span>
                      <span className="text-muted-foreground">{season.temperature}</span>
                    </div>
                    
                    <div className="flex items-start gap-2 text-sm">
                      <Waves className="h-4 w-4 text-primary mt-0.5" />
                      <div>
                        <span className="font-medium">Conditions:</span>
                        <p className="text-muted-foreground mt-1">{season.conditions}</p>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-3 text-primary">Viewing Tips:</h4>
                      <ul className="space-y-2">
                        {season.tips.map((tip, tipIndex) => (
                          <li key={tipIndex} className="flex items-start gap-2 text-sm">
                            <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                            <span>{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="font-semibold text-primary">Seal Activity by Species:</h4>
                    
                    <div className="space-y-3 text-sm">
                      <div className="p-3 rounded-lg bg-muted/30">
                        <h5 className="font-medium text-primary mb-1">Harbor Seal</h5>
                        <p className="text-muted-foreground">{season.sealActivity.harbor}</p>
                      </div>
                      
                      <div className="p-3 rounded-lg bg-muted/30">
                        <h5 className="font-medium text-primary mb-1">Grey Seal</h5>
                        <p className="text-muted-foreground">{season.sealActivity.grey}</p>
                      </div>
                      
                      <div className="p-3 rounded-lg bg-muted/30">
                        <h5 className="font-medium text-primary mb-1">Bearded Seal</h5>
                        <p className="text-muted-foreground">{season.sealActivity.bearded}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="shadow-marine">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-primary">
              <Calendar className="h-5 w-5" />
              Monthly Viewing Probability
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <div className="min-w-[800px]">
                <div className="grid grid-cols-13 gap-2 text-sm">
                  <div></div>
                  {monthlyBreakdown.map((month) => (
                    <div key={month.month} className="text-center font-medium">
                      {month.month}
                    </div>
                  ))}
                  
                  <div className="font-medium text-primary">Harbor</div>
                  {monthlyBreakdown.map((month) => (
                    <div key={`harbor-${month.month}`} className="space-y-1">
                      <Progress value={month.harbor} className="h-3" />
                      <div className="text-xs text-center text-muted-foreground">
                        {month.harbor}%
                      </div>
                    </div>
                  ))}
                  
                  <div className="font-medium text-primary">Grey</div>
                  {monthlyBreakdown.map((month) => (
                    <div key={`grey-${month.month}`} className="space-y-1">
                      <Progress value={month.grey} className="h-3" />
                      <div className="text-xs text-center text-muted-foreground">
                        {month.grey}%
                      </div>
                    </div>
                  ))}
                  
                  <div className="font-medium text-primary">Bearded</div>
                  {monthlyBreakdown.map((month) => (
                    <div key={`bearded-${month.month}`} className="space-y-1">
                      <Progress value={month.bearded} className="h-3" />
                      <div className="text-xs text-center text-muted-foreground">
                        {month.bearded}%
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Seasonal;