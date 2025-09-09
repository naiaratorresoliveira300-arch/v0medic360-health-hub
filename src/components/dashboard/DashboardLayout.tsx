import { ReactNode, useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { 
  LogOut, 
  Bell, 
  Settings, 
  User,
  Menu,
  X,
  Home,
  Calendar,
  FileText,
  BookOpen,
  Users,
  BarChart3,
  Clock,
  Upload,
  MessageSquare,
  Kanban,
  Activity
} from 'lucide-react';

interface DashboardLayoutProps {
  children: ReactNode;
  userProfile: string;
}

const DashboardLayout = ({ children, userProfile }: DashboardLayoutProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [notifications] = useState(3);
  const navigate = useNavigate();
  const location = useLocation();

  const userEmail = localStorage.getItem('userEmail') || '';
  
  const profileConfig = {
    doctor: {
      title: 'Médico',
      color: 'primary',
      menuItems: [
        { icon: Home, label: 'Dashboard', path: `/dashboard/${userProfile}` },
        { icon: Calendar, label: 'Plantões', path: `/dashboard/${userProfile}/shifts` },
        { icon: BarChart3, label: 'Relatórios', path: `/dashboard/${userProfile}/reports` },
        { icon: Upload, label: 'Documentos Médicos', path: `/dashboard/${userProfile}/documents` },
        { icon: Clock, label: 'Banco de Horas', path: `/dashboard/${userProfile}/hours` },
        { icon: BookOpen, label: 'Treinamentos', path: `/dashboard/${userProfile}/training` },
        { icon: FileText, label: 'Conteúdos', path: `/dashboard/${userProfile}/content` },
      ]
    },
    nurse: {
      title: 'Enfermeiro/Técnico',
      color: 'secondary',
      menuItems: [
        { icon: Home, label: 'Dashboard', path: `/dashboard/${userProfile}` },
        { icon: Calendar, label: 'Escala Visual', path: `/dashboard/${userProfile}/schedule` },
        { icon: Kanban, label: 'Atividades', path: `/dashboard/${userProfile}/kanban` },
        { icon: Clock, label: 'Banco de Horas', path: `/dashboard/${userProfile}/hours` },
        { icon: Upload, label: 'Documentos', path: `/dashboard/${userProfile}/documents` },
        { icon: BookOpen, label: 'Treinamentos', path: `/dashboard/${userProfile}/training` },
        { icon: FileText, label: 'Conteúdos Técnicos', path: `/dashboard/${userProfile}/content` },
      ]
    },
    admin: {
      title: 'Administrativo',
      color: 'accent-foreground',
      menuItems: [
        { icon: Home, label: 'Dashboard', path: `/dashboard/${userProfile}` },
        { icon: Users, label: 'Gestão de Equipes', path: `/dashboard/${userProfile}/teams` },
        { icon: Activity, label: 'Matriz Gantt', path: `/dashboard/${userProfile}/gantt` },
        { icon: BarChart3, label: 'Relatórios Gerenciais', path: `/dashboard/${userProfile}/reports` },
        { icon: Clock, label: 'Banco de Horas', path: `/dashboard/${userProfile}/hours` },
        { icon: Upload, label: 'Documentos', path: `/dashboard/${userProfile}/documents` },
        { icon: BookOpen, label: 'Treinamentos', path: `/dashboard/${userProfile}/training` },
      ]
    }
  };

  const config = profileConfig[userProfile as keyof typeof profileConfig];
  
  const handleLogout = () => {
    localStorage.removeItem('userProfile');
    localStorage.removeItem('userEmail');
    navigate('/');
  };

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    const handleResize = () => {
      setIsSidebarOpen(window.innerWidth >= 1024);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-section flex">
      {/* Sidebar */}
      <aside className={`
        ${isSidebarOpen ? 'w-64' : 'w-0'} 
        transition-all duration-300 overflow-hidden
        lg:relative fixed inset-y-0 left-0 z-50
        bg-white shadow-strong border-r
      `}>
        <div className="p-6 border-b">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-gradient-primary rounded-lg">
              <User className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-foreground">
                medic<span className="text-primary">360</span>
              </h3>
              <Badge variant="outline" className="text-xs">
                {config.title}
              </Badge>
            </div>
          </div>
        </div>

        <nav className="p-4 space-y-2">
          {config.menuItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.path);
            
            return (
              <Button
                key={item.path}
                variant={active ? "secondary" : "ghost"}
                className={`
                  w-full justify-start h-11
                  ${active ? 'bg-accent text-accent-foreground font-medium' : 'hover:bg-muted/50'}
                `}
                onClick={() => navigate(item.path)}
              >
                <Icon className="h-5 w-5 mr-3" />
                {item.label}
              </Button>
            );
          })}
        </nav>

        {/* Communication Section */}
        <div className="absolute bottom-4 left-4 right-4 space-y-2">
          <Button
            variant="ghost" 
            className="w-full justify-start h-11"
            onClick={() => navigate(`/dashboard/${userProfile}/messages`)}
          >
            <MessageSquare className="h-5 w-5 mr-3" />
            Comunicação Interna
            {notifications > 0 && (
              <Badge className="ml-auto bg-primary text-white text-xs">
                {notifications}
              </Badge>
            )}
          </Button>
          
          <Button
            variant="ghost"
            className="w-full justify-start h-11 text-red-600 hover:text-red-700 hover:bg-red-50"
            onClick={handleLogout}
          >
            <LogOut className="h-5 w-5 mr-3" />
            Sair do Sistema
          </Button>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white border-b shadow-soft px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="lg:hidden"
              >
                {isSidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
              
              <div>
                <h1 className="text-xl font-heading font-bold text-foreground">
                  {config.title}
                </h1>
                <p className="text-sm text-muted-foreground">
                  Bem-vindo(a) de volta!
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              {/* Notifications */}
              <Button variant="ghost" size="sm" className="relative">
                <Bell className="h-5 w-5" />
                {notifications > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-primary text-white text-xs">
                    {notifications}
                  </Badge>
                )}
              </Button>

              {/* Settings */}
              <Button variant="ghost" size="sm">
                <Settings className="h-5 w-5" />
              </Button>

              {/* User Profile */}
              <div className="flex items-center space-x-3 pl-4 border-l">
                <Avatar className="h-8 w-8">
                  <div className="h-8 w-8 bg-gradient-primary rounded-full flex items-center justify-center">
                    <User className="h-4 w-4 text-white" />
                  </div>
                </Avatar>
                
                <div className="hidden sm:block">
                  <p className="text-sm font-medium text-foreground">
                    {userEmail.split('@')[0]}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {config.title}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;