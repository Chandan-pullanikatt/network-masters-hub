import { 
    User, Shield, Server, Activity, Database, Globe, Lock, Cpu, Cloud, Code, 
    Award, Layers, Route, ShieldCheck, Bot, Share2, Settings, LineChart, 
    Terminal, Boxes, ArrowLeftRight, Cog, Monitor, UserCheck, Video
} from 'lucide-react';

export const IconMap: Record<string, any> = {
    'User': User,
    'Shield': Shield,
    'Server': Server,
    'Activity': Activity,
    'Database': Database,
    'Globe': Globe,
    'Lock': Lock,
    'Cpu': Cpu,
    'Cloud': Cloud,
    'Code': Code,
    'Award': Award,
    'Layers': Layers,
    'Route': Route,
    'ShieldCheck': ShieldCheck,
    'Bot': Bot,
    'Share2': Share2,
    'Settings': Settings,
    'LineChart': LineChart,
    'Terminal': Terminal,
    'Boxes': Boxes,
    'ArrowLeftRight': ArrowLeftRight,
    'Cog': Cog,
    'Monitor': Monitor,
    'UserCheck': UserCheck,
    'Video': Video
};

export function getIcon(name: string) {
    return IconMap[name] || Shield; // Default icon
}
