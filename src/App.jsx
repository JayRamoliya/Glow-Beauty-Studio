import { useState } from "react";

const services = {
  hair: {
    title: "હેરસ્ટાઇલ",
    items: [
      "ઓપન કલ્સ",
      "સ્ટ્રેટ હેર લૂક",
      "મેસી બન / મેસી ચોટી",
      "કલ્સ વેવ",
      "હાલ્ફ પોની ટેલ",
    ],
  },
  makeup: {
    title: "મેકઅપ",
    items: [
      "HD મેકઅપ",
      "3D મેકઅપ",
      "સોફ્ટ મેકઅપ",
      "ગ્લેમ ગેલેરી",
      "બ્રાઇડલ મેકઑવર",
      "નેચરલ મેકઅપ",
    ],
  },
  shainer: {
    title: "શાઈનર",
    items: [
      "કોરિયન ગ્લાસ",
      "હાયડ્રા ગ્લેમ",
      "બાયો રીચ",
      "ડિટેન",
      "વેલા",
    ],
  },
  facial: {
    title: "ફેશિયલ",
    items: [
      "લોટસ (પ્રોફેશનલ)",
      "O3+ ફેશિયલ",
      "રિચ ફીલ",
      "કોરિયન ગ્લાસ",
      "રાગા",
    ],
  },
  threading: {
    title: "થ્રેડિંગ",
    items: ["આઇબ્રો", "અપર લિપ", "ફોરહેડ", "ફૂલ ફેસ"],
  },
  wax: {
    title: "વેક્સ",
    items: [
      "જેલ વેક્સ",
      "ક્રિમ વેક્સ",
      "લીપો વેક્સ",
      "રિકા વેક્સ",
      "બિન વેક્સ",
      "બ્રાજીલિયન વેક્સ",
    ],
  },
  cleanup: {
    title: "ક્લીનઅપ",
    items: ["ક્લીનઅપ"],
  },
  jewellery: {
    title: "જ્વેલરી ભાડે",
    items: [
      "બ્રાઇડલ જ્વેલરી",
      "એન્ગેજમેન્ટ બ્રાઇડલ",
      "રિસેપ્શન બ્રાઇડલ",
      "હલ્દી કાર્નિવલ",
      "બોલિવૂડ નાઈટ",
    ],
  },
};

const engagementPackages = [
  {
    name: "Silver",
    price: "₹7,999",
    items: ["મેકઅપ", "હેરસ્ટાઇલ"],
  },
  {
    name: "Gold",
    price: "₹9,999",
    items: ["મેકઅપ", "હેરસ્ટાઇલ", "ઓર્નામેન્ટ્સ"],
  },
  {
    name: "Diamond",
    price: "₹11,999",
    items: ["મેકઅપ", "હેરસ્ટાઇલ", "ઓર્નામેન્ટ્સ"],
  },
  {
    name: "Premium",
    price: "₹14,999",
    items: ["સ્કીન કેર", "મેકઅપ", "હેરસ્ટાઇલ", "ઓર્નામેન્ટ્સ"],
  },
];


