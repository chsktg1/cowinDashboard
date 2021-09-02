// Write your code here
// Write your code here
import {PieChart, Pie, Legend, Cell, ResponsiveContainer} from 'recharts'

import {Component} from 'react'

class VaccinationByAge extends Component {
  render() {
    const {vaccinationByAge} = this.props
    return (
      <>
        <h1>Vaccination by age</h1>

        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              cx="70%"
              cy="40%"
              data={vaccinationByAge}
              startAngle={0}
              endAngle={360}
              innerRadius="0"
              outerRadius="70%"
              dataKey="count"
            >
              <Cell name="18-44" fill="#fecba6" />
              <Cell name="44-60" fill="#b3d23f" />
              <Cell name="Above 60" fill="#a44c9e" />
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

export default VaccinationByAge
