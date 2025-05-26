import { useState, useEffect, useRef, type SetStateAction } from "react";
import './index.css'
import { FaBars, FaHome, FaInfo, FaPhone, FaServicestack } from "react-icons/fa";


interface VisibleSections {
  hero: boolean;
  quote: boolean;
  events: boolean;
  timetable: boolean;
}

interface Event {
  title: string;
  date: string;
  description: string;
  price: string;
}

interface TimetableItem {
  time: string;
  event: string;
  location: string;
}

interface Timetable {
  days: string[];
  data: Record<string, TimetableItem[]>;
}

interface Content {
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  quote: {
    text: string;
    author: string;
  };
  events: Event[];
  timetable: Timetable;
}

const App = () => {
    // Динамическое содержимое
        const content: Content = {
        hero: {
            title: "Welcome to EventFlow",
            subtitle: "Discover amazing events and experiences around the world",
            cta: "Explore Events"
        },
        quote: {
            text: "The best way to predict the future is to create it through the events we choose to attend and the connections we make.",
            author: "- EventFlow Team"
        },
        events: [
            {
                title: "Global Tech Summit 2024",
                date: "October 15-17, 2024 | San Francisco",
                description: "Join leading technologists for three days of innovation and networking.",
                price: "$399"
            },
            {
                title: "Design & Innovation Conference",
                date: "November 5-7, 2024 | Berlin",
                description: "Connect with creative leaders and explore design thinking in action.",
                price: "Free"
            },
            {
                title: "Sustainability Forum 2024",
                date: "December 3-5, 2024 | Copenhagen",
                description: "Discuss actionable solutions for a sustainable future with experts.",
                price: "$199"
            }
        ],
        timetable: {
            days: ["Monday", "Tuesday", "Wednesday"],
            data: {
                Monday: [
                    { time: "9:00 AM - 10:00 AM", event: "Opening Keynote", location: "Main Auditorium" },
                    { time: "10:30 AM - 12:00 PM", event: "Panel Discussion: Future of AI", location: "Conference Room A" }
                ],
                Tuesday: [
                    { time: "9:00 AM - 10:00 AM", event: "Keynote: Sustainability", location: "Main Auditorium" },
                    { time: "10:30 AM - 12:00 PM", event: "Tech Innovations Showcase", location: "Exhibition Hall" }
                ],
                Wednesday: [
                    { time: "9:00 AM - 10:00 AM", event: "Startup Pitch Competition", location: "Main Auditorium" },
                    { time: "10:30 AM - 12:00 PM", event: "Closing Ceremony", location: "Main Auditorium" }
                ]
            }
        }
    };

    // Состояние
const [activeDay, setActiveDay] = useState<string>(content.timetable.days[0]);
    const [isOpen, setIsOpen] = useState(false);

const [visibleSections, setVisibleSections] = useState<VisibleSections>({
  hero: true,
  quote: false,
  events: false,
  timetable: false
});
    const [isTransitioning, setIsTransitioning] = useState(false);

    // Refs
const sectionRefs = {
  hero: useRef<HTMLElement>(null),
  quote: useRef<HTMLElement>(null),
  events: useRef<HTMLElement>(null),
  timetable: useRef<HTMLElement>(null)
};
    // Оптимизированная анимация появления секций при скролле
    useEffect(() => {
        let ticking = false;
        const lastScrollTop = 0;

        const handleScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    const sections = {
                        hero: sectionRefs.hero.current,
                        quote: sectionRefs.quote.current,
                        events: sectionRefs.events.current,
                        timetable: sectionRefs.timetable.current
                    };

                    const newVisibility = {  hero: true,
                                        quote: false,
                                        events: true,
                                        timetable: false };

                Object.entries(sections).forEach(([key, element]) => {
                if (!element) return;
                const rect = element.getBoundingClientRect();
                newVisibility[key as keyof typeof newVisibility] = (rect.top <= window.innerHeight * 0.8 && rect.bottom >= 0);
                });
                    setVisibleSections(newVisibility);
                    ticking = false;
                });
                ticking = true;
            }
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Обработчик выбора дня с анимацией
    const handleDayClick = (day: SetStateAction<string>) => {
        if (day === activeDay) return;

        setIsTransitioning(true);

        // Анимация с оптимизацией для производительности
        requestAnimationFrame(() => {
            setTimeout(() => {
                setActiveDay(day);
                setIsTransitioning(false);
            }, 200);
        });
    };

    return (
        <div className="min-h-screen bg-white text-blue-950 font-sans">
            {/* Hero Section */}
 <header className="bg-blue-600 shadow-lg">
            <div className="container mx-auto px-1 py-4
       flex justify-between items-center">
                <div className="text-xl font-bold text-white">
                    <img src='https://handbook.rudn.ru/img/logo.svg' alt="РУДН" style={{width: "40%"}} />
                </div>
                <nav className="hidden md:flex space-x-4 ml-5 mr-5">
                    <a href="#" className="flex items-center
           text-white font-bold">
                        <FaHome className="mr-1" /> Home
                    </a>
                    <a href="#" className="flex items-center
           text-white font-bold">
                        <FaInfo className="mr-1" /> About
                    </a>
                    <a href="#" className="flex items-center
           text-white font-bold">
                        <FaServicestack className="mr-1" /> Services
                    </a>
                    <a href="#" className="flex items-center
           text-white font-bold">
                        <FaPhone className="mr-1" /> Contact
                    </a>
                </nav>
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white">
                        <FaBars size={24} /> {/* Hamburger icon for mobile */}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <nav className="md:hidden bg-green-600 p-4
         space-y-2 ml-2 mr-2">
                    <a href="#" className="flex items-center 
          text-white font-bold">
                        <FaHome className="mr-2" /> Home
                    </a>
                    <a href="#" className="flex items-center
           text-white font-bold">
                        <FaInfo className="mr-2" /> About
                    </a>
                    <a href="#" className="flex items-center 
          text-white font-bold">
                        <FaServicestack className="mr-2" /> Services
                    </a>
                    <a href="#" className="flex items-center
           text-white font-bold">
                        <FaPhone className="mr-2" /> Contact
                    </a>
                </nav>
            )}
        </header>
