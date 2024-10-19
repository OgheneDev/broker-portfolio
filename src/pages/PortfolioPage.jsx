import React from 'react';
import { Link } from 'react-router-dom';
import help from '../assets/images/help.png';

const PortfolioPage = () => {
  return (
    <div className='portfolio'>
      <header className='bg-back-blue text-center px-[20px] pt-[130px] pb-[40px]'>
        <h1 className='text-white text-5xl md:text-5xl font-bold mb-[20px]'>Remodeling Projects</h1>
        <p className='text-light-grey text-[18px]'>Novak Investments and Construction LLC provides a full service range including technical skills, design, business understanding.</p>
      </header>

      {/* Projects Section */}
      <section className="projects py-[100px] md:grid-cols-2 md:px-[150px] md:gap-4 px-[30px] grid gap-[30px] bg-custom-ash">
        {/* Work Item 1 */}
        <div className="relative aspect-square bg-cover bg-center rounded-lg overflow-hidden group bg-[url('/src/assets/images/arcadia.webp')]">
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300"></div>
          <div className="absolute inset-0 flex flex-col justify-end p-6">
            <span className="text-white text-sm mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Project</span>
            <h3 className="text-white text-2xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">Arcadia Apartment Homes</h3>
          </div>
        </div>

        {/* Work Item 2 */}
        <div className="relative aspect-square bg-cover bg-center rounded-lg overflow-hidden group bg-[url('/src/assets/images/town.webp')]">
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300"></div>
          <div className="absolute inset-0 flex flex-col justify-end p-6">
            <span className="text-white text-sm mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Project</span>
            <h3 className="text-white text-2xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">Township Residencies</h3>
          </div>
        </div>

        {/* Work Item 3 */}
        <div className="relative aspect-square bg-cover bg-center rounded-lg overflow-hidden group bg-[url('/src/assets/images/glenn.webp')]">
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300"></div>
          <div className="absolute inset-0 flex flex-col justify-end p-6">
            <span className="text-white text-sm mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Project</span>
            <h3 className="text-white text-2xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">The Glenn</h3>
          </div>
        </div>

        {/* Work Item 4 */}
        <div className="relative aspect-[4/3] bg-cover bg-center rounded-lg overflow-hidden group bg-[url('/src/assets/images/green.webp')]">
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300"></div>
          <div className="absolute inset-0 flex flex-col justify-end p-6">
            <span className="text-white text-sm mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Project</span>
            <h3 className="text-white text-2xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">Greenwood Plaza</h3>
          </div>
        </div>

        {/* Work Item 5 */}
        <div className="relative aspect-[4/3] bg-cover bg-center rounded-lg overflow-hidden group bg-[url('/src/assets/images/hensley.webp')]">
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300"></div>
          <div className="absolute inset-0 flex flex-col justify-end p-6">
            <span className="text-white text-sm mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Project</span>
            <h3 className="text-white text-2xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">Hensley at the District</h3>
          </div>
        </div>

        {/* Work Item 6 */}
        <div className="relative aspect-[4/3] bg-cover bg-center rounded-lg overflow-hidden group bg-[url('/src/assets/images/villas.webp')]">
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300"></div>
          <div className="absolute inset-0 flex flex-col justify-end p-6">
            <span className="text-white text-sm mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Project</span>
            <h3 className="text-white text-2xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">Villas at Holly</h3>
          </div>
        </div>

        {/* Work Item 7 */}
        <div className="relative aspect-[4/3] bg-cover bg-center rounded-lg overflow-hidden group bg-[url('/src/assets/images/keene.webp')]">
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300"></div>
          <div className="absolute inset-0 flex flex-col justify-end p-6">
            <span className="text-white text-sm mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Project</span>
            <h3 className="text-white text-2xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">Keene at the District</h3>
          </div>
        </div>
      </section>

      {/* Help Section */}
      <div className="bg-custom-ash">
        <div className="help bg-custom-idk md:flex md:flex-row-reverse md:justify-center w-[90%] mx-auto md:gap-[30px] md:py-[50px] px-[20px] py-[30px] rounded">
          <div className="image-container mb-[30px] md:mb-0">
            <img src={help} alt="Help" />
          </div>

          <div className="text-content md:w-[500px]">
            <h1 className='text-white text-4xl md:text-4xl font-bold mb-[20px]'>We’re Here To Build Your Dream Project</h1>
            <p className='text-light-grey md:text-[16px] text-[18px] mb-[30px]'>Novak Investments and Construction LLC  is a business you hire to outsource your digital marketing efforts, instead of handling in-house.</p>
            <Link to='/contact'>
            <button className='text-dark font-bold py-[10px] px-[30px] uppercase bg-white rounded'>
              Contact Us
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioPage;

