import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import Navigation from "@/components/Navigation";
import { Heart, CreditCard, Building2, DollarSign, Info } from "lucide-react";

const Donate = () => {
  const donationMethods = [
    {
      title: "Credit/Debit Card",
      description: "Quick and secure one-time donation via Stripe",
      icon: <CreditCard className="h-6 w-6" />,
      action: "Donate with Card",
      url: "https://buy.stripe.com/3cIbIUgvx6zmaTjdIPco000",
      color: "bg-primary"
    },
    {
      title: "PayPal",
      description: "Support us through PayPal's secure platform",
      icon: <DollarSign className="h-6 w-6" />,
      action: "Donate via PayPal",
      url: "https://www.paypal.com/paypalme/mermanconservation",
      color: "bg-blue-600"
    },
    {
      title: "Bank Transfer",
      description: "Direct bank transfer for larger donations",
      icon: <Building2 className="h-6 w-6" />,
      action: "View Bank Details",
      color: "bg-green-600",
      bankDetails: {
        accountHolder: "Christos Taklis",
        bank: "Wise (formerly TransferWise)",
        iban: "GB28 TRWI 2314 7048 2178 15",
        bic: "TRWIGB2LXXX",
        reference: "Donation + Your Name"
      }
    }
  ];

  const handleDonation = (method: any) => {
    if (method.url) {
      window.open(method.url, '_blank');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-coastal">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Heart className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-4xl font-bold mb-4 bg-gradient-ocean bg-clip-text text-transparent">
            Support Seal Conservation
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Help us protect UK seal populations through research, education, and conservation efforts. 
            Your donation directly supports marine wildlife protection and habitat preservation.
          </p>
        </div>

        <Alert className="mb-8 border-accent/50 bg-accent/10">
          <Info className="h-4 w-4 text-accent" />
          <AlertDescription className="text-accent">
            All donations go directly to marine conservation efforts and maintaining this educational resource. 
            Thank you for supporting UK seal protection!
          </AlertDescription>
        </Alert>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {donationMethods.map((method, index) => (
            <Card key={index} className="shadow-marine hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 ${method.color} rounded-full flex items-center justify-center mx-auto mb-4 text-white`}>
                  {method.icon}
                </div>
                <CardTitle className="text-xl text-primary">
                  {method.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-6">
                  {method.description}
                </p>
                
                {method.bankDetails ? (
                  <div className="space-y-4">
                    <div className="bg-muted/30 p-4 rounded-lg text-left text-sm">
                      <div className="grid gap-2">
                        <div><strong>Account Holder:</strong> {method.bankDetails.accountHolder}</div>
                        <div><strong>Bank:</strong> {method.bankDetails.bank}</div>
                        <div><strong>IBAN:</strong> {method.bankDetails.iban}</div>
                        <div><strong>BIC/SWIFT:</strong> {method.bankDetails.bic}</div>
                        <div><strong>Reference:</strong> {method.bankDetails.reference}</div>
                      </div>
                    </div>
                    <Button 
                      className="w-full" 
                      variant="outline"
                      onClick={() => {
                        navigator.clipboard.writeText(
                          `Account: ${method.bankDetails.accountHolder}\nBank: ${method.bankDetails.bank}\nIBAN: ${method.bankDetails.iban}\nBIC: ${method.bankDetails.bic}\nReference: ${method.bankDetails.reference}`
                        );
                      }}
                    >
                      Copy Bank Details
                    </Button>
                  </div>
                ) : (
                  <Button 
                    className="w-full" 
                    onClick={() => handleDonation(method)}
                  >
                    {method.action}
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="text-primary text-center">Our Conservation Impact</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <h4 className="font-semibold text-lg mb-2 text-primary">Education</h4>
                <p className="text-sm text-muted-foreground">
                  Providing accessible information about UK seal species to promote 
                  responsible wildlife viewing and conservation awareness.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2 text-primary">Research Support</h4>
                <p className="text-sm text-muted-foreground">
                  Contributing to citizen science projects and supporting researchers 
                  studying seal populations and behavior.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2 text-primary">Habitat Protection</h4>
                <p className="text-sm text-muted-foreground">
                  Supporting efforts to protect coastal habitats essential for 
                  seal breeding, feeding, and survival.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Donate;