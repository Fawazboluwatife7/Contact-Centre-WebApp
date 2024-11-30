import { Link } from "react-router-dom";

const CardDisplay = () => {

  return (
    <div className="flex flex-col py-2">
      {/* First Row */}
      <div className="flex space-x-3 mb-2">
        {/* Prospects Card */}
        <div className="relative w-[292px] h-[132px] bg-[#D15573] rounded-[5px]">
          {/* Value and Upward Arrow Icon */}
          <div className="absolute left-[19px] top-[16px]">
            <div className="font-product-sans font-bold text-[60px] leading-[73px] text-white">100</div>
            {/* Upward Arrow Icon */}
            <div className="absolute top-[20px] left-[120px]">
            <svg width="70" height="49" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M11.5 0a11.5 11.5 0 1 0 0 23 11.5 11.5 0 0 0 0-23m4.2 10.4a1 1 0 0 1-1.3 0l-2-2v8.4a.9.9 0 0 1-1.8 0V8.3l-2 2a.9.9 0 1 1-1.3-1.2L11 5.6l.3-.2h.6l.3.2L15.7 9a1 1 0 0 1 0 1.3"
                fill="#fff"
              />
            </svg>
          </div>
          </div>
          {/* Large Icon */}
          <div className=" w-[70px] h-[49px] ml-52 mt-5 "><svg  fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70 49"><path d="M20.125 6.125A6.13 6.13 0 0 1 14 12.25a6.13 6.13 0 0 1-6.125-6.125A6.13 6.13 0 0 1 14 0a6.13 6.13 0 0 1 6.125 6.125M7 23.373A6.93 6.93 0 0 0 5.25 28 6.93 6.93 0 0 0 7 32.627zm15.794-5.392A15.68 15.68 0 0 0 17.5 29.75c0 3.752 1.313 7.197 3.5 9.898V42c0 1.936-1.564 3.5-3.5 3.5h-7A3.496 3.496 0 0 1 7 42v-2.931C2.866 37.1 0 32.889 0 28c0-6.77 5.48-12.25 12.25-12.25h3.5c2.625 0 5.053.82 7.044 2.22zM49 42v-2.352a15.68 15.68 0 0 0 3.5-9.898c0-4.681-2.045-8.892-5.294-11.78 1.99-1.4 4.419-2.22 7.044-2.22h3.5C64.52 15.75 70 21.23 70 28c0 4.89-2.866 9.1-7 11.069V42c0 1.936-1.564 3.5-3.5 3.5h-7A3.496 3.496 0 0 1 49 42M62.125 6.125A6.13 6.13 0 0 1 56 12.25a6.13 6.13 0 0 1-6.125-6.125A6.13 6.13 0 0 1 56 0a6.13 6.13 0 0 1 6.125 6.125M63 23.373v9.265a6.95 6.95 0 0 0 1.75-4.627A6.93 6.93 0 0 0 63 23.384zM35 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7m-8.75 15.75c0 1.772.656 3.39 1.75 4.627v-9.254a6.95 6.95 0 0 0-1.75 4.627M42 25.123v9.265a6.95 6.95 0 0 0 1.75-4.627A6.93 6.93 0 0 0 42 25.134zm7 4.627c0 4.89-2.866 9.1-7 11.069V45.5c0 1.936-1.564 3.5-3.5 3.5h-7a3.496 3.496 0 0 1-3.5-3.5v-4.681c-4.134-1.969-7-6.18-7-11.069 0-6.77 5.48-12.25 12.25-12.25h3.5C43.52 17.5 49 22.98 49 29.75" fill="#fff"/></svg>
</div>
          {/* Title */}
          <div className="absolute bottom-[15px] left-[25px] text-white font-product-sans text-[14px] leading-[16px]">
            Total Production
          </div>
        </div>

        {/* Clients Card */}
        <div className="relative w-[292px] h-[132px] bg-[#2CE079] rounded-[5px]">
          {/* Value and Upward Arrow Icon */}
          <div className="absolute left-[19px] top-[16px]">
            <div className="font-product-sans font-bold text-[60px] leading-[73px] text-white">50</div>
            {/* Upward Arrow Icon */}
            <div className="absolute ml-20 top-[20px]">
            <svg width="70" height="49" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M11.5 0a11.5 11.5 0 1 0 0 23 11.5 11.5 0 0 0 0-23m4.2 10.4a1 1 0 0 1-1.3 0l-2-2v8.4a.9.9 0 0 1-1.8 0V8.3l-2 2a.9.9 0 1 1-1.3-1.2L11 5.6l.3-.2h.6l.3.2L15.7 9a1 1 0 0 1 0 1.3"
                fill="#fff"
              />
            </svg>
            </div>
          </div>
          {/* Large Icon */}
          <div className=" w-[70px] h-[49px] ml-52 mt-5 "><svg  fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70 49"><path d="M20.125 6.125A6.13 6.13 0 0 1 14 12.25a6.13 6.13 0 0 1-6.125-6.125A6.13 6.13 0 0 1 14 0a6.13 6.13 0 0 1 6.125 6.125M7 23.373A6.93 6.93 0 0 0 5.25 28 6.93 6.93 0 0 0 7 32.627zm15.794-5.392A15.68 15.68 0 0 0 17.5 29.75c0 3.752 1.313 7.197 3.5 9.898V42c0 1.936-1.564 3.5-3.5 3.5h-7A3.496 3.496 0 0 1 7 42v-2.931C2.866 37.1 0 32.889 0 28c0-6.77 5.48-12.25 12.25-12.25h3.5c2.625 0 5.053.82 7.044 2.22zM49 42v-2.352a15.68 15.68 0 0 0 3.5-9.898c0-4.681-2.045-8.892-5.294-11.78 1.99-1.4 4.419-2.22 7.044-2.22h3.5C64.52 15.75 70 21.23 70 28c0 4.89-2.866 9.1-7 11.069V42c0 1.936-1.564 3.5-3.5 3.5h-7A3.496 3.496 0 0 1 49 42M62.125 6.125A6.13 6.13 0 0 1 56 12.25a6.13 6.13 0 0 1-6.125-6.125A6.13 6.13 0 0 1 56 0a6.13 6.13 0 0 1 6.125 6.125M63 23.373v9.265a6.95 6.95 0 0 0 1.75-4.627A6.93 6.93 0 0 0 63 23.384zM35 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7m-8.75 15.75c0 1.772.656 3.39 1.75 4.627v-9.254a6.95 6.95 0 0 0-1.75 4.627M42 25.123v9.265a6.95 6.95 0 0 0 1.75-4.627A6.93 6.93 0 0 0 42 25.134zm7 4.627c0 4.89-2.866 9.1-7 11.069V45.5c0 1.936-1.564 3.5-3.5 3.5h-7a3.496 3.496 0 0 1-3.5-3.5v-4.681c-4.134-1.969-7-6.18-7-11.069 0-6.77 5.48-12.25 12.25-12.25h3.5C43.52 17.5 49 22.98 49 29.75" fill="#fff"/></svg>
</div>
          {/* Title */}
          <div className="absolute bottom-[15px] left-[25px] text-white font-product-sans text-[14px] leading-[16px]">
            My Clients
          </div>
        </div>
      </div>

      {/* Second Row */}
      <div className="flex space-x-3">
        {/* Outstanding Production Card */}
        <div className="relative w-[292px] h-[132px] bg-[#6990EB] rounded-[5px]">
          {/* Value and Upward Arrow Icon */}
          <div className="absolute left-[19px] top-[16px]">
            <div className="font-product-sans font-bold text-[60px] leading-[73px] text-white">100</div>
            {/* Upward Arrow Icon */}
            <div className="absolute left-[120px] top-[50px]">
              <svg width="9" height="10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.5 0L0 6h9L4.5 0z" fill="#fff" />
              </svg>
            </div>
          </div>
          {/* Large Icon */}
          <div className="absolute top-[20px] right-[20px]">
            <svg width="70" height="49" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M11.5 0a11.5 11.5 0 1 0 0 23 11.5 11.5 0 0 0 0-23m4.2 10.4a1 1 0 0 1-1.3 0l-2-2v8.4a.9.9 0 0 1-1.8 0V8.3l-2 2a.9.9 0 1 1-1.3-1.2L11 5.6l.3-.2h.6l.3.2L15.7 9a1 1 0 0 1 0 1.3"
                fill="#fff"
              />
            </svg>
          </div>
          {/* Title */}
          <div className="absolute bottom-[15px] left-[25px] text-white font-product-sans text-[14px] leading-[16px]">
            Outstanding Production
          </div>
        </div>

        {/* Received Production Card */}
        <div className="relative w-[292px] h-[132px] bg-[#FF905B] rounded-[5px]">
          {/* Value and Upward Arrow Icon */}
          <div className="absolute left-[19px] top-[16px]">
            <div className="font-product-sans font-bold text-[60px] leading-[73px] text-white">100</div>
            {/* Upward Arrow Icon */}
            <div className="absolute left-[120px] top-[50px]">
              <svg width="9" height="10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.5 0L0 6h9L4.5 0z" fill="#fff" />
              </svg>
            </div>
          </div>
          {/* Large Icon */}
          <div className="absolute top-[20px] right-[20px]">
            <svg width="70" height="49" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M11.5 0a11.5 11.5 0 1 0 0 23 11.5 11.5 0 0 0 0-23m4.2 10.4a1 1 0 0 1-1.3 0l-2-2v8.4a.9.9 0 0 1-1.8 0V8.3l-2 2a.9.9 0 1 1-1.3-1.2L11 5.6l.3-.2h.6l.3.2L15.7 9a1 1 0 0 1 0 1.3"
                fill="#fff"
              />
            </svg>
          </div>
          {/* Title */}
          <div className="absolute bottom-[15px] left-[25px] text-white font-product-sans text-[14px] leading-[16px]">
            Received Production
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-4 mt-4">
        {/* Send Proposal Button */}
        <div className="relative w-[168px] h-[45px] bg-[rgba(198,21,49,0.1)] border border-[#C61531] rounded-md flex items-center justify-center">
          <Link to=''>
            <span className="text-[#C61531] cursor-pointer font-bold text-[15px] leading-[18px] tracking-[0.01em]">Send Proposal</span>
          </Link>
        </div>

        {/* Create Invoice Button */}
        <div className="relative w-[168px] h-[45px] bg-[rgba(198,21,49,0.1)] border border-[#C61531] rounded-md flex items-center justify-center">
          <Link to=''>
            <span className="text-[#C61531] cursor-pointer font-bold text-[15px] leading-[18px] tracking-[0.01em]">Create Invoice</span>
          </Link>
        </div>

        {/* Create Prospect Button */}
        <div className="relative w-[168px] h-[45px] bg-[rgba(198,21,49,0.1)] border border-[#C61531] rounded-md flex items-center justify-center">
          <Link to='/SalesDashboard/create-prospect1'>
            <span className="text-[#C61531] font-bold text-[15px] leading-[18px] cursor-pointer tracking-[0.01em]">Create Prospect
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardDisplay;