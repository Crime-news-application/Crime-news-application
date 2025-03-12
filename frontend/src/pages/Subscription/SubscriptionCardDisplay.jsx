import React from 'react';

const subscriptionPlans = [
  {
    id: 1,
    title: 'Monthly Subscription',
    description: 'Access to exclusive content and in-depth crime reports.',
    price: '$9.99',
    duration: '1 month',
    features: [
      'Exclusive content',
      'Instant alerts',
      'Ad-free experience',
    ],
  },
  {
    id: 2,
    title: 'Annual Subscription',
    description: 'Best value for annual access with extra features and exclusive reports.',
    price: '$99.99',
    duration: '12 months',
    features: [
      'Exclusive content',
      'Instant alerts',
      'Ad-free experience',
      'Monthly curated magazine',
    ],
  },
];

const SubscriptionCard = ({ plan }) => {
  return (
    <div className="bg-black text-white rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 animate-fadeIn">
      <div className="p-6 border-b border-red-600">
        <h3 className="text-2xl font-bold text-red-500">{plan.title}</h3>
        <p className="mt-2 text-sm">{plan.description}</p>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center">
          <span className="text-lg font-semibold text-red-500">{plan.price}</span>
          <span className="text-sm text-gray-300">{plan.duration}</span>
        </div>
        <ul className="mt-4 space-y-2">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <span className="w-2 h-2 bg-red-500 rounded-full inline-block mr-2"></span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <button className="mt-6 w-full py-2 bg-red-500 hover:bg-red-600 transition duration-300 rounded">
          Subscribe Now
        </button>
      </div>
    </div>
  );
};

const SubscriptionCardDisplay = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center p-4">
      <h1 className="text-3xl font-bold text-red-500 mb-8 animate-bounce">
        Exclusive Subscription Plans
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
        {subscriptionPlans.map((plan) => (
          <SubscriptionCard key={plan.id} plan={plan} />
        ))}
      </div>
    </div>
  );
};

export default SubscriptionCardDisplay;
