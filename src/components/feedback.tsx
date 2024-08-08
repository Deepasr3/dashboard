import React from 'react';

const feedbacks = [
    {
        name: 'Jenny Wilson',
        avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
        rating: 5,
        feedback: 'The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger over greens (gluten-free) which was also very good. They were very conscientious about gluten allergies.',
    },
    {
        name: 'Dianne Russell',
        avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
        rating: 4,
        feedback: 'We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service.',
    },
    {
        name: 'Devon Lane',
        avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
        rating: 3,
        feedback: 'Normally wings are wings, but theirs are lean meaty and tender, and seasoned perfectly.',
    },
];
// const StarIcon = () => (
//     <svg xmlns="http://www.w3.org/2000/svg" height="12" width="13.5" viewBox="0 0 576 512">
//       <path fill="#FFD43B" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/>
//     </svg>
//   );

const CustomerFeedback: React.FC = () => {
    return (
        <div className="bg-gray-800 h-full rounded-lg text-white overflow-auto ">
            <h2 className="text-lg mb-4">Customer's Feedback</h2>
            <div className="space-y-6">
                {feedbacks.map((feedback, index) => (
                    <div key={index} className="border-b border-gray-700 pb-4 mb-4 last:border-none last:pb-0 last:mb-0 ml-4">
                        <div className="flex  mb-2">
                            <img src={feedback.avatar} alt={feedback.name} className="w-10 h-10 rounded-full mr-3" />
                            <div>
                                <h3 className="text-sm font-semibold">{feedback.name}</h3>
                                <div className="flex">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <svg
                                            key={i}
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 22 22"
                                            fill="currentColor"
                                            className={`w-4 h-4 ${i < feedback.rating ? 'text-yellow-400' : 'text-gray-600'}`}
                                        >
                                            <path d="M9.049 2.927C9.432 1.733 10.568 1.733 10.951 2.927l1.562 4.799a1 1 0 00.95.69h5.051c1.3 0 1.844 1.689.88 2.476l-4.083 3.278a1 1 0 00-.347 1.111l1.562 4.799c.383 1.194-.997 2.188-2.042 1.466l-4.083-3.278a1 1 0 00-1.192 0l-4.083 3.278c-1.045.722-2.425-.272-2.042-1.466l1.562-4.799a1 1 0 00-.347-1.111L2.604 10.892c-.964-.787-.42-2.476.88-2.476h5.051a1 1 0 00.95-.69l1.562-4.799z" />
                                        </svg>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <p className="text-sm text-gray-400">{feedback.feedback}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CustomerFeedback;
