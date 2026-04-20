import Footer from "./components/footer";
import Linter from "./components/linter";
import Main from "./components/main";
import Python from "./components/python";
import Syntax from "./components/syntax";
import Test from "./components/test";
import Typed from "./components/typed";
import VSCode from "./components/vscode";
import SliderContainer from "./components/slider/slider-container";

export default function App() {
  return (
    <>
    <SliderContainer totalSlides={8}>
      <Main/>
      <Syntax/>
      <Typed/>
      <Linter/>
      <Test/>
      <Python/>
      <VSCode/>
      <Footer/>
    </SliderContainer>
    </>
  )
}