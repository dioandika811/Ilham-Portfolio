import "../styles/About.css";
import { PiGuitar } from "react-icons/pi";
import { FaMountain } from "react-icons/fa";
import { FaRunning } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
function About() {
  return (
    <section id="about">
      <div className="wrapper">
        <h3>About</h3>
        <p>
          Halo! Saya Ilhamsyah Putra, lulusan dari SMA Nasrani 3 Medan, jurusan
          IPA. Selama masa SMA, saya tidak hanya fokus pada pelajaran sains,
          tetapi juga aktif dalam berbagai kegiatan sekolah yang membentuk
          karakter dan semangat kebersamaan saya. Salah satu pengalaman yang
          paling berkesan adalah saat mengikuti kegiatan bakti sosial, di mana
          saya belajar pentingnya kepedulian dan kolaborasi dengan <br />
        </p>
        <p>
          Di luar akademik, saya memiliki beberapa hobi dan minat, antara lain:
          Mengabadikan langit sore karena keindahan dan ketenangan yang
          ditawarkannya Bermain gitar dan piano sebagai sarana relaksasi dan
          ekspresi Melakukan turing, menjelajahi tempat-tempat baru dan menikmat
          alam terbuka
        </p>
        <h4>Nature Explorer & Guitarist</h4>
        <div className="skills">
          <PiGuitar />
          <FaMountain />
          <FaRunning />
          <FaHtml5 />
          <FaCss3Alt />
          <FaJava />
        </div>
      </div>
    </section>
  );
}

export default About;
