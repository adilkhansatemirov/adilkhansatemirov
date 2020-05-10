import Header from '../components/Header';
import Menu from '../components/Menu';
import Section from '../components/shared/Section';

import Skills from '../components/Skills';
import Footer from '../components/Footer';

import { sections, consoleText } from '../constants/text';

import '../style/index.scss';

console.log(consoleText);
export default () => (
  <>
    <title>Adilkhan Satemirov</title>
    <Menu />
    <Header />
    {sections.map((section) => (
      <Section key={section.id} section={section} />
    ))}
    <Skills />
    <Footer />
  </>
);
