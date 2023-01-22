import { useState } from "react";
import Typed from "react-typed";

const universities = [
  "Aligarh Muslim University",
  "Amity University",
  "Amrita Vishwa Vidyapeetham University",
  "Anna University, Chennai",
  "B.S. Abdur Rahman University",
  "Banasthali University",
  "Biju Patnaik University of Technology, Odisha Rourkela",
  "Birla Institute of Technology",
  "Birla Institute of Technology and Science, Pilani (Rajasthan)",
  "BMS College of Engineering, Bangalore",
  "Chaitanya Bharathi Institue of Technology",
  "Charotar University of Science and Technology",
  "Chhattisgarh Swami Vivekanand Technical University",
  "Chitkara University",
  "Coimbatore Institute of Technology",
  "College of Engineering, Pune",
  "Cummins College of Engineering for Women",
  "D.Y. Patil - 7-point scale",
  "Datta Meghe College of Engineering - 10-point scale",
  "Datta Meghe College of Engineering - 100-percentage scale",
  "Dayananda Sagar College of Engineering",
  "DEFAULT India - 10-point scale",
  "DEFAULT India - Letter Grades",
  "DEFAULT India - Other Traditional Patterns (B.Engr, B.Arch)",
  "DEFAULT India - Predominant (BS, BSc, MA, MSc)",
  "Delhi Technological University",
  "Dharmsinh Desai University",
  "Dhirubhai Ambani Institute of Information and Communication Technology",
  "Don Bosco Institute of Technology",
  "DRAPJ Abdul Kalam Technical University",
  "Dwarkadas J. Sanghvi College of Engineering",
  "Fr Conceicao Rodrigues College of Engineering",
  "Gandhi Institute of Technology and Management",
  "Ganpat University",
  "Goa University",
  "Govind Ballabh Pant University of Agriculture and Technology",
  "Gujarat Technological University, Ahmedabad",
  "Guru Gobind Singh Indraprastha University, Delhi",
  "Indian Institute of Engineering Science and Technology, Shibpur",
  "Indian Institute of Information Technology Allahabad",
  "Indian Institute of Information Technology, Design and Manufacturing Jabalpur",
  "Indian Institute of Science",
  "Indian Institute of Science Education and Research",
  "Indian Institute of Space Science and Technology",
  "Indian Institute of Technology",
  "Indian Institute of Technology (Banaras Hindu University)",
  "Indian Institute of Technology Delhi",
  "Indian Institute of Technology Hyderabad",
  "Indian Institute of Technology Kanpur",
  "Indian Institute of Technology Mandhi",
  "Indian Institute of Technology Roorkee",
  "Indian Institute of Technology Ropar",
  "Indian Institute of Technology, Kharagpur",
  "Indian Institute of Technology, Madras",
  "Indian School of Mines",
  "Institute of Chemical Technology",
  "ITM University/The Northcap University",
  "Jadavpur University",
  "Jain University",
  "Jawaharlal Nehru Engineering College",
  "Jaypee Institute of Information Technology",
  "JSS Science and Technology University",
  "Kalinga Institute of Industrial Technology",
  "Karunya University",
  "KC College of Engineering and Management Studies and Research",
  "KJ Somaiya College of Engineering",
  "KJ Somaiya Institute of Engineering and Information Technology",
  "KK Wagh Institute of Engineering Education and Research",
  "KL University",
  "Kumaraguru College of Technology",
  "LNM Institute of Information and Technology, Jaipur",
  "Lovely Professional University",
  "Maharashtra State Board of Technical Education",
  "Mahatma Gandhi University",
  "Malviya National Institute of Technology, Jaipur",
  "Manipal Institute of Technology",
  "Manipal University",
  "Maulana Abul Kalam Azad University of Technology, West Bengal",
  "Maulana Azad National Institute of Technology",
  "Motilal Nehru National Institute of Technology",
  "National Institute of Technology",
  "National Institute of Technology Calicut",
  "National Institute of Technology Durgapur",
  "National Institute of Technology Goa",
  "National Institute of Technology Hamirpur",
  "National Institute of Technology Karnataka, Surathkal",
  "National Institute of Technology Raipur",
  "National Institute of Technology Rourkela",
  "National Institute of Technology Silchar",
  "National Institute of Technology Warangal",
  "Navrachana University",
  "Netaji Subhas Institute of Technology",
  "Nirma Institute of Technology",
  "Nitte Meenakshi Institute of Technology",
  "NMIMS University",
  "Osmania University",
  "Padmabhushan Vasantdada Patil Pratishthan's College of Engineering",
  "Pandit Deendayal Petroleum University",
  "Panjab University",
  "PEC University of Technology, Chandigarh",
  "PES Institute of Technology",
  "PES University",
  "Pondicherry University",
  "PSG College of Technology",
  "Pune Institute of Computer Technology",
  "Rajiv Gandhi Institute of Technology",
  "Rajiv Gandhi Proudyogiki Vishwavidyalaya",
  "Rajiv Gandhi Proudyogiki Vishwavidyalaya - 100-point scale",
  "Rajiv Gandhi Proudyogiki Vishwavidyalaya - 100-point scale",
  "Ramaiah Institute of Technology",
  "Ramnarian Ruia College",
  "Rizvi College of Engineering",
  "RKN Engg College",
  "RV College of Engineering, Bengaluru",
  "Sardar Patel College of Engineering",
  "Sardar Patel Institute of Technology - 10-point scale",
  "Sardar Patel Institute of Technology - Percentage Scale",
  "Sardar Vallabhbhai National Institute of Technology",
  "Sastra University",
  "Sathyabama University",
  "Savitribai Phule Pune University (formerly University of Pune)",
  "SDM College of Engineering and Technology",
  "Shiv Nadar University",
  "Shivajirao S Jondhale College of Engineering",
  "Shri Guru Gobind Singhji Institute of Engineering and Technology",
  "Shri Ramdeobaba College of Engineering and Management",
  "Siddaganga Institute of Technology",
  "SIES Graduate School of Technology",
  "Sikkim Manipal University",
  "Siksha O Anusandhan University",
  "Sinhgad Institute of Technology",
  "Sri Chandrasekharendra Saraswathi Viswa Mahavidyalaya",
  "Sri Jayachamarajendra College of Engineering",
  "SRM Institute of Science and Technology",
  "SRM University",
  "St Francis Institute of Technology",
  "Symbiosis International University",
  "Thadomal Shahani Engineering College",
  "Thakur College of Engineering and Technology",
  "Thapar Institute of Engineering and Technology",
  "Thapur University",
  "The NorthCap University",
  "University of Delhi",
  "University of Kerala, Thiruvananthapuram",
  "University of Mumbai",
  "University Of Mumbai - Percentage Scale",
  "Uttar Pradesh Technical University",
  "Vasavi College of Engineering",
  "Veermata Jijabai Technological Institute/Victoria Jubilee Technical Institute",
  "Vidyalankar Institute of Technology",
  "Vishwakarma Institute of Technology",
  "Visvesvaraya National Institute of Technology",
  "Visvesvaraya National Institute of Technology",
  "Visvesvaraya Technological University - 100-point scale",
  "Visvesvaraya Technological University 10-point",
  "VIT (Vellore Institute of Technology)",
  "Viva Institute of Technology",
  "Vivekanand Education Society's Institute of Technology",
  "VNR Vignana Jyothi Institute of Engineering & Technology",
  "VR Siddhartha Engineering College",
  "Walchand College of Engineering, Sangli",
  "Watumull Institute of Electronics Engineering",
];

