import CaldeiraPageLayout from "../pages/caldeira/CaldeiraPageLayout";
import BiscasDeSmelt from "../pages/caldeira/BicasDeSmelt";
 
import HomePage from "../pages/home/HomePage";
import { RouteType } from "./config";
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import CaldeiraIndex1 from "../pages/caldeira/CaldeiraIndex1";
import CaldeiraIndex2 from "../pages/caldeira/CaldeiraIndex2";
import CaldeiraIndex3 from "../pages/caldeira/CaldeiraIndex3";
import teste1 from "../pages/outros/teste1";
 
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';

import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
 


import Balao from "../pages/caldeira/Balao";
import DocumentationPage from "../pages/documentation/DocumentationPage";
import BocaDeVisitaFornalhaAlta from "../pages/caldeira/BocaDeVisitaFornalhaAlta";
import BocaDeVisitaFornalhaBaixa from "../pages/caldeira/BocaDeVisitaFornalhaBaixa";
import CamaraFria from "../pages/caldeira/CamaraFria";
import CameraTV from "../pages/caldeira/CameraTV";
import EconomizadorI from "../pages/caldeira/EconomizadorI";
import EconomizadorII from "../pages/caldeira/EconomizadorII";
import DutosEVentiladores from "../pages/caldeira/DutosEVentiladores";
import EntradaAr from "../pages/caldeira/EntradaAr";
import EntradaArSecundaria from "../pages/caldeira/EntradaArSecundaria";
import EntradaArTerciaria from "../pages/caldeira/EntradaArTerciaria";
import Grid from "../pages/caldeira/GRID";
import ParedeDeAgua from "../pages/caldeira/ParedeDeAgua";
import Nariz from "../pages/caldeira/Nariz";
import Porao from "../pages/caldeira/Porao";
import Penthouse from "../pages/caldeira/Penthouse";
import Piso from "../pages/caldeira/Piso";
import Queimadores from "../pages/caldeira/Queimadores";
import SuperaquecedorPrimarioI from "../pages/caldeira/SuperaquecedorPrimarioI";
import Screen from "../pages/caldeira/Screen";
import SuperaquecedorPrimarioII from "../pages/caldeira/SuperaquecedorPrimarioII";
import SuperaquecedorTerciario from "../pages/caldeira/SuperaquecedorTerciario";
import SuperaquecedorSecundario from "../pages/caldeira/SuperaquecedorSecundario";
import SuperaquecedorQuartenario from "../pages/caldeira/SuperaquecedorQuartenario";
import Bank from "../pages/caldeira/Bank";
import TanqueDissolvedor from "../pages/caldeira/TanqueDissolvedor";
import TesteHidrostatico from "../pages/caldeira/TesteHidrostatico";
import ValvulaSeguranca from "../pages/caldeira/ValvulaSeguranca";
import SopradoresDeFuliagem from "../pages/caldeira/SopradoresDeFuliagem";
import Teto from "../pages/caldeira/Teto";
import Caldeira from "../pages/caldeira";
import CarregarDados from "../pages/carregaDados/CarregarDados";
 
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import BusinessIcon from '@mui/icons-material/Business';
import Empresa from "../pages/carregaDados/Empresa";
 
 
import JanelaPrestador from "../pages/JanelaPrestador";
import PasswordIcon from '@mui/icons-material/Password';
import NewPassword from "../pages/carregaDados/NewPassword";
 
