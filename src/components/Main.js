import { NavBar } from './NavBar';
import { Banner } from './Banner';
import { Skills } from './Skill';
import { Projects } from './Projects';
import { Contact } from './Contact';
import { Footer } from './Footer';
import { Summery } from './Summary';
import { DashBoard } from './DashBoard';

export const Main = () => {
    return (
        <div className="App">
            <NavBar />
            <Banner />
            <Skills />
            <Summery />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
}