function Calculator() {
  const [searchValue, setSearchValue] = useState("");
  const [selectedUniversity, setSelectedUniversity] = useState("");
  const [cgpa, setCGPA] = useState(null);
  const [gpa, setGPA] = useState(null);
  const conversionFactor = 0.03;
  const fixedValues = {
    10: 4.0,
    9.5: 3.87,
    9: 3.73,
    8.5: 3.6,
    8: 3.5,
    7.5: 3.4,
    7: 3.3,
    6.5: 3.0,
    6: 2.5,
    5: 1.75,
    4: 1.0,
    3: 0.75,
    2: 0.5,
    1: 0.25,
  };
  //Filter the universities based on the search value
  const filteredUniversities = universities.filter((university) =>
    university.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div className="flex-grow text-black mt-[135px] mb-[40px] lg:mb-[90px] md:mb-[90px]">
      <div className="flex-grow text-black">
        <div className="md:flex md:justify-center lg:p-0 p-3">
          <form className="relative rounded-md bg-white focus-within:shadow-outline-blue focus-within:z-10 w-full md:w-3/4 lg:w-1/2">
            <div className="relative">
              <Typed
                strings={["Find for a university...."]}
                typeSpeed={15}
                backSpeed={15}
                attr="placeholder"
                loop
              >
               <input
                  className="relative  text-[12px] lg:text-[15px] w-full p-2 lg:pl-8 rounded-md text-gray-900 placeholder-gray-500 border shadow border-gray-300 focus:outline-none focus:border-blue-300"
                  type="text"
                  placeholder="Search for a university"
                  value={searchValue}
                  onChange={(e) => {
                    let value = e.target.value.replace(/[^a-zA-Z ]/g, "");
                    setSearchValue(value);
                    if (!value) setSelectedUniversity("");
                  }}
                />

              </Typed>

              <button
                className="absolute inset-y-0 right-0 lg:pr-4 pr-1 flex items-center text-gray-500 hover:text-gray-700"
                onClick={() => setSearchValue("")}
              >
                <svg
                  className="h-3 w-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
                </svg>
              </button>
            </div>
            {searchValue.length > 0 && !selectedUniversity && (
              <div className="shadow p-3 cursor-pointer ">
                {filteredUniversities.map((university) => (
                  <div
                    key={university}
                    className="options-item hover:bg-blue-300 p-1 rounded "
                    onClick={() => {
                      setSelectedUniversity(university);
                      setCGPA("");
                      setGPA("");
                    }}
                  >
                    {university}
                  </div>
                ))}
              </div>
            )}
            {selectedUniversity && (
              <div className="lg:mt-[50px] mt-[25px] lg:shadow rounded-md lg:absolute flex bg-white  border-gray-300  h-32 text-center items-center justify-center ">
                <ul className="p-6 lg:mb-0 mb-4 text-left">
                  <li>Institution Name : {selectedUniversity}</li>
                  <form>
                    <label>
                      CGPA :
                      <input
                        className="relative  p-1 m-2 text-[12px] lg:text-[15px] lg:pl-8 rounded-md text-gray-900 placeholder-gray-500 border shadow border-gray-300 focus:outline-none focus:border-blue-300 "
                        type="number"
                        value={cgpa}
                        onChange={(e) => {
                          setCGPA(e.target.value);
                          let gpaValue =
                            fixedValues[Math.floor(e.target.value)] || 0;
                          if (!gpaValue) {
                            let keys = Object.keys(fixedValues);
                            for (let i = keys.length - 1; i >= 0; i--) {
                              if (keys[i] <= e.target.value) {
                                gpaValue = fixedValues[keys[i]];
                                let remaining =
                                  (e.target.value - keys[i]) * conversionFactor;
                                gpaValue += remaining;
                                break;
                              }
                            }
                          }
                          setGPA(gpaValue.toFixed(2));
                        }}
                      />
                    </label>
                  </form>
                  <h1 className="flex text-green-400"> GPA : {gpa}</h1>
                </ul>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
