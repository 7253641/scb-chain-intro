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
      <TopAppBar title="区块链" />
      <Container maxWidth="md">
        <Box my={4}>
          <Typography variant="h5" component="h1" gutterBottom align="center">
            区块链技术介绍
          </Typography>
          <Typography variant="h6" component="h1" gutterBottom align="left">
            一、定义
          </Typography>
          <Typography variant="body1" gutterBottom>
            区块链技术本质上是利用非对称加密技术对交易进行数字签名，通过共识机制达成多节点一致，其中数据以链式区块形式组织存储的分布式账簿系统。这些数据块包含了多个交易的信息，相互串联而成，每个数据块包含了上一个数据块信息的哈希值，使得链成的数据难以被攻破和篡改。
          </Typography>
          <Typography variant="h6" component="h1" gutterBottom align="left">
            二、特性
          </Typography>
          <Typography variant="body1" component="li" gutterBottom>
            多中心。区块链中每个节点都存有一份完整的数据，多个机构之间数据实时同步，实时对账，多参与方之间在区块链网络中互相监督。
          </Typography>
          <Typography variant="body1" component="li" gutterBottom>
            完整。数据完整储存在全球各个节点上面，其中一个节点如果被毁坏，不会影响整个网络的数据安全。
          </Typography>
          <Typography variant="body1" component="li" gutterBottom>
            可信任。区块链上的每笔交易几乎无法修改，信息分布在几千几万个节点上，无法摧毁，也无凭空伪造出一笔交易。
          </Typography>

          <Typography variant="body1" component="li" gutterBottom>
            公开。较低的数据公开成本，同时也支持分级加密。且所有交易与资产的生命周期都记录在区块链上，用户可以持续追溯。
          </Typography>

          <Typography variant="body1" component="li" gutterBottom>
            自动。智能合约完全自动运行且不需要监督。大幅度改进商业模式，提升日常运营效率，降低营运成本。
          </Typography>
          <Typography variant="body1" component="li" gutterBottom>
            安全。改变区块链上的数据所需要的代价非常高，一般意味着要控制51%以上的算力，成本昂贵，几乎不可能做到。
          </Typography>
          <Typography variant="h6" component="h1" gutterBottom align="left">
            三、分类
          </Typography>
          <Typography variant="body1" gutterBottom>
            区块链根据网络扩展性、节点的可参与性及其功能价值，可以分为公有链、私有链和联盟链三种模式。
          </Typography>
          <Typography variant="body1" component="li" gutterBottom>
            公有链。任何人都可以作为节点参与区块链网络。货币提供交易验证激励，容易进行应用程序大规模部署，全球范围可以访问，不依赖于单个公司或辖区，匿名性强，任何参与者都可以在中写入、读取、参与交易验证（例：比特币）。
          </Typography>
          <Typography variant="body1" component="li" gutterBottom>
            私有链。针对单独的个体或实体。交易验证成员范围，系统内不需虚拟货币提供奖励（例：大学可以联合其各院系，完成各科目成绩登录，学分认证等功能）。
          </Typography>
          <Typography variant="body1" component="li" gutterBottom>
            联盟链。节点为事先设定，并通过共识机制确认，新增的节点需要通过联盟的准入。一般不需要数字货币提供交易验证激励。联盟链容易进行节点权限设定，拥有更高应用可扩展性。联盟链可大幅降低异地结算成本和时间，比现有系统更简单，效率更高，同时继承去中心化优点减轻垄断压力（例：大学和第三方课程提供者或认证机构进行合作）。
          </Typography>
          <Typography variant="body1" gutterBottom>
            区块链解决了现存最根本的问题就是不平等和不对称，在《区块链革命：比特币背后的技术如何改变货币和商业世界》一书中，作者Don
            Tapscott表示，互联网允许人们进行欺诈，收集我们的数据，侵犯我们的隐私，如果下一代互联网，不仅能够用于信息的通信，还能直接用于价值和金钱的直接通信呢？如果我们能够建立的商业，能够实现P2P式的交易，而无需强大的中介机构呢?区块链将成为这一变革的核心。区块链不仅仅是记录金融交易，它几乎可以记录任何有价值的东西。
          </Typography>
          <Typography variant="h6" component="h1" gutterBottom align="left">
            四、生态
          </Typography>
          <Typography variant="body1" component="li" gutterBottom>
            价值传输。区块链构造了可靠的价值传输网络，通过分布式账本和智能合约，实现数字资产和其流通逻辑的底层支撑。传统的中心化业务模式，价值传输必须要通过一个可信第三方，由第三方完成各方之间传输价值的对账、清算、结算，过程繁琐复杂，消耗资源和时间。通过区块链技术，参与各方各为中心，通过区块链底层技术及智能合约制定，方便快捷完成实时对账、清算和结算的动作。区块链构造了可靠的价值传输网络，通过分布式账本和智能合约，实现数字资产和其流通逻辑的底层支撑。传统的中心化业务模式，价值传输必须要通过一个可信第三方，由第三方完成各方之间传输价值的对账、清算、结算，过程繁琐复杂，消耗资源和时间。通过区块链技术，参与各方各为中心，通过区块链底层技术及智能合约制定，方便快捷完成实时对账、清算和结算的动作。
          </Typography>
          <Typography variant="body1" component="li" gutterBottom>
            业务协作。区块链改变了传统的业务协作模式，从传统的依靠基于业务流的低效协同升级为不依靠任何中介节点但是由平台保证基本业务流程的低成本、高效率、高可信协作系统。同时大幅度降低单点业务复杂度，任何机构只需要关心自身业务逻辑即可。
          </Typography>
          <MadeWithLove />
        </Box>
      </Container>
    </>
  );
}
