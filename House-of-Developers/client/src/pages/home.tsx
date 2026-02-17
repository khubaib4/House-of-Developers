import { Hero } from "@/components/home/Hero";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { WhyChoose } from "@/components/home/WhyChoose";
import { ProjectsShowcase } from "@/components/home/ProjectsShowcase";
import { TechStack } from "@/components/home/TechStack";
import { CTASection } from "@/components/home/CTASection";
import { SplitFeatureShowcase } from "@/components/shared/SplitFeatureShowcase";
import { DashboardMockup } from "@/components/mockups/DashboardMockup";
import { LayoutDashboard, Zap, LineChart, Shield } from "lucide-react";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <SplitFeatureShowcase
        badge="Our Platform"
        title="Everything You Need to Launch Your Startup"
        description="From idea to launch, our platform gives you complete visibility and control over your MVP development."
        features={[
          { icon: LayoutDashboard, title: "Real-Time Dashboard", description: "Track progress, milestones, and team activity in real-time." },
          { icon: Zap, title: "Automated Deployments", description: "Push to production with one click. CI/CD pipelines included." },
          { icon: LineChart, title: "Performance Analytics", description: "Monitor app performance, user metrics, and system health." },
          { icon: Shield, title: "Enterprise Security", description: "Bank-grade encryption, SOC 2 compliant infrastructure." },
        ]}
        mockupType="browser"
        mockupContent={<DashboardMockup />}
        theme="gradient"
      />
      <ProjectsShowcase />
      <WhyChoose />
      <TechStack />
      <CTASection />
    </>
  );
}
