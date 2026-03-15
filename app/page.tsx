import BudgetPolicies from "./(components)/budget-policies";
import FinalCTA from "./(components)/final-cta";
import Footer from "./(components)/footer";
import Founder from "./(components)/founder";
import Header from "./(components)/header";
import Hero from "./(components)/hero";
import HowItWorks from "./(components)/how-it-works";
import ObservabilityShowcase from "./(components)/observability-showcase";
import Problem from "./(components)/problem";
import Security from "./(components)/security";

export default function Home() {
  return (
    <div className="min-w-0 w-full">
      <Header />
      <main className="flex flex-col w-full container-narrow p-8 md:p-12 pb-0 md:pb-0">
        <Hero />
        <Problem />
        <HowItWorks />
        <ObservabilityShowcase />
        <BudgetPolicies />
        <Security />
        <Founder />
        <FinalCTA />
        <Footer />
      </main>
    </div>
  );
}
