import React from "react";

const InfoPage = () => {
  return (
    <div className="min-h-screen bg-purple-50 text-gray-800 font-sans p-8 space-y-16">
      {/* About Section */}
      <section
        id="about"
        className="max-w-4xl mx-auto bg-white p-8 rounded-3xl shadow-md"
      >
        <h2 className="text-3xl font-bold mb-4">About Amritsar Flood Relief</h2>
        <p className="text-gray-700 leading-relaxed">
          The{" "}
          <span className="font-semibold">Amritsar Flood Relief Portal</span> is
          a joint initiative by the District Administration of Amritsar and
          partner NGOs. It provides verified updates, metrics, and secure
          channels for NGOs and citizens to collaborate for relief efforts
          during floods.
        </p>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="max-w-4xl mx-auto bg-white p-8 rounded-3xl shadow-md"
      >
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          For any inquiries, please reach out to our coordination team:
        </p>
        <ul className="space-y-2 text-gray-800">
          <li>
            <strong>Email:</strong> info@amritsarfloodrelief.org
          </li>
          <li>
            <strong>Phone:</strong> 0183-2229125
          </li>
          <li>
            <strong>Address:</strong> District Administration Office, Amritsar,
            Punjab
          </li>
        </ul>
      </section>

      {/* Helplines Section */}
      <section
        id="helplines"
        className="max-w-4xl mx-auto bg-white p-8 rounded-3xl shadow-md"
      >
        <h2 className="text-3xl font-bold mb-4">Helplines</h2>
        <ul className="space-y-2 text-gray-700">
          <li>
            <strong>District Control Room:</strong> 0183-2229125
          </li>
          <li>
            <strong>Ajnala Tehsil:</strong> 01858-245510
          </li>
          <li>
            <strong>NDRF HQ:</strong> 011-24363260
          </li>
          <li>
            <strong>All-India Emergency Helpline:</strong> 112
          </li>
        </ul>
      </section>

      {/* How to Help Section */}
      <section
        id="how-to-help"
        className="max-w-4xl mx-auto bg-white p-8 rounded-3xl shadow-md"
      >
        <h2 className="text-3xl font-bold mb-4">How You Can Help</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>
            Register your NGO support for water, sanitation, shelter, health,
            animal care, or logistics.
          </li>
          <li>
            Coordinate all activities through the District Control Room to
            target urgent needs efficiently.
          </li>
          <li>Volunteer for community relief efforts.</li>
        </ul>
      </section>

      {/* NGOs Section */}
      <section
        id="ngo"
        className="max-w-4xl mx-auto bg-white p-8 rounded-3xl shadow-md"
      >
        <h2 className="text-3xl font-bold mb-4">NGO Coordination</h2>
        <p className="text-gray-700 leading-relaxed">
          NGOs can register their participation and coordinate with government
          authorities for effective deployment of resources.
        </p>
      </section>
    </div>
  );
};

export default InfoPage;
