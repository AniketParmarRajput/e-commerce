import React from 'react';

const Policy = () => {
  return (
    <div className="max-w-5xl mx-auto p-6 bg-white shadow-md rounded-lg mt-8 mb-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Privacy Policy</h1>

      <p className="text-gray-700 mb-4">
        We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and disclose your personal information. By accessing or using our website, you consent to the collection and use of your information in accordance with this policy.
      </p>

      {/* 1. Information We Collect */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Information We Collect</h2>
      <p className="text-gray-700 mb-4">
        We may collect the following types of information when you visit our website or make a purchase:
      </p>
      <ul className="list-disc ml-5 text-gray-700 mb-4">
        <li><strong>Personal Information:</strong> Name, email address, shipping address, billing address, phone number, and payment information.</li>
        <li><strong>Account Information:</strong> Username, password, and purchase history.</li>
        <li><strong>Usage Data:</strong> Information about your interactions with our website, including IP address, browser type, device information, and browsing history.</li>
      </ul>

      {/* 2. How We Use Your Information */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. How We Use Your Information</h2>
      <p className="text-gray-700 mb-4">
        We use the information we collect for the following purposes:
      </p>
      <ul className="list-disc ml-5 text-gray-700 mb-4">
        <li>To process and fulfill your orders.</li>
        <li>To communicate with you about your account, orders, and promotions.</li>
        <li>To improve our website and customer service experience.</li>
        <li>To comply with legal obligations and protect the security and integrity of our website.</li>
      </ul>

      {/* 3. Sharing Your Information */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Sharing Your Information</h2>
      <p className="text-gray-700 mb-4">
        We do not sell, trade, or rent your personal information to third parties. However, we may share your information with third parties in the following situations:
      </p>
      <ul className="list-disc ml-5 text-gray-700 mb-4">
        <li>With service providers who assist with payment processing, order fulfillment, or website operations.</li>
        <li>When required by law, such as to comply with a subpoena or similar legal process.</li>
        <li>To protect our rights, property, or safety, and the rights of others.</li>
      </ul>

      {/* 4. Cookies and Tracking Technologies */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Cookies and Tracking Technologies</h2>
      <p className="text-gray-700 mb-4">
        We use cookies and similar tracking technologies to enhance your browsing experience. Cookies help us remember your preferences, track orders, and understand how you interact with our website. You can set your browser to refuse cookies, but this may affect your ability to use some features of our website.
      </p>

      {/* 5. Your Choices */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Your Choices</h2>
      <p className="text-gray-700 mb-4">
        You have the following choices regarding your personal information:
      </p>
      <ul className="list-disc ml-5 text-gray-700 mb-4">
        <li>You may update or correct your account information at any time by logging into your account.</li>
        <li>You may opt out of receiving promotional emails by following the unsubscribe instructions in any email you receive from us.</li>
        <li>You may request that we delete your personal information, subject to certain legal exceptions.</li>
      </ul>

      {/* 6. Data Security */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Data Security</h2>
      <p className="text-gray-700 mb-4">
        We take reasonable precautions to protect your personal information. However, no method of transmission over the internet or method of electronic storage is 100% secure. While we strive to protect your data, we cannot guarantee its absolute security.
      </p>

      {/* 7. Changes to This Policy */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Changes to This Policy</h2>
      <p className="text-gray-700 mb-4">
        We may update this Privacy Policy from time to time. We will notify you of any changes by posting the updated policy on this page with the revised date.
      </p>

      {/* 8. Contact Us */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Contact Us</h2>
      <p className="text-gray-700 mb-4">
        If you have any questions or concerns about this Privacy Policy, please contact us:
      </p>
      <ul className="ml-5 text-gray-700 mb-4">
        <li><strong>Email:</strong> <a href="mailto:demo@example.com" className="underline text-blue-600">demo@example.com</a></li>
        <li><strong>Phone:</strong> 1-800-123-4567</li>
        <li><strong>Live Chat:</strong> Available Monday to Friday, 9 AM - 5 PM (EST)</li>
      </ul>
    </div>
  );
};

export default Policy;

