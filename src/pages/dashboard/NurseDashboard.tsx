import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { 
  Calendar, 
  Clock, 
  CheckSquare, 
  AlertTriangle, 
  Users, 
  Heart,
  Activity,
  Clipboard,
  ArrowRight,
  Plus,
  Filter
} from 'lucide-react';

const NurseDashboard = () => {
  const stats = [
    {
      title: 'Plantão Atual',
      value: '12h',
      change: 'Turno Noturno',
      icon: Clock,
      color: 'text-primary'
    },
    {
      title: 'Atividades Hoje',
      value: '8',
      change: '5 concluídas',
      icon: CheckSquare,
      color: 'text-green-600'
    },
    {
      title: 'Pacientes Sob Cuidado',
      value: '24',
      change: 'Setor UTI',
      icon: Users,
      color: 'text-secondary'
    },
    {
      title: 'Medicações Pendentes',
      value: '6',
      change: 'Próxima: 14:00',
      icon: AlertTriangle,
      color: 'text-orange-600'
    }
  ];

  const kanbanColumns = [
    {
      title: 'A Fazer',
      count: 4,
      color: 'bg-gray-100',
      tasks: [
        { id: 1, title: 'Medicação paciente 101', time: '14:00', priority: 'high' },
        { id: 2, title: 'Curativo paciente 105', time: '14:30', priority: 'medium' },
        { id: 3, title: 'Aferição sinais vitais', time: '15:00', priority: 'low' },
      ]
    },
    {
      title: 'Em Andamento',
      count: 2,
      color: 'bg-blue-100',
      tasks: [
        { id: 4, title: 'Higienização paciente 103', time: '13:45', priority: 'medium' },
        { id: 5, title: 'Coleta de exames', time: '14:15', priority: 'high' },
      ]
    },
    {
      title: 'Concluído',
      count: 5,
      color: 'bg-green-100',
      tasks: [
        { id: 6, title: 'Rounds matinais', time: '08:00', priority: 'low' },
        { id: 7, title: 'Medicação paciente 102', time: '10:00', priority: 'high' },
        { id: 8, title: 'Relatório de passagem', time: '12:00', priority: 'medium' },
      ]
    }
  ];

  const schedule = [
    { day: 'Seg', date: '15', shift: 'Manhã', status: 'active' },
    { day: 'Ter', date: '16', shift: 'Tarde', status: 'scheduled' },
    { day: 'Qua', date: '17', shift: 'Folga', status: 'off' },
    { day: 'Qui', date: '18', shift: 'Noite', status: 'scheduled' },
    { day: 'Sex', date: '19', shift: 'Manhã', status: 'scheduled' },
    { day: 'Sáb', date: '20', shift: 'Folga', status: 'off' },
    { day: 'Dom', date: '21', shift: 'Tarde', status: 'scheduled' },
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'border-l-red-500 bg-red-50';
      case 'medium': return 'border-l-yellow-500 bg-yellow-50';
      case 'low': return 'border-l-green-500 bg-green-50';
      default: return 'border-l-gray-500 bg-gray-50';
    }
  };

  return (
    <DashboardLayout userProfile="nurse">
      <div className="space-y-6">
        {/* Welcome Banner */}
        <div className="bg-gradient-to-br from-secondary to-blue-500 p-6 rounded-2xl text-white">
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <h2 className="text-2xl font-heading font-bold">
                Olá, Enfermeira Maria! 👩‍⚕️
              </h2>
              <p className="text-white/90">
                Plantão noturno em andamento. Você tem 8 atividades programadas para hoje.
              </p>
            </div>
            <div className="p-4 bg-white/20 rounded-2xl">
              <Heart className="h-12 w-12" />
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
          {/* Kanban Board */}
          <div className="lg:col-span-2">
            <Card className="p-6 border-0 shadow-soft bg-white">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-heading font-semibold text-foreground">
                  Gestão de Atividades - Kanban
                </h3>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    <Filter className="h-4 w-4 mr-2" />
                    Filtros
                  </Button>
                  <Button size="sm" className="bg-primary hover:bg-primary-deep">
                    <Plus className="h-4 w-4 mr-2" />
                    Nova Atividade
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {kanbanColumns.map((column, colIndex) => (
                  <div key={colIndex} className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-accent rounded-lg">
                      <h4 className="font-medium text-foreground">{column.title}</h4>
                      <Badge variant="secondary" className="text-xs">
                        {column.count}
                      </Badge>
                    </div>

                    <div className="space-y-3">
                      {column.tasks.map((task) => (
                        <div 
                          key={task.id} 
                          className={`p-3 rounded-lg border-l-4 cursor-pointer transition-all duration-200 hover:shadow-medium ${getPriorityColor(task.priority)}`}
                        >
                          <div className="space-y-2">
                            <p className="text-sm font-medium text-foreground">{task.title}</p>
                            <div className="flex items-center justify-between">
                              <span className="text-xs text-muted-foreground flex items-center">
                                <Clock className="h-3 w-3 mr-1" />
                                {task.time}
                              </span>
                              <Badge 
                                variant={task.priority === 'high' ? 'destructive' : 'outline'}
                                className="text-xs"
                              >
                                {task.priority === 'high' ? 'Alta' : task.priority === 'medium' ? 'Média' : 'Baixa'}
                              </Badge>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Weekly Schedule */}
          <div className="space-y-6">
            <Card className="p-6 border-0 shadow-soft bg-white">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-heading font-semibold text-foreground">
                  Escala Semanal
                </h3>
                <Button variant="outline" size="sm">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>

              <div className="space-y-3">
                {schedule.map((item, index) => (
                  <div key={index} className={`
                    p-3 rounded-lg border transition-all duration-200
                    ${item.status === 'active' ? 'bg-primary text-white border-primary' : 
                      item.status === 'off' ? 'bg-gray-100 text-gray-600' : 
                      'bg-white border-gray-200 hover:bg-accent'}
                  `}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="text-center">
                          <p className="text-xs font-medium">{item.day}</p>
                          <p className="text-sm font-bold">{item.date}</p>
                        </div>
                        <div>
                          <p className="font-medium">{item.shift}</p>
                          {item.status === 'active' && (
                            <p className="text-xs opacity-90">Em andamento</p>
                          )}
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        {item.status === 'active' && (
                          <Activity className="h-4 w-4 animate-pulse" />
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Quick Stats */}
            <Card className="p-6 border-0 shadow-soft bg-white">
              <h3 className="text-lg font-heading font-semibold text-foreground mb-4">
                Performance do Mês
              </h3>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Atividades Concluídas</span>
                    <span className="text-sm font-medium">85%</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Pontualidade</span>
                    <span className="text-sm font-medium">98%</span>
                  </div>
                  <Progress value={98} className="h-2" />
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Treinamentos</span>
                    <span className="text-sm font-medium">75%</span>
                  </div>
                  <Progress value={75} className="h-2" />
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Button 
            variant="outline" 
            className="h-20 flex flex-col space-y-2 hover:bg-secondary hover:text-white transition-all duration-300"
          >
            <Clipboard className="h-6 w-6" />
            <span className="text-sm">Checklist</span>
          </Button>
          
          <Button 
            variant="outline" 
            className="h-20 flex flex-col space-y-2 hover:bg-secondary hover:text-white transition-all duration-300"
          >
            <Calendar className="h-6 w-6" />
            <span className="text-sm">Escala Completa</span>
          </Button>
          
          <Button 
            variant="outline" 
            className="h-20 flex flex-col space-y-2 hover:bg-secondary hover:text-white transition-all duration-300"
          >
            <Activity className="h-6 w-6" />
            <span className="text-sm">Conteúdos</span>
          </Button>
          
          <Button 
            variant="outline" 
            className="h-20 flex flex-col space-y-2 hover:bg-secondary hover:text-white transition-all duration-300"
          >
            <Heart className="h-6 w-6" />
            <span className="text-sm">Treinamentos</span>
          </Button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default NurseDashboard;