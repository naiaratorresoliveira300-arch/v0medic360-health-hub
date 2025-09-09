import { Button } from '@/components/ui/button';
import { ArrowRight, Heart, Shield, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import heroImage from '@/assets/hero-doctor.jpg';

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Professional healthcare management" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight">
                Gestão em saúde com{' '}
                <span className="text-primary-glow">eficiência</span>,{' '}
                <span className="text-primary-glow">qualidade</span> e{' '}
                <span className="text-primary-glow">tecnologia</span> de ponta
              </h1>
              
              <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-xl">
                Transformando a gestão hospitalar através de soluções inteligentes 
                que otimizam recursos, humanizam o atendimento e garantem 
                excelência no cuidado ao paciente.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary-deep text-white shadow-glow transition-all duration-300 transform hover:scale-105"
                onClick={() => navigate('/login')}
              >
                Acesse sua Área
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
              >
                Nossos Cases
              </Button>
            </div>

            {/* Features highlight */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-white">Humanização</p>
                  <p className="text-sm text-white/80">Cuidado centrado no paciente</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-white">Eficiência</p>
                  <p className="text-sm text-white/80">Otimização de processos</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-white">Segurança</p>
                  <p className="text-sm text-white/80">Protocolos rigorosos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;