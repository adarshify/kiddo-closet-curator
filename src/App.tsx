import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import GenderSelection from "./components/GenderSelection";
import AgeSelection from "./components/AgeSelection";
import CollectionSelection from "./components/CollectionSelection";
import ContactForm from "./components/ContactForm";
import Scheduling from "./components/Scheduling";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/gender-selection" element={<GenderSelection />} />
          <Route path="/age-selection" element={<AgeSelection />} />
          <Route path="/collection-selection" element={<CollectionSelection />} />
          <Route path="/contact-form" element={<ContactForm />} />
          <Route path="/scheduling" element={<Scheduling />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
