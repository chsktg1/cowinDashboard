// Write your code here
import Loader from 'react-loader-spinner'

import {Component} from 'react'

import VaccinationCoverage from '../VaccinationCoverage'

import {MainBackGround} from './styledComponents'

import VaccinationByAge from '../VaccinationByAge'

import VaccinationByGender from '../VaccinationByGender'

class CowinDashboard extends Component {
  state = {isLoading: true, data: [], showError: false}

  componentDidMount() {
    this.fetchData()
  }

  fetchData = async () => {
    this.setState({isLoading: true})
    const api = 'https://apis.ccbp.in/covid-vaccination-data'
    const res = await fetch(api)
    const data = await res.json()
    console.log(data)
    if (res.ok) {
      this.setState({isLoading: false, data})
    } else {
      this.setState({showError: true, isLoading: false})
    }
  }

  renderErrorMessage = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="failure view"
      />
      <p>Something went wrong</p>
    </>
  )

  renderFetchedData = () => {
    const {data, showError} = this.state
    const last7DaysVaccination = data.last_7_days_vaccination
    const vaccinationByAge = data.vaccination_by_age
    const vaccinationByGender = data.vaccination_by_gender
    return showError ? (
      this.renderErrorMessage()
    ) : (
      <>
        <div style={{margin: '25px', padding: '20px'}}>
          <VaccinationCoverage last7DaysVaccination={last7DaysVaccination} />
        </div>
        <div style={{margin: '25px', padding: '20px'}}>
          <VaccinationByAge vaccinationByAge={vaccinationByAge} />
        </div>
        <div style={{margin: '25px', padding: '20px'}}>
          <VaccinationByGender vaccinationByGender={vaccinationByGender} />
        </div>
      </>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <MainBackGround>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="ThreeDots" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <>
            <h1>CoWIN Vaccination in India</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
              alt="website logo"
            />
            {this.renderFetchedData()}
          </>
        )}
      </MainBackGround>
    )
  }
}

export default CowinDashboard
