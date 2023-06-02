import React from 'react'
import { Text } from '../../containers/Language'
import './filter.scss'
const Filter = ({ isArabic, jobs, filter, handleChange }) => {
  const getFilterItemsList = (filterItemName) => {
    let filterItem = new Set()
    filterItem.add('all')
    for (let job in jobs) {
      filterItem.add(jobs[job][filterItemName])
    }
    return (filterItem = [...filterItem])
  }

  const companies = getFilterItemsList('company')
  const departments = getFilterItemsList('department')
  const locations = getFilterItemsList('location')

  return (
    <div className='project-filter    '>
      <div className='row mx-auto d-flex justify-content-start '>
        <div className='col-4'>
          <label htmlFor='company' className={isArabic ? 'd-flex' : 'd-flex'}>
            <Text tid='company' />
          </label>
          <select
            name='company'
            id='company'
            onChange={(e) => handleChange(e)}
            value={filter.company}
            className='filter-item text-uppercase '
          >
            {companies.map((company, index) => {
              return (
                <option key={index} value={company}>
                  {company}
                </option>
              )
            })}
          </select>
        </div>

        <div className='col-4'>
          <label
            htmlFor='department'
            className={isArabic ? 'd-flex' : 'd-flex'}
          >
            <Text tid='department' />
          </label>
          <select
            name='department'
            id='department'
            onChange={(e) => handleChange(e)}
            value={filter.department}
            className='filter-item text-uppercase '
          >
            {departments.map((department, index) => {
              return (
                <option key={index} value={department}>
                  {department}
                </option>
              )
            })}
          </select>
        </div>

        <div className='col-4'>
          <label htmlFor='location' className={isArabic ? 'd-flex' : 'd-flex'}>
            <Text tid='location' />
          </label>
          <select
            name='location'
            id='location'
            onChange={(e) => handleChange(e)}
            value={filter.location}
            className='filter-item text-uppercase '
          >
            {locations.map((location, index) => {
              return (
                <option key={index} value={location}>
                  {location}
                </option>
              )
            })}
          </select>
        </div>
      </div>
    </div>
  )
}

export default Filter
