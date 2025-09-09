import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Linkedin,
  Heart,
  ArrowUp
} from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-foreground text-white">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h3 className="text-2xl font-heading font-bold text-white">
                  medic<span className="text-primary">360</span>
                </h3>
                <p className="text-gray-300 mt-2">
                  Transformando a gestão em saúde
                </p>
              </div>
              
              <p className="text-gray-300 leading-relaxed max-w-md">
                Especialistas em gestão hospitalar, unindo expertise em gestão, 
                humanização e inovação clínica para desenvolver soluções de alta qualidade 
                que transformam a experiência em saúde.
              </p>

              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <span className="text-gray-300">(11) 3066-9439</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <span className="text-gray-300">(11) 93065-2314</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span className="text-gray-300 text-sm">
                    R. Cardeal Arcoverde, 2365 - 7º Andar Conj 701<br />
                    Pinheiros - São Paulo/SP
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Linkedin className="h-5 w-5 text-primary" />
                  <span className="text-gray-300">Medic 360 Serviços Médicos</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="text-lg font-heading font-semibold text-white">
                Links Rápidos
              </h4>
              <nav className="space-y-3">
                <a 
                  href="#home" 
                  className="block text-gray-300 hover:text-primary transition-colors duration-200"
                >
                  Home
                </a>
                <a 
                  href="#about" 
                  className="block text-gray-300 hover:text-primary transition-colors duration-200"
                >
                  Quem Somos
                </a>
                <a 
                  href="#services" 
                  className="block text-gray-300 hover:text-primary transition-colors duration-200"
                >
                  Serviços
                </a>
                <a 
                  href="#projects" 
                  className="block text-gray-300 hover:text-primary transition-colors duration-200"
                >
                  Projetos
                </a>
                <a 
                  href="#contact" 
                  className="block text-gray-300 hover:text-primary transition-colors duration-200"
                >
                  Contato
                </a>
              </nav>
            </div>

            {/* Services */}
            <div className="space-y-6">
              <h4 className="text-lg font-heading font-semibold text-white">
                Serviços
              </h4>
              <div className="space-y-3">
                <p className="text-gray-300 text-sm">
                  Ambientes Assistenciais Inteligentes
                </p>
                <p className="text-gray-300 text-sm">
                  Gestão Eficiente de Recursos
                </p>
                <p className="text-gray-300 text-sm">
                  Equipe Multidisciplinar e Inovação Clínica
                </p>
                <p className="text-gray-300 text-sm">
                  Consultoria Especializada
                </p>
                <p className="text-gray-300 text-sm">
                  Treinamentos e Capacitação
                </p>
              </div>

              <div className="pt-4">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
                >
                  Área do Profissional
                </Button>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-gray-700" />

        {/* Bottom Footer */}
        <div className="py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-300 text-sm">
              <span>© 2024 Medic 360. Todos os direitos reservados.</span>
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-gray-300 text-sm flex items-center space-x-1">
                <span>Feito com</span>
                <Heart className="h-4 w-4 text-primary" />
                <span>para transformar a saúde</span>
              </span>
              
              <Button 
                variant="ghost" 
                size="sm"
                onClick={scrollToTop}
                className="text-gray-300 hover:text-primary hover:bg-primary/10 transition-all duration-300"
              >
                <ArrowUp className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;