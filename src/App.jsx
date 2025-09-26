import React from 'react';
import './App.css';

const MasjidCard = ({ name, location, image, website }) => {
  return (
    <div className="masjid-card">
      <div className="card-image">
        <img src={image} alt={name} />
      </div>
      
      <div className="card-content">
        <h2>{name}</h2>
        <p className="location">📍 {location}</p>
        
        {website && (
          <a href={website} target="_blank" rel="noopener noreferrer" className="btn-website">
            Visit Website
          </a>
        )}
      </div>
    </div>
  );
};

function App() {
  const masjids = [
    {
      name: "Islamic Center of Orlando",
      location: "11543 Ruby Lake Rd, Orlando, FL 32836",
      image: "/images/ico.jpg",
      website: "https://icorlando.org/"
    },
    {
      name: "Oviedo Masjid",
      location: "100 Alexandria Blvd #24, Oviedo, FL 32765",
      image: "/images/oviedo.webp",
      website: "https://www.instagram.com/oviedo_muslims/"
    },
    {
      name: "Masjid Al-Rahman",
      location: "1089 N Goldenrod Rd, Orlando, FL 32807",
      image: "/images/rahman.webp",
      website: "https://iscf.org/masjid/masjid-al-rahman/"
    },
    {
      name: "Masjid Al-Malik",
      location: "2042 Rouse Rd, Orlando, FL 32817",
      image: "/images/malikupdate.png",
      website: "https://iscf.org/masjid/masjid-al-malik/"
    },
    {
      name: "Masjid As-Salam",
      location: "2917 S Orlando Dr, Sanford, FL 32773",
      image: "/images/salam.webp",
      website: "https://iscf.org/masjid/masjid-al-salaam/"
    },
    {
      name: "American Muslim Community Center",
      location: "811 Wilma St, Longwood, FL 32750",
      image: "/images/amcc.webp",
      website: "https://amccenters.org/"
    },
    {
      name: "Aisha Cultural Center",
      location: "1311 Hancock Lone Palm Rd, Orlando, FL 32828",
      image: "/images/aisha.webp",
      website: "http://aishacenter.com/"
    },
    {
      name: "Heathrow Muslim Community Center",
      location: "1325 S International Pkwy # 1241, Lake Mary, FL 32746",
      image: "/images/hmcc.webp",
      website: "https://www.heathrowmcc.org/"
    },
    {
      name: "Masjid Taqwa",
      location: "2417 N Central Ave, Kissimmee, FL 34741",
      image: "/images/taqwa.webp",
      website: "https://masjidtaqwa.org/about-masjid-taqwa.php"
    },
    {
      name: "Lake Nona Masjid",
      location: "5800 Cyrils Dr, St Cloud, FL 34771",
      image: "/images/lakenona.jpg",
      website: "https://nonamasjid.org/"
    },
  ];

  return (
    <div className="App">
      <header className="header">
        <h1>Orlando Masjids</h1>
        <p className="subtitle">Your Guide to Orlando Area Mosques</p>
      </header>

      <div className="cards-container">
        {masjids.map((masjid, index) => (
          <MasjidCard
            key={index}
            name={masjid.name}
            location={masjid.location}
            image={masjid.image}
            website={masjid.website}
          />
        ))}
      </div>

      <footer className="footer">
        <p>🕌 May Allah accept our prayers</p>
      </footer>
    </div>
  );
}

export default App;