import { motion } from 'framer-motion'
import React, { Component } from 'react'
import { Table } from 'react-bootstrap'
import { Text } from '../../containers/Language'

import './table.scss'

class TableJobs extends Component {
  render() {
    const { filteredJobs, isArabic } = this.props

    return (
      <>
        <div className='col-12' id='container'>
          {filteredJobs && filteredJobs.length !== 0 ? (
            <Table className='tableJobs' responsive='sm'>
              <tbody>
                <tr>
                  <th
                    className={
                      isArabic ? 'text-capitalize arabic' : 'text-capitalize'
                    }
                  >
                    <Text tid='company' />
                  </th>
                  <th
                    className={
                      isArabic ? 'text-capitalize arabic' : 'text-capitalize'
                    }
                  >
                    <Text tid='jobTitle' />
                  </th>
                  <th
                    className={
                      isArabic ? 'text-capitalize arabic' : 'text-capitalize'
                    }
                  >
                    <Text tid='department' />
                  </th>
                  <th
                    className={
                      isArabic ? 'text-capitalize arabic' : 'text-capitalize'
                    }
                  >
                    <Text tid='location' />
                  </th>
                  <th
                    className={
                      isArabic ? 'text-capitalize arabic' : 'text-capitalize'
                    }
                  >
                    <Text tid='description' />
                  </th>
                  {/* <th
                    className={
                      isArabic ? 'text-capitalize arabic' : 'text-capitalize'
                    }
                  >
                    <Text tid='dateAdded' />
                  </th> */}
                </tr>

                {this.props.filteredJobs.map((job, key) => (
                  <tr key={key}>
                    <td
                      className={
                        isArabic ? 'text-capitalize arabic' : 'text-capitalize'
                      }
                    >
                      {job.company}
                    </td>
                    <td
                      className={
                        isArabic ? 'text-capitalize arabic' : 'text-capitalize'
                      }
                    >
                      {job.title}
                    </td>
                    <td
                      className={
                        isArabic ? 'text-capitalize arabic' : 'text-capitalize'
                      }
                    >
                      {job.department}
                    </td>
                    <td
                      className={
                        isArabic ? 'text-capitalize arabic' : 'text-capitalize'
                      }
                    >
                      {job.location}
                    </td>
                    <td
                      className={
                        isArabic ? 'text-capitalize arabic' : 'text-capitalize'
                      }
                    >
                      {job.description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          ) : (
            <motion.div
              className='text-center  text-capitalize mx-auto d-block'
              initial={{ y: '100vh' }}
              animate={{ y: 0 }}
              transition={{ duration: 1, type: 'spring' }}
            >
              <div className='text-center no-data-available'>
                <Text tid='noDataAvailable' />
              </div>
            </motion.div>
          )}
        </div>
      </>
    )
  }
}

export default TableJobs
