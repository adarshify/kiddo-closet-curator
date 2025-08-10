import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Badge } from "@/components/ui/badge";
import { useNavigate, useLocation } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { format, addDays, isAfter, isSameDay } from "date-fns";

const Scheduling = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  const prefillData = location.state?.prefillData || {};
  
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>("");

  const today = new Date();
  const minDate = addDays(today, 1); // Tomorrow is the earliest

  const timeSlots = [
    { id: "morning", label: "Morning (9:00 AM - 12:00 PM)", available: true },
    { id: "afternoon", label: "Afternoon (2:00 PM - 5:00 PM)", available: true },
    { id: "evening", label: "Evening (6:00 PM - 8:00 PM)", available: true }
  ];

  const handleDateSelect = (date: Date | undefined) => {
    if (date && isAfter(date, today)) {
      setSelectedDate(date);
      setSelectedTimeSlot(""); // Reset time slot when date changes
    }
  };

  const handleConfirm = () => {
    if (!selectedDate || !selectedTimeSlot) {
      toast({
        title: "Please select date and time",
        description: "Both date and time slot are required to schedule your visit.",
        variant: "destructive"
      });
      return;
    }

    const finalData = {
      ...prefillData,
      scheduledDate: selectedDate,
      scheduledTime: selectedTimeSlot
    };

    // Show success message
    toast({
      title: "Visit Scheduled Successfully! 🎉",
      description: `We'll visit you on ${format(selectedDate, "MMMM d, yyyy")} during ${timeSlots.find(slot => slot.id === selectedTimeSlot)?.label}`,
    });

    // In a real app, this would send data to a backend
    console.log("Final booking data:", finalData);
    
    // Navigate back to home or show confirmation page
    setTimeout(() => {
      navigate("/", { replace: true });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-6">
              When should we come?
            </h1>
            <p className="text-lg text-muted-foreground">
              Choose a convenient date and time for us to bring your curated collection
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Calendar Section */}
            <Card className="shadow-lg bg-white">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Select a Date</CardTitle>
                <p className="text-sm text-muted-foreground">August 2025</p>
              </CardHeader>
              <CardContent className="flex justify-center">
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={handleDateSelect}
                  disabled={(date) => !isAfter(date, today)}
                  className="rounded-md border"
                />
              </CardContent>
            </Card>

            {/* Time Slot Section */}
            <Card className="shadow-lg bg-white">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Select Time Slot</CardTitle>
                {selectedDate ? (
                  <p className="text-sm text-muted-foreground">
                    Available slots for {format(selectedDate, "MMMM d, yyyy")}
                  </p>
                ) : (
                  <p className="text-sm text-muted-foreground">
                    Please select a date first
                  </p>
                )}
              </CardHeader>
              <CardContent className="space-y-4">
                {!selectedDate ? (
                  <p className="text-muted-foreground text-center py-8">
                    Please select a date first
                  </p>
                ) : (
                  timeSlots.map((slot) => (
                    <Card
                      key={slot.id}
                      className={`cursor-pointer transition-all duration-300 ${
                        selectedTimeSlot === slot.id
                          ? 'ring-2 ring-primary bg-primary/5'
                          : 'hover:shadow-md'
                      }`}
                      onClick={() => setSelectedTimeSlot(slot.id)}
                    >
                      <CardContent className="p-4">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">{slot.label}</span>
                          <Badge variant={slot.available ? "secondary" : "destructive"}>
                            {slot.available ? "Available" : "Booked"}
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>
                  ))
                )}
              </CardContent>
            </Card>
          </div>

          {/* Booking Summary */}
          {selectedDate && selectedTimeSlot && (
            <Card className="mt-8 shadow-xl bg-gradient-to-r from-primary/5 to-accent/5">
              <CardHeader>
                <CardTitle className="text-xl text-center">Booking Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-medium">Customer Details:</p>
                    <p>Parent: {prefillData.parentName}</p>
                    <p>Child: {prefillData.childName}</p>
                    <p>Phone: {prefillData.phone}</p>
                  </div>
                  <div>
                    <p className="font-medium">Visit Details:</p>
                    <p>Date: {format(selectedDate, "MMMM d, yyyy")}</p>
                    <p>Time: {timeSlots.find(slot => slot.id === selectedTimeSlot)?.label}</p>
                    <p>Collections: {prefillData.selectedCollections?.length || 0} selected</p>
                  </div>
                </div>
                
                <div className="pt-4 border-t">
                  <p className="text-sm text-muted-foreground text-center">
                    Our stylist will bring a curated selection based on your preferences. 
                    You only pay for what you keep!
                  </p>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Navigation */}
          <div className="flex justify-between items-center mt-12">
            <Button 
              variant="ghost" 
              onClick={() => navigate("/contact-form", { state: { prefillData } })}
              className="text-muted-foreground hover:text-foreground"
            >
              ← Back to Contact Info
            </Button>
            
            <Button 
              size="lg"
              onClick={handleConfirm}
              disabled={!selectedDate || !selectedTimeSlot}
              className="px-12 bg-primary hover:bg-primary/90 text-white rounded-lg"
            >
              Confirm Booking
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scheduling;