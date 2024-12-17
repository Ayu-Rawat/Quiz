import { useState, useEffect } from "react";
import Map from "./components/Map";
import { Quizprovider } from "./context/QuizContext";

function App() {
  const array = [
    "Afghanistan", "Angola", "Albania", "United Arab Emirates", "Argentina",
    "Armenia", "Antarctica", "French Southern and Antarctic Lands", "Australia",
    "Austria", "Azerbaijan", "Burundi", "Belgium", "Benin", "Burkina Faso",
    "Bangladesh", "Bulgaria", "The Bahamas", "Bosnia and Herzegovina",
    "Belarus", "Belize", "Bermuda", "Bolivia", "Brazil", "Brunei", "Bhutan",
    "Botswana", "Central African Republic", "Canada", "Switzerland", "Chile",
    "China", "Ivory Coast", "Cameroon", "Democratic Republic of the Congo",
    "Republic of the Congo", "Colombia", "Costa Rica", "Cuba", "Northern Cyprus",
    "Cyprus", "Czech Republic", "Germany", "Djibouti", "Denmark",
    "Dominican Republic", "Algeria", "Ecuador", "Egypt", "Eritrea", "Spain",
    "Estonia", "Ethiopia", "Finland", "Fiji", "Falkland Islands", "France",
    "Gabon", "United Kingdom", "Georgia", "Ghana", "Guinea", "Gambia",
    "Guinea Bissau", "Equatorial Guinea", "Greece", "Greenland", "Guatemala",
    "French Guiana", "Guyana", "Honduras", "Croatia", "Haiti", "Hungary",
    "Indonesia", "India", "Ireland", "Iran", "Iraq", "Iceland", "Israel",
    "Italy", "Jamaica", "Jordan", "Japan", "Kazakhstan", "Kenya", "Kyrgyzstan",
    "Cambodia", "South Korea", "Kosovo", "Kuwait", "Laos", "Lebanon", "Liberia",
    "Libya", "Sri Lanka", "Lesotho", "Lithuania", "Luxembourg", "Latvia",
    "Morocco", "Moldova", "Madagascar", "Mexico", "Macedonia", "Mali", "Malta",
    "Myanmar", "Montenegro", "Mongolia", "Mozambique", "Mauritania", "Malawi",
    "Malaysia", "Namibia", "New Caledonia", "Niger", "Nigeria", "Nicaragua",
    "Netherlands", "Norway", "Nepal", "New Zealand", "Oman", "Pakistan",
    "Panama", "Peru", "Philippines", "Papua New Guinea", "Poland", "Puerto Rico",
    "North Korea", "Portugal", "Paraguay", "Qatar", "Romania", "Russia",
    "Rwanda", "Western Sahara", "Saudi Arabia", "Sudan", "South Sudan",
    "Senegal", "Solomon Islands", "Sierra Leone", "El Salvador", "Somaliland",
    "Somalia", "Republic of Serbia", "Suriname", "Slovakia", "Slovenia",
    "Sweden", "Swaziland", "Syria", "Chad", "Togo", "Thailand", "Tajikistan",
    "Turkmenistan", "East Timor", "Trinidad and Tobago", "Tunisia", "Turkey",
    "Taiwan", "United Republic of Tanzania", "Uganda", "Ukraine", "Uruguay",
    "United States of America", "Uzbekistan", "Venezuela", "Vietnam", "Vanuatu",
    "West Bank", "Yemen", "South Africa", "Zambia", "Zimbabwe"
  ];

  const [countries, setCountries] = useState(array);
  const [country, setCountry] = useState("India");
  const [level, setLevel] = useState(0);
  const [options, setOptions] = useState([]);

  // Function to get a random country
  const getRandomCountry = (excluded = []) => {
    const filteredCountries = countries.filter(
      (c) => !excluded.includes(c)
    );
    const randomIndex = Math.floor(Math.random() * filteredCountries.length);
    return filteredCountries[randomIndex];
  };

  // Function to generate options
  const generateOptions = () => {
    const correctCountry = country;
    const option1 = getRandomCountry([correctCountry]);
    const option2 = getRandomCountry([correctCountry, option1]);
    const option3 = getRandomCountry([correctCountry, option1, option2]);

    // Combine and shuffle options
    const optionsArray = [correctCountry, option1, option2, option3];
    for (let i = optionsArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [optionsArray[i], optionsArray[j]] = [optionsArray[j], optionsArray[i]];
    }
    setOptions(optionsArray);
  };

  useEffect(() => {
    generateOptions();
  }, [country, level]);

  const nextQuestion = () => {
    const randomCountry = getRandomCountry();
    setCountry(randomCountry);
    setCountries((prev) => prev.filter((c) => c !== randomCountry));
    setLevel((prev) => prev + 1);
  };

  const currentQuestion = () => {
    return country;
  };

  const isCorrect = (e) => {
    const selectedOption = e.target.value;
    if (selectedOption === country) {
      alert("Correct!");
      nextQuestion();
    } else {
      alert("Wrong! Try again.");
    }
  };

  return (
    <Quizprovider value={{ currentQuestion, isCorrect, nextQuestion }}>
      <div className="bg-[#0d1117] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Guess The Highlighted Country
          </h1>
          <div className="mb-4">
            <Map country={currentQuestion()} />
          </div>
          <div className="grid grid-rows-2 grid-cols-2 gap-2">
            {options.map((opps) => (
              <div key={opps}>
                <button
                  value={opps}
                  onClick={isCorrect}
                  className="text-black w-full p-2 m-2 bg-white rounded-md"
                >
                  {opps}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Quizprovider>
  );
}

export default App;