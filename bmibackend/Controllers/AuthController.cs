using Microsoft.AspNetCore.Mvc;
using bmibackend.Models;
using bmibackend.Services;
namespace bmibackend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
   
    public class AuthController : Controller
    {
        private readonly IAuthService _authService;
        private readonly ILogger<AuthController> _logger;

        public AuthController(IAuthService authService, ILogger<AuthController> logger)
        {
            _authService = authService;
            _logger = logger;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] RegisterModel model)
        {
            try
            {
                _logger.LogInformation($"Registration attempt for email: {model.Email}");

                if (!ModelState.IsValid)
                {
                    return BadRequest(new
                    {
                        success = false,
                        message = "Validation failed",
                        errors = ModelState.Values
                            .SelectMany(v => v.Errors)
                            .Select(e => e.ErrorMessage)
                    });
                }

                if (model.Password != model.ConfirmPassword)
                {
                    return BadRequest(new
                    {
                        success = false,
                        message = "Passwords do not match"
                    });
                }

                var user = await _authService.Register(model);

                _logger.LogInformation($"User registered successfully: {user.Email}");

                return Ok(new
                {
                    success = true,
                    message = "Registration successful! You can now login.",
                    user = new
                    {
                        id = user.UserId,
                        name = user.FullName,
                        email = user.Email
                    }
                });
            }
            catch (Exception ex)
            {
                _logger.LogError($"Registration error: {ex.Message}");
                return BadRequest(new
                {
                    success = false,
                    message = ex.Message
                });
            }
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginModel model)
        {
            try
            {
                _logger.LogInformation($"Login attempt for email: {model.Email}");

                if (!ModelState.IsValid)
                {
                    return BadRequest(new
                    {
                        success = false,
                        message = "Validation failed",
                        errors = ModelState.Values
                            .SelectMany(v => v.Errors)
                            .Select(e => e.ErrorMessage)
                    });
                }

                var user = await _authService.Login(model);

                _logger.LogInformation($"User logged in successfully: {user.Email}");

                // Simple token generate කරන්න
                var token = GenerateSimpleToken(user);

                return Ok(new
                {
                    success = true,
                    message = "Login successful!",
                    user = new
                    {
                        id = user.UserId,
                        name = user.FullName,
                        email = user.Email,
                        token = token
                    }
                });
            }
            catch (Exception ex)
            {
                _logger.LogError($"Login error: {ex.Message}");
                return Unauthorized(new
                {
                    success = false,
                    message = ex.Message
                });
            }
        }

        [HttpGet("check-email")]
        public async Task<IActionResult> CheckEmail([FromQuery] string email)
        {
            try
            {
                var exists = await _authService.UserExists(email);

                return Ok(new
                {
                    exists = exists,
                    message = exists ? "Email already registered" : "Email available"
                });
            }
            catch (Exception ex)
            {
                return BadRequest(new
                {
                    success = false,
                    message = ex.Message
                });
            }
        }

        private string GenerateSimpleToken(User user)
        {
            var tokenData = $"{user.UserId}:{user.Email}:{DateTime.UtcNow.Ticks}";
            var tokenBytes = System.Text.Encoding.UTF8.GetBytes(tokenData);
            return Convert.ToBase64String(tokenBytes);
        }
    }
}
