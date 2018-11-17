import React, { Component }  from "react"

import CoursesList from './CoursesList'
import './index.css'


class App extends Component {
  constructor(...props) {
    super(...props)
    this.state = {
      courses: [
        {id: 1, name: 'React desde cero', teacher: 'Carlos Vesga'},
        {id: 2, name: 'Vue desde cero', teacher: 'Elkin Vesga'},
      ]
    }
    this.handleOnAddCourse = this.handleOnAddCourse.bind(this)
  }
  handleOnAddCourse(e) {
    e.preventDefault()
    let form = e.target, 
    course = {
      id: form.id.value,
      name: form.name.value,
      teacher: form.teacher.value
    }
    this.setState({
      courses: this.state.courses.concat([course])
    })
    form.reset()
  }

  render() {
    return(
      <CoursesList 
        courses={this.state.courses} 
        onAddCourse={this.handleOnAddCourse}
      />
    )
  }
}

App.propTypes = {

}
App.defaultProps = {

}

export default App