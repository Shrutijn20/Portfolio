import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ws from '../public/assets/projects/wanderstay.png';
import cg from '../public/assets/projects/codeground.png';
import dalle from '../public/assets/projects/dalle.png';
import weatherapp from '../public/assets/projects/weatherapp.png';
import ns from '../public/assets/projects/news.png';
import sg from '../public/assets/projects/simon.png';
import dg from '../public/assets/projects/dicegame.png';
import mp from '../public/assets/projects/mp.png';
import td from '../public/assets/projects/tindog.png';
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#E44985]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-3 gap-4'>
          <ProjectItem
            title='WanderStay'
            backgroundImg={ws}
            projectUrl='/wanderstay'
            tech='React JS'
          />
          <ProjectItem
            title='Code Ground'
            backgroundImg={cg}
            projectUrl='/codeground'
            tech='React JS'

          />
          <ProjectItem
            title='Dalle-Clone'
            backgroundImg={dalle}
            projectUrl='/dalle'
            tech='React JS'

          />
          <ProjectItem
            title='Weather App'
            backgroundImg={weatherapp}
            projectUrl='/weather'
            tech='JavaScript'

          />
          <ProjectItem
            title='Newsletter Sign Up'
            backgroundImg={ns}
            projectUrl='/newsletter'
            tech='JavaScript'

          />
          <ProjectItem
            title='Simon Game'
            backgroundImg={sg}
            projectUrl='/simongame'
            tech='JavaScript'

          />
          <ProjectItem
            title='Dice Game'
            backgroundImg={dg}
            projectUrl='/dice'
            tech='JavaScript'

          />
          <ProjectItem
            title='Mp Tourism'
            backgroundImg={mp}
            projectUrl='/mpTourism'
            tech='Html-css'

          />
          <ProjectItem
            title='Tindog'
            backgroundImg={td}
            projectUrl='/tindog'
            tech='Html-css'

          />

        </div>
      </div>
    </div>
  );
};

export default Projects;
