import {PieChart, Pie, Legend, Cell, ResponsiveContainer} from 'recharts'

import {Component} from 'react'

class VaccinationByGender extends Component {
  render() {
    const {vaccinationByGender} = this.props
    return (
      <>
        <h1>Vaccination by gender</h1>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              cx="70%"
              cy="40%"
              data={vaccinationByGender}
              startAngle={0}
              endAngle={180}
              innerRadius="50"
              outerRadius="70%"
              dataKey="count"
            >
              <Cell name="Male" fill="#fecba6" />
              <Cell name="Female" fill="#b3d23f" />
              <Cell name="Others" fill="#a44c9e" />
            </Pie>
            <Legend
              iconType="circle"
              layout="vertical"
              verticalAlign="middle"
              align="right"
            />
          </PieChart>
        </ResponsiveContainer>
      </>
    )
  }
}

export default VaccinationByGender
