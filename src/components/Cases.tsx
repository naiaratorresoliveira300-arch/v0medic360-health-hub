import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Building, Users, TrendingUp, ArrowRight } from 'lucide-react';
import case1Image from '@/assets/hospital-case1.jpg';
import case2Image from '@/assets/hospital-case2.jpg';

const Cases = () => {
  const cases = [
    {
      id: 1,
      title: 'HMSPE Hospital do Servidor Público Estadual (SP)',
      image: case1Image,
      location: 'São Paulo, SP',
      type: 'Hospital Público',
      capacity: '500 leitos',
      improvement: '+35% eficiência',
      description: 'Completa reestruturação da saúde com mais de 500 leitos e atendimento integral de alta e media complexidade através da implementação de soluções especializadas.',
      highlights: [
        'Redução de 35% no tempo de atendimento',
        'Implementação de gestão digital completa',
        'Otimização de recursos humanos',
        'Melhoria na satisfação dos pacientes'
      ]
    },
    {
      id: 2,
      title: 'Secretaria de Estado da Saúde de Tocantins (SES-TO)',
      image: case2Image,
      location: 'Palmas, TO',
      type: 'Gestão Estadual',
      capacity: 'Rede estadual',
      improvement: '+40% cobertura',
      description: 'Atuamos na Tocantins com parceria com a Secretaria de Saúde, contribuindo dirungindo diretrizes de eficiência, qualidade e cuidado integral.',
      highlights: [
        'Expansão da cobertura em 40%',
        'Implementação de protocolos estaduais',
        'Capacitação de equipes regionais',
        'Modernização da infraestrutura'
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground">
              Cases de Sucesso
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Ao longo dos anos, a Medic 360 tem se destacado pela condução de projetos 
              estratégicos e pela transformação de unidades de saúde em diferentes regiões do país. 
              Entre os principais casos de sucesso, estão a reestruturação de hospitais 
              públicos e privados, com ganhos decisivos em indicadores de qualidade, 
              eficiência e satisfação dos pacientes.
            </p>
          </div>

          {/* Cases Grid */}
          <div className="space-y-12">
            {cases.map((caseStudy, index) => (
              <Card 
                key={caseStudy.id} 
                className={`overflow-hidden shadow-soft hover:shadow-strong transition-all duration-500 border-0 bg-white group ${
                  index % 2 === 0 ? '' : ''
                }`}
              >
                <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                  {/* Image */}
                  <div className={`relative overflow-hidden ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <img 
                      src={caseStudy.image} 
                      alt={caseStudy.title}
                      className="w-full h-64 lg:h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
                  </div>

                  {/* Content */}
                  <div className={`p-8 lg:p-12 flex flex-col justify-center ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <div className="space-y-6">
                      {/* Badges */}
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="border-primary/20 text-primary">
                          <MapPin className="w-3 h-3 mr-1" />
                          {caseStudy.location}
                        </Badge>
                        <Badge variant="outline" className="border-secondary/20 text-secondary">
                          <Building className="w-3 h-3 mr-1" />
                          {caseStudy.type}
                        </Badge>
                        <Badge variant="outline" className="border-accent-foreground/20">
                          <Users className="w-3 h-3 mr-1" />
                          {caseStudy.capacity}
                        </Badge>
                        <Badge className="bg-gradient-primary text-white border-0">
                          <TrendingUp className="w-3 h-3 mr-1" />
                          {caseStudy.improvement}
                        </Badge>
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl lg:text-3xl font-heading font-bold text-foreground leading-tight">
                        {caseStudy.title}
                      </h3>

                      {/* Description */}
                      <p className="text-muted-foreground leading-relaxed">
                        {caseStudy.description}
                      </p>

                      {/* Highlights */}
                      <div className="grid sm:grid-cols-2 gap-3">
                        {caseStudy.highlights.map((highlight, highlightIndex) => (
                          <div key={highlightIndex} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-gradient-primary rounded-full flex-shrink-0"></div>
                            <span className="text-sm text-muted-foreground">{highlight}</span>
                          </div>
                        ))}
                      </div>

                      {/* CTA */}
                      <Button 
                        variant="outline" 
                        className="w-fit border-primary/20 hover:border-primary hover:bg-primary hover:text-white transition-all duration-300 group/btn"
                      >
                        Ver detalhes do projeto
                        <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <Card className="p-8 bg-gradient-primary text-white border-0 shadow-glow">
              <div className="space-y-6">
                <h3 className="text-2xl font-heading font-bold">
                  Quer conhecer mais sobre nossos projetos?
                </h3>
                <p className="text-white/90 max-w-2xl mx-auto">
                  Entre em contato conosco e descubra como podemos transformar 
                  a gestão da sua instituição de saúde.
                </p>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-primary transition-all duration-300"
                >
                  Fale conosco
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cases;