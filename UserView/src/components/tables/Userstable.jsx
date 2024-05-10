const people = [
  {
    name: 'Anne Rempel',
    title: 'Community Works',
    Team: 'DevOps',
    Status: '33%',
    LastUpdated: '13 Sept 2023',
    UpdatedNotes: 'Lorem ispum dolor sit amet',
    Aligned: 'Aligned',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Horace Volkman',
    title: 'Community Works',
    Team: 'Product',
    Status: '48%',
    LastUpdated: '13 Sept 2023',
    UpdatedNotes: 'Lorem ispum dolor sit amet',
    Aligned: 'Aligned',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Desiree Johnston',
    title: 'Community Works',
    Team: 'UX/UI',
    Status: '48%',
    LastUpdated: '13 Sept 2023',
    UpdatedNotes: 'Lorem ispum dolor sit amet',
    Aligned: 'Aligned',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Janet Turcotte',
    title: 'Community Works',
    Team: 'PMO',
    Status: 'Not Started',
    LastUpdated: '13 Sept 2023',
    UpdatedNotes: 'Lorem ispum dolor sit amet',
    Aligned: 'Aligned',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Bennie Emmerich',
    title: 'Community Works',
    Team: 'SNOW',
    Status: '100%',
    LastUpdated: '13 Sept 2023',
    UpdatedNotes: 'Lorem ispum dolor sit amet',
    Aligned: 'Aligned',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Mrs. Elbert Heaney',
    title: 'Community Works',
    Team: 'SysOps',
    Status: '48%',
    LastUpdated: '13 Sept 2023',
    UpdatedNotes: 'Lorem ispum dolor sit amet',
    Aligned: 'Aligned',
    image:
      'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },

  // More people...
];

export default function UsersTable() {
  return (
    <div className=''>
      <div className='mt-8 '>
        <div className='-my-2 overflow-x-scroll w-full'>
          <div className='inline-block w-full py-2'>
            <table className='w-full divide-y divide-gray-300'>
              <thead className='bg-gray-300'>
                <tr>
                  <th
                    scope='col'
                    className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                  >
                    Title
                  </th>
                  <th
                    scope='col'
                    className='py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0'
                  >
                    Owner
                  </th>
                  <th
                    scope='col'
                    className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                  >
                    Team
                  </th>
                  <th
                    scope='col'
                    className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                  >
                    Status
                  </th>
                  <th
                    scope='col'
                    className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                  >
                    Last Updated
                  </th>
                  <th
                    scope='col'
                    className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                  >
                    Updated Notes
                  </th>
                  <th
                    scope='col'
                    className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                  ></th>
                  <th
                    scope='col'
                    className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                  >
                    Aligned
                  </th>
                  <th scope='col' className='relative py-3.5 pl-3 pr-4 sm:pr-0'>
                    <span className='sr-only'>Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className='divide-y divide-gray-200  p-4'>
                {people.map((person) => (
                  <tr className='p-4 ' key={person.name}>
                    <td className=' border-b border-b-gray-400 whitespace-nowrap px-3 py-5 text-sm text-gray-500'>
                      <div className='text-gray-900'>{person.title}</div>
                    </td>
                    <td className=' border-b border-b-gray-400 whitespace-nowrap py-5 pl-4 pr-3 text-sm'>
                      <div className='flex items-center'>
                        <div className='h-11 w-11 flex-shrink-0'>
                          <img
                            className='h-full w-full rounded-full'
                            src={person.image}
                            alt={person.name}
                          />
                        </div>
                        <div className='ml-4'>
                          <div className='font-medium text-gray-900'>
                            {person.name}
                          </div>
                        </div>
                      </div>
                    </td>

                    <td className=' border-b border-b-gray-400 whitespace-nowrap px-3 py-5 text-sm text-gray-500'>
                      <span>{person.Team}</span>
                    </td>

                    <td className=' border-b border-b-gray-400 whitespace-nowrap px-3 py-5 text-sm text-gray-500 '>
                      <p className='text-base font-semibold'>{person.Status}</p>
                      <div className='w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-300'>
                        <div
                          className='bg-green-600 h-2.5 rounded-full'
                          style={{ width: person.Status }}
                        ></div>
                      </div>
                    </td>

                    <td className=' border-b border-b-gray-400 whitespace-nowrap px-3 py-5 text-sm text-gray-500'>
                      <span className='text-black'>{person.LastUpdated}</span>
                    </td>
                    <td className=' border-b border-b-gray-400 whitespace-nowrap px-3 py-5 text-sm text-gray-500'>
                      <span className='text-black'>{person.UpdatedNotes}</span>
                    </td>

                    <td className=' border-b border-b-gray-400 whitespace-nowrap px-3 py-5 text-sm text-gray-500'>
                      <span className='text-black'>1d</span>
                    </td>

                    <td className=' border-b border-b-gray-400  whitespace-nowrap px-3 py-5 text-sm text-black'>
                      <span className='text-black'>{person.Aligned}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
