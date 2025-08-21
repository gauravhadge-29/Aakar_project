import React, { useState } from 'react'
import './SubPartComponent.css'
import { Button, TextField } from '@mui/material'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined'
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined'
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined'

const SubPartComponent = () => {
  const [stageDetails, setStageDetails] = useState([
    {
      name: 'Subpart 1',
      id: 'stage1',
      activities: [
        {
          name: 'Activity 1',
          id: 'activity1',
          startDate: '2024-12-10',
          endDate: '2025-02-01',
          duration: 5,
          machine: 'VMC1',
        },
        {
          name: 'Activity 2',
          id: 'activity2',
          startDate: '2024-01-13',
          endDate: '2025-10-12',
          duration: 5,
          machine: 'VMC1',
        },
      ],
    },
    {
      name: 'Subpart 2',
      id: 'stage2',
      activities: [
        {
          name: 'Activity 1',
          id: 'activity1',
          startDate: '2024-12-10',
          endDate: '2025-02-01',
          duration: 5,
          machine: 'VMC1',
        },
        {
          name: 'Activity 2',
          id: 'activity2',
          startDate: '2024-01-13',
          endDate: '2025-10-12',
          duration: 5,
          machine: 'VMC1',
        },
      ],
    },
    {
      name: 'Subpart 3',
      id: 'stage3',
      activities: [
        {
          name: 'Activity 1',
          id: 'activity1',
          startDate: '2024-12-10',
          endDate: '2025-02-01',
          duration: 5,
          machine: 'VMC1',
        },
        {
          name: 'Activity 2',
          id: 'activity2',
          startDate: '2024-01-13',
          endDate: '2025-10-12',
          duration: 5,
          machine: 'VMC1',
        },
        {
          name: 'Activity 1',
          id: 'activity1',
          startDate: '2024-12-10',
          endDate: '2025-02-01',
          duration: 5,
          machine: 'VMC1',
          owner: 'Krishna Magar',
        },
        {
          name: 'Activity 2',
          id: 'activity2',
          startDate: '2024-01-13',
          endDate: '2025-10-12',
          duration: 5,
          machine: 'VMC1',
          owner: 'Omkar Kasture',
        },
        {
          name: 'Activity 1',
          id: 'activity1',
          startDate: '2024-12-10',
          endDate: '2025-02-01',
          duration: 5,
          machine: 'VMC1',
        },
        {
          name: 'Activity 2',
          id: 'activity2',
          startDate: '2024-01-13',
          endDate: '2025-10-12',
          duration: 5,
          machine: 'VMC1',
        },
        {
          name: 'Activity 1',
          id: 'activity1',
          startDate: '2024-12-10',
          endDate: '2025-02-01',
          duration: 5,
          machine: 'VMC1',
        },
        {
          name: 'Activity 2',
          id: 'activity2',
          startDate: '2024-01-13',
          endDate: '2025-10-12',
          duration: 5,
          machine: 'VMC1',
        },
        {
          name: 'Activity 1',
          id: 'activity1',
          startDate: '2024-12-10',
          endDate: '2025-02-01',
          duration: 5,
          machine: 'VMC1',
        },
        {
          name: 'Activity 2',
          id: 'activity2',
          startDate: '2024-01-13',
          endDate: '2025-10-12',
          duration: 5,
          machine: 'VMC1',
        },
        {
          name: 'Activity 1',
          id: 'activity1',
          startDate: '2024-12-10',
          endDate: '2025-02-01',
          duration: 5,
          machine: 'VMC1',
        },
        {
          name: 'Activity 2',
          id: 'activity2',
          startDate: '2024-01-13',
          endDate: '2025-10-12',
          duration: 5,
          machine: 'VMC1',
        },
      ],
    },
  ])
  const [editableStage, setEditableStage] = useState(null)
  const [editedData, setEditedData] = useState(null)

  const handleEditClick = (stageId) => {
    setEditableStage(stageId)
    setEditedData(
      stageDetails
        .find((stage) => stage.id === stageId)
        ?.activities.map((activity) => ({ ...activity }))
    )
  }

  const handleInputChange = (index, field, value) => {
    const updatedActivities = [...editedData]
    updatedActivities[index][field] = value
    setEditedData(updatedActivities)
  }

  const handleSave = (stageId) => {
    setStageDetails(
      stageDetails.map((stage) =>
        stage.id === stageId ? { ...stage, activities: editedData } : stage
      )
    )
    setEditableStage(null)
    setEditedData(null)
  }

  const handleCancel = () => {
    setEditableStage(null)
    setEditedData(null)
  }

  return (
    <div className="mt-2 flex flex-col gap-4 py-2 max-h-[430px] overflow-y-auto">
      {stageDetails.map((stage) => (
        <div
          key={stage.id}
          className="stageContainer border rounded-lg p-3 flex"
        >
          <div className="flex flex-col justify-center items-center mb-4 mr-4">
            <h2 className="text-lg font-semibold">{stage.name}</h2>
            <div className="flex gap-2">
              <Button variant="outlined" size="small">
                <DeleteOutlinedIcon />
              </Button>
              {editableStage === stage.id ? (
                <>
                  <Button
                    variant="outlined"
                    size="small"
                    onClick={() => handleSave(stage.id)}
                  >
                    <SaveOutlinedIcon />
                  </Button>
                  <Button
                    variant="outlined"
                    size="small"
                    onClick={handleCancel}
                  >
                    <CancelOutlinedIcon />
                  </Button>
                </>
              ) : (
                <Button
                  variant="outlined"
                  size="small"
                  onClick={() => handleEditClick(stage.id)}
                >
                  <EditOutlinedIcon />
                </Button>
              )}
            </div>
          </div>
          <div className="activitiesGrid overflow-x-auto whitespace-nowrap">
            {stage.activities.map((activity, index) => (
              <div
                key={activity.id}
                className="activityCard border-l p-3 inline-block w-64"
              >
                {editableStage === stage.id ? (
                  <div className="flex flex-col gap-2">
                    <TextField
                      label="Name"
                      variant="outlined"
                      size="small"
                      fullWidth
                      value={editedData[index].name}
                      onChange={(e) =>
                        handleInputChange(index, 'name', e.target.value)
                      }
                    />
                    <TextField
                      label="Start Date"
                      type="date"
                      variant="outlined"
                      size="small"
                      value={editedData[index].startDate}
                      onChange={(e) =>
                        handleInputChange(index, 'startDate', e.target.value)
                      }
                      fullWidth
                    />
                    <TextField
                      label="End Date"
                      type="date"
                      variant="outlined"
                      size="small"
                      value={editedData[index].endDate}
                      onChange={(e) =>
                        handleInputChange(index, 'endDate', e.target.value)
                      }
                      fullWidth
                    />
                    <TextField
                      label="Duration"
                      type="number"
                      variant="outlined"
                      size="small"
                      value={editedData[index].duration}
                      onChange={(e) =>
                        handleInputChange(index, 'duration', e.target.value)
                      }
                      fullWidth
                    />
                    <TextField
                      label="Machine"
                      variant="outlined"
                      size="small"
                      value={editedData[index].machine}
                      onChange={(e) =>
                        handleInputChange(index, 'machine', e.target.value)
                      }
                      fullWidth
                    />
                  </div>
                ) : (
                  <div className="flex flex-col gap-1 text-sm">
                    <p className="font-medium">{activity.name}</p>
                    <p>Start Date: {activity.startDate}</p>
                    <p>End Date: {activity.endDate}</p>
                    <p>Duration: {activity.duration} days</p>
                    <p>Machine: {activity.machine}</p>
                    {activity.owner && <p>Owner: {activity.owner}</p>}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default SubPartComponent
