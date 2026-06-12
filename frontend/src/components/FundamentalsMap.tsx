import React from "react";
import { Server, Database, Cloud, Shield, Network, HardDrive, Zap, Globe, Cpu, Layers } from "lucide-react";

type Concept = {
  id: string;
  title: string;
  description: string;
  example: string;
  icon: React.ReactNode;
};

const concepts: Concept[] = [
  {
    id: "iaas",
    title: "IaaS (Infrastructure)",
    description: "Fornisce risorse di calcolo, rete e storage su richiesta. Hai il controllo completo sul sistema operativo.",
    example: "AWS EC2, Google Compute Engine",
    icon: <Server className="w-8 h-8 text-blue-500" />
  },
  {
    id: "paas",
    title: "PaaS (Platform)",
    description: "Piattaforma per sviluppare, eseguire e gestire app senza la complessità di mantenere l'infrastruttura.",
    example: "Heroku, Vercel, AWS Elastic Beanstalk",
    icon: <Layers className="w-8 h-8 text-purple-500" />
  },
  {
    id: "saas",
    title: "SaaS (Software)",
    description: "Applicazioni pronte all'uso fornite tramite internet e gestite interamente dal provider.",
    example: "Google Workspace, Salesforce",
    icon: <Cloud className="w-8 h-8 text-green-500" />
  },
  {
    id: "virtualization",
    title: "Virtualization & Containers",
    description: "Astrarre l'hardware fisico per eseguire più sistemi operativi o applicazioni isolate (Docker/Kubernetes).",
    example: "Docker, K8s, VMware",
    icon: <Cpu className="w-8 h-8 text-orange-500" />
  },
  {
    id: "regions-az",
    title: "Regions & Zones",
    description: "Data center distribuiti geograficamente. Le zone offrono alta disponibilità in una regione.",
    example: "eu-central-1 (Frankfurt), us-east-1",
    icon: <Globe className="w-8 h-8 text-indigo-500" />
  },
  {
    id: "iam",
    title: "IAM (Identity & Access)",
    description: "Gestisce identità, permessi e autenticazione per le risorse cloud in modo granulare e sicuro.",
    example: "AWS IAM, Azure Active Directory",
    icon: <Shield className="w-8 h-8 text-red-500" />
  },
  {
    id: "networking",
    title: "Cloud Networking",
    description: "Reti private virtuali (VPC), subnet, tabelle di routing e gateway per isolare e connettere le risorse.",
    example: "AWS VPC, Azure VNet",
    icon: <Network className="w-8 h-8 text-teal-500" />
  },
  {
    id: "storage",
    title: "Cloud Storage",
    description: "Archiviazione dati in vari formati: Object (file non strutturati), Block (dischi VM), File (condivisioni di rete).",
    example: "Amazon S3, EBS, EFS",
    icon: <HardDrive className="w-8 h-8 text-yellow-500" />
  },
  {
    id: "serverless",
    title: "Serverless Computing",
    description: "Esecuzione di codice on-demand senza gestire server. Paghi solo per il tempo di esecuzione effettivo.",
    example: "AWS Lambda, Google Cloud Functions",
    icon: <Zap className="w-8 h-8 text-pink-500" />
  },
  {
    id: "databases",
    title: "Managed Databases",
    description: "Database relazionali e NoSQL gestiti dal provider, con backup, patch e scaling automatici.",
    example: "Amazon RDS, DynamoDB",
    icon: <Database className="w-8 h-8 text-cyan-500" />
  }
];

export function FundamentalsMap() {
  return (
    <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl mb-4">
          Cloud Fundamentals Map
        </h1>
        <p className="max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400">
          Esplora i concetti fondamentali del Cloud Computing. Comprendi le basi prima di costruire architetture complesse.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {concepts.map((concept) => (
          <div
            key={concept.id}
            className="group relative bg-card rounded-2xl p-6 shadow-sm border border-border hover:shadow-md hover:border-primary/50 transition-all duration-300 overflow-hidden"
          >
            {/* Ambient background glow for visual effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-gray-50 dark:bg-slate-800 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  {concept.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-2">
                {concept.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-3">
                {concept.description}
              </p>
              
              <div className="pt-4 border-t border-border">
                <div className="flex items-start">
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider mr-2 mt-0.5">
                    ESEMPIO:
                  </span>
                  <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">
                    {concept.example}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