function Modal({ title, children, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50">
      <div className="bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl p-6">
        <h2 className="text-2xl md:text-3xl font-bold text-pink-600 text-center mb-6">
          {title}
        </h2>

        {children}

        <div className="text-center mt-6">
          <button
            onClick={onClose}
            className="bg-pink-500 text-white px-6 py-3 rounded-full"
          >
            બંધ કરો
          </button>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [serviceModal, setServiceModal] = useState(null);
  const [packageModal, setPackageModal] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">

      {/* Header */}
      <header className="bg-gradient-to-r from-pink-500 to-pink-300 text-white text-center py-8 px-4">
        <h1 className="text-3xl md:text-5xl font-bold">
          Glow Beauty Studio
        </h1>

        <p className="mt-3 text-sm md:text-lg">
          ✨ Where Beauty Meets Elegance ✨
        </p>
      </header>

      {/* Navbar */}
      <nav className="bg-pink-500 text-white">
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 py-4">
          <a href="#">હોમ</a>
          <a href="#services">સેવાઓ</a>
          <a href="#packages">પેકેજ</a>
          <a href="#contact">સંપર્ક</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-pink-100 text-center py-16 px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-pink-700">
          Welcome To Glow Beauty Studio
        </h2>

        <p className="mt-4 text-gray-600">
          Premium Beauty & Bridal Services
        </p>
      </section>

      {/* Services */}
      <section id="services" className="py-14 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-pink-700 mb-10">
          અમારી સેવાઓ
        </h2>

        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {Object.entries(services).map(([key, service]) => (
            <button
              key={key}
              onClick={() => setServiceModal(service)}
              className="bg-pink-50 border border-pink-200 rounded-2xl p-5 hover:bg-pink-100 hover:scale-105 transition"
            >
              {service.title}
            </button>
          ))}
        </div>
      </section>

      {/* Packages */}
      <section id="packages" className="py-14 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-pink-700 mb-10">
          પેકેજ
        </h2>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-4">
          <button
            onClick={() => setPackageModal("engagement")}
            className="bg-pink-50 border border-pink-200 rounded-2xl p-6"
          >
            Engagement Package
          </button>

          <button
            onClick={() => setPackageModal("bridal")}
            className="bg-pink-50 border border-pink-200 rounded-2xl p-6"
          >
            Bridal Package
          </button>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="bg-pink-100 py-14 px-4 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-pink-700 mb-6">
          અમારો સંપર્ક કરો
        </h2>

        <p>
          રાજકોટ-360004
        </p>

        <p className="mt-3">
          📞 75758 46523
        </p>
      </section>

      {/* Floating Buttons */}
      <div className="fixed bottom-4 right-4 flex flex-col gap-3 z-40">
        <a
          href="https://www.instagram.com/ramoliyajay_com/"
          target="_blank"
          rel="noreferrer"
          className="bg-pink-600 text-white px-4 py-3 rounded-full shadow-lg"
        >
          Instagram
        </a>

        <a
          href="https://wa.me/916353716421"
          target="_blank"
          rel="noreferrer"
          className="bg-green-500 text-white px-4 py-3 rounded-full shadow-lg"
        >
          WhatsApp
        </a>
      </div>

      {/* Footer */}
      <footer className="bg-pink-500 text-white text-center py-4">
        © {new Date().getFullYear()} Glow Beauty Studio
      </footer>

      {/* Service Modal */}
      {serviceModal && (
        <Modal
          title={serviceModal.title}
          onClose={() => setServiceModal(null)}
        >
          <ul className="space-y-3">
            {serviceModal.items.map((item, i) => (
              <li
                key={i}
                className="border-b border-pink-100 pb-2"
              >
                {i + 1}. {item}
              </li>
            ))}
          </ul>
        </Modal>
      )}

      {/* Package Modal */}
      {packageModal && (
        <Modal
          title={
            packageModal === "engagement"
              ? "સગાઈ પેકેજ"
              : "બ્રાઇડલ પેકેજ"
          }
          onClose={() => setPackageModal(null)}
        >
          <div className="space-y-4">
            {(packageModal === "engagement"
              ? engagementPackages
              : bridalPackages
            ).map((pkg) => (
              <div
                key={pkg.name}
                className="border border-pink-200 rounded-2xl p-5 bg-pink-50"
              >
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-xl font-bold text-pink-600">
                    {pkg.name}
                  </h3>

                  <span className="font-semibold text-green-600">
                    {pkg.price}
                  </span>
                </div>

                <ul className="space-y-2">
                  {pkg.items.map((item, index) => (
                    <li
                      key={index}
                      className="border-b border-pink-100 pb-2"
                    >
                      ✓ {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Modal>
      )}
    </div>
  );
}