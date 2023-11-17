const DashBoard = () => {
    return (
      <div className='p-7 text-2xl text-black bg-dark-black w-[1240px] font-semibold'>
        <div className='bg-dark-black h-screen'>
          <div className='p-5 gap-10 grid grid-cols-1 md:grid-cols-2'>
            {/* First Set of Elements */}
            <div className='w-full md:w-[35rem] h-[5rem] bg-dark-black-container rounded-md shadow-lg '>
              <div className='flex justify-between px-4 py-2'>
                <div className='flex flex-col'>
                  <div className='text-[grey] text-xl'>Today Moneys</div>
                  <div className='text-white'>$53,000</div>
                </div>
                <div className='flex'>
                  <div className='w-[2.5rem] md:w-[2.5rem] h-[2.5rem] bg-light-blue rounded-[25%] text-center'>
                    T
                  </div>
                </div>
              </div>
            </div>
  
            {/* Second Set of Elements */}
            <div className='w-full md:w-[35rem] h-[5rem] bg-dark-black-container rounded-md shadow-lg '>
              <div className='flex justify-between px-4 py-2'>
                <div className='flex flex-col'>
                  <div className='text-[grey] text-xl'>Today Moneys</div>
                  <div className='text-white'>$53,000</div>
                </div>
                <div className='flex'>
                  <div className='w-[2.5rem] md:w-[2.5rem] h-[2.5rem] bg-light-blue rounded-[25%] text-center'>
                    T
                  </div>
                </div>
              </div>
            </div>
  
            {/* Third Set of Elements */}
            <div className='w-full md:w-[35rem] h-[5rem] bg-dark-black-container rounded-md shadow-lg '>
              <div className='flex justify-between px-4 py-2'>
                <div className='flex flex-col'>
                  <div className='text-[grey] text-xl'>Today Moneys</div>
                  <div className='text-white'>$53,000</div>
                </div>
                <div className='flex'>
                  <div className='w-[2.5rem] md:w-[2.5rem] h-[2.5rem] bg-light-blue rounded-[25%] text-center'>
                    T
                  </div>
                </div>
              </div>
            </div>
  
            {/* Fourth Set of Elements */}
            <div className='w-full md:w-[35rem] h-[5rem] bg-dark-black-container rounded-md shadow-lg '>
              <div className='flex justify-between px-4 py-2'>
                <div className='flex flex-col'>
                  <div className='text-[grey] text-xl'>Today Moneys</div>
                  <div className='text-white'>$53,000</div>
                </div>
                <div className='flex'>
                  <div className='w-[2.5rem] md:w-[2.5rem] h-[2.5rem] bg-light-blue rounded-[25%] text-center'>
                    T
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          {/* Additional Set of Elements */}
          <div className='p-5 gap-10 flex flex-col md:flex-row'>
            {/* Fifth Set of Elements */}
            <div className='w-full md:w-[40rem] h-[20rem] bg-dark-black-container rounded-md shadow-lg flex flex-col justify-center items-center'>
              <div className='flex justify-between px-4 py-2 w-full'>
                <div className='flex flex-col'>
                  <div className='text-[grey] text-xl'>Today Moneys</div>
                  <div>$53,000</div>
                </div>
                <div className='flex'>
                  <div className='w-[13.5rem] md:w-[13.5rem] h-[18rem] bg-light-blue rounded-lg flex text-center text-white justify-center items-center'>
                    {/* Your content goes here */}
                  </div>
                </div>
              </div>
            </div>
  
            {/* Sixth Set of Elements */}
            <div className='w-full md:w-[30rem] h-[20rem] bg-dark-black-container rounded-md shadow-lg flex flex-col justify-center items-center'>
              <div className='flex justify-between px-4 py-2 w-full'>
                <div className='flex flex-col'>
                  <div className='text-[grey] text-xl'>Today Moneys</div>
                  <div>$53,000</div>
                </div>
                <div className='flex'>
                  <div className='w-[13.5rem] md:w-[13.5rem] h-[18rem] bg-light-blue rounded-lg flex text-center text-white justify-center items-center'>
                    {/* Your content goes here */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default DashBoard;
  