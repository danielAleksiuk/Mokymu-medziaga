
import './App.css'
import InlineStylingJsObjects from './components/CSS/inline-styling/js-objects/InlineStylingJsObjects'
import InlineStylingPlain from './components/CSS/inline-styling/plain/InlineStylingPlain'
import BootstrapCss from './components/CSS/library/BootstrapCss'
import Plain from './components/CSS/plain/Plain'
import SassStyling from './components/Sass/SassStyling'
import StyledComponentsExample from './components/styled-components/StyledComponentsExample'
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
        <h1>CSS examples:</h1>
        <hr/>
        <Plain/>
        <hr/>
        <InlineStylingPlain/>
        <InlineStylingJsObjects/>
        <hr/>
        <BootstrapCss/>
        <hr/>
        <SassStyling/>
        <hr/>
        <StyledComponentsExample/>
    </>
  )
}

export default App

