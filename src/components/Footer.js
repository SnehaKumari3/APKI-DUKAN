import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <ul>
          <li><button>About Us</button></li>
          <li><button>Privacy Policy</button></li>
          <li><button>Customer Reviews</button></li>
        </ul>
        <ul>
          <li><button>Order Now</button></li>
          <li><button>Gift Cards</button></li>
          <li><button>Our Offerings</button></li>
        </ul>
        <ul>
          <li><button><a href="#"><i class="fab fa-google social-icons"></i></a></button></li>
          <li><button><a href="#"><i class="fab fa-twitter social-icons"></i></a></button></li>
          <li><button><a href="#"><i class="fab fa-facebook-f social-icons"></i></a></button></li>
        </ul>
        <ul>
          <li><button>Help Desk</button></li>
          <li><button>Investors</button></li>
          <li><button>Blog</button></li>
        </ul>
      </div>
      <h4><i class="fas fa-copyright social-icons"></i>Copyright All rights reserved</h4>
    </footer>
  )
}

export default Footer
