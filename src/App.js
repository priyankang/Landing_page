import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Booking from "./components/BookingpPart";
import OverView from "./components/OverView";
import Godrejgroup from './components/Godrejgroup'
import Footer from  './components/Footer'
import Project from  './components/Project'
import Flowover from  './components/Flowover'
function App() {
  return (
    <div className="App">
      <Header />
      <Booking />
      <OverView overViewTitle="Overview" overViewImg="http://godrejproperty.in/godrej-ananda/images/a-reach-life.jpg"  overViewDiscription = "Bangalore, the vibrant city of India is today one of the potential real estate destinations of the modern urban home buyers. The city has been rapidly flourishing, and the realty industry has been thriving, offering worldclass properties in the best of the locations across the city. Godrej Properties, the established real estate developer of India has been transforming the realty sector with its extraordinary properties. Godrej Properties now launches Godrej Ananda, a premium residential complex in Bagalur Road, Bangalore. Grodrej Ananda is magnificent and will be just apt for your new address.Godrej Ananda is a new launch project in Bangalore. The launch date is March 2021, and the completion date of the project is January 2026. The property is being meticulously developed with innovation as the keyword and contemporary designs. Lush greenery and fascinating views define the surroundings, which will be a treat for your senses."/>
      <Project />
      <OverView overViewTitle="ABOUT GODREJ" overViewImg="http://godrejproperty.in/godrej-ananda/images/life-at-park.png" overViewDiscription="Godrej Properties brings the Godrej Group philosophy of innovation and excellence to the real estate industry. The company is currently developing landmark projects in 12 cities across India. Established in 1990, Godrej Properties Limited is the first real estate company to have ISO certification. With projects that span across the country, the company's upcoming development covers over 8 million square meters."/>
      <Flowover />
      <Footer />
      
      </div>
  );
}

export default App;
