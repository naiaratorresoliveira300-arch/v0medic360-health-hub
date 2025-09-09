import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Linkedin, 
  Clock,
  Send,
  UserPlus,
  MessageSquare
} from 'lucide-react';

const Contact = () => {
  const navigate = useNavigate();
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground">
              Entre em Contato
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Estamos prontos para transformar a gestão da sua instituição de saúde. 
              Fale conosco e descubra como podemos ajudar.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-6">
              {/* Contact Cards */}
              <Card className="p-6 shadow-soft border-0 bg-white">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <div className="p-3 bg-gradient-primary rounded-lg">
                      <Phone className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Telefone</h3>
                      <p className="text-muted-foreground">(11) 3066-9439</p>
                      <p className="text-muted-foreground">(11) 93065-2314</p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 shadow-soft border-0 bg-white">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-gradient-primary rounded-lg">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Endereço</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      R. Cardeal Arcoverde, 2365 - 7º Andar Conj 701<br />
                      Pinheiros - São Paulo/SP
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 shadow-soft border-0 bg-white">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-gradient-primary rounded-lg">
                    <Linkedin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">LinkedIn</h3>
                    <p className="text-muted-foreground">Medic 360 Serviços Médicos</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 shadow-soft border-0 bg-white">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-gradient-primary rounded-lg">
                    <Clock className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Horário</h3>
                    <p className="text-muted-foreground">Segunda a Sexta</p>
                    <p className="text-muted-foreground">9:00 - 18:00</p>
                  </div>
                </div>
              </Card>

              {/* Professional Registration CTA */}
              <Card className="p-6 bg-gradient-primary text-white border-0 shadow-glow">
                <div className="space-y-4 text-center">
                  <div className="p-3 bg-white/20 rounded-lg w-12 h-12 mx-auto flex items-center justify-center">
                    <UserPlus className="h-6 w-6" />
                  </div>
                  <h3 className="font-heading font-bold">Profissional da Saúde?</h3>
                  <p className="text-white/90 text-sm">
                    Cadastre-se em nossa plataforma e faça parte do futuro da saúde.
                  </p>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="border-white text-white hover:bg-white hover:text-primary transition-all duration-300 w-full"
                  onClick={() => navigate('/login')}
                >
                  Cadastrar-se
                </Button>
                </div>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="p-8 shadow-soft border-0 bg-white">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="p-3 bg-gradient-primary rounded-lg">
                      <MessageSquare className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-heading font-bold text-foreground">
                        Envie sua Mensagem
                      </h3>
                      <p className="text-muted-foreground">
                        Preencha o formulário e entraremos em contato em breve
                      </p>
                    </div>
                  </div>

                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Nome completo</Label>
                        <Input 
                          id="name" 
                          placeholder="Seu nome" 
                          className="h-12"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">E-mail</Label>
                        <Input 
                          id="email" 
                          type="email" 
                          placeholder="seu@email.com" 
                          className="h-12"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Telefone</Label>
                        <Input 
                          id="phone" 
                          placeholder="(11) 99999-9999" 
                          className="h-12"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">Instituição/Empresa</Label>
                        <Input 
                          id="company" 
                          placeholder="Nome da instituição" 
                          className="h-12"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Assunto</Label>
                      <Input 
                        id="subject" 
                        placeholder="Como podemos ajudar?" 
                        className="h-12"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Mensagem</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Descreva sua necessidade ou dúvida..."
                        rows={5}
                        className="resize-none"
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                      <Button 
                        type="submit"
                        size="lg"
                        className="bg-primary hover:bg-primary-deep text-white flex-1 h-12"
                      >
                        <Send className="mr-2 h-5 w-5" />
                        Enviar Mensagem
                      </Button>
                      <Button 
                        type="button"
                        variant="outline"
                        size="lg"
                        className="border-primary/20 text-primary hover:bg-primary hover:text-white h-12"
                      >
                        <Phone className="mr-2 h-5 w-5" />
                        Ligar Agora
                      </Button>
                    </div>
                  </form>

                  {/* Service Types */}
                  <div className="pt-6 border-t">
                    <p className="text-sm text-muted-foreground mb-3">
                      Serviços disponíveis:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="text-xs">Gestão Hospitalar</Badge>
                      <Badge variant="outline" className="text-xs">Consultoria</Badge>
                      <Badge variant="outline" className="text-xs">Treinamentos</Badge>
                      <Badge variant="outline" className="text-xs">Implementação</Badge>
                      <Badge variant="outline" className="text-xs">Suporte Técnico</Badge>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;