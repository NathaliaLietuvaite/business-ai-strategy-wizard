import React from 'react';
import { ArrowRight, Zap, FileText, Shield, Clipboard, Bot, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';

const LandingPage = () => {
  const scrollToAnalysis = () => {
    const element = document.getElementById('analyse');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="absolute top-0 left-0 w-full z-10 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Business AI Enforcer
          </h1>
          <Button 
            onClick={scrollToAnalysis}
            variant="outline" 
            className="border-ai-primary text-ai-primary hover:bg-ai-primary hover:text-white"
          >
            Analyse starten
          </Button>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 lg:py-40 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-glow opacity-30"></div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-wide mb-4">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Strategische Intelligenz
              </span>
              <br />
              <span className="text-foreground">auf Knopfdruck</span>
            </h2>
            <p className="text-lg md:text-2xl mt-4 max-w-3xl mx-auto text-muted-foreground">
              Ihre präzise K.I.-Analyse für Wettbewerb, Risiken, Trends und operative Entscheidungen.
            </p>
            <Button 
              onClick={scrollToAnalysis}
              className="mt-8 bg-gradient-primary text-white font-bold text-lg px-10 py-4 h-auto shadow-glow hover:shadow-card transform hover:scale-105 transition-all duration-300"
            >
              Jetzt Testanalyse starten
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>

        {/* Image Section */}
        <div className="relative w-full -mt-16 md:-mt-24 lg:-mt-32 z-20 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-accent rounded-2xl shadow-card border border-border p-8 text-center">
              <Bot className="h-32 w-32 mx-auto text-ai-primary mb-4" />
              <h3 className="text-2xl font-bold text-foreground">K.I. Strategie Visualisierung</h3>
              <p className="text-muted-foreground mt-2">Abstrakte Darstellung von Daten und künstlicher Intelligenz</p>
            </div>
          </div>
        </div>

        {/* Was ist Business AI Enforcer */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h3 className="text-3xl md:text-4xl font-bold">Was ist Business AI Enforcer?</h3>
              <p className="mt-3 text-lg text-muted-foreground">Ihre strategische K.I.-Analyse in drei Dimensionen</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Box 1 */}
              <div className="bg-card p-8 rounded-xl border border-border hover:shadow-card transition-all duration-300 transform hover:-translate-y-2">
                <Target className="h-12 w-12 text-ai-primary mb-4" />
                <h4 className="text-xl font-bold mb-4">Marktanalyse in Echtzeit</h4>
                <p className="text-muted-foreground">Wettbewerber-Scans, Potenzialanalysen, strategische Frühwarnsysteme</p>
              </div>
              {/* Box 2 */}
              <div className="bg-card p-8 rounded-xl border border-border hover:shadow-card transition-all duration-300 transform hover:-translate-y-2">
                <Bot className="h-12 w-12 text-ai-secondary mb-4" />
                <h4 className="text-xl font-bold mb-4">Deep Reasoning mit K.I.</h4>
                <p className="text-muted-foreground">Sprachmodelle, Pattern Recognition, semantische Szenariosimulationen</p>
              </div>
              {/* Box 3 */}
              <div className="bg-card p-8 rounded-xl border border-border hover:shadow-card transition-all duration-300 transform hover:-translate-y-2">
                <Shield className="h-12 w-12 text-ai-accent mb-4" />
                <h4 className="text-xl font-bold mb-4">Datensouveränität & Sicherheit</h4>
                <p className="text-muted-foreground">On-Premise & DSGVO-konform</p>
              </div>
            </div>
          </div>
        </section>

        {/* Problem/Solution Section */}
        <section className="py-20 md:py-28 bg-muted/20">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-ai-primary">Verloren im KI-Dschungel?</h3>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Die Integration von KI ist komplex. Viele Unternehmen wissen nicht, wo sie anfangen sollen. 
              Der Business AI Enforcer nimmt Ihnen das Rätselraten ab und liefert einen klaren, umsetzbaren Plan.
            </p>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="analyse" className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h3 className="text-3xl md:text-4xl font-bold">So funktioniert es</h3>
              <p className="mt-3 text-lg text-muted-foreground">Ihre Strategie in 3 einfachen Schritten</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 md:gap-12 text-center">
              {/* Step 1 */}
              <div className="bg-card p-8 rounded-xl border border-border transform hover:-translate-y-2 transition-all duration-300">
                <div className="text-5xl font-black text-ai-primary mb-4">1</div>
                <h4 className="text-xl font-bold mb-2">Analyseziel definieren</h4>
                <p className="text-muted-foreground">Wählen Sie: Wettbewerb, Risiko, Strategie, Disruption</p>
              </div>
              {/* Step 2 */}
              <div className="bg-card p-8 rounded-xl border border-border transform hover:-translate-y-2 transition-all duration-300">
                <div className="text-5xl font-black text-ai-secondary mb-4">2</div>
                <h4 className="text-xl font-bold mb-2">Datenquelle angeben</h4>
                <p className="text-muted-foreground">Intern/extern, strukturierte & unstrukturierte Daten</p>
              </div>
              {/* Step 3 */}
              <div className="bg-card p-8 rounded-xl border border-border transform hover:-translate-y-2 transition-all duration-300">
                <div className="text-5xl font-black text-ai-accent mb-4">3</div>
                <h4 className="text-xl font-bold mb-2">Ergebnisbericht erhalten</h4>
                <p className="text-muted-foreground">Mit präziser Einschätzung, Handlungsempfehlung & Visualisierung</p>
              </div>
            </div>
            
            {/* CTA Button */}
            <div className="text-center mt-12">
              <Button 
                onClick={() => window.location.href = '/analysis'}
                className="bg-gradient-primary text-white font-bold text-lg px-10 py-4 h-auto shadow-glow hover:shadow-card transform hover:scale-105 transition-all duration-300"
              >
                Kostenlose Analyse starten
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Was macht uns besonders */}
        <section className="py-20 md:py-28 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h3 className="text-3xl md:text-4xl font-bold">Was macht uns besonders?</h3>
              <p className="mt-3 text-lg text-muted-foreground">Fortschrittliche KI-Analyse-Features</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature Items */}
              {[
                { icon: <Zap className="h-6 w-6" />, title: "Adaptive Szenariosteuerung" },
                { icon: <Bot className="h-6 w-6" />, title: "Emotionale Kontextbewertung" },
                { icon: <Target className="h-6 w-6" />, title: "Meta-Perspektiven-Erkennung" },
                { icon: <FileText className="h-6 w-6" />, title: "Kausalitätsprüfung" },
                { icon: <Clipboard className="h-6 w-6" />, title: "Zielgruppenspezifische Berichte" },
                { icon: <Shield className="h-6 w-6" />, title: "Datensouveränität" }
              ].map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-ai-primary/20 text-ai-primary p-3 rounded-lg">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">{feature.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Demo/Testlauf Section */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-8">Demo/Testlauf</h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Erleben Sie, wie Ihr Geschäftsmodell in einer K.I.-Logik interpretiert wird.
            </p>
            <Button 
              onClick={() => window.location.href = '/analysis'}
              className="bg-gradient-primary text-white font-bold text-lg px-10 py-4 h-auto shadow-glow hover:shadow-card transform hover:scale-105 transition-all duration-300"
            >
              Demo starten - Kostenlose Analyse
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="bg-gradient-primary py-20 md:py-28">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-white">Bereit für den nächsten Schritt?</h3>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-white/90">
              Hören Sie auf zu raten und fangen Sie an zu planen. Ihre maßgeschneiderte KI-Strategie ist nur wenige Klicks entfernt.
            </p>
            <Button 
              onClick={() => window.location.href = '/analysis'}
              className="mt-8 bg-white text-ai-primary font-bold text-lg px-10 py-4 h-auto shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Kostenlose Analyse starten
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-card py-8 border-t border-border">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <div className="flex justify-center items-center gap-2 mb-4">
            <Bot className="h-5 w-5 text-ai-primary" />
            <span className="font-semibold text-foreground">Business AI Enforcer</span>
          </div>
          <p>&copy; 2024 Business AI Enforcer. Alle Rechte vorbehalten.</p>
          <div className="mt-4 space-x-4">
            <a href="#" className="hover:text-foreground transition-colors">Impressum</a>
            <a href="#" className="hover:text-foreground transition-colors">Datenschutz</a>
            <a href="#" className="hover:text-foreground transition-colors">Kontakt</a>
          </div>
          <div className="mt-4">
            <p className="text-sm italic">"Keine Blackbox – sondern Ihre Analyseintelligenz."</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;