<section
    ref={sectionRefs.hero}
    className="h-screen flex items-center justify-center relative overflow-hidden bg-blue-300/30"
    style={{
        backgroundImage: "url(https://github.com/EmirenRU/RUDN-Landing/blob/4ea65f765b5476d3679e6e7b52ae1517e14027d5/rudn-landing/src/assets/RUDN_Background.gif?raw=true)",
        backgroundSize: "cover",
        backgroundBlendMode: "overlay"
    }}
>
                {/* Геометрические формы с доминирующим синим цветом */}

                <div className={`container mx-auto px-4 z-10 text-center transition-all duration-1000 ${visibleSections.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 text-sky-100 text-shadow-lg/30 ">
                        {content.hero.title}
                    </h1>
                    <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-blue-100 text-shadow-lg/30">
                        {content.hero.subtitle}
                    </p>
                    <button style={{borderRadius: "10px"}} className="px-6  py-3 bg-blue-600 border-2 border-blue-600 text-blue-100 text-shadow-lg/30 hover:bg-blue-700 hover:text-white transition-colors duration-300 transform ">
                        {content.hero.cta}
                    </button>
                </div>
            </section>

            {/* Quote Section */}
            <section
                ref={sectionRefs.quote}
                className="py-20 bg-blue-50 relative"
            >
                {/* Геометрическая форма с доминирующим синим цветом */}
                <div className="absolute top-0 left-0 w-64 h-64 bg-blue-100 transform rotate-12 opacity-30"></div>

                <div className={`max-w-3xl mx-auto px-4 relative z-10 text-center transition-all duration-700 ${visibleSections.quote ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="text-xl md:text-2xl italic font-light leading-relaxed text-blue-900">
                        "{content.quote.text}"
                    </div>
                    <div className="mt-8 font-medium text-blue-800">{content.quote.author}</div>
                </div>
            </section>

            {/* Events Section */}
            <section
                ref={sectionRefs.events}
                className="py-20 bg-white relative"
            >
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full opacity-40"></div>

                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">
                            Upcoming Events
                        </h2>
                        <p className="mt-4 max-w-2xl mx-auto text-blue-700">
                            Explore our carefully curated list of upcoming events across the globe
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {content.events.map((event, index) => (
                            <div
                                key={index}
                                className={`transition-all duration-700 ${visibleSections.events ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                                style={{ transitionDelay: `${index * 150}ms` }}
                            >
                                <div className="bg-white border border-blue-100 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                                    <h3 className="text-xl font-semibold mb-2 text-blue-900">{event.title}</h3>
                                    <p className="text-sm text-blue-700 mb-4">{event.date}</p>
                                    <p className="text-sm text-blue-700 mb-6">
                                        {event.description}
                                    </p>
                                    <div className="flex justify-between items-center">
                                        <button className="text-sm font-medium hover:text-blue-800 transition-colors">
                                            Learn More
                                        </button>
                                        <span className="text-sm font-semibold text-blue-900">{event.price}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <button className="px-6 py-3 border-2 border-blue-700 hover:bg-blue-700 hover:text-white transition-colors duration-300 transform hover:scale-105">
                            View All Events
                        </button>
                    </div>
                </div>
            </section>

            {/* Timetable Section */}
            <section
                ref={sectionRefs.timetable}
                className="py-20 bg-blue-50 relative"
            >
                <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-blue-100 rounded-full opacity-20"></div>

                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">
                            Event Schedule
                        </h2>
                        <p className="mt-4 max-w-2xl mx-auto text-blue-700">
                            Explore our detailed schedule of events and activities
                        </p>
                    </div>

                    {/* Day Tabs с доминирующим синим цветом */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {content.timetable.days.map((day) => (
                            <button
                                key={day}
                                onClick={() => handleDayClick(day)}
                                className={`px-6 py-2 font-medium transition-colors duration-300 ${
                                    activeDay === day
                                        ? 'text-blue-900 border-b-2 border-blue-700'
                                        : 'text-blue-700 hover:text-blue-900'
                                }`}
                            >
                                {day}
                            </button>
                        ))}
                    </div>

                    {/* Таблица с анимацией */}
                    <div className={`transition-all duration-500 ${visibleSections.timetable ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <div className="overflow-x-auto">
                            <div
                                className={`transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
                            >
                                <table className="min-w-full bg-white rounded-lg shadow-sm">
                                    <thead className="bg-blue-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-sm font-medium text-blue-800 uppercase tracking-wider">Time</th>
                                        <th className="px-6 py-3 text-left text-sm font-medium text-blue-800 uppercase tracking-wider">Event</th>
                                        <th className="px-6 py-3 text-left text-sm font-medium text-blue-800 uppercase tracking-wider">Location</th>
                                    </tr>
                                    </thead>
                                    <tbody className="divide-y divide-blue-50">
                                    {content.timetable.data[activeDay].map((item, index: number) => (
                                        <tr
                                            key={index}
                                            className={`transition-all duration-500 ${isTransitioning ? 'opacity-0 translate-y-6' : 'opacity-100 translate-y-0'}`}
                                            style={{ transitionDelay: `${index * 100}ms` }}
                                        >
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-700">{item.time}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-900">{item.event}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-700">{item.location}</td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 text-center">
                        <button className="px-6 py-3 border-2 border-blue-700 hover:bg-blue-700 hover:text-white transition-colors duration-300 transform hover:scale-105">
                            Download Full Schedule
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-white text-blue-700 py-12 border-t border-blue-100">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <h3 className="text-lg font-semibold mb-4 text-blue-900">EventFlow</h3>
                            <p className="text-sm text-blue-700">
                                Connecting people through inspiring events and experiences.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4 text-blue-900">Quick Links</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="hover:text-blue-900">Home</a></li>
                                <li><a href="#" className="hover:text-blue-900">About</a></li>
                                <li><a href="#" className="hover:text-blue-900">Events</a></li>
                                <li><a href="#" className="hover:text-blue-900">Schedule</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4 text-blue-900">Contact</h3>
                            <ul className="space-y-2">
                                <li>123 Event Street</li>
                                <li>San Francisco, CA 94107</li>
                                <li>hello@eventflow.com</li>
                                <li>+1 (555) 123-4567</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4 text-blue-900">Newsletter</h3>
                            <p className="text-sm mb-4 text-blue-700">
                                Subscribe for event updates.
                            </p>
                            <div className="flex">
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    className="px-4 py-2 border border-blue-200 focus:outline-none"
                                />
                                <button className="px-4 py-2 bg-blue-700 text-white">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-blue-100 mt-12 pt-8 text-center text-sm">
                        <p>© 2024 EventFlow. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default App;
