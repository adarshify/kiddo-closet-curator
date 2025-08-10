import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate, useLocation } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  const prefillData = location.state?.prefillData || {};
  
  const [formData, setFormData] = useState({
    parentName: "",
    childName: "",
    phone: "",
    address: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.parentName || !formData.childName || !formData.phone || !formData.address) {
      toast({
        title: "Please fill in all fields",
        description: "All fields are required to proceed.",
        variant: "destructive"
      });
      return;
    }

    // Proceed to scheduling
    navigate("/scheduling", { 
      state: { 
        prefillData: { ...prefillData, ...formData } 
      } 
    });
  };

  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-6">
              Tell us about yourself
            </h1>
            <p className="text-lg text-muted-foreground">
              We need these details to deliver your curated collection
            </p>
          </div>

          {/* Form Card */}
          <Card className="shadow-lg bg-white">
            <CardHeader>
              <CardTitle className="text-2xl text-center text-foreground">Contact Information</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Parent Name */}
                <div className="space-y-2">
                  <Label htmlFor="parentName" className="text-sm font-medium">
                    Parent/Guardian Name *
                  </Label>
                  <Input
                    id="parentName"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.parentName}
                    onChange={(e) => handleInputChange("parentName", e.target.value)}
                    className="h-12"
                  />
                </div>

                {/* Child Name */}
                <div className="space-y-2">
                  <Label htmlFor="childName" className="text-sm font-medium">
                    Child's Name *
                  </Label>
                  <Input
                    id="childName"
                    type="text"
                    placeholder="Enter your child's name"
                    value={formData.childName}
                    onChange={(e) => handleInputChange("childName", e.target.value)}
                    className="h-12"
                  />
                </div>

                {/* Phone Number */}
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sm font-medium">
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="h-12"
                  />
                </div>

                {/* Address */}
                <div className="space-y-2">
                  <Label htmlFor="address" className="text-sm font-medium">
                    Delivery Address *
                  </Label>
                  <Input
                    id="address"
                    type="text"
                    placeholder="Enter your complete address"
                    value={formData.address}
                    onChange={(e) => handleInputChange("address", e.target.value)}
                    className="h-12"
                  />
                </div>

                {/* Summary */}
                <div className="bg-accent/20 p-4 rounded-lg">
                  <h3 className="font-medium mb-2">Your Selection Summary:</h3>
                  <div className="text-sm text-muted-foreground space-y-1">
                    {prefillData.category && (
                      <p>Category: <span className="capitalize">{prefillData.category}</span></p>
                    )}
                    {prefillData.gender && (
                      <p>Gender: <span className="capitalize">{prefillData.gender}</span></p>
                    )}
                    {prefillData.age !== undefined && (
                      <p>Age: {prefillData.age < 1 ? "0-12 months" : `${prefillData.age} year${prefillData.age !== 1 ? 's' : ''}`}</p>
                    )}
                    {prefillData.selectedCollections && (
                      <p>Collections: {prefillData.selectedCollections.length} selected</p>
                    )}
                  </div>
                </div>

                {/* Submit Button */}
                <Button 
                  type="submit"
                  size="lg"
                  className="w-full h-12 bg-primary hover:bg-primary/90 text-white rounded-lg"
                >
                  Continue to Scheduling
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-center mt-8">
            <Button 
              variant="ghost" 
              onClick={() => navigate("/collection-selection", { state: { prefillData } })}
              className="text-muted-foreground hover:text-foreground"
            >
              ← Back to Collections
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;