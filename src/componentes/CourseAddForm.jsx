import React from 'react'
import iud from 'uid'

const CourseAddForm = (props) => (
  <form onSubmit={props.form}>
    <input type="text" placeholder="Nombre del Curso" name="name"/>
    <input type="text" placeholder="Profesor" name="teacher"/>
    <input type="hidden" name="id" value={iud(10)}/>
    <input type="submit" value="Guardar"/>
  </form>
)

export default CourseAddForm