import Ri from "../pages/Ri";
import RelatorioPosReparo from "../pages/outros/RelatorioPosReparo";
import Rnc from "../pages/Rnc";
import SummarizeTwoToneIcon from '@mui/icons-material/SummarizeTwoTone';
import AssessmentTwoToneIcon from '@mui/icons-material/AssessmentTwoTone';
import LibraryBooksTwoToneIcon from '@mui/icons-material/LibraryBooksTwoTone';
import Evaporadora from "../pages/caldeira/Evaporadora";
import Evaporacao from "../pages/caldeira/VasosEvaporacao";
import VasosCaldeira from "../pages/caldeira/VasosCaldeiraNR13";
import ATMCaldeira from "../pages/caldeira/ATMCaldeira";
import ATMSecagem from "../pages/secagem/ATMSecagem";
import VasosSecagem from "../pages/secagem/VasosSecagem";
import ATMCaustificacao from "../pages/caustificacao/ATMCaustificacao";
import VasosCaustificacao from "../pages/caustificacao/VasosCaustificacao";
import ATMBranqueamento from "../pages/branqueamento/ATMBranqueamento";
import VasosBranqueamento from "../pages/branqueamento/VasosBranqueamento";
import RoscasTransportadoras from "../pages/caldeira/RoscasTransportadoras";
import Teste from "../pages/branqueamento/Teste";
import VasosCaldeiraNR13 from "../pages/caldeira/VasosCaldeiraNR13";
import ATMLinhaFibras from "../pages/LinhasFibras/ATMLinhaFibras";
import VasosLinhaFibras from "../pages/LinhasFibras/VasosLinhaFibras";
import ATMEvaporacao from "../pages/evaporacao/ATMEvaporacao";
import TurboGerador from "../pages/caldeira/TurboGerador";
import ETAETAC from "../pages/caldeira/ETAETAC";
import Digestor from "../pages/caldeira/Digestor"
import FornoCal from "../pages/caldeira/FornoCal";
import Relatorios from "../pages/outros/Relatorios";
import RelatorioInspecao from "../pages/outros/RelatorioInspecao";
import RelatorioInspecaoRI from "../pages/outros/RelatorioInspecaoRI";
import RelatorioNaoConformidadeRNC from "../pages/outros/RelatorioNaoConformidadeRNC";
import RelatorioPosReparoRR from "../pages/outros/RelatorioPosReparoRR";
const appRoutes: RouteType[] = [
  {
    index: true,
    element: <HomePage />,
    state: "home"
  },
  {
    path: "/home",
    element: <HomePage />,
    state: "home",
    sidebarProps: {
      displayText: "Início",
      icon: <AccountBalanceIcon />
    }
  },
    
    
  {
    path: "/carregaDados",
    element: <CarregarDados />,
    state: "carregaDados",
    sidebarProps: {
      displayText: "Carregar Dados",
      icon: <CloudUploadIcon />
    }
  },  
  
  {
    path: "/empresa",
    element: <Empresa />,
    state: "empresa",
    sidebarProps: {
      displayText: "Cadastrar Prestadores",
      icon: <BusinessIcon />
    }
  },
  
 
  {
    path: "/prestador",
    element: <CaldeiraPageLayout />,
    state: "caldeira",
    sidebarProps: {
      displayText: "Módulo MKS",
      icon: <DashboardOutlinedIcon />
    },
    child: [
      { 
        index: true,
        element: <CaldeiraIndex1 />,
        state: "caldeira.index1"
      },
 
      {
        path: "/prestador/NewPassword/:hash",
        element: <NewPassword />  ,
        state: "newPassword",
        sidebarProps: {
          displayText: "Nova Senha externo",
          icon: <PasswordIcon />
        }
      },
      
      {
        path: "/prestador/janelaprincipal",
        element: <JanelaPrestador/>,
        state: "janelaprestador",
        sidebarProps: {
          displayText: "Janela Principal",
          icon: <BusinessIcon />
        }
      },
      {
        path: "/prestador/Ri/:id",
        element: <Ri />  ,
        state: "ri",
        sidebarProps: {
          displayText: "RI - Relatório de inspeção",
          icon: <SummarizeTwoToneIcon />
        }


        


      },



      {
 



        path: "/prestador/Rnc/:idRelatorioInspecao/:id/:noTAG",
        element: <Rnc/> ,
        state: "rnc",
        sidebarProps: {
          displayText: "RNC - Relatório de Não Conformidade",
          icon: <AssessmentTwoToneIcon />
        }
      },
      
      {
        path: "/prestador/RR/:id",
        element: <RelatorioPosReparo />  ,
        state: "relatorioReparo",
        sidebarProps: {
          displayText: "RR - Relatório Pós Reparo",
          icon: <LibraryBooksTwoToneIcon />
        }
      },







 
      {
        path: "/prestador/glb",
        element: <RelatorioPosReparo />   ,
        state: "relatorioReparo",
        sidebarProps: {
          displayText: "3D Engine",
          icon: <LibraryBooksTwoToneIcon />
        }
      },
  
]},



 

  
 
 
 

  
  
  {
    path: "/Caldeira",
    element: <CaldeiraIndex1 />,
    state: "Caldeirahome",
    sidebarProps: {
      displayText: "Caldeira",
      icon: <AccountBalanceIcon />
    }
  },
 
 
  {
    path: "/caldeira",
    element: <CaldeiraPageLayout />,
    state: "caldeira",
    sidebarProps: {
      displayText: "CALDEIRA - A/E",
      icon: <DashboardOutlinedIcon />
    },
    child: [
      {
        index: true,
        element: <CaldeiraIndex1 />,
        state: "caldeira.index1"
      },
      {
        path: "/caldeira/balao",
        element: <Balao/>,
        state: "caldeira.balao",
        
        sidebarProps: {
          displayText: "Balão", icon: <DashboardOutlinedIcon />
        }
      },
      {
        path: "/caldeira/bank",
        element: <Bank />,
        state: "caldeira.bank",
        sidebarProps: {
          displayText: "Bank", icon: <DashboardOutlinedIcon />
        }
      },
      {
        path: "/caldeira/BicasDeSmelt",
        element: <BiscasDeSmelt />,
        state: "caldeira.bicasdesmelt",
        sidebarProps: {
          displayText: "Bicas de Smelt",
          icon: <DashboardOutlinedIcon />
        }

      },
      {
        path: "/caldeira/BocaDeVisitaFornalhaAlta",
        element: <BocaDeVisitaFornalhaAlta />,
        state: "caldeira.bocadevisitafornalhaaltat",
        sidebarProps: {
          displayText: "Boca de visita fornalha alta",
          icon: <DashboardOutlinedIcon />
        }
      },
      {
        path: "/caldeira/BocaDeVisitaFornalhaBaixa",
        element: <BocaDeVisitaFornalhaBaixa />,
        state: "caldeira.bocadevisitafornalhabaixa",
        sidebarProps: {
          displayText: "Boca de visita fornalha baixa",
          icon: <DashboardOutlinedIcon />
        }
      },

      {
        path: "/caldeira/CamaraFria",
        element: <CamaraFria />,
        state: "caldeira.camarafria",
        sidebarProps: {
          displayText: "Camara Fria",
          icon: <DashboardOutlinedIcon />
        }
      },

      {
        path: "/caldeira/CamaraTV",
        element: <CameraTV />,
        state: "caldeira.cameraTV",
        sidebarProps: {
          displayText: "Camera TV",
          icon: <DashboardOutlinedIcon />
        }
      },


      {
        path: "/caldeira/DutosEVentiladores",
        element: <DutosEVentiladores />,
        state: "caldeira.dutoseventiladores",
        sidebarProps: {
          displayText: "Dutos e Ventiladores",
          icon: <DashboardOutlinedIcon />
        }
      }


    ]
  },

  {
    path: "/caldeira",
    element: <CaldeiraPageLayout />,
    state: "caldeira",
    sidebarProps: {
      displayText: "CALDEIRA - F/P",
      icon: <DashboardOutlinedIcon />
    },
    child: [
      {
        index: true,
        element: <CaldeiraIndex2 />,
        state: "caldeira.index2"
      },









      {
        path: "/caldeira/EconomizadorI",
        element: <EconomizadorI />,
        state: "caldeira.economizadorI",
        sidebarProps: {
          displayText: "Economizador I",
          icon: <DashboardOutlinedIcon />
        }
      },

      {
        path: "/caldeira/EconomizadorII",
        element: <EconomizadorII />,
        state: "caldeira.economizadorII",
        sidebarProps: {
          displayText: "Economizador II",
          icon: <DashboardOutlinedIcon />
        }
      },




      {
        path: "/caldeira/EntradaAr",
        element: <EntradaAr />,
        state: "caldeira.entradaar",
        sidebarProps: {
          displayText: "Entrada de Ar",
          icon: <DashboardOutlinedIcon />
        }
      }
      ,


      {
        path: "/caldeira/EntradaArSecundaria",
        element: <EntradaArSecundaria />,
        state: "caldeira.entradaarsecundaria",
        sidebarProps: {
          displayText: "Entrada de Ar Secundária",
          icon: <DashboardOutlinedIcon />
        }
      }

      ,


      {
        path: "/caldeira/EntradaArTerciaria",
        element: <EntradaArTerciaria />,
        state: "caldeira.entradaarterciaria",
        sidebarProps: {
          displayText: "Entrada de Ar Terciária",
          icon: <DashboardOutlinedIcon />
        }
      }


      ,


      {
        path: "/caldeira/grid",
        element: <Grid />,
        state: "caldeira.grid",
        sidebarProps: {
          displayText: "Grid",
          icon: <DashboardOutlinedIcon />
        }
      }
      ,


      {
        path: "/caldeira/nariz",
        element: <Nariz />,
        state: "caldeira.nariz",
        sidebarProps: {
          displayText: "Nariz",
          icon: <DashboardOutlinedIcon />
        }
      }
      ,


      {
        path: "/caldeira/parededeagua",
        element: <ParedeDeAgua />,
        state: "caldeira.parededeagua",
        sidebarProps: {
          displayText: "Parede de Água",
          icon: <DashboardOutlinedIcon />
        }
      }



      ,




      {
        path: "/caldeira/penthouse",
        element: <Penthouse />,
        state: "caldeira.penthouse",
        sidebarProps: {
          displayText: "Penthouse",
          icon: <DashboardOutlinedIcon />
        }
      },


      {
        path: "/caldeira/piso",
        element: <Piso />,
        state: "caldeira.piso",
        sidebarProps: {
          displayText: "Piso",
          icon: <DashboardOutlinedIcon />
        }
      },



      {
        path: "/caldeira/porao",
        element: <Porao />,
        state: "caldeira.porao",
        sidebarProps: {
          displayText: "Porão",
          icon: <DashboardOutlinedIcon />
        }
      }





    ]
  },


  {
    path: "/caldeira",
    element: <CaldeiraPageLayout />,
    state: "caldeira",
    sidebarProps: {
      displayText: "CALDEIRA - Q/Z",
      icon: <DashboardOutlinedIcon />
    },
    child: [
      {
        index: true,
        element: <CaldeiraIndex3 />,
        state: "caldeira.index3"
      },







      {
        path: "/caldeira/queimadores",
        element: <Queimadores />,
        state: "caldeira.queimadores",
        sidebarProps: {
          displayText: "Queimadores",
          icon: <DashboardOutlinedIcon />
        }
      }

      ,


      {
        path: "/caldeira/screen",
        element: <Screen />,
        state: "caldeira.screen",
        sidebarProps: {
          displayText: "Screen",
          icon: <DashboardOutlinedIcon />
        }
      },



      {
        path: "/caldeira/SopradoresDeFuliagem",
        element: <SopradoresDeFuliagem />,
        state: "caldeira.sopradoresdefuliagem",
        sidebarProps: {
          displayText: "Sopradores de Fuliagem",
          icon: <DashboardOutlinedIcon />
        }
      },



      {
        path: "/caldeira/superaquecedorprimarioI",
        element: <SuperaquecedorPrimarioI />,
        state: "caldeira.superaquecedorprimariaI",
        sidebarProps: {
          displayText: "Super aquecedor primário I",
          icon: <DashboardOutlinedIcon />
        }
      }





      ,


      {
        path: "/caldeira/superaquecedorprimarioII",
        element: <SuperaquecedorPrimarioII />,
        state: "caldeira.superaquecedorprimariaII",
        sidebarProps: {
          displayText: "Super aquecedor primário II",
          icon: <DashboardOutlinedIcon />
        }
      }

      ,


      {
        path: "/caldeira/superaquecedorsecundario",
        element: <SuperaquecedorSecundario />,
        state: "caldeira.superaquecedorsecundario",
        sidebarProps: {
          displayText: "Super aquecedor secundário",
          icon: <DashboardOutlinedIcon />
        }
      }

      ,


      {
        path: "/caldeira/superaquecedorterciario",
        element: <SuperaquecedorTerciario />,
        state: "caldeira.superaquecedorterciario",
        sidebarProps: {
          displayText: "Super aquecedor terciário",
          icon: <DashboardOutlinedIcon />
        }
      }

      ,


      {
        path: "/caldeira/superaquecedorquaternario",
        element: <SuperaquecedorQuartenario />,
        state: "caldeira.superaquecedorquartenario",
        sidebarProps: {
          displayText: "Super aquecedor quartenário",
          icon: <DashboardOutlinedIcon />
        }
      },

      {
        path: "/caldeira/tanquedissolvedor",
        element: <TanqueDissolvedor />,
        state: "caldeira.tanquedissolvedor",
        sidebarProps: {
          displayText: "Tanque Dissolvedor",
          icon: <DashboardOutlinedIcon />
        }
      },


      {
        path: "/caldeira/testehidrostatico",
        element: <TesteHidrostatico />,
        state: "caldeira.testehidrostatico",
        sidebarProps: {
          displayText: "Teste Hidrostatico",
          icon: <DashboardOutlinedIcon />
        }
      },


      {
        path: "/caldeira/teto",
        element: <Teto />,
        state: "caldeira.teto",
        sidebarProps: {
          displayText: "Teto",
          icon: <DashboardOutlinedIcon />
        }
      }
      ,


      {
        path: "/caldeira/valvuladeseguranca",
        element: <ValvulaSeguranca />,
        state: "caldeira.valvuladeseguranca",
        sidebarProps: {
          displayText: "Valvula de Segurança",
          icon: <DashboardOutlinedIcon />
        }
      }

 
    ]
  },





  {
    path: "/documentation",
    element: <DocumentationPage />,
    state: "documentation",
    sidebarProps: {
      displayText: "" 
      
    },

    
  },

 
 

  {
    path: "/evaporadora",
    element: <Evaporadora />,
    state: "evaporadora",
    sidebarProps: {
      displayText: "Evaporadora",
      icon: <ArticleOutlinedIcon />
    }
},


 

{
  path: "/evaporacao",
  element: <Evaporacao />,
  state: "evaporacao",
  sidebarProps: {
    displayText: "Evaporacao",
    icon: <ArticleOutlinedIcon />
  }
}
,


 

{
  path: "/VasosCaldeiraNR13",
  element: <VasosCaldeiraNR13 />,
  state: "vasoscaldeiranr13",
  sidebarProps: {
    displayText: "Vasos Caldeira NR-13",
    icon: <ArticleOutlinedIcon />
  }
}

,


 

{
  path: "/ATMCaldeira",
  element: <ATMCaldeira />,
  state: "atmcaldeira",
  sidebarProps: {
    displayText: "ATM Caldeira",
    icon: <ArticleOutlinedIcon />
  }
}
  
,


{
  path: "/ATMSecagem",
  element: <ATMSecagem />,
  state: "atmsecagem",
  sidebarProps: {
    displayText: "ATM Secagem",
    icon: <ArticleOutlinedIcon />
  }
}

,


{
  path: "/VasosSecagem",
  element: <VasosSecagem />,
  state: "vasossecagem",
  sidebarProps: {
    displayText: "Vasos Secagem",
    icon: <ArticleOutlinedIcon />
  }
}

,


{
  path: "/ATMCaustificacao",
  element: <ATMCaustificacao />,
  state: "atmcaustificacao",
  sidebarProps: {
    displayText: "ATM Caustificação",
    icon: <ArticleOutlinedIcon />
  }
}

,


{
  path: "/VasosCaustificacao",
  element: <VasosCaustificacao />,
  state: "vasoscaustificacao",
  sidebarProps: {
    displayText: "Vasos Caustificação",
    icon: <ArticleOutlinedIcon />
  }
}

,


{
  path: "/ATMBranqueamento",
  element: <ATMBranqueamento />,
  state: "atmbranqueamento",
  sidebarProps: {
    displayText: "ATM Branqueamento",
    icon: <ArticleOutlinedIcon />
  }
}

,


{
  path: "/VasosBranqueamento",
  element: <VasosBranqueamento />,
  state: "vasosbranqueamento",
  sidebarProps: {
    displayText: "Vasos Branqueamento",
    icon: <ArticleOutlinedIcon />
  }
}

,


{
  path: "/RoscasTransportadoras",
  element: <RoscasTransportadoras />,
  state: "roscastransportadoras",
  sidebarProps: {
    displayText: "Roscas Transportadoras",
    icon: <ArticleOutlinedIcon />
  }
}

,


{
  path: "/ATMLinhaFibras",
  element: <ATMLinhaFibras />,
  state: "atmlinhafibras",
  sidebarProps: {
    displayText: "ATM Linha de Fibras",
    icon: <ArticleOutlinedIcon />
  }
}

,


{
  path: "/ATMEvaporacao",
  element: <ATMEvaporacao />,
  state: "atmevaporacao",
  sidebarProps: {
    displayText: "ATM Evaporação",
    icon: <ArticleOutlinedIcon />
  }
}




,


{
  path: "/VasosLinhaFibras",
  element: <VasosLinhaFibras />,
  state: "vasoslinhafibras",
  sidebarProps: {
    displayText: "Vasos Linha de Fibras",
    icon: <ArticleOutlinedIcon />
  }
}

,

{
  path: "/RoscasTransportadoras",
  element: <RoscasTransportadoras />,
  state: "roscastransportadoras ",
  sidebarProps: {
    displayText: "Roscas Transportadoras",
    icon: <ArticleOutlinedIcon />
  }
}

,



{
  path: "/TurboGerador",
  element: <TurboGerador />,
  state: "turbogerador",
  sidebarProps: {
    displayText: "Turbo Gerador",
    icon: <ArticleOutlinedIcon />
  }
}

,




{
  path: "/ETAETAC",
  element: <ETAETAC />,
  state: "etaetac",
  sidebarProps: {
    displayText: "ETA/ETAC",
    icon: <ArticleOutlinedIcon />
  }
},


{
  path: "/Digestor",
  element: <Digestor />,
  state: "digestor",
  sidebarProps: {
    displayText: "Digestor",
    icon: <ArticleOutlinedIcon />
  }
}

,
{
  path: "/FornoCal",
  element: <FornoCal />,
  state: "fornocal",
  sidebarProps: {
    displayText: "Forno de Cal",
    icon: <ArticleOutlinedIcon />
  }
}
 
,
 

{
  path: "/teste",
  element: <Teste />,
  state: "teste",
  sidebarProps: {
    displayText: "Teste",
    icon: <ArticleOutlinedIcon />
  }
},
 
{
  path: "/prestador/Ris/:id",
  element: <RelatorioInspecaoRI />  ,
  state: "ris",
  sidebarProps: {
    displayText: "", 
    
  }
},
{
  path: "/prestador/RNCs/:id/:noTAG",
  element: <RelatorioNaoConformidadeRNC />  ,
  state: "rncs",
  sidebarProps: {
    displayText: "", 
    
  }
},

{
  path: "/prestador/RRs/:id/:noTAG",
  element: <RelatorioPosReparoRR />  ,
  state: "rncs",
  sidebarProps: {
    displayText: "", 
    
  }
},

{
  path: "/Relatorios/:etag",
  element: <Relatorios />  ,
  state: "relatorios",
  sidebarProps: {
    displayText: " " 
  }
}
   
];

export default appRoutes;