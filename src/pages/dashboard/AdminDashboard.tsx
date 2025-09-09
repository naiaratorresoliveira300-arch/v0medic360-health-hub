import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { 
  Users, 
  TrendingUp, 
  DollarSign, 
  Activity, 
  BarChart3,
  Calendar,
  Clock,
  AlertTriangle,
  CheckCircle,
  ArrowRight,
  Settings,
  FileText,
  Target
} from 'lucide-react';

const AdminDashboard = () => {
  const stats = [
    {
      title: 'Total de Colaboradores',
      value: '248',
      change: '+12 este mês',
      icon: Users,
      color: 'text-primary'
    },
    {
      title: 'Taxa de Ocupação',
      value: '87%',
      change: '+5% vs mês anterior',
      icon: TrendingUp,
      color: 'text-green-600'
    },
    {
      title: 'Eficiência Operacional',
      value: '94%',
      change: 'Meta: 90%',
      icon: Target,
      color: 'text-secondary'
    },
    {
      title: 'Projetos Ativos',
      value: '15',
      change: '3 finalizados',
      icon: Activity,
      color: 'text-orange-600'
    }
  ];

  const projects = [
    { name: 'Implementação UTI Pediátrica', progress: 75, deadline: '15/02/2024', team: 8, status: 'on-track' },
    { name: 'Digitalização Prontuários', progress: 60, deadline: '28/02/2024', team: 12, status: 'on-track' },
    { name: 'Treinamento NR32', progress: 30, deadline: '10/02/2024', team: 5, status: 'delayed' },
    { name: 'Auditoria de Qualidade', progress: 90, deadline: '20/01/2024', team: 6, status: 'on-track' },
  ];

  const teams = [
    { department: 'Médicos', total: 45, active: 38, efficiency: 92 },
    { department: 'Enfermagem', total: 120, active: 105, efficiency: 88 },
    { department: 'Técnicos', total: 65, active: 58, efficiency: 85 },
    { department: 'Administrativo', total: 18, active: 16, efficiency: 95 },
  ];

  const kpis = [
    { metric: 'Satisfação do Paciente', value: 4.7, max: 5, color: 'text-green-600' },
    { metric: 'Tempo Médio Atendimento', value: 18, max: 25, unit: 'min', color: 'text-blue-600' },
    { metric: 'Taxa de Rotatividade', value: 8, max: 15, unit: '%', color: 'text-orange-600' },
    { metric: 'Compliance Regulatório', value: 98, max: 100, unit: '%', color: 'text-primary' },
  ];

  return (
    <DashboardLayout userProfile="admin">
      <div className="space-y-6">
        {/* Welcome Banner */}
        <div className="bg-gradient-to-br from-accent-foreground to-gray-600 p-6 rounded-2xl text-white">
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <h2 className="text-2xl font-heading font-bold">
                Dashboard Administrativo 📊
              </h2>
              <p className="text-white/90">
                Visão geral da gestão hospitalar e indicadores de performance em tempo real.
              </p>
            </div>
            <div className="p-4 bg-white/20 rounded-2xl">
              <BarChart3 className="h-12 w-12" />
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

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Gantt Chart - Projects */}
          <div className="lg:col-span-2">
            <Card className="p-6 border-0 shadow-soft bg-white">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-heading font-semibold text-foreground">
                  Matriz Gantt - Projetos Ativos
                </h3>
                <Button variant="outline" size="sm">
                  <Calendar className="h-4 w-4 mr-2" />
                  Ver Completo
                </Button>
              </div>

              <div className="space-y-4">
                {projects.map((project, index) => (
                  <div key={index} className="p-4 border rounded-lg hover:bg-accent transition-colors duration-200">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h4 className="font-medium text-foreground">{project.name}</h4>
                        <div className="flex items-center space-x-4 mt-1">
                          <span className="text-sm text-muted-foreground flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {project.deadline}
                          </span>
                          <span className="text-sm text-muted-foreground flex items-center">
                            <Users className="h-4 w-4 mr-1" />
                            {project.team} pessoas
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <Badge 
                          variant={project.status === 'on-track' ? 'secondary' : 'destructive'}
                          className="text-xs"
                        >
                          {project.status === 'on-track' ? (
                            <><CheckCircle className="h-3 w-3 mr-1" />No prazo</>
                          ) : (
                            <><AlertTriangle className="h-3 w-3 mr-1" />Atrasado</>
                          )}
                        </Badge>
                        <span className="text-sm font-medium">{project.progress}%</span>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Progress value={project.progress} className="h-2" />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>Início</span>
                        <span>Prazo: {project.deadline}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Team Overview */}
          <div className="space-y-6">
            <Card className="p-6 border-0 shadow-soft bg-white">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-heading font-semibold text-foreground">
                  Visão por Equipes
                </h3>
                <Button variant="outline" size="sm">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>

              <div className="space-y-4">
                {teams.map((team, index) => (
                  <div key={index} className="p-4 bg-accent rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-medium text-foreground">{team.department}</h4>
                      <Badge variant="outline" className="text-xs">
                        {team.active}/{team.total}
                      </Badge>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Eficiência</span>
                        <span className="font-medium">{team.efficiency}%</span>
                      </div>
                      <Progress value={team.efficiency} className="h-2" />
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* KPIs */}
            <Card className="p-6 border-0 shadow-soft bg-white">
              <h3 className="text-lg font-heading font-semibold text-foreground mb-4">
                Indicadores Chave
              </h3>
              
              <div className="space-y-4">
                {kpis.map((kpi, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">{kpi.metric}</span>
                      <span className={`text-sm font-medium ${kpi.color}`}>
                        {kpi.value}{kpi.unit}
                      </span>
                    </div>
                    <Progress 
                      value={(kpi.value / kpi.max) * 100} 
                      className="h-2"
                    />
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="p-6 border-0 shadow-soft bg-white">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-heading font-semibold text-foreground">
                Financeiro
              </h3>
              <DollarSign className="h-6 w-6 text-green-600" />
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Receita Mensal</span>
                <span className="text-lg font-bold text-foreground">R$ 2.8M</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Custo Operacional</span>
                <span className="text-lg font-bold text-foreground">R$ 2.1M</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Margem</span>
                <span className="text-lg font-bold text-green-600">25%</span>
              </div>
            </div>
          </Card>

          <Card className="p-6 border-0 shadow-soft bg-white">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-heading font-semibold text-foreground">
                Qualidade
              </h3>
              <Target className="h-6 w-6 text-primary" />
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Acreditação</span>
                <Badge className="bg-green-600 text-white">Nível 3</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Incidentes</span>
                <span className="text-lg font-bold text-foreground">2</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Auditorias</span>
                <Badge variant="secondary">Conformidade</Badge>
              </div>
            </div>
          </Card>

          <Card className="p-6 border-0 shadow-soft bg-white">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-heading font-semibold text-foreground">
                Recursos Humanos
              </h3>
              <Users className="h-6 w-6 text-secondary" />
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Absenteísmo</span>
                <span className="text-lg font-bold text-foreground">3.2%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Treinamentos</span>
                <span className="text-lg font-bold text-foreground">85%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Novos Colaboradores</span>
                <span className="text-lg font-bold text-green-600">+12</span>
              </div>
            </div>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Button 
            variant="outline" 
            className="h-20 flex flex-col space-y-2 hover:bg-accent-foreground hover:text-white transition-all duration-300"
          >
            <Users className="h-6 w-6" />
            <span className="text-sm">Gestão de Equipes</span>
          </Button>
          
          <Button 
            variant="outline" 
            className="h-20 flex flex-col space-y-2 hover:bg-accent-foreground hover:text-white transition-all duration-300"
          >
            <BarChart3 className="h-6 w-6" />
            <span className="text-sm">Relatórios</span>
          </Button>
          
          <Button 
            variant="outline" 
            className="h-20 flex flex-col space-y-2 hover:bg-accent-foreground hover:text-white transition-all duration-300"
          >
            <Settings className="h-6 w-6" />
            <span className="text-sm">Configurações</span>
          </Button>
          
          <Button 
            variant="outline" 
            className="h-20 flex flex-col space-y-2 hover:bg-accent-foreground hover:text-white transition-all duration-300"
          >
            <FileText className="h-6 w-6" />
            <span className="text-sm">Documentos</span>
          </Button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AdminDashboard;