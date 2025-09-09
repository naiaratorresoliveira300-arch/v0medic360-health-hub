import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { 
  Calendar, 
  Clock, 
  FileText, 
  TrendingUp, 
  Users, 
  AlertCircle,
  CheckCircle,
  ArrowRight,
  Activity,
  Heart,
  Stethoscope
} from 'lucide-react';

const DoctorDashboard = () => {
  const stats = [
    {
      title: 'Plantões Este Mês',
      value: '12',
      change: '+2 vs mês anterior',
      icon: Calendar,
      color: 'text-primary'
    },
    {
      title: 'Horas Trabalhadas',
      value: '84h',
      change: 'Dentro do limite',
      icon: Clock,
      color: 'text-secondary'
    },
    {
      title: 'Pacientes Atendidos',
      value: '156',
      change: '+23% vs mês anterior',
      icon: Users,
      color: 'text-green-600'
    },
    {
      title: 'Relatórios Pendentes',
      value: '3',
      change: 'Prazo: 2 dias',
      icon: FileText,
      color: 'text-orange-600'
    }
  ];

  const recentShifts = [
    { date: '2024-01-15', time: '07:00 - 19:00', location: 'UTI', status: 'completed' },
    { date: '2024-01-12', time: '19:00 - 07:00', location: 'Emergência', status: 'completed' },
    { date: '2024-01-10', time: '07:00 - 19:00', location: 'Clínica Médica', status: 'completed' },
  ];

  const pendingTasks = [
    { title: 'Relatório mensal de atendimentos', priority: 'high', deadline: '2 dias' },
    { title: 'Atualização de documentos CRM', priority: 'medium', deadline: '1 semana' },
    { title: 'Treinamento obrigatório - Segurança', priority: 'low', deadline: '2 semanas' },
  ];

  return (
    <DashboardLayout userProfile="doctor">
      <div className="space-y-6">
        {/* Welcome Banner */}
        <div className="bg-gradient-primary p-6 rounded-2xl text-white">
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <h2 className="text-2xl font-heading font-bold">
                Bom dia, Dr(a). Silva! 👋
              </h2>
              <p className="text-white/90">
                Você tem 2 plantões agendados para esta semana e 3 relatórios pendentes.
              </p>
            </div>
            <div className="p-4 bg-white/20 rounded-2xl">
              <Stethoscope className="h-12 w-12" />
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="p-6 border-0 shadow-soft bg-white hover:shadow-medium transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 bg-accent rounded-lg ${stat.color}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </div>
                
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">{stat.title}</p>
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.change}</p>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Recent Shifts */}
          <Card className="p-6 border-0 shadow-soft bg-white">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-heading font-semibold text-foreground">
                Plantões Recentes
              </h3>
              <Button variant="outline" size="sm">
                Ver todos
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
            
            <div className="space-y-4">
              {recentShifts.map((shift, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-accent rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-primary rounded-lg">
                      <Calendar className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{shift.date}</p>
                      <p className="text-sm text-muted-foreground">{shift.time}</p>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <Badge variant="outline" className="mb-1">
                      {shift.location}
                    </Badge>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm text-muted-foreground">Concluído</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Pending Tasks */}
          <Card className="p-6 border-0 shadow-soft bg-white">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-heading font-semibold text-foreground">
                Tarefas Pendentes
              </h3>
              <Badge className="bg-primary text-white">
                {pendingTasks.length} itens
              </Badge>
            </div>
            
            <div className="space-y-4">
              {pendingTasks.map((task, index) => (
                <div key={index} className="p-4 border rounded-lg hover:bg-accent transition-colors duration-200">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <p className="font-medium text-foreground mb-2">{task.title}</p>
                      <div className="flex items-center space-x-3">
                        <Badge 
                          variant={task.priority === 'high' ? 'destructive' : task.priority === 'medium' ? 'outline' : 'secondary'}
                          className="text-xs"
                        >
                          {task.priority === 'high' ? 'Alta' : task.priority === 'medium' ? 'Média' : 'Baixa'}
                        </Badge>
                        <span className="text-sm text-muted-foreground">
                          Prazo: {task.deadline}
                        </span>
                      </div>
                    </div>
                    
                    <Button variant="ghost" size="sm">
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Performance Overview */}
        <Card className="p-6 border-0 shadow-soft bg-white">
          <h3 className="text-lg font-heading font-semibold text-foreground mb-6">
            Resumo de Performance - Janeiro 2024
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Carga Horária</span>
                <span className="text-sm font-medium">84h / 120h</span>
              </div>
              <Progress value={70} className="h-2" />
              <p className="text-xs text-muted-foreground">70% da carga mensal</p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Relatórios Entregues</span>
                <span className="text-sm font-medium">9 / 12</span>
              </div>
              <Progress value={75} className="h-2" />
              <p className="text-xs text-muted-foreground">75% dos relatórios</p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Treinamentos</span>
                <span className="text-sm font-medium">4 / 5</span>
              </div>
              <Progress value={80} className="h-2" />
              <p className="text-xs text-muted-foreground">1 pendente</p>
            </div>
          </div>
        </Card>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Button 
            variant="outline" 
            className="h-20 flex flex-col space-y-2 hover:bg-primary hover:text-white transition-all duration-300"
          >
            <Calendar className="h-6 w-6" />
            <span className="text-sm">Ver Escalas</span>
          </Button>
          
          <Button 
            variant="outline" 
            className="h-20 flex flex-col space-y-2 hover:bg-primary hover:text-white transition-all duration-300"
          >
            <FileText className="h-6 w-6" />
            <span className="text-sm">Relatórios</span>
          </Button>
          
          <Button 
            variant="outline" 
            className="h-20 flex flex-col space-y-2 hover:bg-primary hover:text-white transition-all duration-300"
          >
            <Activity className="h-6 w-6" />
            <span className="text-sm">Documentos</span>
          </Button>
          
          <Button 
            variant="outline" 
            className="h-20 flex flex-col space-y-2 hover:bg-primary hover:text-white transition-all duration-300"
          >
            <Heart className="h-6 w-6" />
            <span className="text-sm">Treinamentos</span>
          </Button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DoctorDashboard;