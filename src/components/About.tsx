import { Card } from '@/components/ui/card';
import { Target, Eye, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-16">
          {/* Header */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground">
              Quem Somos
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </div>

          {/* Main content */}
          <div className="space-y-8">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              A <strong className="text-primary font-semibold">Medic360</strong> é uma empresa 
              especializada em gestão hospitalar que atua em ambientes desafiadores, 
              unindo expertise em <strong>gestão</strong>, <strong>humanização</strong> e 
              <strong> inovação clínica</strong> para desenvolver soluções de alta qualidade.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Nosso compromisso é transformar complexidade em eficiência, combinando 
              recursos sustentáveis e impactando positivamente a gestão de pacientes, 
              profissionais, e infraestrutura em unidades para alcançar fluides, 
              garantir bem estar e funcionar com atendimento de excelência 
              na melhoria contínua.
            </p>
          </div>

          {/* Mission, Vision, Values */}
          <div className="grid md:grid-cols-3 gap-8 pt-8">
            <Card className="p-8 text-center shadow-soft hover:shadow-medium transition-all duration-300 border-0 bg-white">
              <div className="space-y-4">
                <div className="p-4 bg-accent rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-foreground">
                  Nossa Missão
                </h3>
                <p className="text-muted-foreground">
                  Transformar a gestão em saúde através de soluções inteligentes 
                  que promovem eficiência, qualidade e humanização no atendimento.
                </p>
              </div>
            </Card>

            <Card className="p-8 text-center shadow-soft hover:shadow-medium transition-all duration-300 border-0 bg-white">
              <div className="space-y-4">
                <div className="p-4 bg-accent rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                  <Eye className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-foreground">
                  Nossa Visão
                </h3>
                <p className="text-muted-foreground">
                  Ser referência nacional em gestão hospitalar inteligente, 
                  reconhecida pela excelência e inovação em soluções de saúde.
                </p>
              </div>
            </Card>

            <Card className="p-8 text-center shadow-soft hover:shadow-medium transition-all duration-300 border-0 bg-white">
              <div className="space-y-4">
                <div className="p-4 bg-accent rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-foreground">
                  Nossos Valores
                </h3>
                <p className="text-muted-foreground">
                  Humanização, inovação, excelência, sustentabilidade e 
                  compromisso com resultados que transformam vidas.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;