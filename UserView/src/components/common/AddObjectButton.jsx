import React, { useState } from 'react'
import ObjectiveModal from '../Modal/ObjectiveModal'

const AddObjectiveButton = () => {
    const [showObjectiveModal, setShowObjectiveModal] = useState(false)
    const handleCloseModal = () => setShowObjectiveModal(false)

    return (
        <>
            {showObjectiveModal && <ObjectiveModal open={showObjectiveModal} handleClose={handleCloseModal} />}

            <button
                type='button'
                className='bg-blue-500 text-white px-6 py-2 rounded-md'
                onClick={() => setShowObjectiveModal(true)}
            >
                Add Objective
            </button>
        </>
    )
}

export default AddObjectiveButton