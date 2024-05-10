const Teams = () => {
  return (
    <div className='flex flex-col gap-4 w-full h-[60vh] justify-center items-center'>
      <p className='text-md'>No Teams Found!!</p>
      <button
        type='button'
        className='bg-blue-500 text-white px-6 py-2 rounded-md'
        onClick={() => alert('Add Objective clicked!')}
      >
        Add Teams
      </button>
    </div>
  );
};

export default Teams;
