// routes/appRoutes.tsx
import { RouteType } from "./config";
import { Route, Routes } from "react-router-dom";

// =================== ÍCONES ===================
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
 
import BusinessIcon from "@mui/icons-material/Business";
 
import BoltIcon from '@mui/icons-material/Bolt';
import PowerInputIcon from '@mui/icons-material/PowerInput';

// =================== PÁGINAS ===================
import HomePage from "../pages/home/HomePage";
 

// Prestador
import JanelaPrestador from "../pages/JanelaPrestador";
import Ri from "../pages/Ri";
import Rnc from "../pages/Rnc";
import RelatorioPosReparo from "../pages/outros/RelatorioPosReparo";
 
import RelatorioNaoConformidadeRNC from "../pages/outros/RelatorioNaoConformidadeRNC";
import RelatorioPosReparoRR from "../pages/outros/RelatorioPosReparoRR";
import Relatorios from "../pages/outros/Relatorios";
import RelatoriosTAG from "../pages/outros/RelatoriosTAG";

// Caldeira
import CaldeiraPageLayout from "../pages/caldeira/CaldeiraPageLayout";
import CaldeiraIndex1 from "../pages/caldeira/CaldeiraIndex1";
import CaldeiraForca from "../pages/caldeira/CaldeiraForca";

// Outros
 
import RelatorioInspecaoRIs from "../pages/outros/RelatorioInspecaoRIs";
import TAGs from "../pages/caldeira/TAGs";

// =================== ROTAS PRINCIPAIS ===================
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
    path: "/videos/:filename",
    element: <HomePage />,
    state: "homeP"
  },
/* {
    path: "/carregaDados",
    element: <CarregarDados />,
    state: "carregaDados",
    sidebarProps: {
      displayText: "Carregar Dados",
      icon: <CloudUploadIcon />
    }
  } , 
  {
    path: "/empresa",
    element: <Empresa />,
    state: "empresa",
    sidebarProps: {
      displayText: "Cadastrar Prestadores",
      icon: <BusinessIcon />
    }
  }, */
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
      },/*
      {
        path: "/prestador/NewPassword/:hash",
        element: <NewPassword />,
        state: "newPassword",
        sidebarProps: {
          displayText: "Nova Senha externo",
          icon: <PasswordIcon />
        }
      }, */ 
      {
        path: "/prestador/janelaprincipal",
        element: <JanelaPrestador />,
        state: "janelaprestador",
        sidebarProps: {
          displayText: "Janela Principal",
          icon: <BusinessIcon />
        }
      }/*,
      {
        path: "/prestador/RC/:id",
        element: <RelatorioCancelado />,
        state: "relatorioCancelado",
        sidebarProps: {
          displayText: "RC - Relatório de Cancelamento",
          icon: <LibraryBooksTwoToneIcon />
        }
      },
      {
        path: "/prestador/glb",
        element: <RelatorioPosReparo />,
        state: "relatorioReparo",
        sidebarProps: {
          displayText: "3D Engine",
          icon: <LibraryBooksTwoToneIcon />
        }
      }*/
    ]
  },
  {
    path: "/CaldeiraForca",
    element: <CaldeiraForca />,
    state: "caldeiraforca",
    sidebarProps: {
      displayText: "Caldeira Força",
      icon: <BoltIcon/>
    }
  } ,
  {
    path: "/TAGs",
    element: <TAGs />,
    state: "caldeiraforca",
    sidebarProps: {
      displayText: "TAGs",
      icon: <PowerInputIcon />
    }
  }, 

  {
  path: "/prestador/Ris/:id",
  element: <RelatorioInspecaoRIs />,
  state: "ris",
  sidebarProps: {
    displayText: " "
    
  }, 
},



  {
  path: "/prestador/RNCs/:id",
  element: <RelatorioNaoConformidadeRNC />,
  state: "rncs",
  sidebarProps: {
    displayText: " "
    
  }

  },

    {
  path: "/prestador/RRs/:id",
  element: <RelatorioPosReparoRR />,
  state: "rrs",
  sidebarProps: {
    displayText: " "
    
  }

  },




      {
        path: "/prestador/Ri/:id",
        element: <Ri />,
        state: "ri",
        sidebarProps: {
          displayText: " ",
          
        }
      },
      {
        path: "/prestador/Rnc/:id",
        element: <Rnc />,
        state: "rnc",
        sidebarProps: {
          displayText: " ",
           
        }
      },
      {
        path: "/prestador/RR/:id",
        element: <RelatorioPosReparo />,
        state: "relatorioReparo",
        sidebarProps: {
          displayText: " ",
          
        }
      },
 
 {
        path: "/relatorios/:etag",
        element: <Relatorios />,
        state: "relatorios",
        sidebarProps: {
          displayText: "",
          
        }
      },

 {
        path: "/relatoriosTAG/:tag",
        element: <RelatoriosTAG />,
        state: "relatoriosTAG",
        sidebarProps: {
          displayText: "",
          
        }
      }

 












];

export default appRoutes;
