import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import "typeface-roboto";
import Box from "@material-ui/core/Box";
import TopAppBar from "../components/TopAppBar";
import MadeWithLove from "../components/MadeWithLove";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  card: {
    minWidth: 275
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  p: {
    textIndent: 2
  }
});
export default function App() {
  return (
    <>
      <CssBaseline />
      <TopAppBar title="学分银行" />
      <Container maxWidth="md">
        <Box my={4}>
          <Typography variant="h6" component="h1" gutterBottom align="center">
            学分银行介绍
          </Typography>
          <Typography variant="h6" component="h1" gutterBottom align="left">
            一、概念
          </Typography>
          <Typography variant="body1" gutterBottom>
            学分银行(Credit Bank System, CBS)是学校等办学机构模拟、借鉴
            银行的功能和特点,以学分为计量单位,按照共同的参照标准,以信息平
            台为支撑,通过专门的认证服务机构对学习者的各类学习成果进行统一的
            认证与核算,使其在各个阶段通过各种途径获得的学分得到积累或转换。
            当被认定的学分积累达到规定数额时,可以据此作为获取学历证书、职业
            资格证书或培训证书的凭证。这是在国际上逐步通行并日趋成熟的一种新
            型教育教学管理制度。
          </Typography>
          <Typography variant="h6" component="h1" gutterBottom align="left">
            二、发展背景
          </Typography>
          <Typography variant="body1" gutterBottom>
            伴随工业社会向知识经济时代的迈进,构建终身教育体系成为世界潮
            流,其中遇到的最大难题是如何对终身学习各类成果进行科学认定。20多
            年来,境外兴起的学分银行成为破解上述难题的有力工具。英国、澳大利
            亚等国和中国香港地区首先建立了“资格框架”,在不同类型学习成果间建立
            分层级统一度量的标尺,助推学分转换。美国、加拿大在机构间达成互认
            学分的双边或多边“协议联盟”,全美已有80%以上州的大学按照协议吸纳
            社区学院学生,实现了各类教育的深度融合和协同发展。韩国于1996年实
            施“学分银行制”,认可来自各类教育培训机构的学习成果。俄罗斯于2005
            年起颁布一系列法案,成立国家认证机构(NAA),推广学分休系和评审参数,
            希望迎头赶上发达国家教育发展新趋势。
          </Typography>
          <Typography variant="body1" gutterBottom>
            在我国,不少机构先期努力试行学分互认,有过多种模式。例如职业
            教育双证模式,即职业院校学生获得学历证书的同时,获得职业资格证书;
            中高本衔接模式,即较低学历层次(主要是技校、中职、高职)学生通过
            相应课程、学制的衔接获得更高学历;区域模式,通常由地方政府主导,
            整合相关学校资源开展试验;校本模式,即具有学历颁证权的学校建立“学
            分银行”,凡按相关教学计划学习的学生可以获得课程免修或双证书;协议
            联盟模式,即为实现优质资源共享,层级水平相当的办学机构间按协议推
            进对等课程学分的互认。上述探索取得了宝贵的经验,但仍存在不少困难
            和问题:一是无相关法律和政策的支持;二是尚属于局部领域开展的试验,
            缺乏统一的标准和公共服务平台;三是教育或人力资源等部门多头管理种
            类繁多、规格不一的职业资格证书的体制,阻碍着统一学分认证制度的建
            立。其中,多种形式学习成果之间学分如何实现转换,是一个长期不易解
            决的难题。
          </Typography>
          <Typography variant="h6" component="h1" gutterBottom align="left">
            三、国内现状
          </Typography>
          <Typography variant="body1" gutterBottom>
            2015年12月15日，继续教育学习成果认证、积累与转换试点工作推进会
            在北京召开。国家开放大学、北京开放大学、上海开放大学、江苏开放大学、
            广东开放大学、云南开放大学共同发起了《加快推进学分银行建设联合行动倡议》。
            继续教育学习成果认证、积累与转换制度从前期的顶层设计及局部探索正式转入全
            面试点阶段。
          </Typography>
          <Typography variant="body1" gutterBottom>
            倡议要点如下:
          </Typography>
          <Typography variant="subtitle1" gutterBottom component="li">
            共同发起成立学习成果互认联盟,促进行业、教育及培训机构的广泛参与,有效推动优质资源共享及学分互认。
          </Typography>
          <Typography variant="body1" gutterBottom component="li">
            充分利用开放大学建设工作基础,优势互补,联合参与有关学分银行建设研究与实践的国家项目。
          </Typography>
          <Typography variant="body1" gutterBottom component="li">
            共同参与继续教育学习成果认证、积累与转换国家试点。为学习者建立线身学习账户,建设互联互通的信息平台和共享的认
            {"\t"}证服务体系。
          </Typography>
          <Typography variant="body1" gutterBottom component="li">
            共同探索推进国家学分银行体系建设,建立区域学分银行与国家学分银行的接口机制。
          </Typography>
          <Typography variant="body1" gutterBottom component="li">
            联合行业、院校、培训机构及企业，共同制定和推广应用学习成果认证标准，合作开展专业课程建设，推动教育教学改革。
          </Typography>
          <Typography variant="body1" gutterBottom component="li">
            共同维护学分银行品牌和声誉，主动接受政府和社会的监督，保证学习成果认证、积累与转换质量和公信力。
          </Typography>
          <Typography variant="body1" gutterBottom component="li">
            共同维护学分银行品牌和声誉，主动接受政府和社会的监督，保证学习成果认证、积累与转换质量和公信力。
          </Typography>
          <MadeWithLove />
        </Box>
      </Container>
    </>
  );
}
