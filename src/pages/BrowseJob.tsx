import React from 'react';
import { Link } from 'react-router-dom';
import Navbar2 from '../components/Navbar2'
import Footer from '../components/Footer';

const BrowseJob = () => {
  return (
    <div>
        <Navbar2 />
        <div className='space-x-24'>
            <div className='text-3xl font-bold mb-10 ml-24'>Browse jobs</div>
            <div className='mb-10'>
                <span className='font-bold text-sm'>Companies by letter</span>
                <div className='mt-4'>
                    <Link to='' className='mr-6 text-[#2557a7]'>B</Link>
                    <Link to='' className='mr-6 text-[#2557a7]'>S</Link>
                    <Link to='' className='mr-6 text-[#2557a7]'>D</Link>
                    <Link to='' className='mr-6 text-[#2557a7]'>T</Link>
                    <Link to='' className='mr-6 text-[#2557a7]'>U</Link>
                    <Link to='' className='mr-6 text-[#2557a7]'>F</Link>
                    <Link to='' className='mr-6 text-[#2557a7]'>V</Link>
                    <Link to='' className='mr-6 text-[#2557a7]'>W</Link>
                    <Link to='' className='mr-6 text-[#2557a7]'>H</Link>
                    <Link to='' className='mr-6 text-[#2557a7]'>I</Link>
                    <Link to='' className='mr-6 text-[#2557a7]'>J</Link>
                    <Link to='' className='mr-6 text-[#2557a7]'>M</Link>
                </div>
            </div>


            <div>
            <span className='font-bold text-sm'>Jobs by Title</span>
                <div>

                    
                    <div className='mt-4 mb-10'>
                        <Link to='' className='mr-6 text-[#2557a7]'>A</Link>
                        <Link to='' className='mr-6 text-[#2557a7]'>B</Link>
                        <Link to='' className='mr-6 text-[#2557a7]'>C</Link>
                        <Link to='' className='mr-6 text-[#2557a7]'>D</Link>
                        <Link to='' className='mr-6 text-[#2557a7]'>E</Link>
                        <Link to='' className='mr-6 text-[#2557a7]'>F</Link>
                        <Link to='' className='mr-6 text-[#2557a7]'>G</Link>
                        <Link to='' className='mr-6 text-[#2557a7]'>H</Link>
                        <Link to='' className='mr-6 text-[#2557a7]'>I</Link>
                    </div>
                    <div className='mb-10'>
                        <Link to='' className='mr-6 text-[#2557a7]'>J</Link>
                        <Link to='' className='mr-6 text-[#2557a7]'>K</Link>
                        <Link to='' className='mr-6 text-[#2557a7]'>L</Link>
                        <Link to='' className='mr-6 text-[#2557a7]'>M</Link>
                        <Link to='' className='mr-6 text-[#2557a7]'>N</Link>
                        <Link to='' className='mr-6 text-[#2557a7]'>O</Link>
                        <Link to='' className='mr-6 text-[#2557a7]'>P</Link>
                        <Link to='' className='mr-6 text-[#2557a7]'>Q</Link>
                        <Link to='' className='mr-6 text-[#2557a7]'>R</Link>
                    </div>
                    <div className='mb-10'>
                        <Link to='' className='mr-6 text-[#2557a7]'>S</Link>
                        <Link to='' className='mr-6 text-[#2557a7]'>T</Link>
                        <Link to='' className='mr-6 text-[#2557a7]'>U</Link>
                        <Link to='' className='mr-6 text-[#2557a7]'>V</Link>
                        <Link to='' className='mr-6 text-[#2557a7]'>W</Link>
                        <Link to='' className='mr-6 text-[#2557a7]'>X</Link>
                        <Link to='' className='mr-6 text-[#2557a7]'>Y</Link>
                        <Link to='' className='mr-6 text-[#2557a7]'>Z</Link>
                    </div>

                </div>

                <div>
                    <span className='font-bold text-sm'>Jobs by Region</span>
                    <div className='md:flex flex-col-4 justify-start'>
                        <div className='flex flex-col'>
                        <Link to='' className='mt-4 text-[#2557a7]'>Abia</Link>
                        <Link to='' className='mt-4 text-[#2557a7]'>Adamawa</Link>
                        <Link to='' className='mt-4 text-[#2557a7]'>Akwa Ibom</Link>
                        <Link to='' className='mt-4 text-[#2557a7]'>Anambra</Link>
                        <Link to='' className='mt-4 text-[#2557a7]'>Bauchi</Link>
                        <Link to='' className='mt-4 text-[#2557a7]'>Bayelsa</Link>
                        <Link to='' className='mt-4 text-[#2557a7]'>Benue</Link>
                        <Link to='' className='mt-4 text-[#2557a7]'>Borno</Link>
                        <Link to='' className='mt-4 text-[#2557a7]'>Cross River</Link>
                        
                        </div>


                        <div className='flex flex-col md:ml-36'>
                        <Link to='' className='mt-4 text-[#2557a7]'>Delta</Link>
                        <Link to='' className='mt-4 text-[#2557a7]'>Ebonyi</Link>
                        <Link to='' className='mt-4 text-[#2557a7]'>Edo</Link>
                        <Link to='' className='mt-4 text-[#2557a7]'>Ekiti</Link>
                        <Link to='' className='mt-4 text-[#2557a7]'>Enugu</Link>
                        <Link to='' className='mt-4 text-[#2557a7]'>Federal Capital Territory</Link>
                        <Link to='' className='mt-4 text-[#2557a7]'>Gombe</Link>
                        <Link to='' className='mt-4 text-[#2557a7]'>Imo</Link>
                        <Link to='' className='mt-4 text-[#2557a7]'>Jigawa</Link>
                        </div>


                        <div className='flex flex-col md:ml-36'>
                        <Link to='' className='mt-4 text-[#2557a7]'>Kaduna</Link>
                        <Link to='' className='mt-4 text-[#2557a7]'>Kano</Link>
                        <Link to='' className='mt-4 text-[#2557a7]'>Katsina</Link>
                        <Link to='' className='mt-4 text-[#2557a7]'>Kebbi</Link>
                        <Link to='' className='mt-4 text-[#2557a7]'>Kogi</Link>
                        <Link to='' className='mt-4 text-[#2557a7]'>Kwara</Link>
                        <Link to='' className='mt-4 text-[#2557a7]'>Lagos</Link>
                        <Link to='' className='mt-4 text-[#2557a7]'>Nasarawa</Link>
                        <Link to='' className='mt-4 text-[#2557a7]'>Niger</Link>
                        </div>


                        <div className='flex flex-col mb-10 md:ml-36'>
                        <Link to='' className='mt-4 text-[#2557a7]'>Ogun</Link>
                        <Link to='' className='mt-4 text-[#2557a7]'>Ondo</Link>
                        <Link to='' className='mt-4 text-[#2557a7]'>Osun</Link>
                        <Link to='' className='mt-4 text-[#2557a7]'>Oyo</Link>
                        <Link to='' className='mt-4 text-[#2557a7]'>Plateau</Link>
                        <Link to='' className='mt-4 text-[#2557a7]'>Rivers</Link>
                        <Link to='' className='mt-4 text-[#2557a7]'>Sokoto</Link>
                        <Link to='' className='mt-4 text-[#2557a7]'>Zamfara</Link>
                        

                        </div>

                    </div>
                </div>


                <div className='md:mt-10'>
                    <span className='font-bold text-sm'>Jobs by Category</span>
                    <div className='md:flex flex-col-4 md:space-x-36'>
                        <div className='flex flex-col'>
                        <Link to='' className='mt-4 text-[#2557a7]'>Accounting</Link>
                        <Link to='' className='mt-4 text-[#2557a7]'>Administrative Assistance</Link>
                        <Link to='' className='mt-4 text-[#2557a7]'>Agriculture & Forestry</Link>
                        <Link to='' className='mt-4 text-[#2557a7]'>Architecture</Link>
                        <Link to='' className='mt-4 text-[#2557a7]'>Arts & Entertainment</Link>
                        <Link to='' className='mt-4 text-[#2557a7]'>Aviation</Link>
                        <Link to='' className='mt-4 text-[#2557a7]'>Banking & Finance</Link>
                        <Link to='' className='mt-4 text-[#2557a7]'>Beauty & Wellness</Link>
                        <Link to='' className='mt-4 text-[#2557a7]'>Chemical Engineering</Link>
                        <Link to='' className='mt-4 text-[#2557a7]'>Childcare</Link>
                        <Link to='' className='mt-4 text-[#2557a7]'>Civil Engineering</Link>
                        <Link to='' className='mt-4 text-[#2557a7]'>Cleaning & Sanitation</Link>
                        <Link to='' className='mt-4 text-[#2557a7]'>Community & Social Service</Link>
                        <Link to='' className='mt-4 text-[#2557a7]'>Construction</Link>
                        <Link to='' className='mt-4 text-[#2557a7]'>Customer Service</Link>
                        <Link to='' className='mt-4 text-[#2557a7]'>Dental</Link>
                        <Link to='' className='mt-4 text-[#2557a7]'>Driving</Link>
                        <Link to='' className='mt-4 text-[#2557a7]'>Education & Instruction</Link>
                        <Link to='' className='mt-4 text-[#2557a7]'>Electrical Engineering</Link>
                        
                        
                        </div>


                        <div className='flex flex-col'>
                        <Link to='' className='mt-4 text-[#2557a7]'>Food Preparation & Service</Link>
                        <Link to='' className='mt-4 text-[#2557a7]'>Hospitality & Tourism</Link>
                        <Link to='' className='mt-4 text-[#2557a7]'>Human Resources</Link>
                        <Link to='' className='mt-4 text-[#2557a7]'>IT Operations & Helpdesk</Link>
                        <Link to='' className='mt-4 text-[#2557a7]'>Industrial Engineering</Link>
                        <Link to='' className='mt-4 text-[#2557a7]'>Information Design & Documentation</Link>
                        <Link to='' className='mt-4 text-[#2557a7]'>Installation & Maintenance</Link>
                        <Link to='' className='mt-4 text-[#2557a7]'>Insurance</Link>
                        <Link to='' className='mt-4 text-[#2557a7]'>Legal</Link>
                        <Link to='' className='mt-4 text-[#2557a7]'>Loading and Stocking</Link>
                        <Link to='' className='mt-4 text-[#2557a7]'>Logistic Support</Link>
                        <Link to='' className='mt-4 text-[#2557a7]'>Management</Link>
                        <Link to='' className='mt-4 text-[#2557a7]'>Marketing</Link>
                        <Link to='' className='mt-4 text-[#2557a7]'>Mathematics</Link>
                        <Link to='' className='mt-4 text-[#2557a7]'>Mechanical Engineering</Link>
                        <Link to='' className='mt-4 text-[#2557a7]'>Media & Communications</Link>
                        <Link to='' className='mt-4 text-[#2557a7]'>Medical Information</Link>
                        <Link to='' className='mt-4 text-[#2557a7]'>Medical Technician</Link>
                        <Link to='' className='mt-4 text-[#2557a7]'>Military</Link>
                        </div>


                        <div className='flex flex-col'>
                        <Link to='' className='mt-4 text-[#2557a7]'>Mining</Link>
                        <Link to='' className='mt-4 text-[#2557a7]'>Nursing</Link>
                        <Link to='' className='mt-4 text-[#2557a7]'>Personal Care & Home Health</Link>
                        <Link to='' className='mt-4 text-[#2557a7]'>Pharmacy</Link>
                        <Link to='' className='mt-4 text-[#2557a7]'>Physicians & Surgeons</Link>
                        <Link to='' className='mt-4 text-[#2557a7]'>Production & Manufacturing</Link>
                        <Link to='' className='mt-4 text-[#2557a7]'>Project Management</Link>
                        <Link to='' className='mt-4 text-[#2557a7]'>Real Estate</Link>
                        <Link to='' className='mt-4 text-[#2557a7]'>Retail</Link>
                        <Link to='' className='mt-4 text-[#2557a7]'>Sales</Link>
                        <Link to='' className='mt-4 text-[#2557a7]'>Scientific Research & Development</Link>
                        <Link to='' className='mt-4 text-[#2557a7]'>Security & Public Safety</Link>
                        <Link to='' className='mt-4 text-[#2557a7]'>Social Science</Link>
                        <Link to='' className='mt-4 text-[#2557a7]'>Software Development</Link>
                        <Link to='' className='mt-4 text-[#2557a7]'>Sport</Link>
                        <Link to='' className='mt-4 text-[#2557a7]'>Therapy</Link>
                        <Link to='' className='mt-4 text-[#2557a7]'>Veterinary</Link>
                        </div>


                        

                    </div>
                </div>
            </div>
        </div>





        <Footer />
    </div>
  )
}

export default BrowseJob