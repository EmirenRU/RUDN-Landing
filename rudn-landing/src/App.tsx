import { useState, useEffect } from "react";
import './index.css'
const App = () => {
  const [activeStage, setActiveStage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const stages = [
    {
      title: "Международная научная конференция на тему: «Наследие Патриса Лумумбы: идеи свободы, равенства и международного сотрудничества».",
      description:
        "RUDN University was established in 1960 as the Peoples' Friendship University of Russia. It was created with a mission to foster international cooperation and educate future leaders from around the world.",
      image: "https://placehold.co/600x400?text=%D0%9C%D0%B5%D0%B6%D0%B4%D1%83%D0%BD%D0%B0%D1%80%D0%BE%D0%B4%D0%BD%D0%B0%D1%8F+%D0%BD%D0%B0%D1%83%D1%87%D0%BD%D0%B0%D1%8F+%D0%BA%D0%BE%D0%BD%D1%84%D0%B5%D1%80%D0%B5%D0%BD%D1%86%D0%B8%D1%8F",

    },
    {
      title: "Открытые лекции о деколонизации Африки и роли П. Лумумбы.",
      description:
        "Throughout the decades, RUDN expanded its academic programs, research capabilities, and global partnerships. The university became a hub for cultural exchange and scientific innovation.",
      image: "https://placehold.co/600x400?text=%D0%9E%D1%82%D0%BA%D1%80%D1%8B%D1%82%D1%8B%D0%B5+%D0%BB%D0%B5%D0%BA%D1%86%D0%B8%D0%B8+%D0%BE+%D0%B4%D0%B5%D0%BA%D0%BE%D0%BB%D0%BE%D0%BD%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D0%B8+%D0%90%D1%84%D1%80%D0%B8%D0%BA%D0%B8+%D0%B8+%D1%80%D0%BE%D0%BB%D0%B8+%D0%9F.+%D0%9B%D1%83%D0%BC%D1%83%D0%BC%D0%B1%D1%8B",
    },
    {
      title: "Выставка фотографий из архивов, посвященных Лумумбе и деколонизации Африки.",
      description:
        "In the 21st century, RUDN embraced modern education technologies, updated infrastructure, and strengthened its position among top global universities. New faculties and research centers were launched.",
      image: "https://placehold.co/600x400?text=%D0%92%D1%8B%D1%81%D1%82%D0%B0%D0%B2%D0%BA%D0%B0+%D1%84%D0%BE%D1%82%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D0%B9+%D0%B8%D0%B7+%D0%B0%D1%80%D1%85%D0%B8%D0%B2%D0%BE%D0%B2,+%D0%BF%D0%BE%D1%81%D0%B2%D1%8F%D1%89%D0%B5%D0%BD%D0%BD%D1%8B%D1%85+%D0%9B%D1%83%D0%BC%D1%83%D0%BC%D0%B1%D0%B5",
    },
    {
      title: "Показ фильма RT, снятого к юбилею Лумумбы.",
      description:
          "Today, RUDN University stands as a leading educational and research institution with a diverse student body from over 150 countries and strong ties to industries and governments worldwide.",
      image: "https://placehold.co/600x400?text=%D0%9F%D0%BE%D0%BA%D0%B0%D0%B7+%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D0%B0+RT,+%D1%81%D0%BD%D1%8F%D1%82%D0%BE%D0%B3%D0%BE+%D0%BA+%D1%8E%D0%B1%D0%B8%D0%BB%D0%B5%D1%8E+%D0%9B%D1%83%D0%BC%D1%83%D0%BC%D0%B1%D1%8B.",
    },
    {
      title: "Презентация книги о П. Лумумбе, автор Л.В. Пономаренко.",
      description:
          "Today, RUDN University stands as a leading educational and research institution with a diverse student body from over 150 countries and strong ties to industries and governments worldwide.",
      image: "https://placehold.co/600x400?text=%D0%9F%D1%80%D0%B5%D0%B7%D0%B5%D0%BD%D1%82%D0%B0%D1%86%D0%B8%D1%8F+%D0%BA%D0%BD%D0%B8%D0%B3%D0%B8+%D0%BE+%D0%9F.+%D0%9B%D1%83%D0%BC%D1%83%D0%BC%D0%B1%D0%B5,+%D0%B0%D0%B2%D1%82%D0%BE%D1%80+%D0%9B.%D0%92.+%D0%9F%D0%BE%D0%BD%D0%BE%D0%BC%D0%B0%D1%80%D0%B5%D0%BD%D0%BA%D0%BE.",
    },
    {
      title: "Вечерний кинофестиваль для студентов РУДН с показом фильмов о борьбе за независимость.",
      description:
          "Today, RUDN University stands as a leading educational and research institution with a diverse student body from over 150 countries and strong ties to industries and governments worldwide.",
      image: "https://placehold.co/600x400?text=%D0%92%D0%B5%D1%87%D0%B5%D1%80%D0%BD%D0%B8%D0%B9+%D0%BA%D0%B8%D0%BD%D0%BE%D1%84%D0%B5%D1%81%D1%82%D0%B8%D0%B2%D0%B0%D0%BB%D1%8C+%D0%B4%D0%BB%D1%8F+%D1%81%D1%82%D1%83%D0%B4%D0%B5%D0%BD%D1%82%D0%BE%D0%B2+%D0%A0%D0%A3%D0%94%D0%9D+%D1%81+%D0%BF%D0%BE%D0%BA%D0%B0%D0%B7%D0%BE%D0%BC+%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D0%BE%D0%B2+%D0%BE+%D0%B1%D0%BE%D1%80%D1%8C%D0%B1%D0%B5+%D0%B7%D0%B0+%D0%BD%D0%B5%D0%B7%D0%B0%D0%B2%D0%B8%D1%81%D0%B8%D0%BC%D0%BE%D1%81%D1%82%D1%8C.",
    },
    {
      title: "Специальный номер газеты «Дружба», посвященный столетию Лумумбы.",
      description:
        "Today, RUDN University stands as a leading educational and research institution with a diverse student body from over 150 countries and strong ties to industries and governments worldwide.",
      image: "https://placehold.co/600x400?text=%D0%A1%D0%BF%D0%B5%D1%86%D0%B8%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9+%D0%BD%D0%BE%D0%BC%D0%B5%D1%80+%D0%B3%D0%B0%D0%B7%D0%B5%D1%82%D1%8B+%C2%AB%D0%94%D1%80%D1%83%D0%B6%D0%B1%D0%B0%C2%BB,+%D0%BF%D0%BE%D1%81%D0%B2%D1%8F%D1%89%D0%B5%D0%BD%D0%BD%D1%8B%D0%B9+%D1%81%D1%82%D0%BE%D0%BB%D0%B5%D1%82%D0%B8%D1%8E+%D0%9B%D1%83%D0%BC%D1%83%D0%BC%D0%B1%D1%8B.",
    },

    {
      title: "Памятная церемония с возложением цветов к памятнику П. Лумумбе.",
      description:
          "Today, RUDN University stands as a leading educational and research institution with a diverse student body from over 150 countries and strong ties to industries and governments worldwide.",
      image: "https://placehold.co/600x400?text=%D0%9F%D0%B0%D0%BC%D1%8F%D1%82%D0%BD%D0%B0%D1%8F+%D1%86%D0%B5%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D0%B8%D1%8F+%D1%81+%D0%B2%D0%BE%D0%B7%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5%D0%BC+%D1%86%D0%B2%D0%B5%D1%82%D0%BE%D0%B2+%D0%BA+%D0%BF%D0%B0%D0%BC%D1%8F%D1%82%D0%BD%D0%B8%D0%BA%D1%83+%D0%9F.+%D0%9B%D1%83%D0%BC%D1%83%D0%BC%D0%B1%D0%B5.",
    },
  ];

  return (
    <div className="bg-white text-body container-fluid w-100 ps-0 pe-0">
      {/* Header */}
      <header className="bg-primary text-white p-4 shadow">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <h1 className="h3 mb-0 fw-bold">RUDN University</h1>
          <nav className="d-none d-md-flex gap-4">
            <a href="#" className="text-white text-decoration-none hover-opacity">
              Home
            </a>
            <a href="#stages" className="text-white text-decoration-none hover-opacity">
              Stages
            </a>
            <a href="#" className="text-white text-decoration-none hover-opacity">
              About
            </a>
            <a href="#" className="text-white text-decoration-none hover-opacity">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
<section 
  className="position-relative py-5 px-3 d-flex align-items-center" 
  style={{
    minHeight: "700px", 
    backgroundImage: "url(https://obruchev.mos.ru/876897689.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "0 20%"
  }}
>
  {/* Полупрозрачный слой */}
  <div 
    className="position-absolute top-0 start-0 w-100 h-100"
    style={{
      backgroundColor: "rgba(173, 216, 230, 0.5)" // lightblue с 50% прозрачностью
    }}
  ></div>

  <div className="container-fluid position-relative z-1 text-white d-flex flex-grow-1 flex-column align-items-center justify-content-center" style={{minHeight:"100%"}}>
    <h2 className="display-5 fw-bold mb-4" style={{textShadow: "1px 1px 1px rgba(2,  62,  74, 1)"}}>
      Празднование 100-летия Патриса Лумумбы
    </h2>
    <p className="lead mb-4" style={{textShadow: "1px 1px 1px rgba(2,  62,  74, 1)"}}>
      В июле 2025 года исполняется 100 лет со дня рождения Патриса Лумумбы,
      первого премьер-министра Демократической Республики Конго и национального героя,
      символа борьбы народов Африки за независимость.
      Российский университет дружбы народов (РУДН) совместно с Посольством ДР Конго в Российской Федерации планирует провести ряд мероприятий в Москве и Киншасе, направленных на повышение осведомленности о странах Африки и роли Лумумбы в национально-освободительном движении.
    </p>
    <a
      href="#stages"
      className="btn btn-primary btn-lg px-4 py-2 shadow hover-scale"
      style={{maxWidth:"20%"}}
    >
      Discover the Stages
    </a>
  </div>
</section>

      {/* Timeline / Stages */}
{/* Timeline / Stages */}
{/* Timeline / Stages */}
{/* Timeline / Stages */}
<section id="stages" className="py-5 bg-body-tertiary position-relative">
  <div className="container-fluid py-4">
    <h3 className="text-center fw-bold mb-5">Запланированные мероприятия</h3>

    {/* Центральная линия */}
    <div className="position-relative"> 
      <div className="row">
      {stages.map((stage, index) => (
        <div key={index} className="col-12 position-relative">
          {/* Точка на линии */}
          <div 
            className="position-absolute start-50 translate-middle-x rounded-circle bg-primary border border-4 border-white"
            style={{
              width: "20px",
              height: "20px",
              top: "50px",
              zIndex: 2
            }}
          ></div>

          {/* Карточка с чередованием */}
          <div className={`d-flex flex-column ${index % 2 === 0 ? 'flex-md-row-reverse' : 'flex-md-row'}`}>
            {/* Изображение (50% ширины) */}
            <div className="p-0" style={{width:"70%"}}>
              <img
                src={stage.image}
                alt={stage.title}
                className="img-fluid w-100 h-auto"
                style={{minHeight: "250px", maxHeight: "600px", verticalAlign: "middle",  objectFit: "cover"}}
              />
            </div>
            
            {/* Текстовый блок (50% ширины) */}
            <div
                className={`col-md-6 p-4  d-flex flex-wrap flex-column position-relative ${index % 2 === 0 ? 'pe-md-5' : 'ps-md-5'}`}
                style={{
                  // bottom: "50%",
                  borderLeft: index % 2 !== 0 ? "3px solid #0d6efd " : "none",
                  borderRight: index % 2 === 0 ? "3px solid #0d6efd " : "none",
                  marginLeft: (window.innerWidth >= 768) ? (index % 2 === 0 ? "0px" : "0") : "0", // right + left == size of borderline
                  marginRight: (window.innerWidth >= 768) ? (index % 2 !== 0 ? "3px" : "0") : "0" // 3 + 0 === 3
                }}
            >
              <span className="d-block text-primary text-uppercase fw-semibold mb-2">
                Stage {index + 1}
              </span>
              <h4 className="fw-bold mb-3">{stage.title}</h4>
              <p className="text-secondary">{stage.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  </div>
</section>

      {/* Interactive Timeline (for mobile) */}
      {isMobile && (
        <section className="py-4 bg-white">
          <h3 className="text-center fw-bold mb-4">Interactive Timeline</h3>
          <div className="d-flex justify-content-center gap-2 mb-4">
            {stages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveStage(idx)}
                className={`btn p-0 rounded-pill ${activeStage === idx ? "btn-primary active" : "btn-secondary"}`}
                style={{ width: activeStage === idx ? "2rem" : "0.75rem", height: "0.75rem" }}
                aria-label={`Go to stage ${idx + 1}`}
              ></button>
            ))}
          </div>
          <div className="bg-body-secondary p-4 rounded shadow">
            <h4 className="fw-bold mb-2">{stages[activeStage].title}</h4>
            <p>{stages[activeStage].description}</p>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-dark text-white py-5">
        <div className="container-fluid">
          <div className="row g-4">
            <div className="col-md-4">
              <h5 className="fw-bold mb-3">RUDN University</h5>
              <p className="text-body-secondary">
                A leading educational and research institution fostering global
                collaboration and excellence.
              </p>
            </div>
            <div className="col-md-4">
              <h5 className="fw-bold mb-3">Quick Links</h5>
              <ul className="list-unstyled text-body-secondary">
                <li className="mb-2">
                  <a href="#" className="text-decoration-none hover-text-white">
                    Admissions
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-decoration-none hover-text-white">
                    Programs
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-decoration-none hover-text-white">
                    Research
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none hover-text-white">
                    Campus Life
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <h5 className="fw-bold mb-3">Contact Us</h5>
              <address className="text-body-secondary">
                <p>Miklukho-Maklaya Street, 6, Moscow, Russia</p>
                <p>Email: info@rudn.ru</p>
                <p>Phone: +7 (495) 989-10-10</p>
              </address>
            </div>
          </div>
          <hr className="my-4 border-secondary" />
          <div className="text-center text-body-secondary">
            &copy; {new Date().getFullYear()} RUDN University. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;