import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaSkyatlas } from "react-icons/fa";
import { PiGuitarDuotone } from "react-icons/pi";
import { SiParamountplus } from "react-icons/si";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

function Experience() {
  return (
    <>
      <Navbar />
      <div className="wrapper">
        <h1>Experience</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2022 - Present"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<FaSkyatlas />}
          >
            <h3 className="vertical-timeline-element-title">HOBI & MINAT</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Mengabadikan Langit Sore
            </h4>
            <p>
              Menyukai momen senja karena memberi ketenangan dan inspirasi.
              Melalui fotografi, kamu mengekspresikan perasaan dan perspektif
              terhadap keindahan alam.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2017 - Present"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<PiGuitarDuotone />}
          >
            <h3 className="vertical-timeline-element-title">HOBI & MINAT</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Bermain Gitar & Piano
            </h4>
            <p>
              Musik menjadi media relaksasi dan ekspresi diri. Hobi ini juga
              menunjukkan sisi kreatif dan kedisiplinanmu dalam belajar
              instrumen.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2022 - Present"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<SiParamountplus />}
          >
            <h3 className="vertical-timeline-element-title">HOBI & MINAT</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Turing Dan Menjelajahi Alam
            </h4>
            <p>
              Suka menjelajah tempat-tempat baru, yang mencerminkan semangat
              petualang, keberanian, dan rasa ingin tahu. Menikmati keindahan
              alam secara langsung dan mendapatkan wawasan dari pengalaman di
              luar zona nyaman.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default Experience;
