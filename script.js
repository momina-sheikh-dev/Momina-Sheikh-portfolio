// Initialize particles.js
particlesJS('particles-js', {
    "particles": {
        "number": {
            "value": 80,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});

// Initialize project timeline draggable
const projects = document.querySelectorAll('.project');
projects.forEach(project => {
    project.style.cursor = 'grab';
    project.addEventListener('mousedown', (e) => {
        e.preventDefault();
        let shiftX = e.clientX - project.getBoundingClientRect().left;
        let shiftY = e.clientY - project.getBoundingClientRect().top;
        
        moveAt(e.pageX, e.pageY);
        
        function moveAt(pageX, pageY) {
            project.style.left = pageX - shiftX + 'px';
            project.style.top = pageY - shiftY + 'px';
        }
        
        function onMouseMove(e) {
            moveAt(e.pageX, e.pageY);
        }
        
        document.addEventListener('mousemove', onMouseMove);
        
        project.addEventListener('mouseup', () => {
            document.removeEventListener('mousemove', onMouseMove);
            project.style.cursor = 'grab';
        });
        
        project.addEventListener('mouseleave', () => {
            document.removeEventListener('mousemove', onMouseMove);
            project.style.cursor = 'grab';
        });
    });
});

// Initialize skill levels
const skills = document.querySelectorAll('.skill');
skills.forEach(skill => {
    const level = skill.dataset.level;
    skill.style.height = `${level}%`;
});

// Form validation
const form = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.querySelector('#name').value;
    const email = form.querySelector('#email').value;
    const message = form.querySelector('#message').value;

    if (!validateEmail(email)) {
        formMessage.textContent = 'Please enter a valid email address';
        formMessage.style.color = 'red';
        return;
    }

    // Assuming the form submission is successful, you can replace this with your own logic
    formMessage.textContent = `Thank you, ${name}! Your message has been sent.`;
    formMessage.style.color = 'green';

    // Clear the form fields after submission
    form.reset();
});

function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}


