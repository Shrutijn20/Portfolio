import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.jpg';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#E44985]'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600'>
          I am a dedicated web developer specializing in creating responsive front-end UI applications that seamlessly 
          integrate with APIs and various backend technologies. My passion lies in continuously expanding my knowledge 
          and exploring new technologies, understanding that there are multiple approaches to solving a problem. While my 
          expertise lies in developing front-end applications using HTML, CSS, JavaScript, and React, I am an adaptable 
          learner and can quickly grasp new tech stacks as required. I strongly believe that being a skilled developer means 
          choosing the most suitable tools for each project rather than being limited to a specific programming language.
          </p>
          <p className='py-2 text-gray-600'>
          I am a detail-oriented web developer with strong communication and collaboration skills. I take pride in delivering 
          high-quality code, conducting thorough testing, and implementing best practices for optimal performance and user 
          experience. With a passion for problem-solving, I enjoy tackling complex challenges and finding innovative solutions 
          to create intuitive and engaging web applications. I stay updated with the latest industry trends and continuously 
          learn new technologies to provide modern and cutting-edge solutions that meet the evolving needs of clients and users.
          </p>
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300 '>
          <Image src={AboutImg} className='rounded-xl h-1.5' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;
