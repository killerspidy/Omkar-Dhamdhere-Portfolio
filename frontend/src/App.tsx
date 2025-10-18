import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Handle GitHub Pages SPA redirect
const handleRedirect = () => {
  const l = window.location;
  const redirect = l.search.slice(1).split('&')[0];
  if (redirect.startsWith('/?/')) {
    const pathToRedirect = redirect.slice(2).replace(/~and~/g, '&');
    if (pathToRedirect !== l.pathname) {
      window.history.replaceState(null, '', pathToRedirect || '/');
    }
  }
};

const App = () => {
  handleRedirect();

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
