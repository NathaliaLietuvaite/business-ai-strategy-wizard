import React, { useState } from 'react';
import { Briefcase, Lightbulb, BarChart3, Database, Users, CheckCircle, ArrowLeft, ArrowRight, Copy, Brain, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';

interface FormData {
  companyBasics: string;
  goals: string;
  painPoints: string;
  dataSources: string[];
  itInfrastructure: string;
  teamSkills: string;
}

const BusinessAIEnforcer = () => {
  const [step, setStep] = useState(0);
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    companyBasics: '',
    goals: '',
    painPoints: '',
    dataSources: [],
    itInfrastructure: '',
    teamSkills: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (value: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      dataSources: checked
        ? [...prev.dataSources, value]
        : prev.dataSources.filter(item => item !== value)
    }));
  };

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  const copyToClipboard = async () => {
    const summaryText = `
BUSINESS AI ENFORCER - STRATEGISCHE KI-ANALYSE

Kerngeschäft: ${formData.companyBasics}

Ziele für K.I.: ${formData.goals}

Herausforderungen: ${formData.painPoints}

Datenquellen: ${formData.dataSources.join(', ')}

IT-Infrastruktur: ${formData.itInfrastructure}

Team-Kompetenzen: ${formData.teamSkills}

---
Diese Analyse kann als Grundlage für eine detaillierte KI-Beratung verwendet werden.
    `;
    
    try {
      await navigator.clipboard.writeText(summaryText);
      toast({
        title: "✅ Erfolgreich kopiert!",
        description: "Die Zusammenfassung wurde in die Zwischenablage kopiert.",
      });
    } catch (err) {
      toast({
        title: "Fehler",
        description: "Kopieren fehlgeschlagen. Bitte versuchen Sie es erneut.",
        variant: "destructive",
      });
    }
  };

  const dataSourceOptions = [
    'Kundendaten (CRM)',
    'Verkaufsdaten (ERP)',
    'Website-Analysedaten',
    'Produktionsdaten',
    'Textdokumente (E-Mails, Berichte)',
    'Bilder/Videos',
    'Social Media Daten',
    'Sensorendaten',
    'Sonstiges'
  ];

  const steps = [
    {
      title: "Willkommen beim Business AI Enforcer",
      icon: <Brain className="h-8 w-8" />,
      content: (
        <div className="space-y-6 text-center">
          <div className="bg-gradient-glow rounded-full w-24 h-24 mx-auto flex items-center justify-center mb-6">
            <Sparkles className="h-12 w-12 text-ai-primary" />
          </div>
          <p className="text-xl leading-relaxed">
            Ich möchte K.I. in meinem Unternehmen integrieren. Welche Informationen benötigst Du von mir, um mich sinnvoll zu beraten?
          </p>
          <p className="text-muted-foreground text-lg">
            Diese Anwendung führt Sie durch die wichtigsten Fragen, um das Potenzial von K.I. für Ihr Unternehmen zu analysieren. Lassen Sie uns Ihre KI-Strategie entwickeln.
          </p>
        </div>
      )
    },
    {
      title: "Erzählen Sie uns von Ihrem Unternehmen",
      icon: <Briefcase className="h-8 w-8" />,
      content: (
        <div className="space-y-4">
          <Label htmlFor="companyBasics" className="text-lg font-medium">
            Was ist das Kerngeschäft Ihres Unternehmens? (Branche, Produkte/Dienstleistungen, Zielgruppe)
          </Label>
          <Textarea
            id="companyBasics"
            name="companyBasics"
            rows={5}
            className="bg-secondary/50 border-ai-primary/20 focus:border-ai-primary"
            placeholder="z.B. Wir sind ein mittelständischer Online-Händler für Sportbekleidung und richten uns an aktive Menschen zwischen 20 und 40 Jahren."
            value={formData.companyBasics}
            onChange={handleChange}
          />
        </div>
      )
    },
    {
      title: "Ziele und Erwartungen an K.I.",
      icon: <Lightbulb className="h-8 w-8" />,
      content: (
        <div className="space-y-4">
          <Label htmlFor="goals" className="text-lg font-medium">
            Was erhoffen Sie sich primär durch den Einsatz von K.I.? (z.B. Effizienzsteigerung, Kostensenkung, neue Produkte, besseres Kundenerlebnis)
          </Label>
          <Textarea
            id="goals"
            name="goals"
            rows={5}
            className="bg-secondary/50 border-ai-primary/20 focus:border-ai-primary"
            placeholder="z.B. Wir möchten unsere internen Prozesse automatisieren, um Zeit zu sparen und die Personalisierung für unsere Kunden verbessern."
            value={formData.goals}
            onChange={handleChange}
          />
        </div>
      )
    },
    {
      title: "Aktuelle Herausforderungen",
      icon: <BarChart3 className="h-8 w-8" />,
      content: (
        <div className="space-y-4">
          <Label htmlFor="painPoints" className="text-lg font-medium">
            Wo sehen Sie aktuell die größten 'Schmerzpunkte' oder ineffizienten Prozesse in Ihrem Unternehmen?
          </Label>
          <Textarea
            id="painPoints"
            name="painPoints"
            rows={5}
            className="bg-secondary/50 border-ai-primary/20 focus:border-ai-primary"
            placeholder="z.B. Die manuelle Bearbeitung von Kundenanfragen ist sehr zeitaufwändig. Unsere Lagerhaltung ist nicht optimal."
            value={formData.painPoints}
            onChange={handleChange}
          />
        </div>
      )
    },
    {
      title: "Datenlandschaft",
      icon: <Database className="h-8 w-8" />,
      content: (
        <div className="space-y-4">
          <Label className="text-lg font-medium">
            Welche Art von Daten sammeln Sie bereits? (Mehrfachauswahl möglich)
          </Label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {dataSourceOptions.map(item => (
              <div key={item} className="flex items-center space-x-3 p-3 rounded-lg border border-ai-primary/20 bg-secondary/30">
                <Checkbox
                  id={item}
                  checked={formData.dataSources.includes(item)}
                  onCheckedChange={(checked) => handleCheckboxChange(item, checked as boolean)}
                  className="border-ai-primary data-[state=checked]:bg-ai-primary"
                />
                <Label htmlFor={item} className="text-sm cursor-pointer">{item}</Label>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      title: "IT-Infrastruktur & Team",
      icon: <Users className="h-8 w-8" />,
      content: (
        <div className="space-y-6">
          <div>
            <Label htmlFor="itInfrastructure" className="text-lg font-medium block mb-2">
              Wie würden Sie Ihre aktuelle IT-Infrastruktur beschreiben?
            </Label>
            <Textarea
              id="itInfrastructure"
              name="itInfrastructure"
              rows={4}
              className="bg-secondary/50 border-ai-primary/20 focus:border-ai-primary"
              placeholder="z.B. Hauptsächlich Cloud-basiert (AWS/Azure), einige lokale Server, Standard-Office-Software."
              value={formData.itInfrastructure}
              onChange={handleChange}
            />
          </div>
          <div>
            <Label htmlFor="teamSkills" className="text-lg font-medium block mb-2">
              Verfügt Ihr Team bereits über IT- oder Datenanalyse-Kenntnisse?
            </Label>
            <Textarea
              id="teamSkills"
              name="teamSkills"
              rows={4}
              className="bg-secondary/50 border-ai-primary/20 focus:border-ai-primary"
              placeholder="z.B. Wir haben eine kleine IT-Abteilung, aber keine dedizierten Datenwissenschaftler."
              value={formData.teamSkills}
              onChange={handleChange}
            />
          </div>
        </div>
      )
    },
    {
      title: "Zusammenfassung Ihrer Analyse",
      icon: <CheckCircle className="h-8 w-8" />,
      content: (
        <div className="space-y-6">
          <div className="text-center mb-6">
            <CheckCircle className="h-16 w-16 text-ai-primary mx-auto mb-4" />
            <p className="text-xl font-bold">Vielen Dank! Hier ist die Zusammenfassung Ihrer Angaben.</p>
          </div>
          
          <Card className="bg-secondary/30 border-ai-primary/20">
            <CardContent className="p-6 space-y-4">
              <div>
                <h4 className="font-semibold text-ai-primary mb-2">Kerngeschäft:</h4>
                <p className="text-foreground/90 whitespace-pre-wrap">{formData.companyBasics || "Keine Angabe"}</p>
              </div>
              <div>
                <h4 className="font-semibold text-ai-primary mb-2">Ziele für K.I.:</h4>
                <p className="text-foreground/90 whitespace-pre-wrap">{formData.goals || "Keine Angabe"}</p>
              </div>
              <div>
                <h4 className="font-semibold text-ai-primary mb-2">Herausforderungen:</h4>
                <p className="text-foreground/90 whitespace-pre-wrap">{formData.painPoints || "Keine Angabe"}</p>
              </div>
              <div>
                <h4 className="font-semibold text-ai-primary mb-2">Datenquellen:</h4>
                <p className="text-foreground/90">{formData.dataSources.join(', ') || "Keine Angabe"}</p>
              </div>
              <div>
                <h4 className="font-semibold text-ai-primary mb-2">IT-Infrastruktur:</h4>
                <p className="text-foreground/90 whitespace-pre-wrap">{formData.itInfrastructure || "Keine Angabe"}</p>
              </div>
              <div>
                <h4 className="font-semibold text-ai-primary mb-2">Team-Kompetenzen:</h4>
                <p className="text-foreground/90 whitespace-pre-wrap">{formData.teamSkills || "Keine Angabe"}</p>
              </div>
            </CardContent>
          </Card>
          
          <p className="text-center text-muted-foreground">
            Diese Zusammenfassung kann nun als detaillierter Prompt für eine K.I.-Beratung verwendet werden, um konkrete, auf Ihr Unternehmen zugeschnittene Vorschläge zu erhalten.
          </p>
        </div>
      )
    }
  ];

  const progress = (step / (steps.length - 1)) * 100;

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        <Card className="bg-card/95 backdrop-blur border-ai-primary/20 shadow-card">
          <CardHeader className="text-center pb-6">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="bg-gradient-primary rounded-full p-3">
                <Brain className="h-8 w-8 text-primary-foreground" />
              </div>
              <CardTitle className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Business AI Enforcer
              </CardTitle>
            </div>
            <p className="text-muted-foreground text-lg">Ihre strategische K.I.-Analyse</p>
          </CardHeader>

          <CardContent className="space-y-8">
            {/* Progress Bar */}
            {step < steps.length - 1 && (
              <div className="space-y-2">
                <Progress value={progress} className="h-2" />
                <p className="text-sm text-center text-muted-foreground">
                  Schritt {step + 1} von {steps.length - 1}
                </p>
              </div>
            )}

            {/* Main Content */}
            <Card className="min-h-[400px] bg-secondary/30 border-ai-primary/20">
              <CardContent className="p-8">
                <div className="flex items-center justify-center text-ai-primary mb-6">
                  {steps[step].icon}
                  <h2 className="text-2xl font-bold ml-3">{steps[step].title}</h2>
                </div>
                <div className="text-foreground">
                  {steps[step].content}
                </div>
              </CardContent>
            </Card>

            {/* Navigation */}
            <div className="flex justify-between items-center pt-4">
              {step > 0 ? (
                <Button
                  onClick={prevStep}
                  variant="outline"
                  className="border-ai-primary/20 hover:bg-ai-primary/10"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Zurück
                </Button>
              ) : (
                <div />
              )}
              
              {step < steps.length - 1 ? (
                <Button
                  onClick={nextStep}
                  className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
                >
                  Weiter
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              ) : (
                <Button
                  onClick={copyToClipboard}
                  className="bg-ai-secondary hover:bg-ai-secondary/90 hover:shadow-glow transition-all duration-300"
                >
                  <Copy className="h-4 w-4 mr-2" />
                  Zusammenfassung kopieren
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BusinessAIEnforcer;