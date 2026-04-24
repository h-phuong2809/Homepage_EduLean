import React, { useState, useEffect } from 'react';
import { courseAPI } from '../services/courseAPI';

export default function CourseList() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch all courses on component mount
  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      setLoading(true);
      const data = await courseAPI.getAllCourses();
      setCourses(data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch courses');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteCourse = async (id) => {
    if (window.confirm('Are you sure you want to delete this course?')) {
      try {
        await courseAPI.deleteCourse(id);
        // Refresh the list after deletion
        fetchCourses();
      } catch (err) {
        setError('Failed to delete course');
      }
    }
  };

  const handleAddCourse = async () => {
    const newCourse = {
      title: 'New Course',
      description: 'Course description',
      instructor: 'Your Name',
      price: 99.99,
      category: 'Development',
      duration: 20,
      studentCount: 0,
      rating: 4.5,
    };

    try {
      await courseAPI.createCourse(newCourse);
      fetchCourses(); // Refresh the list
    } catch (err) {
      setError('Failed to add course');
    }
  };

  if (loading) return <div>Loading courses...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="course-list">
      <h2>Courses</h2>
      <button onClick={handleAddCourse}>+ Add New Course</button>

      <div className="courses-grid">
        {courses.map((course) => (
          <div key={course.id} className="course-card">
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <p>
              <strong>Instructor:</strong> {course.instructor}
            </p>
            <p>
              <strong>Price:</strong> ${course.price}
            </p>
            <p>
              <strong>Category:</strong> {course.category}
            </p>
            <p>
              <strong>Duration:</strong> {course.duration} hours
            </p>
            <p>
              <strong>Rating:</strong> {course.rating} / 5
            </p>

            <div className="course-actions">
              <button onClick={() => handleDeleteCourse(course.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
