using CourseAPI.Data;
using CourseAPI.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CourseAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CoursesController : ControllerBase
    {
        private readonly AppDbContext _context;

        public CoursesController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/courses
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Course>>> GetCourses()
        {
            var courses = await _context.Courses.ToListAsync();
            return Ok(courses);
        }

        // GET: api/courses/{id}
        [HttpGet("{id}")]
        public async Task<ActionResult<Course>> GetCourse(int id)
        {
            var course = await _context.Courses.FindAsync(id);

            if (course == null)
            {
                return NotFound(new { message = "Course not found" });
            }

            return Ok(course);
        }

        // POST: api/courses
        [HttpPost]
        public async Task<ActionResult<Course>> CreateCourse([FromBody] Course course)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            course.CreatedAt = DateTime.UtcNow;
            course.UpdatedAt = DateTime.UtcNow;

            _context.Courses.Add(course);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetCourse), new { id = course.Id }, course);
        }

        // PUT: api/courses/{id}
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateCourse(int id, [FromBody] Course course)
        {
            if (id != course.Id)
            {
                return BadRequest(new { message = "ID mismatch" });
            }

            var existingCourse = await _context.Courses.FindAsync(id);
            if (existingCourse == null)
            {
                return NotFound(new { message = "Course not found" });
            }

            existingCourse.Title = course.Title;
            existingCourse.Description = course.Description;
            existingCourse.Instructor = course.Instructor;
            existingCourse.Price = course.Price;
            existingCourse.Category = course.Category;
            existingCourse.Duration = course.Duration;
            existingCourse.StudentCount = course.StudentCount;
            existingCourse.Rating = course.Rating;
            existingCourse.UpdatedAt = DateTime.UtcNow;

            _context.Courses.Update(existingCourse);
            await _context.SaveChangesAsync();

            return Ok(new { message = "Course updated successfully", course = existingCourse });
        }

        // DELETE: api/courses/{id}
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCourse(int id)
        {
            var course = await _context.Courses.FindAsync(id);
            if (course == null)
            {
                return NotFound(new { message = "Course not found" });
            }

            _context.Courses.Remove(course);
            await _context.SaveChangesAsync();

            return Ok(new { message = "Course deleted successfully" });
        }

        // GET: api/courses/search
        [HttpGet("search/{searchTerm}")]
        public async Task<ActionResult<IEnumerable<Course>>> SearchCourses(string searchTerm)
        {
            var courses = await _context.Courses
                .Where(c => c.Title.Contains(searchTerm) || 
                           c.Description.Contains(searchTerm) ||
                           c.Category.Contains(searchTerm))
                .ToListAsync();

            return Ok(courses);
        }
    }
}
