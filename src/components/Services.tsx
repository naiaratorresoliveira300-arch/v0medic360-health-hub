import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Brain, Settings, Users, ArrowRight, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Services = () => {
  const navigate = useNavigate();
  const services = [
    {
      icon: Brain,
      title: 'Ambientes Assistenciais Inteligentes',
      description: 'Implementação de ambientes modernos, tecnológicos e funcionais, proporcionando conforto e segurança para pacientes e profissionais, garantindo bem estar e funcionamento com atendimento de excelência.',
      features: [
        'Design de ambientes terapêuticos',
        'Tecnologia integrada',
        'Protocolos de segurança',
        'Humanização dos espaços'
      ]
    },
    {
      icon: Settings,
      title: 'Gestão Eficiente de Recursos',
      description: 'Investimos na criação de ambientes modernos, acolhedores e funcionais, proporcionando conforto e segurança para pacientes e profissionais, garantindo bem estar e funcionamento com atendimento de excelência.',
      features: [
        'Otimização de processos',
        'Gestão de escalas inteligente',
        'Controle de custos',
        'Indicadores de performance'
      ]
    },
    {
      icon: Users,
      title: 'Equipe Multidisciplinar e Inovação Clínica',
      description: 'Investimos na criação de equipes multidisciplinares, acolhedoras e funcionais, proporcionando conforto e segurança para pacientes e profissionais, e infraestrutura para alcançar fluidez, garantir bem estar e funcionamento com atendimento de excelência.',
      features: [
        'Equipes especializadas',
        'Treinamento contínuo',
        'Protocolos clínicos avançados',
        'Inovação em atendimento'
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground">
              Nossos Serviços
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Oferecemos soluções completas e integradas para transformar 
              a gestão hospitalar e elevar o padrão de atendimento em saúde.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card 
                  key={index} 
                  className="p-8 h-full shadow-soft hover:shadow-strong transition-all duration-500 border-0 bg-white group hover:-translate-y-2"
                >
                  <div className="space-y-6">
                    {/* Icon */}
                    <div className="p-4 bg-gradient-primary rounded-2xl w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-8 w-8 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-heading font-bold text-foreground leading-tight">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <Button 
                      variant="outline" 
                      className="w-full group/btn border-primary/20 hover:border-primary hover:bg-primary hover:text-white transition-all duration-300"
                    >
                      Saiba mais
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-gradient-primary p-8 rounded-2xl text-white shadow-glow">
              <div className="max-w-2xl mx-auto space-y-6">
                <div className="flex items-center justify-center space-x-3">
                  <Users className="h-8 w-8" />
                  <h3 className="text-2xl font-heading font-bold">
                    Você é um profissional da saúde? Faça parte da Medic 360!
                  </h3>
                </div>
                <p className="text-white/90">
                  Colabore e se desenvolva em novo ecossistema de atuação em um espaço dinâmico, respeitoso e desenvolver contínuo.
                </p>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="bg-primary hover:bg-primary-deep text-white shadow-glow transition-all duration-300"
                  onClick={() => navigate('/login')}
                >
                  Cadastrar-se
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;