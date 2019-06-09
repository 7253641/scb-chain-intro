import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import "typeface-roboto";
import Box from "@material-ui/core/Box";
import TopAppBar from "../components/TopAppBar";
import MadeWithLove from "../components/MadeWithLove";

export default function App() {
  return (
    <>
      <CssBaseline />
      <TopAppBar title="区块链 +" />
      <Container maxWidth="md">
        <Box my={4}>
          <Typography variant="h6" component="h1" gutterBottom align="center">
            区块链 + 行业应用
          </Typography>
          <Typography variant="h6" component="h1" gutterBottom align="left">
            一、供应链金融
          </Typography>
          <Typography variant="body1" gutterBottom>
            针对供应链上小微企业融资难的困境，依托区块链上核心企业的信任传递，围绕核心企业及上下游多级供应链企业，并借助银行、保兑机构等服务商共同打造供应链金融产业生态闭环，从数字资产、产融平台、商业信用等多个方面打造全新供应链金融生态体系，促进多方企业互利共生，促进整个生态良性发展。
          </Typography>
          <Typography variant="body1" component="li" gutterBottom>
            基于全链条信息安全共享，实现供应链金融可视化，依托核心企业的信用传递，降低中小企业融资成本。
          </Typography>
          <Typography variant="body1" component="li" gutterBottom>
            为资金方提供全流程可追溯、穿透式资产确权和验真渠道，推动供应链金融健康稳定发展。
          </Typography>
          <Typography variant="body1" component="li" gutterBottom>
            通过区块链的价值连接，引导更多资金为实体经济服务，让科技赋能于产业，推动制造供应链向产业服务供应链转型。
          </Typography>
          <Typography variant="h6" component="h1" gutterBottom align="left">
            二、数字存证
          </Typography>
          <Typography variant="body1" gutterBottom>
            针对现有的各类电子凭证（如电子合同、电子发票等）可能存在造假以及难以自证其清的情况，通过区块链建立对于电子凭证的共识存储体系，基于数据多级加密和多维权限控制技术，安全保存电子凭证，实现高数字化、强可靠性的数字凭证分布式存储新生态。
          </Typography>
          <Typography variant="body1" component="li" gutterBottom>
            建立基于区块链的授信体系，多家机构的参与，为共识后的凭证信息提供了强大的信用背书。
          </Typography>
          <Typography variant="body1" component="li" gutterBottom>
            数字存证体系建立，记录凭证信息的同时建立凭证存储体系，全面记录凭证流转信息。
          </Typography>
          <Typography variant="body1" component="li" gutterBottom>
            建立信用体系联盟，建立“数字存证+”的存证、合作、共赢新生态。
          </Typography>
          <Typography variant="h6" component="h1" gutterBottom align="left">
            三、供应链溯源
          </Typography>
          <Typography variant="body1" gutterBottom>
            通过与物联网等技术的密切结合，将商品在整个产业链的生产记录保存在区块链上。无论是生产商、经销商还是消费者，均可通过可信记录看到商品的全部流转信息，从而打通产业链，将信息触达BC两端，全面提升供应链的产品质量和管理效率。
          </Typography>
          <Typography variant="body1" component="li" gutterBottom>
            通过块链式数据存储结构，技术服务商、生产厂商可以自证其清，政府监管更加有迹可循，呈现给消费者的信息更加真实可靠。
          </Typography>
          <Typography variant="body1" component="li" gutterBottom>
            基于分布式协作优化业务流程，降低商品运营成本，提升供应链全量环节的协同效率。
          </Typography>
          <Typography variant="body1" component="li" gutterBottom>
            数据的公开透明，使整个供应链条形成一个完整且流畅的信息流，更有利于产业优化升级，进而提升供应链管理的整体效率。
          </Typography>
          <Typography variant="h6" component="h1" gutterBottom align="left">
            四、能源资产
          </Typography>
          <Typography variant="body1" gutterBottom>
            通过物联网技术与区块链技术紧密结合，将能源资产数据录入到区块链上进行可信存储与共享，实现能源资产数字化。通过建立多方联系的业务平台，为绿色资产全生命周期赋能，提高融资效率、投建效率、交易效率、管理效率。
          </Typography>
          <Typography variant="body1" component="li" gutterBottom>
            通过物联网技术实现光伏面板等物理设备数据的可信采集，并存储于区块链平台形成数字化、标准化的可信绿色资产。
          </Typography>
          <Typography variant="body1" component="li" gutterBottom>
            分布式信息化协作平台解决绿色资产投建过程的信息不对称矛盾，提升投建效率。
          </Typography>
          <Typography variant="body1" component="li" gutterBottom>
            基于区块链的可信存储特质，绿色资产信息公开、透明、可信，为绿色资产融资、交易提供信用保障。
          </Typography>
          <MadeWithLove />
        </Box>
      </Container>
    </>
  );
}
