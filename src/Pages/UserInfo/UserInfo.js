import PagesHeader from '../../Components/Header/PagesHeader'
import { Text } from '../../containers/Language'
import '../MyProfile/MyProfile.css'
import Cookies from 'js-cookie'
import { useContext, useEffect, useState } from 'react'
import { IntranetContext } from '../../context'
import axios from 'axios'

export default function UserInfo() {
  const [message, setMessage] = useState('')
  const [feedbackType, setFeedbackType] = useState('')
  const [assess, setAssess] = useState('')
  const [showName, setShowName] = useState(null)

  const myCookie = Cookies.get('user')
  const myCookieUserObj = myCookie !== 'undefined' && JSON.parse(myCookie)
  const { colorTheme, userInfo } = useContext(IntranetContext)

  async function setFeedback(created_by, emp_code, emp_comp, details) {
    try {
      const response = await axios.post(
        `https://dmgian.corp-dmg.com/_intranet_dashboard/ajaxResponse.php`,
        {
          data_type: 'setFeedBack',
          credentials: {
            created_by: created_by,
            emp_code: emp_code,
            emp_comp: emp_comp,
            details: details,
          },
        },
        {
          headers: { 'Content-Type': 'application/json' },
        },
      )
      console.log(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  const addMessageToUser = (targetUserName, messageContent) => {
    const currentDate = new Date()
    const newMessage = {
      message: messageContent,
      from: myCookieUserObj.userName,
      to: targetUserName,
      date: currentDate.toLocaleString(),
      feedbackType: feedbackType,
      assess: assess,
      showName: showName,
    }

    setFeedback(
      myCookieUserObj.userId,
      userInfo.code,
      userInfo.company,
      newMessage,
    )
  }
  const [submissionMessage, setSubmissionMessage] = useState('')

  useEffect(() => {
    if (submissionMessage) {
      const timeout = setTimeout(() => {
        setSubmissionMessage('')
      }, 2000)

      return () => clearTimeout(timeout)
    }
  }, [submissionMessage])

  function handleSubmit(e) {
    e.preventDefault()

    addMessageToUser(userInfo.name, message)
    setMessage('')
    setFeedbackType('')
    setAssess('')
    setShowName(null)
    setSubmissionMessage('Your Message has been sent successfully!')
  }

  return (
    <>
      <PagesHeader data={<Text tid="Employee Info" />} />
      <div className="row d-flex justify-content-center pt-md-4 pt-2">
        <div className="col-11">
          <div className="row">
            <div className="col-md-2 col-12 bg-dar text-white"></div>
            <div className="col-md-7 col-12">
              <div className="row">
                <h3 className={`${colorTheme}`}>
                  {userInfo.name || 'Still no data'}
                </h3>
              </div>
              <div className="row gx-2 me-3 gy-2 mb-1">
                <div className="col-12 col-sm-6 col-md-3">
                  <h5 className={`${colorTheme}`}>Title</h5>
                </div>
                <div className="col-12 col-sm-6 col-md-9 ">
                  <h5 className={`${colorTheme}`}>{userInfo.title}</h5>
                </div>
              </div>
              <div className="row gx-2 me-3 gy-2 mb-1">
                <div className="col-12 col-sm-6 col-md-3 ">
                  <h5 className={`${colorTheme}`}>Email</h5>
                </div>
                <div className="col-12 col-sm-6 col-md-9">
                  <h5 className={`${colorTheme}`}>{userInfo.email}</h5>
                </div>
              </div>
              <div className="row gx-2 me-3 gy-2 mb-1">
                <div className="col-12 col-sm-6 col-md-3 ">
                  <h5 className={`${colorTheme}`}>Department</h5>
                </div>
                <div className="col-12 col-sm-6 col-md-9">
                  <h5 className={`${colorTheme}`}>{userInfo.department}</h5>
                </div>
              </div>
              <div className="row gx-2 me-3 gy-2 mb-1">
                <div className="col-12 col-sm-6 col-md-3 ">
                  <h5 className={`${colorTheme}`}>Direct Manager</h5>
                </div>
                <div className="col-12 col-sm-6 col-md-9">
                  <h5 className={`${colorTheme}`}>{userInfo.Direct_manager}</h5>
                </div>
              </div>
              <div className="row gx-2 me-3 gy-2 mb-1">
                <div className="col-12 col-sm-6 col-md-3 ">
                  <h5 className={`${colorTheme}`}>Work Number</h5>
                </div>
                <div className="col-12 col-sm-6 col-md-9">
                  <h5 className={`${colorTheme}`}>
                    {userInfo.work_umber || '--'}
                  </h5>
                </div>
              </div>
              <div className="row gx-2 me-3 gy-2 mb-1">
                <form onSubmit={handleSubmit}>
                  <div className="col-12 d-flex gap-5 align-items-center  my-2">
                    <div>
                      <label htmlFor="feedbackType">- Feedback Type</label>
                      <select
                        name="feedbackType"
                        value={feedbackType}
                        onChange={e => setFeedbackType(e.target.value)}
                        className="ms-2 px-2"
                        id="feedbackType"
                      >
                        <option value=""> --Choose-- </option>
                        <option value="gratitude">Gratitude</option>
                        <option value="improvment-feedback">
                          Improvement feedback
                        </option>
                        <option value="acknowledging">Acknowledging</option>
                      </select>
                    </div>

                    <div className="my-2">
                      <label hrmlFor="assess"> - As to assess:</label>
                      <select
                        name="assess"
                        value={assess}
                        onChange={e => setAssess(e.target.value)}
                        className="ms-2 px-2"
                        id="assess"
                      >
                        <option value=""> --Choose-- </option>
                        <option value="character">Character</option>
                        <option value="competence">Competence</option>
                        <option value="values">Values</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-12 my-3">
                    <label htmlFor="showName" className="me-5">
                      Show my name?
                    </label>

                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        id="yes"
                        name="showName"
                        value="yes"
                        checked={showName === 'yes'}
                        onChange={e => setShowName(e.target.value)}
                      />
                      <label className="form-check-label" htmlFor="yes">
                        Yes
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        id="no"
                        name="showName"
                        value="no"
                        checked={showName === 'no'}
                        onChange={e => setShowName(e.target.value)}
                      />
                      <label className="form-check-label" htmlFor="no">
                        No
                      </label>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6 col-md-12">
                    <div className="mb-3">
                      <label htmlFor="message" className="form-label">
                        Send Message or give feedback to{' '}
                        {userInfo.name?.split(' ')[0]}
                      </label>
                      <textarea
                        className="form-control"
                        id="message"
                        name="message"
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                        rows="3"
                      ></textarea>
                      {submissionMessage && (
                        <center className="text-success">
                          {submissionMessage}
                        </center>
                      )}

                      <div className="text-end ">
                        <button className="rounded-pill bg-primary text-white px-5 py-2 mt-3  border-0 ">
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-3 col-12 d-flex justify-content-center"></div>
          </div>
        </div>
      </div>
    </>
  )
}
