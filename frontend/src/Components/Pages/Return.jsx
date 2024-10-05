import React from 'react';

const Return = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-8 mb-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Return and Refund Policy</h1>
      <p className="text-gray-700 mb-4">
        We want you to be completely satisfied with your purchase. If you're not happy with your product, we offer a simple and easy return process. Please read the following details about our return and refund policy.
      </p>

      {/* 1. Return Conditions */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Return Conditions</h2>
      <ul className="list-disc ml-5 text-gray-700 mb-6">
        <li>Items must be returned within 30 days of purchase.</li>
        <li>Items must be unused, in their original packaging, and with all tags and labels intact.</li>
        <li>Products on sale or discounted items are final and cannot be returned.</li>
        <li>Proof of purchase must be included with the return.</li>
      </ul>

      {/* 2. How to Initiate a Return */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. How to Initiate a Return</h2>
      <p className="text-gray-700 mb-6">
        To initiate a return, please follow these steps:
      </p>
      <ul className="list-decimal ml-5 text-gray-700 mb-6">
        <li>Contact our customer service team via email at <a href="mailto:demo@example.com" className="text-blue-600 underline">demo@example.com</a> or call us at 1-800-123-4567.</li>
        <li>Provide your order number and the reason for the return.</li>
        <li>Our team will provide you with return instructions, including the return address and any shipping labels (if applicable).</li>
      </ul>

      {/* 3. Refund Process */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Refund Process</h2>
      <p className="text-gray-700 mb-6">
        Once we receive and inspect your returned item, we will notify you of the status of your refund. If approved, the refund will be processed, and a credit will be applied to your original method of payment within 5-7 business days.
      </p>
      <ul className="list-disc ml-5 text-gray-700 mb-6">
        <li>Refunds will only be issued to the original payment method.</li>
        <li>Shipping costs are non-refundable unless the return is due to an error on our part.</li>
      </ul>

      {/* 4. Exchanges */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Exchanges</h2>
      <p className="text-gray-700 mb-6">
        If you need to exchange an item, please contact our customer service. We will gladly assist you with exchanging the item, provided it meets our return conditions.
      </p>

      {/* 5. Non-Returnable Items */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Non-Returnable Items</h2>
      <p className="text-gray-700 mb-6">
        Certain products are not eligible for returns, including:
      </p>
      <ul className="list-disc ml-5 text-gray-700 mb-6">
        <li>Perishable goods (e.g., food, flowers)</li>
        <li>Personal care items (e.g., cosmetics, skincare)</li>
        <li>Gift cards</li>
        <li>Custom-made or personalized items</li>
      </ul>

      {/* 6. Late or Missing Refunds */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Late or Missing Refunds</h2>
      <p className="text-gray-700 mb-6">
        If you haven’t received a refund after 7 business days, please check with your bank or credit card provider, as it may take some time for the refund to be officially posted. If you’ve done all of this and still have not received your refund, please contact us at <a href="mailto:demo@example.com" className="text-blue-600 underline">demo@example.com</a>.
      </p>

      {/* 7. Contact Information */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Contact Information</h2>
      <p className="text-gray-700 mb-6">
        For further assistance or if you have any questions, please feel free to contact us:
      </p>
      <ul className="list-disc ml-5 text-gray-700 mb-6">
        <li>Email: <a href="mailto:demo@example.com" className="text-blue-600 underline">demo@example.com</a></li>
        <li>Phone: 1-800-123-4567</li>
        <li>Live Chat: Available Monday to Friday, 9 AM - 5 PM (EST)</li>
      </ul>
    </div>
  );
};

export default Return;

;

