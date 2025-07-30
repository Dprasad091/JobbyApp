import './index.css'

const FiltersGroup = props => {
  const renderEmploymentTypesList = () => {
    const {employmentTypesList, changeEmploymentType} = props

    return employmentTypesList.map(type => {
      const onClickEmploymentType = () => {
        changeEmploymentType(type.employmentTypeId)
      }
      return (
        <li
          className="checkbox-list-item"
          key={type.employmentTypeId}
          onClick={onClickEmploymentType}
        >
          <input
            type="checkbox"
            id={type.employmentTypeId}
            className="checkbox-input"
          />
          <label htmlFor={type.employmentTypeId} className="checkbox-label">
            {type.label}
          </label>
        </li>
      )
    })
  }

  const renderEmploymentTypes = () => (
    <>
      <h1 className="filter-heading">Type of Employment</h1>
      <ul className="checkbox-list-container">{renderEmploymentTypesList()}</ul>
    </>
  )

  const renderSalaryRangesList = () => {
    const {salaryRangesList, changeSalaryRange} = props

    return salaryRangesList.map(range => {
      const onClickSalaryRange = () => {
        changeSalaryRange(range.salaryRangeId)
      }
      return (
        <li
          className="radio-list-item"
          key={range.salaryRangeId}
          onClick={onClickSalaryRange}
        >
          <input
            type="radio"
            id={range.salaryRangeId}
            name="salary"
            className="radio-input"
          />
          <label htmlFor={range.salaryRangeId} className="radio-label">
            {range.label}
          </label>
        </li>
      )
    })
  }

  const renderSalaryRanges = () => (
    <>
      <h1 className="filter-heading">Salary Range</h1>
      <ul className="radio-list-container">{renderSalaryRangesList()}</ul>
    </>
  )

  return (
    <div className="filters-group-container">
      {renderEmploymentTypes()}
      <hr className="hr-line" />
      {renderSalaryRanges()}
    </div>
  )
}

export default FiltersGroup
