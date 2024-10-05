import React from 'react'

const DeliveryInformation = () => {
  return (
    <div className="max-w-5xl mx-auto p-6 bg-white shadow-md rounded-lg mt-8 mb-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Delivery Information</h1>
      <p className="text-gray-700 mb-4">
        We strive to deliver your order as quickly and efficiently as possible. Please review our delivery policies and information below.
      </p>

      {/* Delivery Timeframes */}
      <h2 className="text-xl font-semibold mt-4 mb-2 text-gray-800">1. Delivery Timeframes</h2>
      <ul className="list-disc ml-5 mb-4 text-gray-700">
        <li><strong>Standard Delivery:</strong> Typically, orders are processed within 1-2 business days and delivered within 3-7 business days after processing.</li>
        <li><strong>Express Delivery:</strong> Orders placed before 1 PM will be processed the same day and delivered within 1-3 business days.</li>
        <li><strong>Same-Day Delivery:</strong> Available in select cities. Orders must be placed before 12 PM for same-day delivery.</li>
      </ul>
      <p className="text-gray-700 italic mb-4">
        <strong>Note:</strong> Delivery timeframes may vary based on your location, product availability, and shipping carrier schedules.
      </p>

      {/* Shipping Costs */}
      <h2 className="text-xl font-semibold mt-4 mb-2 text-gray-800">2. Shipping Costs</h2>
      <ul className="list-disc ml-5 mb-4 text-gray-700">
        <li><strong>Standard Delivery:</strong> Free for orders over $50. A flat rate of $5 applies for orders under $50.</li>
        <li><strong>Express Delivery:</strong> $15 flat fee for express shipping.</li>
        <li><strong>Same-Day Delivery:</strong> $25 flat fee for eligible orders.</li>
      </ul>
      <p className="text-gray-700 mb-4">
        <strong>International Shipping:</strong> Rates vary by destination and will be calculated at checkout.
      </p>

      {/* International Shipping */}
      <h2 className="text-xl font-semibold mt-4 mb-2 text-gray-800">3. International Shipping</h2>
      <p className="text-gray-700 mb-4">
        We offer international shipping to most countries. Delivery times and costs vary based on location:
      </p>
      <ul className="list-disc ml-5 mb-4 text-gray-700">
        <li><strong>Delivery Times:</strong> Typically between 7-21 business days.</li>
        <li><strong>Customs & Duties:</strong> Any applicable customs duties or import taxes are the responsibility of the customer.</li>
      </ul>

      {/* Tracking */}
      <h2 className="text-xl font-semibold mt-4 mb-2 text-gray-800">4. Tracking Your Order</h2>
      <p className="text-gray-700 mb-4">
        Once your order has been shipped, you will receive a confirmation email with a tracking number. You can track your shipment on our website or via the carrier’s tracking tool.
      </p>

      {/* Missed Delivery */}
      <h2 className="text-xl font-semibold mt-4 mb-2 text-gray-800">5. Missed Delivery</h2>
      <p className="text-gray-700 mb-4">
        If you are not available at the time of delivery, our delivery partner will leave a notification with further instructions. In some cases, they may attempt redelivery the following business day.
      </p>

      {/* P.O. Box */}
      <h2 className="text-xl font-semibold mt-4 mb-2 text-gray-800">6. P.O. Box & APO/FPO Addresses</h2>
      <p className="text-gray-700 mb-4">
        Unfortunately, we do not deliver to P.O. Box addresses or military APO/FPO addresses at this time.
      </p>

      {/* Lost Packages */}
      <h2 className="text-xl font-semibold mt-4 mb-2 text-gray-800">7. Lost or Delayed Packages</h2>
      <p className="text-gray-700 mb-4">
        In the unlikely event that your package is lost or delayed, please contact our customer service team at <a href="mailto:demo@example.com" className="underline text-blue-600">demo@example.com</a>. We will investigate the issue and do our best to resolve it promptly.
      </p>

      {/* Order Modifications */}
      <h2 className="text-xl font-semibold mt-4 mb-2 text-gray-800">8. Order Modifications</h2>
      <p className="text-gray-700 mb-4">
        If you need to modify your delivery address after placing an order, please contact us within 24 hours. After this window, we may be unable to change the address due to the order being processed.
      </p>

      {/* Undeliverable Packages */}
      <h2 className="text-xl font-semibold mt-4 mb-2 text-gray-800">9. Undeliverable Packages</h2>
      <p className="text-gray-700 mb-4">
        If a package is returned to us due to an incorrect address, we will contact you to arrange redelivery. Additional shipping charges may apply.
      </p>

      {/* Contact Us */}
      <h2 className="text-xl font-semibold mt-4 mb-2 text-gray-800">10. Contact Us</h2>
      <p className="text-gray-700 mb-4">
        For any delivery-related queries, please contact our customer support team:
      </p>
      <ul className="ml-5 mb-4 text-gray-700">
        <li><strong>Email:</strong> <a href="mailto:demo@example.com" className="underline text-blue-600">demo@example.com</a></li>
        <li><strong>Phone:</strong> 1-800-123-4567</li>
        <li><strong>Live Chat:</strong> Available Monday to Friday, 9 AM - 5 PM (EST)</li>
      </ul>
    </div>
  )
}

export default DeliveryInformation
