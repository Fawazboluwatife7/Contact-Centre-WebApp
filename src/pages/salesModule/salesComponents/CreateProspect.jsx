import React from 'react';

const CreateProspect = () => {
  return (
    <div className="p-6 bg-gray-200 h-full">
      {/* Page Title */}
      <div className=" top-4 left-4 text-black font-bold text-3xl ml-2">
        Create Prospect
      </div>
      
      {/* Content Area */}
      <div className="py-8 mt-10 bg-white h-[87%]">
        {/* Page Header */}
        <div className="relative mx-auto max-w-4xl">
          {/* Main Heading */}
          <div className="text-center text-2xl font-product-sans text-[#34475E] mb-1 leading-[56px]">
            Complete This In No Time
          </div>
          {/* Subheading */}
          <div className="text-center text-sm font-product-sans text-[#C61531] font-bold mb-4">
            Select Prospect Type
          </div>
          {/* Progress Bar */}
          <div className="flex gap-1 justify-center mt-2">
            <div className="w-9 h-1 bg-[#C61531] rounded-md"></div>
            <div className="w-9 h-1 bg-[#DDDFE0] rounded-md"></div>
            <div className="w-9 h-1 bg-[#DDDFE0] rounded-md"></div>
            <div className="w-9 h-1 bg-[#DDDFE0] rounded-md"></div>
            <div className="w-9 h-1 bg-[#DDDFE0] rounded-md"></div>
            <div className="w-9 h-1 bg-[#DDDFE0] rounded-md"></div>
          </div>
        </div>

        {/* Options Section */}
        <div className="flex justify-center gap-6 mt-12">
          {/* Corporate Card */}
          <div className="relative w-72 h-76 bg-white border cursor-pointer border-gray-300 rounded-md shadow-lg flex flex-col items-center py-6 hover:scale-95">
          <svg class="w-24 h-24 mb-12 mt-7 text-[#C61531]" width="100" height="100"  fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M96.88 93c0-1.15-.67-2.14-1.61-2.68q.5-.86.51-1.83a3.56 3.56 0 0 0-3.55-3.57l-.22.03v-.44c0-1.01-.82-1.83-1.82-1.83q-.4.01-.71.17v-1.3h2.78V73.2h-2.01v-6.97h2.01v-8.35h-2.01V50.9h2.01v-8.36h-2.01V35.6h2.01v-8.36h-2.01v-6.96h2.01V7.74H73.82V3.13H24.64v6h-4.8v-1.4H5.9v69.65H3.13v4.17H5.9v15.33h90.97v-1.54h-1.03A3.2 3.2 0 0 0 96.88 93M61.62 20.28h6.97v6.97h-6.97zm0 15.32h6.97v6.96h-6.97zm0 15.32h6.97v6.97h-6.97zm0 15.32h6.97v6.97h-6.97zM47.7 20.27h6.97v6.97H47.7zm0 15.32h6.97v6.96H47.7zm0 15.32h6.97v6.97H47.7zm0 15.32h6.97v6.97H47.7zm-21.95 29.1h-4.17V84.35h4.17zm5.57 0h-4.17V84.35h4.17zm9.42 0h-8.02V82.96H20.17v12.39H8.7v-13.8h32.03zm0-29.1v11.15h-20.9V64.15h20.9zm0-15.32v9.06h-20.9V48.82h20.9zm0-15.32v9.05h-20.9V33.5h20.9zm0-15.32v9.06h-20.9V18.17h20.9zm0-6.27h-20.9v-3.48h20.9zm6.96 81.34h-4.6V93.8h4.6V81.55h6.97V93.8h6.96V81.55h6.97V93.8h6.37c.32.75.95 1.3 1.73 1.54zm27.86-9v-4.79h6.97v2.14c-.17-.03-.33-.09-.52-.09a2.7 2.7 0 0 0-2.45 1.57q-.57-.2-1.17-.2a3.6 3.6 0 0 0-2.83 1.38m2.1 6.4c-.5 0-.9.5-.9 0a.9.9 0 1 1 1.82 0c0 .5-.4 0-.92 0m.98-4.92c-1 0-1.82 1.6-1.82.58a1.83 1.83 0 0 1 3.65 0c0 1.02-.81-.58-1.83-.58m3.96 4.9c-1 0-1.82 1.41-1.82.4a1.83 1.83 0 0 1 2.51-1.68 1.8 1.8 0 0 1 1.12 1.68c0 1.01-.8-.4-1.81-.4m2.29-7.3a1.23 1.23 0 1 1 2.45 0c0 .69-.54-.34-1.23-.34s-1.22 1.03-1.22.35M87 89.95c-.5 0-.9.5-.9 0a.9.9 0 0 1 1.55-.65 1 1 0 0 1 .27.65c0 .5-.4 0-.92 0m.93-16.74H74.01v-6.97h13.93zm0-15.32H74.01V50.9h13.93zm0-15.33H74.01V35.6h13.93zm0-15.31H74.01v-6.97h13.93zm1.56 65.99c-.68 0-1.23 1.02-1.23.34a1.23 1.23 0 1 1 2.46 0c0 .68-.55-.34-1.23-.34m.31-5.92c-.5 0-.9.66-.9.15s.4-.91.9-.91.92.4.92.91c0 .5-.42-.15-.92-.15M92 90.1a.9.9 0 0 1 1.81 0c0 .5-.4-.15-.9-.15s-.91.65-.91.14m1.74 3.25c-.5 0-.91.51-.91 0a.9.9 0 0 1 1.81-.01c0 .52-.4 0-.9 0" fill="#C61531" /></svg>
            <div className="text-[#C61531] font-product-sans font-bold text-xl">Corporate</div>
          </div>

          {/* SME Card */}
          <div 
            className="relative w-72 h-72 bg-white border cursor-pointer border-gray-300 rounded-md shadow-lg flex flex-col items-center py-6 hover:scale-95
          ">
          <svg className="w-24 h-24 mt-8 mb-12 text-[#C61531]" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 81"><path d="M50 19.2a19.2 19.2 0 1 1-38.5 0 19.2 19.2 0 0 1 38.5 0m27 19.3a15.4 15.4 0 1 0 0-30.8 15.4 15.4 0 0 0 0 30.8m-7.8 20v-.8q0-6.4-3.8-11.5h25.2c5.2 0 9.4 4.2 9.4 9.4 0 0 0 17.5-23 17.5q-7 0-11.3-1.8a30 30 0 0 0 3.5-12.1zm-7.7-.8A11.5 11.5 0 0 0 50 46.2H11.5A11.5 11.5 0 0 0 0 57.7v.6s0 22.5 30.8 22.5c29.3 0 30.7-20.5 30.7-22.4z" fill="#C61531"/></svg>

            <div className="text-[#C61531] font-product-sans font-bold text-xl">SME</div>
          </div>

          {/* Retail Card */}
          <div className="relative w-72 h-76 bg-white border cursor-pointer border-gray-300 rounded-md shadow-lg flex flex-col items-center py-6 hover:scale-95">
          <svg class="w-24 h-24 mt-8 mb-12 text-[#C61531]" width="76" height="80" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 76 80"><path d="M19.25 19.08A18.77 18.77 0 0 0 38 37.83a18.77 18.77 0 0 0 18.75-18.75A18.77 18.77 0 0 0 38 .33a18.77 18.77 0 0 0-18.75 18.75M71.33 79.5h4.17v-4.17a29.2 29.2 0 0 0-29.17-29.16H29.67A29.2 29.2 0 0 0 .5 75.33v4.17z" fill="#C61531"/></svg>
            <div className="text-[#C61531] font-product-sans font-bold text-xl">Retail</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateProspect;
