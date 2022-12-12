import React from 'react';
import  './Home.css';
import { Carousel } from 'react-responsive-carousel';

const Home = () => {
  return (
    <div class="container">
      <h1 class="heading">Welcome to the Yoga Classes</h1>
      <p class='description'>
      A Yoga Class is a group exercise class that focuses on practicing the ancient Indian discipline of Yoga. Yoga is a holistic approach to health and wellness that combines physical postures (asanas), breathing techniques (pranayama), and meditation (dhyana) to improve flexibility, strength, and mental clarity.

In a Yoga Class, participants are guided through a series of asanas and pranayama by a trained instructor. The instructor provides instructions and adjustments to help the participants perform the asanas safely and effectively. The class typically starts with some warm-up exercises and moves on to more challenging asanas, and ends with relaxation and meditation.

Yoga Classes are suitable for people of all ages and fitness levels. They can help improve physical fitness, reduce stress and anxiety, and promote overall wellbeing. Some of the benefits of attending a Yoga Class include:

Improved flexibility and strength
Better posture and alignment
Increased energy and vitality
Reduced stress and anxiety
Improved sleep and relaxation
Enhanced mental clarity and focus
Yoga Classes are typically offered in a group setting, with a limited number of participants per class. The classes are usually held at a dedicated Yoga studio or gym, and may be offered at different times and levels to suit different schedules and abilities. Some Yoga Classes may have a specific theme or focus, such as Vinyasa Yoga, Hatha Yoga, or Restorative Yoga.
      </p>
      <button class="button"><a href='/user'target="_blank">Enroll now</a></button>
      <Carousel
    axis={"horizontal"}
    autoFocus={true}
     showArrows={true}
     showStatus={false}
     autoPlay
     interval={300000}
     stopOnHover={true}
    >
      <img src="http://cdn.shopify.com/s/files/1/1728/2157/articles/Me_class_Blog_600x.jpg?v=1552683610" />
      <img src="https://5.imimg.com/data5/FA/LJ/GLADMIN-64562604/hatha-500x500.png" />
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqhKOFTBa4xdFoHKiQWfNPes-v7ZlgeTElneis6X6f6KrP7aY1fQn2rGFRjD1ogExxE14&usqp=CAU" />
      {/* Add more images here */}
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9SXw7RVVS42_gtNnKUf-QpMYJDhjs7rPzcQ&usqp=CAU"/>
    </Carousel>
    </div>
  );
};

export default Home;

//This would create a simple and elegant home page for the Yoga Classes, with a heading, description, and a button to enroll in the classes. The page is responsive and looks good on different screen sizes.




