import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { 
  UserCircle, 
  Heart, 
  Shield, 
  Settings, 
  Lock,
  ArrowLeft,
  Eye,
  EyeOff
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [selectedProfile, setSelectedProfile] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate();

  const profiles = [
    {
      id: 'doctor',
      title: 'Médico',
      icon: UserCircle,
      color: 'bg-gradient-to-br from-primary to-primary-glow',
      description: 'Acesso completo aos relatórios médicos, escalas de plantão e documentação clínica.',
      features: ['Relatórios individuais', 'Gestão de plantões', 'Documentos médicos']
    },
    {
      id: 'nurse',
      title: 'Enfermeiro / Técnico',
      icon: Heart,
      color: 'bg-gradient-to-br from-secondary to-blue-500',
      description: 'Gestão de atividades, escalas visuais e conteúdos técnicos especializados.',
      features: ['Kanban de atividades', 'Escala visual', 'Conteúdos técnicos']
    },
    {
      id: 'admin',
      title: 'Administrativo',
      icon: Settings,
      color: 'bg-gradient-to-br from-accent-foreground to-gray-600',
      description: 'Controle completo de equipes, relatórios gerenciais e indicadores de performance.',
      features: ['Gestão de equipes', 'Matriz Gantt', 'Relatórios gerenciais']
    }
  ];

  const handleProfileSelect = (profileId: string) => {
    setSelectedProfile(profileId);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedProfile && formData.email && formData.password) {
      // Mock login - in real app this would validate credentials
      localStorage.setItem('userProfile', selectedProfile);
      localStorage.setItem('userEmail', formData.email);
      navigate(`/dashboard/${selectedProfile}`);
    }
  };

  const handleBack = () => {
    if (selectedProfile) {
      setSelectedProfile(null);
    } else {
      navigate('/');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-section flex items-center justify-center p-6">
      <div className="w-full max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <Button 
            variant="ghost" 
            onClick={handleBack}
            className="absolute top-6 left-6 text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Voltar
          </Button>
          
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Área do Profissional
          </h1>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-4"></div>
          <p className="text-muted-foreground">
            {!selectedProfile 
              ? 'Selecione seu perfil profissional para acessar o sistema'
              : 'Entre com suas credenciais para continuar'
            }
          </p>
        </div>

        {!selectedProfile ? (
          /* Profile Selection */
          <div className="grid md:grid-cols-3 gap-6">
            {profiles.map((profile) => {
              const Icon = profile.icon;
              return (
                <Card 
                  key={profile.id}
                  className="p-6 cursor-pointer transition-all duration-300 hover:shadow-strong hover:-translate-y-2 border-0 bg-white group"
                  onClick={() => handleProfileSelect(profile.id)}
                >
                  <div className="space-y-6">
                    {/* Icon */}
                    <div className={`p-4 ${profile.color} rounded-2xl w-16 h-16 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>

                    {/* Title */}
                    <div className="text-center">
                      <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                        {profile.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {profile.description}
                      </p>
                    </div>

                    {/* Features */}
                    <div className="space-y-2">
                      {profile.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <Shield className="h-4 w-4 text-primary" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <Button className="w-full bg-primary hover:bg-primary-deep">
                      Selecionar Perfil
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>
        ) : (
          /* Login Form */
          <div className="max-w-md mx-auto">
            <Card className="p-8 shadow-strong border-0 bg-white">
              <div className="space-y-6">
                {/* Selected Profile Header */}
                <div className="text-center space-y-4">
                  <div className={`p-4 ${profiles.find(p => p.id === selectedProfile)?.color} rounded-2xl w-16 h-16 mx-auto flex items-center justify-center`}>
                    {(() => {
                      const profile = profiles.find(p => p.id === selectedProfile);
                      const Icon = profile?.icon || UserCircle;
                      return <Icon className="h-8 w-8 text-white" />;
                    })()}
                  </div>
                  
                  <div>
                    <h2 className="text-xl font-heading font-bold text-foreground">
                      Login - {profiles.find(p => p.id === selectedProfile)?.title}
                    </h2>
                    <Badge variant="outline" className="mt-2">
                      <Lock className="h-3 w-3 mr-1" />
                      Acesso Seguro
                    </Badge>
                  </div>
                </div>

                {/* Login Form */}
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail profissional</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="seu.email@medic360.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                      className="h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password">Senha</Label>
                    <div className="relative">
                      <Input
                        id="password"
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Digite sua senha"
                        value={formData.password}
                        onChange={(e) => setFormData({...formData, password: e.target.value})}
                        required
                        className="h-12 pr-12"
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 p-0"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <label className="flex items-center space-x-2 text-muted-foreground">
                      <input type="checkbox" className="rounded" />
                      <span>Lembrar de mim</span>
                    </label>
                    <a href="#" className="text-primary hover:underline">
                      Esqueci minha senha
                    </a>
                  </div>

                  <Button 
                    type="submit"
                    size="lg"
                    className="w-full bg-primary hover:bg-primary-deep h-12"
                  >
                    Entrar no Sistema
                  </Button>
                </form>

                {/* Footer */}
                <div className="text-center space-y-2">
                  <p className="text-xs text-muted-foreground">
                    Primeira vez no sistema?{' '}
                    <a href="#" className="text-primary hover:underline">
                      Solicite seu acesso
                    </a>
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Precisa de ajuda? Entre em contato com o suporte
                  </p>
                </div>
              </div>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;