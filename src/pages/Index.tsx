import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Heart, Baby, Users, Stethoscope, UserCheck, Building, Shield } from "lucide-react";

const Index = () => {
  const [currentStep, setCurrentStep] = useState<'splash' | 'language' | 'userType' | 'services'>('splash');
  const [selectedLanguage, setSelectedLanguage] = useState('sw');
  const [selectedUserType, setSelectedUserType] = useState<string | null>(null);

  const languages = [
    { code: 'sw', name: 'Kiswahili', flag: '🇹🇿' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
  ];

  const userTypes = [
    {
      id: 'guest',
      title: 'Mgeni (Guest)',
      description: 'Jaribu huduma zetu bila kujiandikisha',
      descriptionEn: 'Try our services without registration',
      icon: Users,
      color: 'bg-blue-500',
      textColor: 'text-blue-700',
      bgColor: 'bg-blue-50'
    },
    {
      id: 'individual',
      title: 'Mtu Binafsi (Individual)',
      description: 'Fuatilia afya yako na ya familia yako',
      descriptionEn: 'Track your health and your family\'s health',
      icon: UserCheck,
      color: 'bg-green-500',
      textColor: 'text-green-700',
      bgColor: 'bg-green-50'
    },
    {
      id: 'professional',
      title: 'Mtaalamu (Professional)',
      description: 'Huduma za kitaalamu za afya',
      descriptionEn: 'Professional healthcare services',
      icon: Stethoscope,
      color: 'bg-purple-500',
      textColor: 'text-purple-700',
      bgColor: 'bg-purple-50'
    },
    {
      id: 'institutional',
      title: 'Taasisi (Institution)',
      description: 'Huduma za afya za kikundi',
      descriptionEn: 'Institutional healthcare services',
      icon: Building,
      color: 'bg-orange-500',
      textColor: 'text-orange-700',
      bgColor: 'bg-orange-50'
    },
    {
      id: 'admin',
      title: 'Msimamizi (Admin)',
      description: 'Udhibiti kamili wa mfumo',
      descriptionEn: 'Full system administration',
      icon: Shield,
      color: 'bg-red-500',
      textColor: 'text-red-700',
      bgColor: 'bg-red-50'
    }
  ];

  const services = [
    {
      id: 'guest-services',
      title: 'Mgeni (Guest Services)',
      description: 'Jaribu huduma zetu bila kujiandikisha',
      descriptionEn: 'Try our services without registration',
      icon: Users,
      color: 'bg-blue-500'
    },
    {
      id: 'pregnancy-tracking',
      title: 'Ufuatiliaji wa Ujauzito',
      description: 'Fuatilia safari yako ya ujauzito',
      descriptionEn: 'Track your pregnancy journey',
      icon: Heart,
      color: 'bg-pink-500'
    },
    {
      id: 'baby-tracking',
      title: 'Ufuatiliaji wa Mtoto',
      description: 'Fuatilia ukuzi wa mtoto wako',
      descriptionEn: 'Track your baby\'s development',
      icon: Baby,
      color: 'bg-yellow-500'
    },
    {
      id: 'health-services',
      title: 'Huduma za Afya',
      description: 'Chanjo, vipimo na huduma nyingine',
      descriptionEn: 'Vaccinations, checkups and other services',
      icon: Stethoscope,
      color: 'bg-green-500'
    }
  ];

  const t = (sw: string, en: string) => selectedLanguage === 'sw' ? sw : en;

  if (currentStep === 'splash') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="text-center space-y-8 p-8 animate-fade-in">
          <div className="mb-8">
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center">
              <Heart className="w-12 h-12 text-primary" />
            </div>
            <h1 className="text-5xl font-bold text-primary mb-2">
              AfyaTrack
            </h1>
            <p className="text-lg text-muted-foreground">
              v3.0
            </p>
            <Badge variant="secondary" className="mt-2">
              Digital Health Platform
            </Badge>
          </div>
          <Button 
            size="lg"
            onClick={() => setCurrentStep('language')}
            className="px-8 py-6 text-lg font-semibold"
          >
            Anza / Get Started
          </Button>
        </div>
      </div>
    );
  }

  if (currentStep === 'language') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10">
        <Card className="w-full max-w-md mx-4">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">{t('Chagua Lugha', 'Select Language')}</CardTitle>
            <p className="text-muted-foreground">
              {t('Chagua lugha unayotaka kutumia', 'Choose your preferred language')}
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            {languages.map((lang) => (
              <Button
                key={lang.code}
                variant={selectedLanguage === lang.code ? "default" : "outline"}
                className="w-full justify-start h-12"
                onClick={() => setSelectedLanguage(lang.code)}
              >
                <span className="text-xl mr-3">{lang.flag}</span>
                {lang.name}
              </Button>
            ))}
            <Separator className="my-4" />
            <Button 
              className="w-full" 
              onClick={() => setCurrentStep('userType')}
            >
              {t('Endelea', 'Continue')}
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (currentStep === 'userType') {
    return (
      <div className="min-h-screen py-8 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">
              {t('Chagua Aina ya Mtumiaji', 'Select User Type')}
            </h1>
            <p className="text-muted-foreground">
              {t('Chagua aina ya mtumiaji unayolingana nayo', 'Choose the user type that matches you')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {userTypes.map((type) => {
              const Icon = type.icon;
              return (
                <Card 
                  key={type.id}
                  className={`cursor-pointer transition-all hover:shadow-lg ${
                    selectedUserType === type.id ? 'ring-2 ring-primary' : ''
                  }`}
                  onClick={() => setSelectedUserType(type.id)}
                >
                  <CardHeader className="text-center">
                    <div className={`w-16 h-16 mx-auto rounded-full ${type.bgColor} flex items-center justify-center mb-4`}>
                      <Icon className={`w-8 h-8 ${type.textColor}`} />
                    </div>
                    <CardTitle className="text-lg">{type.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground text-center">
                      {selectedLanguage === 'sw' ? type.description : type.descriptionEn}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          
          {selectedUserType && (
            <div className="text-center mt-8">
              <Button 
                size="lg"
                onClick={() => setCurrentStep('services')}
              >
                {t('Endelea', 'Continue')}
              </Button>
            </div>
          )}
        </div>
      </div>
    );
  }

  if (currentStep === 'services') {
    return (
      <div className="min-h-screen py-8 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">
              {t('Chagua Huduma', 'Select Service')}
            </h1>
            <p className="text-muted-foreground">
              {t('Chagua huduma unayotaka kutumia', 'Choose the service you want to use')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Card 
                  key={service.id}
                  className="cursor-pointer transition-all hover:shadow-lg group"
                >
                  <CardHeader className="text-center">
                    <div className={`w-20 h-20 mx-auto rounded-full ${service.color}/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon className={`w-10 h-10 text-white`} style={{ filter: `drop-shadow(0 0 0 ${service.color.replace('bg-', '')})` }} />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center">
                      {selectedLanguage === 'sw' ? service.description : service.descriptionEn}
                    </p>
                    <Button className="w-full mt-4">
                      {t('Chagua Huduma Hii', 'Select This Service')}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          
          <div className="text-center mt-8">
            <Button 
              variant="outline"
              onClick={() => setCurrentStep('userType')}
            >
              {t('Rudi Nyuma', 'Go Back')}
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default Index;
